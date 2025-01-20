// Thats Why You Are Single🥲😂

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
const { fetchJson } = require('../lib/functions');


cmd({
  pattern: 'fluxpro',
  react: '🧩',
  desc: 'Generate an image using Flux',
  category: 'image',
  filename: __filename
}, async (conn, mek, m, {
  body,
  from,
  quoted,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    const text = body.trim().replace(command, '').trim();
    if (!text) {
      return reply(`*Usage:* ${command} <prompt>\n\n*Example:* ${command} cat`);
    }

    await reply('> *Princess Raya MD is Processing Image...*');

    const apiUrl = `https://api.davidcyriltech.my.id/flux?prompt=${encodeURIComponent(text)}`;

    await conn.sendMessage(m.chat, { image: { url: apiUrl }, caption: `🎨 *Flux Image Generator*\n\n📄 *Prompt:* ${text}\n\n> POWERED BY MR FRAN` }, { quoted: m });
  } catch (error) {
    console.error('Error in Flux command:', error);
    reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
  }
});


