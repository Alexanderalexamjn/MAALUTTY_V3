/* Copyright (C) munu-sir
Mwonu credits kalayalle
ᴍᴜɴᴜꜱɪʀʙᴏᴛ-munavir
*/

const MUNU SIR  = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

MUNU SIR .addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/6tbmPj1/maaluttty.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `◄━⦁💝 MUNU SIR _V3💝⦁━►

            

*owner number * :https://wa.me/918590822912


*owner id instagram* :https://instagram.com/munavir__x__


*github* : https://github.com/Alexanderalexamjn/MUNU


*audio commands* :https://github.com/munu-siri/media/tree/main/bgm.


*sticker commands* :https://github.com/munu-sir/media/tree/main/stickers.

◄━⦁💝 MUNU SIR _V3💝⦁━►
■□ Munavir~■□ 

`}) 

}));
