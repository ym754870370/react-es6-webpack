// var echarts = require('echarts');

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
    // title: { text: 'ECharts' },
    // tooltip: {},
    // xAxis: {
    //     data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    // },
    // yAxis: {},
    // series: [{
    //     name: '销量',
    //     type: 'bar',
    //     data: [5, 20, 36, 10, 10, 20]



    title: {
        text: 'Graph 简单示例'
    },
    tooltip: {},
    animationDurationUpdate: 1500,//更新动画时长
    animationEasingUpdate: 'quinticInOut',//主元素的缓动效果
    series : [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,//框体大小
            roam: true,//是否支持移动，放大，缩小功能
            label: {
                normal: {
                    show: true//直接显示框内文字，false为悬停时才显示
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20//箭头上标记字体大小
                    }
                }
            },
            data: [{
                name: '节点1',//节点名称
                x: 300,//节点横坐标
                y: 300//节点纵坐标
            }, {
                name: '节点2',
                x: 800,
                y: 300
            }, {
                name: '节点3',
                x: 550,
                y: 100
            }, {
                name: '节点4',
                x: 550,
                y: 500
            }, {
                name: '节点5',
                x: 1000,
                y: 500
            }],
            // links: [],
            links: [{//连接
                source: 0,
                target: 1,
                symbolSize: [5, 20],//箭头初始位置大小
                label: {
                    normal: {
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 5,
                        curveness: 0.2
                    }
                }
            }, {
                source: '节点2',
                target: '节点1',
                label: {
                    normal: {
                        show: true
                    }
                },
                lineStyle: {
                    normal: { curveness: 0.2 }
                }
            }, {
                source: '节点1',
                target: '节点3'
            }, {
                source: '节点2',
                target: '节点3'
            }, {
                source: '节点2',
                target: '节点4'
            }, {
                source: '节点1',
                target: '节点4'
            }, {
                source: '节点2',
                target: '节点5'
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,//箭头透明度
                    width: 2,//箭头粗细程度
                    curveness: 0//箭头线弯曲
                }
            }
        }
    ]});


// //最终渲染
// ReactDom.render((
//     <Router history={hashHistory}>
//         <Route path='/' component={App}></Route>
//         <Route path='/list' component={List} />
//         <Route path='/detail' component={Detail} />
//     </Router>
// ), document.getElementById('app'));


