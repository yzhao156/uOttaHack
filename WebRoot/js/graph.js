var colors = ['#5793f3', '#d14a61','#86ceff','#ff686d', '#6e2b28','#022463'];
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
    drawCurve(suspectedIncr, confirmedIncr, "icsContainer",'Incresed Suspected Patient', 'Increased Confirmed Patient',0,1);
}

function drawConfSusp(history) {
    // console.log("Drawing Increment Confirmed and Suspected");
    console.log(history);
    console.log(history);
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
    drawCurve(suspected, confirmed, "csContainer",'Total Suspected Patient', 'Total Confirmed Patient',2,3);
}

function drawCuresDeath(history){
    //get data into map
    var curesNum = {}; //year:suspected
    var deathsNum = {}; //year:confirmed

    for (var i = history.length - 1; i >= 0; i--) {
        // console.log(i);
        curesNum[history[i].date] = history[i].curesNum;
        deathsNum[history[i].date] = history[i].deathsNum;
    }
    console.log(curesNum);
    console.log(deathsNum);
    drawCurve(curesNum, deathsNum, "cdContainer",'Total Cured Patient', 'Total Death Patient',4,5);
}

function drawCurve(mapping1, mapping2, container,legendName1,legendName2,color1,color2) {
    var dom = document.getElementById(container);
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    option = {
        color: [colors[color1],colors[color2]],

        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: [legendName1, legendName2]
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
                data: Object.keys(mapping1)
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
            }
        ],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: legendName1,
                type: 'line',
                xAxisIndex: 1,
                smooth: true,
                data: Object.values(mapping1)
            },
            {
                name: legendName2,
                type: 'line',
                smooth: true,
                data: Object.values(mapping2)
            }
        ]
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}