const express = require('express');
const bodyParser = require('body-parser');
const mongodbTool = require('./js/mongoDB');
const multer = require('multer');
const app = express();
const port = 8089;
const upload = multer();


//链接数据库
mongodbTool.connectMongoose();

//设置bodyParser的配置
//当extended为true的适合post的键值可以是任意的但为false的只能是字符串或数组
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//原本的get请求
app.get('/',(req, res) => {
    res.send('hello express');
});

//测试get服务
app.get('/test',(req,res)=>{
    res.header("Access-Control-Allow-Origin","http://localhost:9000");
    var data = {
        date: new Date(),
        comment: "test"
    }
    res.send(JSON.stringify(data));
});

//提交评论的请求服务
app.all('/commit', (req,res) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","*");
    res.header("Access-Control-Allow-Headers","*");
    //date 是时间戳 comment是评论
    mongodbTool.addElement(req.body.date, req.body.comment);
    res.send("ok");   
});

//返回5条评论
app.all('/backComment', (req,res) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","*");
    res.header("Access-Control-Allow-Headers","*");
    mongodbTool.backComment(req.query.page, 5, (docs) => {
        res.send(JSON.stringify(docs));   
    });  
});

app.listen(port, () => {
    console.log("8089端口以打开");
});