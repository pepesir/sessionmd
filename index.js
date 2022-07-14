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
                var result = '',

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
                             
                          conn.ev.on('connection.update', async (s)) => {
                            console.log(s);
                                   }                     
                                
