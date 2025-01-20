
/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ❄️Project
    Princess Raya MD
    
    😇Developer
     Ryan T Ropah 
     
    ✨Team
     P17 Bots
     
    💙Our Website
     https://ryantropah.com

© Do not mod this or I will take action⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/






















































const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

cmd({
    pattern: "support",
    alias : "version",
    desc: "raya menu",
    category: "menu",
    react: "📡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let dec = `    
۞──────────────────➳
❉ _Bot Developer_ : _🇿🇼 Ryan T Ropah 🇿🇼_
❉ _Bot Mode_ : _${config.MODE}_
❉ _Bot Prefix_ : _${config.PREFIX}_
❉ _Bot RAM_ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
❉ _Princess Raya Version_ : _4.3_
❉ _Bot Uptime_ : ${runtime(process.uptime())}

۞──────────────────➳

❄️Princess Raya MD❄️

۞──────────────────➳
${readMore}
*Follow Now*
https://whatsapp.com/channel/0029VagJ4OO47Xe3W0pXEa31

*Ryan T Ropah*
https://github.com/RyanTRopah/Princess-Raya-MD

*Join Now*
https://chat.whatsapp.com/LAvOSYysy2rByLwvB0pgmd

*Ryan T Ropah*
wa.me/263780177755

۞──────────────────➳

`;

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/9t74nx.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363304325601080@newsletter',
                        newsletterName: 'Princess Raya',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio //https://github.com/RyanTRopah/Mazwi/raw/main/raani/model/rayaanototaurawonhai.m4a
        await conn.sendMessage(from, { //https://github.com/RyanTRopah/Mazwi/raw/main/raani/model/rayaanototaurawonhai.m4a
            audio: { url: 'https://github.com/RyanTRopah/Mazwi/raw/main/raani/model/rayaanototaurawonhai.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});




//  Ryan X
