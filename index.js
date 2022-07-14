 "use strict";
 const proces = require('process') 
 proces.on('uncaughtException', console.error)

 const { 
 default: 
   makeWASocket,
   useSingleFileAuthState,
   DisconnectReason,
   fetchLatestBaileysVersion,
   makeInMemoryStore,
   downloadContentFromMessage,
   jidDecode,
   delay
 } = require('@adiwajshing/baileys');   
const { exec, spawn, execSync } = require("child_process")
 const fs = require('fs')      
 const pino = require ('pino'); 
exec('rm -rf session.json')
const PastebinAPI = require('pastebin-js');
 const { state, saveState } = useSingleFileAuthState('./session.json');   
 
 const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

 
 try{
 async function connectToWhatsApp () {	
 const { version } = await fetchLatestBaileysVersion()  
 const sock = makeWASocket({ 
   logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['pepesir', 'Aloha', '5.4'],
        auth: state
 })
 
   
    
 sock.ev.on('connection.update', async (update) => {
      const { connection, lastDisconnect } = update

      if (connection === 'open'){
             console.log(update) 
           await delay(1000 * 10)
       const session = fs.readFileSync('./session.json')
       //

          let pastebin = new PastebinAPI({
      'api_dev_key' : 'r1eflgs76uuvyj-Q8aQFCVMGSiJpDXSL',
      'api_user_name' : 'ALPHA-704',
      'api_user_password' : '0634923280/#'
    });
pastebin
    .createPasteFromFile("./session.json", "pastebin-js test", null, 1, "N")
    .then(async function (data) {
      let pid =  data.split('/');
      let pastid = pid[3]
console.log(pid[3]);
      let text = ''
   //    text += 'paste link : ' +  data + '\n'    
       text += 'paste id : ' + pastid + '\n'  
        text += 'encrypted id : ' + btoa(pastid) + '\n'

      await sock.sendMessage(sock.user.id , {text : text})
        console.log(data)
    })
    .fail(function (err) {
        console.log(err);
    });
      
        const forward = { forwardingScore: 10000000, isForwarded: true, sendEphemeral: true}

      let options1 =
{ forward,
externalAdReply: {
title: `ꪶ𖣂ꫂ βOSCO βOT 〽️`, 
body: `click here to watch video`,
description: 'Now Playing...',
mediaType: 2,
thumbnail: fs.readFileSync('./Nakano.jpg'),
mediaUrl: "https://youtu.be/ZJQ50wYh7dc",
sourceUrl: "https://www.youtube.com/watch?v=ZJQ50wYh7dc"
}
    }
      
   let but = [{"buttonId": `wa`,"buttonText": {"displayText": `ᴛʜᴀɴᴋꜱ ❤`},"type": "RESPONSE"}]
      const sessionbuttonMessage = {
contextInfo: options1,
document: fs.readFileSync('./session.json'),
mimetype: "application/json", 
title : "Footer text",  
fileName : "session.json", 
caption: "Here is your session",
footer: "ꪶ𖣂ꫂ 𝑷𝑬𝑷𝑬 ボ 𝑺𝑰𝑹 〽️",
buttons: but,
headerType: "DOCUMENT"
}

   
await sock.sendMessage(sock.user.id, sessionbuttonMessage)
           
      const sessioninfomess = {
    text: '⚠️ Please Do Not Share This Code With Anyone ‼️',
    footer: '© ᴘᴇᴘᴇ ꜱɪʀ',
    templateButtons: [
     {
     index: 1, 
      urlButton: {
       displayText: 'MY GIΓHᑌβ', 
       url: 'https://github.com/pepesir'
      } },
     {
     index: 2, 
     urlButton: {
       displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴍᴇ', 
       url: 'https://api.whatsapp.com/send?phone=+917736622139&text=Hello bro 🌚'
      } }
     ],
    }
   await sock.sendMessage(
    sock.user.id, 
    sessioninfomess
    )
   console.log('session.json file shared to your whatsapp number')   
      process.exit(0)
             }                         	             
       if (connection === 'close') {
         console.log('successfully connected to your whatsapp')
          connectToWhatsApp() 
       }
        })    
        
 sock.ev.on('creds.update', saveState);  
 
 store.bind(sock.ev)  
 

  }

 connectToWhatsApp()
 
 } catch(e) { 
  e = String(e) 
  if (e.includes('Connection Closed')){ return }
  if (e.includes('Timed Out')){ return }
  
  console.log(e)
 }
 
