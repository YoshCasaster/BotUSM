const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@WhiskeySockets/Baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const { remini } = require('./lib/remini')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    tanggal,
    jam,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    reSize
} = require('./lib/myfunc')
/* ~~~~~~~~~ DATA ~~~~~~~~~ */
let _owner = JSON.parse(fs.readFileSync('./src/data/owner.json'))
let _user = JSON.parse(fs.readFileSync('./src/data/user.json'))
let hit = JSON.parse(fs.readFileSync('./src/total-hit-user.json'))
let autosimi = JSON.parse(fs.readFileSync('./src/data/simi.json'))
/* ~~~~~~~~~ DATA MEDIA ~~~~~~~~~ */
const Vnhyuuxyz = JSON.parse(fs.readFileSync('./src/media/vn.json'))
const Stickerhyuuxyz = JSON.parse(fs.readFileSync('./src/media/sticker.json'))
const Imagehyuuxyz = JSON.parse(fs.readFileSync('./src/media/image.json'))
const Videohyuuxyz = JSON.parse(fs.readFileSync('./src/media/video.json'))
/* ~~~~~~~~~ WAKTU SETEMPAT ~~~~~~~~~ */
moment.tz.setDefault("Asia/Jakarta").locale("id")

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const waktu = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if (waktu < "23:59:00") {
    var ucapanWaktu = 'Selamat Malam 🏙️'
}
if (waktu < "19:00:00") {
    var ucapanWaktu = 'Selamat Petang 🌆'
}
if (waktu < "18:00:00") {
    var ucapanWaktu = 'Selamat Sore 🌇'
}
if (waktu < "15:00:00") {
    var ucapanWaktu = 'Selamat Siang 🌤️'
}
if (waktu < "10:00:00") {
    var ucapanWaktu = 'Selamat Pagi 🌄'
}
if (waktu < "05:00:00") {
    var ucapanWaktu = 'Selamat Subuh 🌆'
}
if (waktu < "03:00:00") {
    var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}
/* ~~~~~~~~~ STARTING & MODULE ALL ~~~~~~~~~ */
module.exports = hyuuxyz = async (hyuuxyz, m, msg, chatUpdate, store) => {
    try {
        /* ~~~~~~~~~~~~~~~~~~ */
        const { type, quotedMsg, mentioned, now, fromMe } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectnewReply.selectedRowId : (m.mtype == 'templateButtonnewReplyMessage') ? m.message.templateButtonnewReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectnewReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa
        const isCmd = body.startsWith(prefix, '')
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await hyuuxyz.decodeJid(hyuuxyz.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isSimi = autosimi.includes(from)
        /* ~~~~~~~~~ MEDIA ALL ~~~~~~~~~ */
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        /* ~~~~~~~~~ PREFIX V2 ~~~~~~~~~ */
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : '.'
        const isAsu = body.startsWith(pric)
        const isCommand = isAsu ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isAdrian = ('62858760591353@s.whatsapp.net').includes(m.sender)
        /* ~~~~~~~~~ GROUP SYSTEM ~~~~~~~~~ */
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await hyuuxyz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        /* ~~~~~~~~~ STATUS USERS ~~~~~~~~~ */
        const isCreator = [numberowner, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        expiredCheck(hyuuxyz, m, premium);
        //=================================================
async function loading () {
var prinss = [
"_Loading To Menu Botz_",
"_Base Script : Hyui",
"_Provider Api : Caliph - LolHuman_",
"_Buy Script Chat Owner_",
]
let { key } = await hyuuxyz.sendMessage(m.chat, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < prinss.length; i++) {
/*await delay(10)*/
await hyuuxyz.sendMessage(m.chat, {text: prinss[i], edit: key });//PESAN LEPAS
}
}
/* ~~~~~~~~~ CREATED PW RANDOM ~~~~~~~~~ */
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 15;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
 /* ~~~~~~~~~ FAKE ~~~~~~~~~ */
       const fkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': `${namaowner}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${namabot},;;;\nFN:${namabot}\nitem1.TEL;waid=${numberowner}:+${numberowner}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': thumb,
                    thumbnail: thumb,
                    sendEphemeral: true
                }   
            }
        }
       const ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 999999,status: 200, thumbnail: fs.readFileSync(`./media/quoted.jpg`), surface: 200, message: fake, orderTitle: fake, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        /* ~~~~~~~~~ REPLY ~~~~~~~~~ */
        async function newReply(teks) {
            const po = {
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: `Haloo ${pushname} 👋`,
                        body: `${wib} WIB`,
                        previewType: "PHOTO",
                        thumbnailUrl: global.fakee,
                        sourceUrl: global.link
                    }
                },
                text: teks
            };
            return hyuuxyz.sendMessage(m.chat, po, {
                quoted: ftroli
            });
        };
        /* ~~~~~~~~~ ALL SYSTEM BOT ~~~~~~~~~ */
        if (!hyuuxyz.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        if (autoread) {
            hyuuxyz.readMessages([m.key])
        }
        if (autobio) {
        let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime)
		await hyuuxyz.updateProfileStatus(`I am ${namabot} | Aktif Selama ${uptime} ⏳ | Mode : ${hyuuxyz.public ? 'Public-Mode' : 'Self-Mode'}`).catch(_ => _)
        }
        if (from === 'status@broadcast') {
            hyuuxyz.chatRead(from)
        }
        if (isCommand) {
            let titida = ['composing', 'recording']
            yte = titida[Math.floor(titida.length * Math.random())]
            hyuuxyz.sendPresenceUpdate(yte, from)
        }
        if (m.sender.startsWith('212') && global.autoblok212 === true) {
            return hyuuxyz.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && global.onlyindo === true) {
            return hyuuxyz.updateBlockStatus(m.sender, 'block')
        }
        
        /* ~~~~~~~~~ CONSOLE ~~~~~~~~~ */
        if (isCommand) {
            console.log(`<=====================================>`)
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '<\> MESSAGE </>' : '<\> COMMAND </>')), chalk.black(chalk.bgGreen(hariini)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            console.log(`<=====================================>`)
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./src/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./src/total-hit-user.json'))[0].hit_cmd
        }

        /* ~~~~~~~~~ RESPON DATA MEDIA ~~~~~~~~~ */
        for (let Mwuhehe of Vnhyuuxyz) {
            if (budy === Mwuhehe) {
                let audiobuffy = fs.readFileSync(`./media/audio/${Mwuhehe}.mp3`)
                hyuuxyz.sendMessage(m.chat, {
                    audio: audiobuffy,
                    mimetype: 'audio/mp4',
                    ptt: true
                }, {
                    quoted: ftroli
                })
            }
        }
        for (let Mwuhehe of Stickerhyuuxyz) {
            if (budy === Mwuhehe) {
                let stickerbuffy = fs.readFileSync(`./media/sticker/${Mwuhehe}.webp`)
                hyuuxyz.sendMessage(m.chat, {
                    sticker: stickerbuffy
                }, {
                    quoted: ftroli
                })
            }
        }
        for (let Mwuhehe of Imagehyuuxyz) {
            if (budy === Mwuhehe) {
                let imagebuffy = fs.readFileSync(`./media/image/${Mwuhehe}.jpg`)
                hyuuxyz.sendMessage(m.chat, {
                    image: imagebuffy
                }, {
                    quoted: ftroli
                })
            }
        }
        for (let Mwuhehe of Videohyuuxyz) {
            if (budy === Mwuhehe) {
                let videobuffy = fs.readFileSync(`./media/video/${Mwuhehe}.mp4`)
                hyuuxyz.sendMessage(m.chat, {
                    video: videobuffy
                }, {
                    quoted: ftroli
                })
            }
        }
       /* ~~~~~~~~~ CONST TAMBAHAN ~~~~~~~~~ */
        const pickRandom = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)]
        }
        const totalFitur = () =>{
            var mytext = fs.readFileSync("./Bots.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

        switch (isCommand) {
            case 'autoread':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Contoh ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    newReply(`Berhasil mengubah autoread ke ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    newReply(`Berhasil mengubah autoread ke ${q}`)
                }
                break
            case 'autobio':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    newReply(`Berhasil Mengubah AutoBio Ke ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    newReply(`Berhasil Mengubah AutoBio Ke ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    hyuuxyz.public = true
                    newReply(mess.done)
                } else if (q == 'self') {
                    hyuuxyz.public = false
                    newReply(mess.done)
                }
                break

            case "backup":
{
if (!isCreator) return newReply("Khusus Owner Kak!!!");
await loading()
          const { execSync } = require("child_process");
          const ls = (await execSync("ls"))
            .toString()
            .split("\n")
            .filter(
              (pe) =>
                pe != "node_modules" &&
                pe != "session" &&
                pe != "package-lock.json" &&
                pe != "yarn.lock" &&
                pe != ""
            );
          const exec = await execSync(`zip -r NewBot.zip ${ls.join(" ")}`);
          await hyuuxyz.sendMessage(
            m.chat,
            {
              document: await fs.readFileSync("./NewBot.zip"),
              mimetype: "application/zip",
              fileName: "NewBot.zip",
            },
            { quoted: ftroli }
          );
          await execSync("rm -rf NewBot.zip");
        }
        break
        
            case 'remini':
            case 'hd': {
                if (!isMedia) return newReply("Where The A Image")
                if (/image/.test(mime)) {
                let media = await hyuuxyz.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                hyuuxyz.sendMessage(m.chat, {
                    image: {
                        url: `https://api.lolhuman.xyz/api/upscale?apikey=${lol}&img=${anu}`
                    },
                    caption: mess.done
                }, {
                    quoted: m
                })
                } else {
                  newReply('Only Pictures')
                }
            }
            break
            		case 'infogempa':
			var he = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lol}`)
			var caption = `Lokasi : ${he.result.lokasi}\n`
			caption += `Waktu : ${he.result.waktu}\n`
			caption += `Potensi : ${he.result.potensi}\n`
			caption += `Magnitude : ${he.result.magnitude}\n`
			caption += `Kedalaman : ${he.result.kedalaman}\n`
			caption += `Koordinat : ${he.result.koordinat}`
			hyuuxyz.sendMessage(from, { image: { url: he.result.map }, caption })
			break
			
			case 'infocuaca':{
			if (args.length == 0) return newReply(`Example: ${prefix + command} Yogyakarta`)
			var ka = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${args[0]}?apikey=${lol}`)
			hyuuxyz.sendMessage(m.chat, { location: { degreesLatitude: ka.result.latitude, degreesLongitude: ka.result.longitude } })
			var titttttttttt = `Tempat : ${ka.result.tempat}\n`
			titttttttttt += `Cuaca : ${ka.result.cuaca}\n`
			titttttttttt += `Angin : ${ka.result.angin}\n`
			titttttttttt += `Description : ${ka.result.description}\n`
			titttttttttt += `Kelembapan : ${ka.result.kelembapan}\n`
			titttttttttt += `Suhu : ${ka.result.suhu}\n`
			titttttttttt += `Udara : ${ka.result.udara}\n`
			titttttttttt += `Permukaan laut : ${ka.result.permukaan_laut}\n`
			newReply(titttttttttt)
			}
			break
                /* ~~~~~~~~~ GROUP FEATURES ~~~~~~~~~ */
            case 'tagall':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let teks = `*👥 Tag All By Admin*
 
                 🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                hyuuxyz.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: ftroli
                })
                break
            case 'hidetag':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                hyuuxyz.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: ftroli
                })
                break

case 'menu': case 'list':{
let msg = `𝖫𝖨𝖲𝖳 𝖥𝖨𝖳𝖴𝖱 𝖡𝖮𝖳 - 𝖶𝖠

	◦ .remini
	◦ .reminiv2
	◦ .infogempa
	◦ .infocuaca
	◦ .translate
	◦ .sticker 
	◦ .𝗈𝗉𝖾𝗇𝖺𝗂

– 𝖥𝖨𝖳𝖴𝖱 𝖦𝖱𝖮𝖴𝖯
	◦ .𝗁𝗂𝖽𝖾𝗍𝖺𝗀
	◦ .𝗍𝖺𝗀𝖺𝗅𝗅

- 𝖢𝖺𝗋𝖺 𝖯𝖺𝗄𝖾 :
𝖳𝖺𝗇𝖽𝖺 . + 𝖢𝗈𝗆𝗆𝖺𝗇𝖽 𝖭𝗒𝖺

- 𝖢𝗈𝗇𝗍𝗈𝗁 : .hidetag text nya`
newReply(msg)
break
            default:
                  if (isSimi && body != undefined) {
                     // res = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${lol}&text=${body}&badword=true`)
                     // res = await fetchJson(`https://api.simsimi.net/v2/?text=${body}&lc=id`)
                     // m.reply(res.success)
                  }
                if (budy.startsWith('=>')) {
                    if (!isCreator) return newReply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return newReply(bang)
                    }
                    try {
                        newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        newReply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return newReply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await newReply(evaled)
                    } catch (err) {
                        await newReply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return newReply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return newReply(err)
                        if (stdout) return newReply(stdout)
                    })
                }
        }
    } catch (err) {
        hyuuxyz.sendText(numberowner + '@s.whatsapp.net', util.format(err), m)
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
