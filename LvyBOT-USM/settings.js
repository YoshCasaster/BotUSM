const fs = require('fs')
const chalk = require('chalk')

/* ~~~~~~~~~ WEB API ~~~~~~~~~ */
global.lol = '9803d2bdd2b542dfea7c9604' // https://api.lolhuman.xyz
/* ~~~~~~~~~ SETTINGS OWNER ~~~~~~~~~ */
global.numberowner = '6285876059135' // Owner Utama
global.owner = ['6285876059135','62895622412769'] // Owner Lainnya
global.namaowner = 'Bot WhatsApp' // Nama Owner
global.premium = ['6285876059135','62895622412769'] // Premium User
/* ~~~~~~~~~ SETTINGS BOT ~~~~~~~~~ */
global.namabot = 'Bot-Wa' // NickBot
global.fake = 'Bot Whatsapp' // Fake Menu
global.autoread = true // ReadChat
global.autobio = false // AutoBio
global.autoblok212 = true // AutoBlock Nomer +212
global.onlyindo = false  // AutoBlock Selain Nomer Indo
global.packname = `Gw` // Watermark Sticker
global.author = 'Im Fine' // Watermark Sticker
/* ~~~~~~~~~ MESSAGES ~~~~~~~~~ */
global.mess = {
    done: 'Success Kak!',
    prem: 'Feature Only For User _*Premium*_',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Private Chat*_',
    wait: 'Bentarrr!',    
    error: '_*Sorry Features Error*_',
    premium: '_*Sorry Features Only Premium*_',
}
/* ~~~~~~~~~ THUMBNAIL ~~~~~~~~~ */
global.thumb = fs.readFileSync('./media/quoted.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
/* ~~~~~~~~~ EDITS LINK ~~~~~~~~~ */
global.link = 'https://youtube.com/@ImHyuu'
global.fakee = 'https://telegra.ph/file/4f2020cb4c18839c29114.jpg'
/* ~~~~~~~~~ END SYSTEM ~~~~~~~~~ */
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})