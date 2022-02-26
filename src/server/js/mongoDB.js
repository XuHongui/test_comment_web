const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 模板
const commentSchema = new Schema({
    date: String,
    comment: String,
    count: Number
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
    Comment.count((err, count) => {
        if(err){
            console.log("上传评论查看评论总数失败");
        }else{
            var commenter = new Comment({date: date, comment: comment, count: count + 1});
            commenter.save(function(err){
                if(err){
                    console.log("评论上传失败");
                }
            });            
        }
    });   
}


// 返回评论函数
function backComment(page , count, callback){
    var p = new Promise((resolve,reject) =>{
        Comment.count((err, count)=>{
            if(!err){
                resolve(count);
            }
        });
    });
    p.then((success) =>{
        if(success - page*count > 0){
            Comment.find({},{__v:0,_id:0}, (err,docs) => {
                if(err){
        
                }else{
                    //console.log(docs);
                    callback(docs);
                }
            }).skip(success - page*count).limit(count);
        }else{
            Comment.find({},{__v:0,_id:0}, (err,docs) => {
                if(err){
        
                }else{
                    //console.log(success, success - page*(count - 1), page*(count - 1), count, page);
                    docs[docs.length] = true;
                    //console.log(docs)
                    callback(docs);
                }
            }).limit(success - (page - 1)*count);
        }       
    });
}

// 链接
exports.connectMongoose = connectMongoose;
// 添加元素
exports.addElement = addElement;
// 返回元素 参数一 页数 参数二 返回多少条留言 参数三 回调函数
exports.backComment = backComment;




