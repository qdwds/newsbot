

import Parser from "rss-parser"
import schedule from "node-schedule";
import { telegram_news_bot } from "./api/news";
import { config } from "dotenv";
config()
let parser = new Parser();
const news = {
  title: "",
  contentSnippet: ""
}


const followin = async () => {
  try {
    let feed = await parser.parseURL(`http://${process.env.NEWS_URL}/followin/news/zh-Hans`);

    let title: string = feed["items"][0].title! || ""
    let contentSnippet: string = feed["items"][0].contentSnippet! || "";

    if (news.title !== title && news.contentSnippet !== contentSnippet) {
      telegram_news_bot(title, contentSnippet)
    }

    news.title = title;
    news.contentSnippet = contentSnippet;
  } catch (error) {
    console.log("followin", error);
  }
}


schedule.scheduleJob('*/1 * * * *', function (fireDate) {
  followin();
})
