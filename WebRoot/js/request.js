var logOfInitDataShow = false;
$(document).ready(function() {
    $.get("https://tianqiapi.com/api?version=epidemic&appid=66519292&appsecret=FwsgHnh3",
        function(data, status) {
            var data = data["data"];
            var list = data["list"];
            var history = data["history"];
            var area = data["area"];

            if (logOfInitDataShow) {
                console.log("Data With Error Code:");
                console.log(data);
                console.log("\nData:");
                console.log(data);
                console.log("\nList:");
                console.log(list);
                console.log("\nHistory:");
                console.log(history);
                console.log("\nArea:");
                console.log(area);
            }
            drawIncConfSusp(history);
            drawConfSusp(history);
            drawCuresDeath(history);
        });
});