const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./agam.js')
nocache('../agam.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (agam = new WAConnection()) => {
	agam.logger.level = 'warn'
        agam.version = [2,2143,12]
	console.log(color(figlet.textSync('YT KAMIKAZE', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'gold'))
	console.log(color('[AGAM]', 'cyan'), color('Owner is online now!', 'white'))
	console.log(color('[AGAM]', 'cyan'), color('Welcome back, Owner! Hope you are doing well~', 'white'))
	console.log(color('[AGAM]', 'cyan'), color('Please Subscribe YT KAMIKAZE!', 'white'))
	console.log(color('[AGAM]', 'cyan'), color('VERSION : 1.0.0', 'white'))
	agam.browserDescription = ["KAMIKAZE", "chrome", "3.0.0"];

	// Menunggu QR
	agam.on('qr', () => {
		console.log(color('[', 'white'), color('!', 'red'), color(']', 'white'), color('Scan Qr!'))
		
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && agam.loadAuthInfo(`./${setting.sessionName}.json`)
	agam.on('connecting', () => {
		console.log(color('[ AGAM ]', 'cyan'), color('Connecting....'));
	})

	//connect
	agam.on('open', () => {
		console.log(color('[ AGAM ]', 'cyan'), color('Connected√!'));
	})

	// session
	await agam.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(agam.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	agam.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	agam.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	agam.on('group-participants-update', async (anu) => {
		await welcome(agam, anu)
	})

	agam.on('chat-update', async (message) => {
		require('./agam.js')(agam, message)
	})
}

starts()
