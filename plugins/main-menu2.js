
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













































































































































































































const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "allmenu",
    alias: "menu2",
    desc: "menu the bot",
    category: "menu2",
    react: "🛠️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━━〔 *${config.BOT_NAME}* 〕━━━┈⊷
┃۞╭──────────────
┃۞│ Bot Developer: *🇿🇼 Ryan T Ropah 🇿🇼*
┃۞│ Owner: *${config.OWNER_NAME}*
┃۞│ Baileys: *Multi Device*
┃۞│ Type: *NodeJS*
┃۞│ Platform: *Heroku*
┃۞│ Mode: *[${config.MODE}]*
┃۞│ Prefix: *[${config.PREFIX}]*
┃۞│ Version : *4.3 Beta*
┃۞╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭━━〔 *Download Menu* 〕━━┈⊷
┃⁂╭─────────────·❊
┃⁂┃✼ facebook
┃⁂┃✼ mediafire
┃⁂┃✼ tiktok
┃⁂┃✼ twitter
┃⁂┃✼ Insta
┃⁂┃✼ apk
┃⁂┃✼ img
┃⁂┃✼ tt2
┃⁂┃✼ git
┃⁂┃✼ spotify
┃⁂┃✼ play
┃⁂┃✼ play2
┃⁂┃✼ play3
┃⁂┃✼ audio
┃⁂┃✼ video
┃⁂┃✼ video2
┃⁂┃✼ ytmp3
┃⁂┃✼ ytmp4
┃⁂┃✼ song
┃⁂┃✼ darama
┃⁂┃✼ gdrive
┃⁂┃✼ smovie
┃⁂┃✼ baiscope 
┃⁂┃✼ ginisilia 
┃⁂└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Group Menu* 〕━━┈⊷
┃⁂╭─────────────·❊
┃⁂┃✼ grouplink
┃⁂┃✼ kickall
┃⁂┃✼ kickall2
┃⁂┃✼ kickall3
┃⁂┃✼ add
┃⁂┃✼ remove
┃⁂┃✼ kick
┃⁂┃✼ promote 
┃⁂┃✼ demote
┃⁂┃✼ dismiss 
┃⁂┃✼ revoke
┃⁂┃✼ setgoodbye
┃⁂┃✼ setwelcome
┃⁂┃✼ delete 
┃⁂┃✼ getpic
┃⁂┃✼ ginfo
┃⁂┃✼ delete 
┃⁂┃✼ disappear on
┃⁂┃✼ disappear off
┃⁂┃✼ disappear 7D,24H
┃⁂┃✼ allreq
┃⁂┃✼ updategname
┃⁂┃✼ updategdesc
┃⁂┃✼ joinrequests
┃⁂┃✼ senddm
┃⁂┃✼ nikal
┃⁂┃✼ mute
┃⁂┃✼ unmute
┃⁂┃✼ lockgc
┃⁂┃✼ unlockgc
┃⁂┃✼ invite
┃⁂┃✼ tag
┃⁂┃✼ hidetag
┃⁂┃✼ tagall
┃⁂┃✼ tagadmins
┃⁂└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Owner Menu* 〕━━┈⊷
┃⁂╭─────────────·❊
┃⁂┃✼ owner
┃⁂┃✼ menu
┃⁂┃✼ menu2
┃⁂┃✼ vv
┃⁂┃✼ listcmd
┃⁂┃✼ allmenu
┃⁂┃✼ repo
┃⁂┃✼ block
┃⁂┃✼ unblock
┃⁂┃✼ fullpp
┃⁂┃✼ setpp
┃⁂┃✼ restart
┃⁂┃✼ shutdown
┃⁂┃✼ updatecmd
┃⁂┃✼ alive
┃⁂┃✼ ping 
┃⁂┃✼ gjid
┃⁂┃✼ jid
┃⁂└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Fun Menu* 〕━━┈⊷
┃⁂╭─────────────·❊
┃⁂┃✼ insult
┃⁂┃✼ hack
┃⁂┃✼ ship
┃⁂┃✼ character
┃⁂┃✼ pickup 
┃⁂┃✼ joke
┃⁂┃✼ hrt
┃⁂┃✼ hpy
┃⁂┃✼ syd
┃⁂┃✼ anger
┃⁂┃✼ shy
┃⁂┃✼ kiss
┃⁂┃✼ mon
┃⁂┃✼ cunfuzed
┃⁂┃✼ setpp
┃⁂┃✼ hand
┃⁂┃✼ nikal
┃⁂┃✼ hold
┃⁂┃✼ hug
┃⁂┃✼ nikal
┃⁂┃✼ hifi
┃⁂┃✼ poke
┃⁂└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Convert Menu* 〕━━┈⊷
┃⁂╭─────────────·❊
┃⁂┃✼ sticker
┃⁂┃✼ sticker2
┃⁂┃✼ fancy
┃⁂┃✼ take
┃⁂┃✼ tomp3
┃⁂┃✼ tts
┃⁂┃✼ trt
┃⁂└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Ai Menu* 〕━━┈⊷
┃⁂╭─────────────·❊
┃⁂┃✼ ai
┃⁂┃✼ gpt
┃⁂┃✼ meta
┃⁂┃✼ blackbox
┃⁂┃✼ gpt4
┃⁂┃✼ bing
┃⁂┃✼ copilot
┃⁂└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Main Menu* 〕━━┈⊷
┃⁂╭─────────────·❊
┃⁂┃✼ ping
┃⁂┃✼ ping2
┃⁂┃✼ speed
┃⁂┃✼ live 
┃⁂┃✼ alive
┃⁂┃✼ runtime
┃⁂┃✼ uptime 
┃⁂┃✼ repo
┃⁂┃✼ owner
┃⁂┃✼ menu
┃⁂┃✼ menu2
┃⁂┃✼ restart
┃⁂└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Anime Menu* 〕━━┈⊷
┃⁂╭─────────────·❊
┃⁂┃✼ fack
┃⁂┃✼ truth
┃⁂┃✼ dare
┃⁂┃✼ dog
┃⁂┃✼ awoo
┃⁂┃✼ garl
┃⁂┃✼ waifu
┃⁂┃✼ neko
┃⁂┃✼ megnumin
┃⁂┃✼ neko
┃⁂┃✼ maid
┃⁂┃✼ loli
┃⁂┃✼ animegirl
┃⁂┃✼ animegirl
┃⁂┃✼ animegirl1
┃⁂┃✼ animegirl2
┃⁂┃✼ animegirl3
┃⁂┃✼ animegirl4
┃⁂┃✼ animegirl5
┃⁂┃✼ anime1
┃⁂┃✼ anime1
┃⁂┃✼ anime2
┃⁂┃✼ anime3
┃⁂┃✼ anime4
┃⁂┃✼ anime5
┃⁂┃✼ animenews
┃⁂┃✼ foxgirl
┃⁂┃✼ naruto
┃⁂└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Other Menu* 〕━━┈⊷
┃⁂╭─────────────·❊
┃⁂┃✼ fact
┃⁂┃✼ cpp
┃⁂┃✼ rw
┃⁂┃✼ pair
┃⁂┃✼ pair2
┃⁂┃✼ fancy
┃⁂┃✼ logo <text>
┃⁂┃✼ define
┃⁂┃✼ news
┃⁂┃✼ movie
┃⁂┃✼ weather
┃⁂┃✼ srepo
┃⁂┃✼ insult
┃⁂┃✼ save
┃⁂┃✼ wikipedia
┃⁂┃✼ gpass
┃⁂┃✼ githubstalk
┃⁂┃✼ yts
┃⁂┃✼ ytv
┃⁂└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

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
                        newsletterName: 'Princess Raya MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/RyanTRopah/Mazwi/raw/main/raani/model/rayaanototaurawonhai.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
