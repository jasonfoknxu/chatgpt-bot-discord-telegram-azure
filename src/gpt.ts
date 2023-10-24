import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
import { config } from './config';

interface GPTMessage {
  role: 'system' | 'user' | 'assistant' | 'user';
  content: string;
}

let messages: GPTMessage[] = [];

let firstMessage = true;
const client = new OpenAIClient(config.AZURE_ENDPOINT, new AzureKeyCredential(config.AZURE_KEY));
const deploymentName = config.AZURE_DEPLOYMENT_NAME;

const chat = async (userPrompt: string, from: string = 'bot') => {
  if (config.ALWAYS_SYSTEM_PROMPT || firstMessage) {
    messages.push({ role: 'system', content: config.SYSTEM_PROMPT });
    firstMessage = false;
  }

  if (!userPrompt || userPrompt.trim() === '') {
    return null;
  }

  messages.push({ role: 'user', content: userPrompt });

  const result = await client.getChatCompletions(deploymentName, messages, {
    user: (config.CHAT_MODE === 3) ? 'bot' : from,
  });
  if (!result) {
    return null;
  }

  return result.choices[0].message?.content;
};

export { chat };
