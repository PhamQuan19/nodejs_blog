const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Course = new Schema({
    name: {type: String , required:true },
    description: {type: String },
    image:{type: String },
    videoId:{type: String ,required:true  },
    level:{type: String , maxLength:200 },
    slug: { type: String, slug: 'name', unique:true }
  },
  {type:String, timestamps:true}
  
  );

  module.exports=mongoose.model('Course', Course);