# rss 新闻推送

## 新闻推送机器人
[telegram 新闻推送机器人 https://t.me/listen8_botsd](https://t.me/listen8_botsd)

## 运行前必要条件
运行该程序前需要先在本地部署RSSHUB[https://github.com/DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) 
[RSSHUB 部署方式](https://docs.rsshub.app/zh/install#%E6%89%8B%E5%8A%A8%E9%83%A8%E7%BD%B2)
或者
有指定的RSS源


## 文件配置
根目录新建`.env`文件 并且配置一下环境变量
```
TELEGRSM_NEWS_BOT = 电报机器人TOKEN
NEWS_URL= 127.0.0.1:1200 # RSS源地址
```

# 启动
nodemon app.ts 
ts-node 
pm2 start app.ts
