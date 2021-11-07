const wa = require('@open-wa/wa-automate');
const noWakel = process.env.NO_WAKEL;
const absen = [
    "SMK BISA", 
    "SMK HEBAT", 
    "SMK BERTANGGUNGJAWAB", "SMK BERTANGGUNG JAWAB", "SMK TANGGUNG JAWAB", "SMK TANGGUNGJAWAB",
    "SMK BERAKHLAQ MULIA", "SMK BERAKHLAK MULIA",
    "SMK AMANAH",
    "SMK BERINTEGRITAS",
    "SMK IDAMAN",
    "SMK BISA",
    "SMK AMANAH"
];

wa.create({
    sessionId: "idk",
    authTimeout: 60,
    blockCrashLogs: true,
    disableSpins: true,
    headless: true,
    hostNotificationLang: 'PT_BR',
    logConsole: false,
    popup: true,
    qrTimeout: 0,
}).then(bot => start(bot));

const start = bot => {
    bot.onMessage(async message => {
      console.log(message);
        if(message.author !== noWakel) return;
        for(let a of message.body.toUpperCase().split('*')){
            for(let b of absen){
                if(a === b) return await bot.sendText(message.from, `*${b}*`);
            }
        }
    });
}