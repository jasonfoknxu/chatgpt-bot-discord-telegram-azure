# ChatGPT Bot :robot:

<div style="text-align:center">

![Simple ChatGPT Bot](icon.png)

_(^ AI generated illustration from the ChatGPT Logo)_

**Simple ChatGPT Bot for a small team or personal use.**

**Quick Deploy, Easy Config, Simple Usage**

</div>

## :book: Features

- Support `Discord` & `Telegram`
- Selectable Chat Mode: Group Chat & Individual
- Easy to config
- Ready to run: :whale: `docker compose` or :gear: `PM2`
- Using Azure OpenAI
- Lightweight source code
- Flexible development design

## :speech_balloon: Chat Mode

| Mode |    Name    | Description                                                                                         |
| :--: | :--------: | --------------------------------------------------------------------------------------------------- |
|  1   |  Default   | Discord bot for group chat, Telegram bot for individual. Suitable for a small team/group of people. |
|  2   | Individual | Both Discord bot & Telegram bot will separate chat for each user. (1-to-1 chat)                     |
|  3   |  Seamless  | All chats of Discord bot and Telegram bot will count as the same conversation. Useful for personal. |

## :hammer_and_pick: Configuration

| Config Variable          | Data Type | Description                                                                                                                                                                           |
| ------------------------ | :-------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DISCORD_BOT_TOKEN`      |  string   | The token of the Discord bot. If no token is provided, discord bot will be disabled.                                                                                                  |
| `DISCORD_ALLOW_CHANNELS` |  string   | A comma-separated (`,`) whitelist of Discord channel IDs. The bot will only responsive in the channels from the list.                                                                 |
| `TELEGRAM_BOT_TOKEN`     |  string   | The token of the Telegram bot. If no token is provided, telegram bot will be disabled.                                                                                                |
| `TELEGRAM_ALLOW_USERS`   |  string   | A comma-separated (`,`) whitelist of Telegram user IDs. The bot will only responsive to the users from the list.                                                                      |
| `AZURE_ENDPOINT`         |  string   | The endpoint URL of the Azure OpenAI service.                                                                                                                                         |
| `AZURE_DEPLOYMENT_NAME`  |  string   | The deployment name of the Azure OpenAI service.                                                                                                                                      |
| `AZURE_KEY`              |  string   | The key of the Azure OpenAI service.                                                                                                                                                  |
| `CHAT_MODE`              |  number   | Choose the chat mode. Refer to the [Chat Mode](#speech_balloon-chat-mode) section.                                                                                                                          |
| `ALWAYS_SYSTEM_PROMPT`   |  boolean  | Send system prompt to ChatGPT in each request? This can make ChatGPT keep remember the system prompt to provide better responsive in some cases, but more prompt tokens will be used. |
| `SYSTEM_PROMPT`          |  string   | The system prompt for ChatGPT (_optional_)                                                                                                                                            |

## :bulb: How to use?

1. You must have enabled the Azure OpenAI services
2. You must created a Discord Application / Telegram Bot
3. git clone to download the source code
4. Copy the `sample.env` file and rename as `.env`
5. Edit the config in the `.env` file
6. If you want to use :gear: **PM2**, run `yarn run init:pm2`
7. If you want to use :whale: **docker compose**, run `yarn run docker` (:warning: This project will not build a docker image, it use the node image to run the bot and manage with docker)
8. The bot will be run in the background
