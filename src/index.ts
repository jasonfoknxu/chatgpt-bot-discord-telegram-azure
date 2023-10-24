import { discordBot } from './discord';
import { telegramBot } from './telegram';

(async () => {
  await discordBot();
  await telegramBot();
})();