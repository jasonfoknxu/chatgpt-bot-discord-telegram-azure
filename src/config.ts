import * as dotenv from 'dotenv';

const loadConfig = dotenv.config();
if (loadConfig.error) {
  console.error('[ERROR] Cannot load config');
  throw loadConfig.error;
}

const parsedConfig = loadConfig.parsed;

if (!parsedConfig) {
  console.error('[ERROR] Cannot parse config');
  throw new Error();
}

interface Config {
  DISCORD_BOT_TOKEN: string;
  DISCORD_ALLOW_CHANNELS: string[];
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_ALLOW_USERS: string[];
  AZURE_ENDPOINT: string;
  AZURE_DEPLOYMENT_NAME: string;
  AZURE_KEY: string;
  CHAT_MODE: number;
  ALWAYS_SYSTEM_PROMPT: boolean;
  SYSTEM_PROMPT: string;
}

const config: Config = {
  DISCORD_BOT_TOKEN: parsedConfig.DISCORD_BOT_TOKEN,
  DISCORD_ALLOW_CHANNELS: parsedConfig.DISCORD_ALLOW_CHANNELS.split(','),
  TELEGRAM_BOT_TOKEN: parsedConfig.TELEGRAM_BOT_TOKEN,
  TELEGRAM_ALLOW_USERS: parsedConfig.TELEGRAM_ALLOW_USERS.split(','),
  AZURE_ENDPOINT: parsedConfig.AZURE_ENDPOINT,
  AZURE_DEPLOYMENT_NAME: parsedConfig.AZURE_DEPLOYMENT_NAME,
  AZURE_KEY: parsedConfig.AZURE_KEY,
  CHAT_MODE: parseInt(parsedConfig.CHAT_MODE) ?? 0,
  ALWAYS_SYSTEM_PROMPT: parsedConfig.ALWAYS_SYSTEM_PROMPT==='true',
  SYSTEM_PROMPT: parsedConfig.SYSTEM_PROMPT,
};

export { config };