const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const ImgSchema = new Schema({

    img: { data: Buffer, contentType: String}
    },{
      timestamps:true
    }



);

module.expors = mongues.model('Img', ImgSchema);

