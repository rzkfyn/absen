import { create, Client, NotificationLanguage } from '@open-wa/wa-automate';
import  { config } from 'dotenv';
config();

const noWakel = process.env.NO_WAKEL;

create({
    sessionId: "absen",
    authTimeout: 0,
    blockCrashLogs: true,
    disableSpins: true,
    headless: true,
    hostNotificationLang: NotificationLanguage.IDID,
    logConsole: false,
    popup: true,
    qrTimeout: 0
}).then(client => start(client));

const start = (client: Client): void => {
    client.onMessage(message => {
        if (message.author !== noWakel || message.body.split('*')[0] === '') return;
        message.body.split('*').forEach(msg => {
            if(msg.toUpperCase().startsWith('SMK')) client.sendText(message.from, `*${msg.toUpperCase()}*`);
        });
    });
}