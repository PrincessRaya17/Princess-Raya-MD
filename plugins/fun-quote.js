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
const { cmd } = require('../command');

cmd({
    pattern: "quote",
    desc: "Get a random inspirational quote.",
    category: "fun",
    react: "💬",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const response = await axios.get('https://api.gifted.my.id/api/fun/quotes?apikey=gifted');
        const quote = response.data;
        const message = `
💬 "${quote.content}"
- ${quote.author}
_Quotes by Princess Raya made by Ryan_
        `;
        return reply(message);
    } catch (e) {
        console.error("Error fetching quote:", e);
        reply("An error occured while processing your request.");
    }
});
