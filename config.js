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

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "replace with raya session id",
 
PREFIX: process.env.PREFIX || ".",
// Enter Your Desired Prefix

BOT_NAME: process.env.BOT_NAME || "Princess Raya",
// Enter Your Bot Name

CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji reaction
  
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "❄️,🇿🇼,✨",
// chose custom react emojis by yourself 

DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links without removing member 

OWNER_NUMBER: process.env.OWNER_NUMBER || "263780177755",
// Set Owner Name

OWNER_NAME: process.env.OWNER_NAME || "Ryan T Ropah",
// Set Footer

DESCRIPTION: process.env.DESCRIPTION || "_❄️ Downloaded by Princess Raya MD ❄️_",
// add bot owner name   
 
ALIVE_IMG: process.env.ALIVE_IMG || "https://cloud.eclipse-web.site/index.php/s/YD5XdQyrkgfr3sL/download/0.4fnw9dvkl36.png",
// add img for alive msg

LIVE_MSG: process.env.LIVE_MSG || "_❄️ Princess Raya is Alive! ❄️_",
// add alive msg here 

READ_MESSAGE: process.env.READ_MESSAGE || "true",
// Turn true or false for automatic read msgs

AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs

ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 

AUTO_STATUS_MSG: process.env.AUTO_STATUS__MSG || "_❄️ Hi dear, Princess Raya MD bot has just viewed your status! ❄️_",

// set the auto reply massage on status reply    
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices

AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply
 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 

PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod

AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing  
 
READ_CMD: process.env.READ_CMD || "true",
// true if want mark commands as read 

AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

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
