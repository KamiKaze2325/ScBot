///----------[ Created By YT KAMIKAZE ]----------\\\

/**
* Base By Xinz
* Cuman Kang Recode Jan di Buly
* Sc Ini Jangan Di Jual!! 
* Sc Ini Gratis Buat Kalian Pengguna Termux
* Mau Beli Sc No Enc GG?? Hubungi Kontak Kamikaze
**/

/**
///--------[ TOTQ ]--------\\\
* Yahweh
* Keluarga
* Xinz Team
* ZEEONE
* YT KAMIKAZE
* Fajar Alfarizi
* Baileys
* Rest Api
* SubscriberKu
**/

///Note : Mau Kasih Nama?? Hubungi Kontak Di Bawah!!!

///--------[ Support Me ]--------\
/**
* YouTube : 
             YT KAMIKAZE
             https://bit.ly/3nQkKet
             
* Instagram :
             @lordagam23_
             https://bit.ly/3ams2QL
             
* Github  :  
             Kamikaze~
             http://github.com/kamikaze2325
             
* WhatsApp :
              NOMOR PERTAMA : 
                                   082217590187
                                   wa.me/6282217590187
                                   
              NOMOR KEDUA    :
                                   0821924405630
                                   wa.me/62821924405630
                                   
              NOMOR BOT       :
                                   082192440563
                                   wa.me/6282192440563
                                   
* Group BOT WA :
                   Group 1 : 
                             https://bit.ly/3wbvvvA
                        
                   Group 2 : 
                             https://bit.ly/3bCMGgi
**/
///Note Buat kalian Yang Mau masukin Bot ke group boleh masukin ke group ke 2

///--------------------------------------------------------------\\\

///THANKS

const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone");
moment.tz.setDefault("Asia/Jakarta").locale("id");
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const _gis = require('g-i-s')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const { promisify, util } = require('util')
const qrcodes = require('qrcode');
const googleIt = require('google-it')
const os = require('os');
const hx = require('hxz-api')

// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();

const { getBuffer, getGroupAdmins, getRandom, runtime, pickRandom, clockString, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
const a = '```'

hit_today = []
banChats = true
tanda1 = '🔖'
tanda2 = '🌹 •'

let agamimage = fs.readFileSync("./media/wpmobile.png")
let agamimage2 = fs.readFileSync("./media/Nakano.jpg")
let setting = JSON.parse(fs.readFileSync('./setting.json'))

prefix = setting.prefix
owner = setting.owner

// Database
let welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))


// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}


module.exports = agam = async (agam, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.blocked
		global.prefix
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const waktu = moment.tz('Asia/Jakarta').format('a')
		const time = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')

        const botNumber = agam.user.jid
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? agam.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await agam.chats.all()
		const groupMetadata = isGroup ? await agam.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? agam.user.jid : agam.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? agam.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		
        const isOwner = ownerNumber.includes(sender)
        const isWelkom = isGroup ? welkom.includes(from) : false
        
      
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        const reply = (teks) => {
	      agam.sendMessage(from, teks, text, {quoted:mek, thumbnail: agamimage})
        }
        const sendMess = (hehe, teks) => {
           agam.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? agam.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : agam.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           agam.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return agam.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/wpmobile.png')})
        }
        const ftroli = {
         key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2021,status: 1,surface : 1,message: `𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 𝘠𝘛 𝘒𝘈𝘔𝘐𝘒𝘈𝘡𝘌`,orderTitle: '𝘠𝘛 𝘒𝘈𝘔𝘐𝘒𝘈𝘡𝘌',thumbnail: fs.readFileSync('./media/Nakano.jpg'), sellerJid: '0@s.whatsapp.net'}}}
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/Nakano.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       agam.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await agam.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = agam.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await agam.groupRemove(from, [i])
        } else {
           await agam.sendMessage(id, "Not Premited!", "conversation")
        }
    }
}
       const add = function(from, orangnya){
	       agam.groupAdd(from, orangnya)
}
      const sendBug = async(target, teks) => {
           if (!teks) teks = '.'
           await agam.relayWAMessage(agam.
           prepareMessageFromContent(target, agam.
           prepareDisappearingMessageSettingContent(0),
           {}),{waitForAck:true})
           agam.sendMessage(target, teks, 'conversation')
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       agam.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
      const hideTag = async function(from, text){
	       let anu = await agam.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       agam.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Nakano.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           agam.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       agam.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       agam.sendMessage(from, hasil, type, options).catch(e => {
	       agam.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
          let authorname = agam.contacts[from] != undefined ? agam.contacts[from].vname || agam.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = '𝘠𝘛 𝘒𝘈𝘔𝘐𝘒𝘈𝘡𝘌'; if (!author) author = '𝘚𝘦𝘯𝘺𝘢 𝘉𝘰𝘵𝘻';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}
       function formatDate(n, locale = 'id') {
       let d = new Date(n)
       return d.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
    })
    }
       
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

      
         // CMD
        if (isCmd && !isGroup)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            
            if (!mek.key.fromMe && banChats === true) return
            switch(command){
           
           case 'owner':
           case 'creator':
               sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak ${pushname}\nItu Ownerku, Silakan Bertanya!?`
               buttons = [{buttonId: `${prefix}sourcecode`,buttonText:{displayText: 'SCRIPT 🔖'},type:1},{buttonId:`${prefix}infoig`,buttonText:{displayText:'INSTAGRAM 🔖'},type:1}]
               buttonsMessage = { contentText: `${txtt}`, footerText: 'Di Save Kak Nanti Bakal Di SaveBack Kok :)', buttons: buttons, headerType: 1 }
               prep = await agam.prepareMessageFromContent(from,{buttonsMessage},{})
               agam.relayWAMessage(prep)
               break     
               ///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
agam.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await agam.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
agam.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await agam.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
agam.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
} 
           
case 'menu':
 case 'help':
 fah = `https://i.ibb.co/p0p7nMZ/IMG-20211026-084119.jpg`
 fake = await getBuffer(fah)
 menu =`${ucapanWaktu} ${pushname} 👋
 
${tanda1} Owner : ${ownerName}
${tanda1} Hit Today : ${totalhit} Hit
${tanda1} Prefix : [ . ]
${tanda1} Mode : ${banChats ? "SELF-MODE" : "PUBLIC-MODE"}
${tanda1} Baterai : ${baterai}%
${tanda1} Platform : ${os.platform()}
${tanda1} Runtime : ${clockString(process.uptime())}
${tanda1} Tanggal : ${tanggal}
${tanda1} Waktu : ${waktu.charAt(0).toUpperCase() + waktu.slice(1)} || ${time}

 *LIST MENU*   
 
 
  *TOOLS*
  
${tanda2} ${prefix}attp <text>
${tanda2} ${prefix}exif [text|text]
${tanda2} ${prefix}nulis <text>
${tanda2} ${prefix}sticker reply/caption
${tanda2} ${prefix}tourl reply/caption
${tanda2} ${prefix}toimg reply/caption
${tanda2} ${prefix}tomp3 reply/caption
${tanda2} ${prefix}tovideo reply/caption
${tanda2} ${prefix}telesticker

 *DOWNLOADER*
 
${tanda2} ${prefix}nhdl <code>
${tanda2} ${prefix}play <text>
${tanda2} ${prefix}igdl <url>
${tanda2} ${prefix}igstory <url>
${tanda2} ${prefix}tiktokdl <url>
${tanda2} ${prefix}mediafire <url>
${tanda2} ${prefix}facebook <url>
${tanda2} ${prefix}youtubedl <url>

 *OWNER*
 
${tanda2} ${prefix}public
${tanda2} ${prefix}self
${tanda2} ${prefix}join
${tanda2} ${prefix}exif
${tanda2} ${prefix}term
${tanda2} ${prefix}shutdown
${tanda2} ${prefix}leaveall
${tanda2} ${prefix}setprefix
${tanda2} ${prefix}cekapikey
${tanda2} ${prefix}setcmd
${tanda2} ${prefix}delcmd
${tanda2} ${prefix}listcmd

 *SEARCH*
 
${tanda2} ${prefix}image <text>
${tanda2} ${prefix}google <text>
${tanda2} ${prefix}pinterest <text>
${tanda2} ${prefix}ytdesc <text>
${tanda2} ${prefix}ghsearch <text>

 *SESSION*
 
${tanda2} ${prefix}ping
${tanda2} ${prefix}runtime
${tanda2} ${prefix}donasi
${tanda2} ${prefix}sc
${tanda2} ${prefix}jadibot
${tanda2} ${prefix}stopjadibot
${tanda2} ${prefix}listjadibot

 *IMAGE*
 
${tanda2} ${prefix}waifu
${tanda2} ${prefix}loli
${tanda2} ${prefix}husbu
${tanda2} ${prefix}milf
${tanda2} ${prefix}cosplay
${tanda2} ${prefix}wallml
${tanda2} ${prefix}hentai

 *GROUP*
 
${tanda2} ${prefix}kick
${tanda2} ${prefix}add
${tanda2} ${prefix}culik
${tanda2} ${prefix}kickall
${tanda2} ${prefix}leaveall
${tanda2} ${prefix}tagall
${tanda2} ${prefix}hidetag
${tanda2} ${prefix}welcome

`
gbutsan = [
{buttonId:`owner`,buttonText:{displayText:'OWNER 👤'},type:1}
]
mhan = await agam.prepareMessage(from, agamimage, image, {thumbnail: agamimage2})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${menu}`,
footerText: `${botName}`,
buttons: gbutsan,
headerType: 4
}
agam.sendMessage(from, btnmenu, MessageType.buttonsMessage, {quoted: ftroli, contextInfo: {mentionedJid:[sender]}})
break


              break
       
//------------------< Sticker Cmd >-------------------
           case 'addcmd': 
           case 'setcmd':
           if (!isOwner) return  reply(mess.only.owner)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break
       case 'delcmd':
       if (!isOwner) return  reply(mess.only.owner)
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
             _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
       if (!isOwner) return  reply(mess.only.owner)
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
//------------------< Public/Self >-------------------
        case 'public':
        if (!mek.key.fromMe && !isOwner) return 
          if (banChats === false) return 
              banChats = false
              textImg(`Success Activated Mode Public`)
              break
	      case 'self':
	if (!mek.key.fromMe && !isOwner) return 
    if (banChats === true) return
        	  uptime = process.uptime()
        	  banChats = true
              textImg(`Success Activated Mode Self`)
              break
//------------------< Downloader/Search/Anime >-------------------
          case 'igdl':
          case 'instagram':
              try {
              if (!isUrl(q)) return reply('Linknya?')
              res = await axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${setting.lolkey}&url=${args[0]}`)
              data = res.data.result
              for (let i = 0; i < data.media.length; i++) {
              sendMediaURL(from, data.media[i], data.caption, {thumbnail: Buffer.alloc(0)})
}
              } catch (e) {
              console.log(e)
              reply(String(e))
}
              break
          case 'igstory': 
              if(!q) return reply('Usernamenya?')
              hx.igstory(q)
             .then(async result => {
              for(let i of result.medias){
              if(i.url.includes('mp4')){
              let link = await getBuffer(i.url)
              agam.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
              } else {
              let link = await getBuffer(i.url)
              agam.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
}
}
});
              break
          case 'ghsearch': 
          case 'githubsearch': 
          case 'searchgithub':
              if (!q) return reply('Cari apa?')
              res = await fetch('https://api.github.com/search/repositories?q='+q)
              json = await res.json()
              if (res.status !== 200) throw json
              str = json.items.map((repo, index) => {
              return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
_${repo.html_url}_
_Dibuat pada *${formatDate(repo.created_at)}*_
_Terakhir update pada *${formatDate(repo.updated_at)}*_
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
${repo.open_issues} Issue${repo.description ? `
*Deskripsi:*\n${repo.description}` : ''}
*Clone:* \`\`\`$ git clone ${repo.clone_url}\`\`\`
`.trim()
}).join('\n\n')
              reply(str)
              break
          case 'image':
          case 'gimage':
          case 'googleimage':
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              reply(mess.wait)
              teks = args.join(' ')
              res = await _gis(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
              break
          case 'youtubedl':
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateA(teks).catch(e => {
              reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
              result = `*Youtube Downloader*
             
📜 Title : ${res[0].judul}
🎁 Type : mp3/mp4
🚀 Durasi : ${res[0].size}`
              buttons = [{buttonId: `${prefix}buttons2 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}buttons1 ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res[0].thumb))
              imageMsg = ( await agam.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await agam.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              agam.relayWAMessage(prep)
              fs.unlinkSync(`./ytmp.jpeg`)
              break
          case 'tiktokdl':
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${setting.lolkey}&url=${q}`)
              result = `⚜️ *Nickname*: ${data.result.author.nickname}\n❤️ *Like*: ${data.result.statistic.diggCount}\n💬 *Komentar*: ${data.result.statistic.commentCount}\n🔁 *Share*: ${data.result.statistic.shareCount}\n🎞️ *Views*: ${data.result.statistic.playCount}\n📑 *Desc*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}buttons3 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}buttons4 ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await agam.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await agam.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              agam.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
          case 'nhentaipdf':
          case 'nhdl':
              if (!q) return reply('kodenya?')
              reply('Please wait, data is being processed')
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${q}?apikey=${setting.lolkey}`)
              ini_image = await getBuffer(get_result.result.image[0])
              data = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${q}?apikey=${setting.lolkey}`)
              pdf = await getBuffer(data.result)
              agam.sendMessage(from, pdf, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${get_result.result.title_romaji}.pdf`, thumbnail: ini_image })
              break
          case 'buttons1':
              await axios.get(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=Nyarlathotep&q=${q}`)
		     .then(res => {
			  agam.sendMessage(from, { url: res.data.result.link }, 'audioMessage', { mimetype: 'audio/mp4', quoted: mek, contextInfo: { externalAdReply: { title: res.data.result.title, mediaType: 2, thumbnailUrl: res.data.result.thumb, mediaUrl: res.data.result.source }}})
})
              break
          case 'buttons2':
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
              break
          case 'buttons3': 
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${setting.lolkey}&url=${q}`)
              ini_video = await getBuffer(data.result.link)
              agam.sendMessage(from, ini_video, video, { quoted: mek })
              break
          case 'buttons4': 
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${setting.lolkey}&url=${args[0]}`)
              agam.sendMessage(from, data, audio, { quoted: mek })
              break
          case 'buttons5':
              const mathdare = dare[Math.floor(Math.random() * (dare.length))]
              result = `${mathdare}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await agam.prepareMessageFromContent(from,{buttonsMessage},{})
              agam.relayWAMessage(prep)
              break
          case 'buttons6':
              const randomtruth = truth[Math.floor(Math.random() * truth.length)]
              result = `${randomtruth}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await agam.prepareMessageFromContent(from,{buttonsMessage},{})
              agam.relayWAMessage(prep)
              break
          case 'tod':
              result =`*Truth Or Dare*\nPemain diberi pilihan antara menjawab pertanyaan dengan jujur, atau melakukan tantangan yang diberikan`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await agam.prepareMessageFromContent(from,{buttonsMessage},{})
              agam.relayWAMessage(prep)
              break
          case 'google':
              if (!q) return reply(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f3fce33fa6804c0b97c897b3bd2ec7a8&url=https://google.com/search?q=${q}`)
              if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              googleIt({ 'query': q }).then(results => {
              vars = `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
              agam.sendMessage(from, ss, image, {caption: vars, quoted : mek, thumbnail: Buffer.alloc(0) })
              }).catch(e => {
              console.log(e)
              reply(`${e}`)
})
              break
          case 'mediafire':
              if (args.length < 1) return reply('Link Nya Mana? ')
              if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await mediafireDl(teks)
              result = `*MediaFire Downloader*
               
📜 Nama : ${res[0].nama}
🚀 Ukuran : ${res[0].size}
🖇️ Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
              reply(result)
              sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
              break
          case 'fb':
          case 'facebook':
              if (!q) return reply('Link Nya?')
              reply(mess.wait)
              data = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${setting.lolkey}&url=${args[0]}`)
              ini_video = await getBuffer(data.result)
              agam.sendMessage(from, ini_video, video, { quoted: mek })
              break
          case 'twitter':
              if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
              if (!q) return reply('Linknya?')
              ten = args[0]
              var res = await twitterGetUrl(`${ten}`)
             .then(g => {
              ren = `${g.download[2].url}`
              sendMediaURL(from,ren,'Done')
})
              break
          case 'ytdesc':
              if (args.length < 1) return reply('Video/Link Yt Nya Mana? ')
              teks = args.join(' ')
              res = await yts(teks)
              reply(res.all[0].description)
              break
          case 'waifu':
          case 'loli':
          case 'husbu':
          case 'milf':
          case 'cosplay':
          case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'👤OWNER'},type:1}]
              imageMsg = ( await agam.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`YT KAMIKAZE`,buttons,headerType:4}
              prep = await agam.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              agam.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
          case 'hentai':
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${setting.lolkey}`).then((gambar) => {
              agam.sendMessage(from, gambar, image, { quoted: mek, thumbnail: Buffer.alloc(0) })
})
              break
          case 'play':
              await axios.get(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=Nyarlathotep&q=${q}`)
		     .then(res => {
    		  agam.sendMessage(from, '*Data berhasil didapatkan*\n\n_Silahkan tunggu, file media sedang dikirim mungkin butuh waktu beberapa menit_', text, { contextInfo: { externalAdReply: { title: res.data.result.title, body: 'Duration ' + res.data.result.duration + ', Size ' + res.data.result.size, thumbnailUrl: res.data.result.thumb, sourceUrl: res.data.result.link }}})
			  agam.sendMessage(from, { url: res.data.result.link }, 'audioMessage', { mimetype: 'audio/mp4', quoted: ftroli, contextInfo: { externalAdReply: { title: res.data.result.title, mediaType: 2, thumbnailUrl: res.data.result.thumb, mediaUrl: res.data.result.source }}})
})
              break
          case 'pinterest':
          case 'pin':
              if (args.length < 1) return reply(`${prefix}Nakano agam`)
              data = await fetchJson(`https://lolhuman.herokuapp.com/api/pinterest?apikey=${setting.lolkey}&query=${q}`)
              buttons = [{buttonId: `${prefix + command} ${q}`,buttonText:{displayText: `➡️Next`},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result))
              imageMsg = ( await agam.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`*Hasil Pencarian Dari : ${q}*`,buttons,headerType:4}
              prep = await agam.prepareMessageFromContent(from,{buttonsMessage},{})
              agam.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break 
          
          case 'tourl':
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
              reply(mess.wait)
              boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              owgi = await agam.downloadMediaMessage(boij)
              res = await uploadImages(owgi)
              reply(res)
              } else {
              reply('kirim/reply gambar/video')
}
              break
          case 'telesticker': 
          case 'telestiker':
              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${setting.lolkey}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              agam.sendMessage(from, ini_buffer, sticker, {})
}
              break
          case 'attp':
              if (args.length == 0) return reply(`Example: ${prefix + command} agam`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              agam.sendMessage(from, buffer, sticker, { quoted: mek })
              break
          case 'sticker':
          case 'stiker':
          case 's':
          case 'stickergif':
          case 'stikergif':
          case 'sgif':
              if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
              encmediat = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              mediat = await agam.downloadAndSaveMediaMessage(encmediat)
              ron = getRandom('.webp')
              exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
              fs.unlinkSync(mediat)
              if (err) return reply(`${err}`)
              exec(`webpmux -set exif ${addMetadata('agam')} ${ron} -o ${ron}`, async (error) => {
              if (error) return reply(`${error}`)
              agam.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
              fs.unlinkSync(ron)
})
})
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              mediat = await agam.downloadAndSaveMediaMessage(encmedia)
              ron = getRandom('.webp')
              exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
              fs.unlinkSync(mediat)
              if (err) return reply(`${err}`)
              exec(`webpmux -set exif ${addMetadata('agam')} ${ron} -o ${ron}`, async (error) => {
              if (error) return reply(`${error}`)
              agam.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
              fs.unlinkSync(ron)
})
})
              } else {
              reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
              break
          case 'tovideo':
              if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
              encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              mediaaa = await agam.downloadAndSaveMediaMessage(encmediaaa)
              a = await webp2gifFile(mediaaa)
              mp4 = await getBuffer(a.result)
              agam.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
              fs.unlinkSync(mediaaa)
              } else {
              reply(mess.wrongFormat)
}
              break
          case 'tomp3':
              if (isQuotedVideo || isQuotedAudio){
              reply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
              media = await agam.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.mp3')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply(`Err: ${err}`)
              buffer453 = fs.readFileSync(ran)
              agam.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
              fs.unlinkSync(ran)
})
              } else {
              reply(mess.wrongFormat)
}
              break
          case 'toimg':
              if (!isQuotedSticker) return reply('reply stickernya')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await agam.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              agam.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break
          case 'nulis':
          case 'tulis':
              if (args.length < 1) return reply('Yang mau di tulis apaan?')
              teks = args.join(' ')
              reply(mess.wait)
              nulis = encodeURIComponent(teks)
              res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
              if (res.data.error) return reply(res.data.error)
              buff = Buffer.from(res.data.result.split(',')[1], 'base64')
              agam.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
              return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
              break
//------------------< Ingfo Bot >-------------------
          case 'runtime':
              textImg(`${runtime(process.uptime())}`)
              break
          case 'donate': 
          case 'donasi':
              textImg(setting.txtDonasi)
              break
          case 'ping':
          case 'speed':
              timestampe = speed();
              latensie = speed() - timestampe
              reply(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏𝙄𝙉𝙂* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
              break
          case 'exif':
              if (!isOwner) return  reply(mess.only.owner)
              if (!q) return reply(mess.wrongFormat)
              if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
              exif.create(arg.split('|')[0], arg.split('|')[1])
              reply('sukses')
              break	
          case 'join': 
              if (!q) return reply('Linknya?')
              if (!isOwner) return reply(mess.only.owner)
              if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
              link = args[0].replace('https://chat.whatsapp.com/','')
              fak = agam.query({ json: ['action', 'invite', link],
              expect200: true })
              reply('Berhasil Masuk Grup')
              break
          case 'term':
              if (!isOwner) return
              if (!q) return
              exec(q, (err, stdout) => {
              if (err) return reply(`${err}`)
              if (stdout) {
              reply(stdout)
}
})
              break 
          case 'shutdown':
              if (!isOwner) return 
              reply(`Bye...`)
              await sleep(3000)
              process.exit()
              break
          case 'leaveall':
              if (!isOwner) return  
              let totalgroup = agam.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
              for (let id of totalgroup) {
              sendMess(id, 'Byee', null)
              await sleep(3000)
              agam.groupLeave(id)
}
              break
          case 'culik':
              if (!isOwner) return
              if (args.length < 1) return reply('Masukin id grupnya tolol')
              let pantek = []
              for (let i of groupMembers) {
              pantek.push(i.jid)
}
              agam.groupAdd(args[0], pantek)
              break
          case 'setprefix':
              if (!isOwner) return
              teks = args.join('') 
              prefix = teks
              reply(`_Change Prefix Success!! Prefix_ : *${prefix}*`)
              break
          case 'hidetag':
          if (!isGroupAdmins) return reply(mess.only.admin)
              try {
              quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
              hideTag(from, `${quotedText}`)
              } catch {
              hideTag(from, `${q}`)
}
              break
case 'tagall':
       if (!isGroupAdmins) return reply(mess.only.admin)
       if (!isGroup) return fakestatus('𝘔𝘢𝘢𝘧!! 𝘊𝘰𝘮𝘮𝘢𝘯𝘥 𝘐𝘯𝘪 𝘒𝘩𝘶𝘴𝘶𝘴 𝘋𝘪 𝘋𝘢𝘭𝘢𝘮 𝘎𝘳𝘰𝘶𝘱!')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
			break
          case 'bug':
          case '.':
              try {
              quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
              sendBug(from, `${quotedText}`)
              } catch {
              sendBug(from, `${q}`)
}
              break
          case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
//------------------< Lainnya >-------------------
          case 'getpp':
              if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
              linkpp = await agam.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
              buffer = await getBuffer(linkpp)
              agam.sendMessage(from, buffer, image, {caption: "Nih", quoted: mek })
              } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
              mberr = mek.message.extendedTextMessage.contextInfo.participant
              linkpp = await agam.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
              buffer = await getBuffer(linkpp)
              agam.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
              } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
              mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
              linkpp = await agam.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
              buffer = await getBuffer(linkpp)
              agam.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
              break
          case 'searchmsg':  //by ANU TEAM
              if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
              teks = arg
              if (teks.includes("|")) { 
              try {
              var ve = teks.split("|")[0]
              var za = teks.split("|")[1]
              sampai = `${za}`
              if (isNaN(sampai)) return reply('Harus berupa Angka!')
              batas = parseInt(sampai) + 1
              if (batas > 30) return reply('Maks 30!')
              reply(mess.wait)
              cok = await agam.searchMessages(`${ve}`, from, batas,1) 
              if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
              if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
              for (i=1;i < cok.messages.length;i++) {
              if (cok.messages[i].message) {
              agam.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
              } catch (e) {
              return reply(String(e))
}
              } else {
              reply(`𝘔𝘢𝘢𝘧!! 𝘍𝘰𝘳𝘮𝘢𝘵 𝘚𝘢𝘭𝘢𝘩 , 𝘣𝘦𝘳𝘪𝘬𝘶𝘵 𝘪𝘯𝘪 𝘤𝘰𝘯𝘵𝘰𝘩𝘯𝘺𝘢 : ${prefix + command} halo|10`)
}
              break
          case 'lolkey':
          case 'cekapikey':
              if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`) 
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
              agam.sendMessage(from, teks, text, {quoted: mek})
              break
          case 'welcome':
          if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply(`${prefix}welcome enable`)
              if ((args[0]) === 'enable') {
              if (isWelkom) return reply('Udah aktif')
              welkom.push(from)
              fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
              reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
              } else if ((args[0]) === 'disable') {
              welkom.splice(from, 1)
              fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
              reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
              } else {
              reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
              break

          case 'kickall': // Anti Banned:v
              if (!isOwner) return
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
          case 'kick':
          if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isGroup) return reply(mess.only.group)
              kick(from, mentionUser)
              break
          case 'add':
          if (!isGroupAdmins) return reply(mess.only.admin)
              if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
              entah = arg.split("|")[0]
              entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
              entah = `${entah}@s.whatsapp.net`
              agam.groupAdd(from, [entah])
              } else {
              orang = mek.message.extendedTextMessage.contextInfo.quotedMessage.sender
              await agam.groupAdd(from, [orang])
}
              break
          case 'infoig':
              teks = `Jangan Lupa Follow Ig Owner Ya : https://www.instagram.com/lordagam23_/`
              agam.sendMessage(from, teks, text, { quoted : mek })
              break
          case 'sourcecode': 
          case 'sc': 
          case 'src':
              textImg(`Bot ini menggunakan sc : https://github.com/Xinz-Team/XinzBot`)
              break
          case 'jadibot':
              jadibot(reply,agam,from)
              break
          case 'stopjadibot':
              stopjadibot(reply)
              break
          case 'listbot':
          case 'listjadibot':
          if (!isOwner) return  reply(mess.only.owner)
              let jamdibot = '「 *LIST JADIBOT* 」\n\n'
              for(let i of listjadibot) {
              jamdibot += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
}
              reply(jamdibot)
              break
          case 'get':
          case 'fetch': //ambil dari nuru
              if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
              res = await fetch(q)
              if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
              delete res
              throw `Content-Length: ${res.headers.get('content-length')}`
}
              if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
              txtx = await res.buffer()
              try {
              txtx = util.format(JSON.parse(txtx+''))
              } catch (e) {
              txtx = txtx + ''
              } finally {
              reply(txtx.slice(0, 65536) + '')
}
              break
default:
if (budy.startsWith('=>')){
if (!isOwner) return
try {
return agam.sendMessage(from, 
`${a}📥 Input: ${budy.slice(3)}
📤 OutPut: 
${JSON.stringify(eval(budy.slice(2)),null,'\t')}
${a}`
,text, {quoted:mek })
} catch(err) {
e = String(err)
reply(`${a} "err" :  "${e}"${a}`)
}
}
if (!isOwner) return
if (budy.startsWith('> ')) {
try {
console.log(color('[ EVAL ]', 'pink'), color(time), budy, color('dari', 'yellow'), pushname, color('di'), isGroup ? groupName : 'Private Chat')
reply(require('util').format(eval(`;(async () => { ${budy.slice(2)} })()`)))
} catch(e) {
console.log(e)
err = String(e)
js = JSON.stringify(e, null, 2)
if (js == '{}') js = { err }
js = JSON.stringify(js, null, 2)
js = '```' + js + '```'
reply('_' + err + '_\n\n' + js)
}
}
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}		
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}



