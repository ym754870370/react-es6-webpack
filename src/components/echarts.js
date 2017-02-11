// var echarts = require('echarts');

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
    title: { text: 'ECharts' },
    tooltip: {},
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});


// //最终渲染
// ReactDom.render((
//     <Router history={hashHistory}>
//         <Route path='/' component={App}></Route>
//         <Route path='/list' component={List} />
//         <Route path='/detail' component={Detail} />
//     </Router>
// ), document.getElementById('app'));


