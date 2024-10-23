import TelegramBot from 'node-telegram-bot-api';
const token = '7699545502:AAEA6Bk0Pw4R7fLrzuKs3VJwCg2jg85msfc';


const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;

    const text = msg.text;

    console.log(text);

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Защита тут', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Open',  web_app: {url: 
                        'https://bed2-78-85-190-228.ngrok-free.app'
                    }}],
                ]
            }
        });
    }
});
