const wa = require('@open-wa/wa-automate');
const noWakel = process.env.NO_WAKEL;

wa.create({sessionId: "idk",authTimeout: 60,blockCrashLogs: true,disableSpins: true,headless: true,hostNotificationLang: 'PT_BR',logConsole: false,popup: true,qrTimeout: 0,})
  .then(bot => start(bot));

const start = bot => {
    bot.onMessage(async message => {
      if(message.from !== noWakel || message.body.split('*').length < 2) return;
      for(let a of message.body.toUpperCase().split('*')){
            if(a.startsWith('SMK')) return await bot.sendText(message.from, `*${a}*`);
      }
  });
}
