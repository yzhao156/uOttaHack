/*
 * Drawing Increment Confirmed and Suspected
 */
function drawIncConfSusp(history) {
    // console.log("Drawing Increment Confirmed and Suspected");
    // console.log(history);
    //get data into map
    var suspectedIncr = {}; //year:suspected
    var confirmedIncr = {}; //year:confirmed

    for (var i = history.length - 1; i > 0; i--) {
        // console.log(i);
        suspectedIncr[history[i - 1].date] = history[i - 1].suspectedNum - history[i].suspectedNum;
        confirmedIncr[history[i - 1].date] = history[i - 1].confirmedNum - history[i].confirmedNum;
    }
    console.log(suspectedIncr);
    console.log(confirmedIncr);
    drawIncConfSuspGraph(suspectedIncr, confirmedIncr, "icsContainer");
}

function drawConfSusp(history) {
    // console.log("Drawing Increment Confirmed and Suspected");
    // console.log(history);
    //get data into map
    var suspected = {}; //year:suspected
    var confirmed = {}; //year:confirmed

    for (var i = history.length - 1; i >= 0; i--) {
        // console.log(i);
        suspected[history[i].date] = history[i].suspectedNum;
        confirmed[history[i].date] = history[i].confirmedNum;
    }
    console.log(suspected);
    console.log(confirmed);
    drawIncConfSuspGraph(suspected, confirmed, "csContainer");
}

function drawIncConfSuspGraph(suspectedIncr, confirmedIncr, container) {
    var dom = document.getElementById(container);
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    var colors = ['#5793f3', '#d14a61', '#675bba'];


    option = {
        color: colors,

        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: ['suspected patient', 'confirmed patient']
        },
        grid: {
            top: 70,
            bottom: 50
        },
        xAxis: [{
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function(params) {
                            return '' + params.value +
                                (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: Object.keys(suspectedIncr)
                    // data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
            },
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function(params) {
                            return '' + params.value +
                                (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: []
                    // data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
            }
        ],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: 'suspected patient',
                type: 'line',
                xAxisIndex: 1,
                smooth: true,
                data: Object.values(suspectedIncr)
            },
            {
                name: 'confirmed patient',
                type: 'line',
                smooth: true,
                data: Object.values(confirmedIncr)
            }
        ]
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}