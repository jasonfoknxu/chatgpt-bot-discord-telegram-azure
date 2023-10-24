import { Client, GatewayIntentBits } from 'discord.js';
import { config } from './config';
import { chat } from './gpt';
import { message } from './message';

const discordBot = async () => {
  if (!config.DISCORD_BOT_TOKEN) {
    return;
  }

  const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
  });

  client.on('messageCreate', async (msg) => {
    if (config.DISCORD_ALLOW_CHANNELS.includes(msg.channelId)) {
      if (msg.author.bot) return;
      const gptResult = await chat(msg.content, (config.CHAT_MODE === 2) ? msg.author.id : 'discord');
      if (!gptResult) {
        msg.reply(message.request_error);
        return;
      }
      msg.reply(gptResult);
    }
  });

  try {
    await client.login(config.DISCORD_BOT_TOKEN);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export { discordBot };
