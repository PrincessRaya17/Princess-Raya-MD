
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











































































































































































































const { cmd } = require('../command');
const { sleep } = require('../lib/functions');

cmd({
    pattern: "restart",
    desc: "Restart Raya",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup, senderNumber, reply
}) => {
    try {
        // Get the bot owner's number dynamically from conn.user.id
        const botOwner = conn.user.id.split(":")[0]; // Extract the bot owner's number
        if (senderNumber !== botOwner) {
            return reply("Only the bot owner can use this command.");
        }

        const { exec } = require("child_process");
        reply("Princess Raya Restarting...");
        await sleep(1500);
        exec("pm2 restart all");
    } catch (e) {
        console.error(e);
        reply(`${e}`);
    }
});
