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





































































































































































































const axios = require('axios');
const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': "srepo",
  'desc': "Fetch information about a GitHub repository.",
  'category': "other",
  'react': '📂',
  'filename': __filename
}, async (_0x50251e, _0x14f82c, _0x4b5519, {
  from: _0x4efb12,
  quoted: _0x19ce97,
  body: _0x3b1251,
  isCmd: _0x470fc9,
  command: _0x12d4bd,
  args: _0x5124d6,
  q: _0x97f68a,
  isGroup: _0x54558e,
  sender: _0x15e95b,
  senderNumber: _0x5159e7,
  botNumber2: _0x231e7a,
  botNumber: _0x332f02,
  pushname: _0x4aa8e5,
  isMe: _0x2d6111,
  isOwner: _0x386543,
  groupMetadata: _0xf34fb3,
  groupName: _0x1c85cc,
  participants: _0x294cdb,
  groupAdmins: _0x3de5c1,
  isBotAdmins: _0x4897ce,
  isAdmins: _0x19fa91,
  reply: _0x4bb281
}) => {
  try {
    const _0x4316bb = _0x5124d6.join(" ");
    if (!_0x4316bb) {
      return _0x4bb281("Please provide a GitHub repository name in the format 📌`owner/repo`.");
    }
    const _0x1710d7 = "https://api.github.com/repos/" + _0x4316bb;
    const _0x5e6198 = await axios.get(_0x1710d7);
    const _0x3b32a2 = _0x5e6198.data;
    let _0x5966d9 = "📁*GITHUB REPO NEWS BY PRINCESS RAYA*📁\n\n";
    _0x5966d9 += "📌 *NAME*: " + _0x3b32a2.name + "\n";
    _0x5966d9 += "🔗 *URL*: " + _0x3b32a2.html_url + "\n";
    _0x5966d9 += "📝 *DESCRIPTION*: " + _0x3b32a2.description + "\n";
    _0x5966d9 += "⭐ *STARS*: " + _0x3b32a2.stargazers_count + "\n";
    _0x5966d9 += "🍴 *FORKS*: " + _0x3b32a2.forks_count + "\n";
    _0x5966d9 += "\n";
    _0x5966d9 += "*POWERED BY PRINCESS RAYA MD*\n";
    await _0x50251e.sendMessage(_0x4efb12, {
      'text': _0x5966d9
    }, {
      'quoted': _0x14f82c
    });
  } catch (_0x4b990c) {
    console.log(_0x4b990c);
    _0x4bb281("Error fetching repository data🤕: " + _0x4b990c.message);
  }
});
