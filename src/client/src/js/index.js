import less from '../less/index.less';
import $ from './jquery1.12.4.min.js';
var page = 1;
var pageFull = false;

//将Date转化成字符串
function dateChangeString(date){
    return date.toLocaleDateString() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}
//提交按钮
$("#commitComment").click(function(){
    // 获得输入框里的值
    var comment = $('#inputText').val();
    // 获取提交时间
    var date = Date.now();
    //将字符串抓换变成字符串传入数据库中
    //var dateStr = date.getFullYear() + "-" + date.getMonth() + '-' + date.getDate() + "T" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    //插入到评论框当中
    $('#commentList').prepend(`<li><div>${dateChangeString(new Date(date))}   ${comment}</div></li>`);
    
    
    /*
    //向服务器发送请求
    const xhr = new XMLHttpRequest();
    //设置发送的地址
    xhr.open('GET', 'http://127.0.0.1:8089/test');
    //发送请求
    xhr.send();
    //观察请求的变化
    xhr.onreadystatechange = ()=>{
        //请求成功
        if(xhr.readyState == 4){
            if(xhr.status >= 200 && xhr.status < 300){
                var data = JSON.parse(xhr.response);
                //插入到评论框当中
                $('#commentList').prepend(`<li><div>${data.date}   ${data.comment}</div></li>`);
            }
        }
    }
    */
    
    //点击评论后将代码提交到后台数据库中
    var xhr = new XMLHttpRequest();
    xhr.open('POST','http://127.0.0.1:8089/commit');
    xhr.setRequestHeader('content-Type', 'application/x-www-form-urlencoded');
    xhr.send('date=' + date + '&comment=' + comment);
    console.log(JSON.stringify({date: date, comment: comment}));
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                console.log("评论成功");
            }else{
                console.log("评论失败");
            }
        }
    }
});

//在末尾追加评论
function addComment(data){
    for(var i = data.length - 1; i >= 0; i--){
        console.log(data[i],data[i].date);
        var dateString = dateChangeString(new Date(parseInt(data[i].date)));
        var comment = data[i].comment;
        if(data[i] !== true){
            $('#commentList').append(`<li><div>${dateString}   ${comment}</div></li>`);
        }
    }
}

function backCommentPlease(){
    if(!pageFull){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','http://127.0.0.1:8089/backComment?page=' + page);
        xhr.setRequestHeader('content-Type', 'application/x-www-form-urlencoded');
        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    console.log("查询成功");
                    var backDate = JSON.parse(xhr.response);
                    console.log(backDate);
                    addComment(backDate);
                    page++;
                    if(backDate[backDate.length - 1] === true){
                        pageFull = true;
                    }
                }else{
                    console.log("查询失败");
                }
            }
        }
    }
}

$("#test_back").click(function(){
    backCommentPlease();    
});
backCommentPlease();