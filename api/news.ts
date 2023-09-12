import TelegramBot from "node-telegram-bot-api";
import { config } from "dotenv";
config();






const bot = new TelegramBot(process.env.TELEGRSM_NEWS_BOT!, { polling: true });


export const telegram_news_bot = (title:string, content:string) =>{
    bot.sendMessage("-1001733294105", `
【<u><b>${title}</b></u>】
${content} `, { parse_mode: 'HTML' });
}

