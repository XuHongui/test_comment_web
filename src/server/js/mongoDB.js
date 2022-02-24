const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 模板
const commentSchema = new Schema({
    comment: String,
    date: String
});
// 实例化模板
const Comment = mongoose.model("Comment",commentSchema);
function connectMongoose(){
    //链接数据库
    const db = mongoose.connection;
    db.once("open", function(){
        console.log("链接成功");
    });
    mongoose.connect("mongodb://127.0.0.1/test");    
}
// 添加元素到数据库中
function addElement(date, comment){
    var commenter = new Comment({date: date, comment: comment});
    commenter.save(function(err){
        if(err){
            console.log("评论上传失败");
        }
    }) 
}
exports.connectMongoose = connectMongoose;
exports.addElement = addElement;

