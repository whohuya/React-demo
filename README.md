# 洛阳师范学院班车时刻表
               --基于React的班车时刻表Demo

利用yarn create react-app 创建一个reactApp框架
该app主要实现一个简单的查看班车时刻表的功能，并且根据自己需要还可以添加申请新的班车的功能
运行则使用 yarn start 运行

其中App.js 是主页
NewItem.js 是添加乘客信息的组件
AddCar,js 是申请临时加车的组件
**************************
该app仅用于学习React使用

此Demo练习了React的组件化，state，props，子组件与父组件之间的数据传递，生命周期等


2018/07/25 第一次更新：
1. 修改了一些变量的命名
2. 取消了申请加车时的第二个button，将变量更改为使用const变量储存并传递
3. 把申请人的地方做了一些优化

2018/07/25 第二次更新：
1. 添加了各组件跳转时先loading再跳转的功能
2. 在生命周期函数组件更新之前中，添加了新数据传入时列表可以根据发车时间排序的功能
