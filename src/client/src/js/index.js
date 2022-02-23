import less from '../less/index.less';
import $ from './jquery1.12.4.min.js';

$("#commitComment").click(function(){
    var conment = $('#inputText').val();
    var date = new Date();
    $('#commentList').prepend(`<li><div>${date}   ${conment}</div></li>`);
    console.log('dasdas');
});