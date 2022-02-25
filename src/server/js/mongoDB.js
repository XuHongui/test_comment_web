const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 模板
const commentSchema = new Schema({
    date: String,
    comment: String
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

// 查看数据库中有多少条数据
function findDateCount(){
    Comment.count(function(err, count){
        if(err){
            console.log("查询有多少数据失败");
        }else{
            console.log("数据库中有" + count + "条数据");
        }
    });
}

// 链接
exports.connectMongoose = connectMongoose;
// 添加元素
exports.addElement = addElement;
// 查看数据库中有多少条数据
exports.findDateCount = findDateCount;

