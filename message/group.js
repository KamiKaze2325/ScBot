const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")
const moment = require("moment-timezone")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')

let setting = JSON.parse(fs.readFileSync('./setting.json'))
prefix = setting.prefix

module.exports = welcome = async (farz, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await farz.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await farz.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'add' && mem.includes(farz.user.jid)) {
            farz.sendMessage(anu.jid, `Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik ${prefix}menu`, 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(farz.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await farz.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                let v = farz.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
                teks = `Halo ${anu_user} \n\nNama : \nUmur :\nGender : \nAsal :\n\nSemoga Betah dan jangan lupa isi\nAnd Following Rules Group\n${mdata.desc}`
	            buff = await getBuffer(pp_user)
		        farz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		}
            if (anu.action == 'remove' && !mem.includes(farz.user.jid)) {
            if (!welkom.includes(anu.jid)) return
                mdata = await farz.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = farz.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
                memeg = mdata.participants.length
                out = `Kenapa tuh? kok bisa keluar? \nSayonara ${anu_user} we will miss you`
                buff = await getBuffer(pp_user)
                farz.sendMessage(mdata.id, buff, MessageType.image, {caption: out, contextInfo: {"mentionedJid": [num]}})
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
