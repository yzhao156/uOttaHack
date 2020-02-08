$(document).ready(function() {
    // $("button").click(function() {
    $.get("https://tianqiapi.com/api?version=epidemic&appid=66519292&appsecret=FwsgHnh3",
        function(data, status) {
            console.log(data);
            // $('#result').append(JSON.stringify(data)); //返回内容绑定到ID为result的标签
            // alert("状态码：" + data.code + "\n消息：" + data.msg);
        });
    // });
});