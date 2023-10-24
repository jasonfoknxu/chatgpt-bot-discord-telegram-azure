import TelegramBot from 'node-telegram-bot-api';
import { config } from './config';
import { chat } from './gpt';
import { message } from './message';

const telegramBot = async () => {
  if (!config.TELEGRAM_BOT_TOKEN) {
    return;
  }

  const bot = new TelegramBot(config.TELEGRAM_BOT_TOKEN, { polling: true });

  bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from?.id;

    if (!userId || !config.TELEGRAM_ALLOW_USERS.includes(userId.toString())) {
      bot.sendMessage(chatId, message.unauthorized + '\n' + message.user_id + userId);
      return;
    }

    const text = msg.text;
    if (!text) {
      bot.sendMessage(chatId, message.text_only);
      return;
    }

    const gptResult = await chat(text, (config.CHAT_MODE === 3) ? 'telegram' : userId.toString());
    if (!gptResult) {
      bot.sendMessage(chatId, message.request_error);
      return;
    }

    bot.sendMessage(chatId, gptResult);
  });
};

export { telegramBot };
