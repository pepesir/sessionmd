let express = require('express');

let path = require('path');

let SocketIO = require('socket.io');

let { toBuffer } = require('qrcode');

let axios = require('axios');

const fs = require('fs');

const fetch = require('node-fetch');

let app = (global.app = express());

const PORT = process.env.PORT || 3030;

const makeWASocket = require('@adiwajshing/baileys').default;

const pino = require('pino');

const router = express.Router();

const {
        delay,
        useSingleFileAuthState,
        makeInMemoryStore,
} = require('@adiwajshing/baileys');

const PastebinAPI = require('pastebin-js');

let pastebin = new PastebinAPI({
      'api_dev_key' : 'r1eflgs76uuvyj-Q8aQFCVMGSiJpDXSL',
      'api_user_name' : 'ALPHA-704',
      'api_user_password' : '0634923280/#'
    });


app.use(
        '/',
        router.get('/',(req, res) => {
                var result = '';

                var characters =
                        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

                var characters9 = characters.length;

                for (var i = 0; i < 9; i++) {
                        result += characters.charAt(Math.floor(Math.random() * characters9));
                 }
                
                function pepesir() {
                        const authfile = `${result}`;

                        const { state, saveState } = useSingleFileAuthState(authfile);  
                  
                        try {
                          let version = [3,3234,9];

                          const conn = makeWASocket({
                            logger : pino({ level: 'silent' }),
                            
                            printQRInTerminal: true,

                            browser: ['PEPESIR MD','opera','3.0.0'],

                            auth: state,

                            version,
});                            
                             
                          conn.ev.on('connection.update', async (s) => {
                            console.log(s);
                            if (s.qr !== undefined) {
                              res.end(await toBuffer(s.qr));
                            }
                            const { connection, lastDisconnect }= s;

                            if (connection == 'open'){
                              let link = await pastebin.createPasteFromFile(authfile, 'lisa session', null, 0, 'N');
                              data = link.replace('https://pastebin.com/','');

                              await delay (500 * 10)

                              await conn.sendMessage(conn.user.id, { text : btoa(data) });

                              await delay(500 * 10);
                               
                              const session = fs.readFileSync(authfile);

                              let toxt = btoa(data);

                              console.log(toxt);

                              let tempimg = await(
                                await fetch(
                                  'https://telegra.ph/file/923d6d3b2a0bf53e1be90.jpg')                                  
                                ).buffer()

await conn.sendMessage(conn.user.id,{ document: session, mimetype: 'application/json', fileName: 'session.json', });

await conn.sendMessage(conn.user.id, { image: {url : 'https://telegra.ph/file/923d6d3b2a0bf53e1be90.jpg'}, caption: 'caption', footer: "pepesir", templateButtons: [ { urlButton: { displayText: "Repository", url: "https://github.com/pepesir"}}]}) 

exec(rs);

process.exit(0);
}
if (connection === 'close' && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
  pepesir();
  }
}
)
 

conn.ev.on('creds.update', saveState);

conn.ev.on('messages.upsert', () => {});
} catch (err) {
console.log(err) 
}
}                  
   pepesir();
}
)
);
app.listen(PORT, () => console.log('App listened on port',PORT));

function makeid() {
  var result = '';

  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  var characters9 = characters.length;

  for (var i = 0; i< 9; i++){
    result += characters.charAt(Math.floor(Math.random() * characters9));
  }
  return result;
}
