import React, { Component } from 'react'

const startPlace = [
  '成均桥',
  '枣园',
  '北大门'
]

const date = new Date()
const startTimeList = [
  // "17:20",  //测试数据
  // '17:21',   //测试数据
  // '17:19',    //测试数据
  date.getHours() +':'+ date.getMinutes(),
  date.getHours() + 1 + ':00',
  date.getHours() + 2 + ':00',
  date.getHours() + 3 + ':00',
  date.getHours() + 4 + ':00',
]

class AddCar extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startPlace: startPlace[0],
      endPlace: '',
      startTime: startTimeList[0],
      allTime: '∞',
      creator: '',
    }
  }

  setCreator = (e) => {
    let value = e.target.value
    this.setState({
      creator: value,
    })
  }

  setStartTime = (e) => {
    let value = e.target.value
    this.setState({
      startTime: value,
    })
  }
  setStart = (e) => {
    this.setState({
      startPlace: e.target.value
    })
  }
  setEndPlace = (e) => {
    this.setState({
      endPlace: e.target.value
    })
  }
  // TODO: 能否把所有的set合并到一个函数上？


  handleSubmit = (event) => {
    event.preventDefault()
    const {onAdd} = this.props

    const {creator, startPlace, startTime, allTime, endPlace} = this.state
    //  如果event中没有start，就从state中拿start

    const newDetail = {
      id: new Date().getTime(),
      endTime: '∞：∞',
      startPlace: startPlace,
      creator: creator,
      endPlace: endPlace,
      startTime: startTime,
      allTime: allTime,
      carNumber: '临时',
    }
    console.log(newDetail)
    onAdd(newDetail)

    // TODO: 为什么使用 setState后出现延迟？

    // 因为： 异步！！！
    // this.setState({
    //   newDetail:{
    //     id:new Date().getTime(),
    //     endTime:'∞：∞',
    //     startPlace:this.state.startPlace,
    //     endPlace:this.state.endPlace,
    //     startTime:this.state.startTime,
    //     allTime:'申请人：'+this.state.allTime,
    //     carNumber:'临时',
    //   },
    // })
  }

  render () {
    const date = new Date()
    const detailStyle = {
      background: 'linear-gradient(52deg,#F0FFFF,#F0F8FF)',
      borderRadius: '15px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px',
      marginTop: '16px',
      border: '2px solid #2F6B40'
    }
    const {creator} = this.state
    return (
      <div style={detailStyle}>
        <div style={{border: '1px solid #2F6B40', borderRadius: '15px',}}>
          <h1 style={{textAlign: 'center'}}>请确认需要临时加车信息</h1>
        </div>
        <div>
          <h3>申请车次信息：</h3>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <p>
              <span>车辆起止时间：</span>
              <select name="endPlace" onChange={this.setStartTime} style={{width: '70%'}}>
                {startTimeList.length > 0 && startTimeList.map((item, index) =>
                  <option key={index} value={item}>{item}</option>
                )}
              </select>
            </p>
            <p>
              <span>车辆起止地点：</span>
              <select name="car" onChange={this.setStart} style={{width: '35%'}}>
                {startPlace.length > 0 && startPlace.map((item, index) =>
                  <option key={index} value={item}>{item}</option>
                )}
              </select>
              -<input type="text" value={this.state.endPlace} onChange={this.setEndPlace}
              style={{width: '35%'}} /></p>
            <h3>申请加车乘客信息：</h3>
            <hr />
            <p><span>姓名：</span>

              <input type='text'
                style={{width: '70%', height: '30px', border: '0px'}}
                value={creator}
                onChange={this.setCreator} />
            </p>
            <p><span>学工号：</span><input type='text'
              style={{width: '70%', height: '30px', border: '0px'}} /></p>
            <p><span>联系方式：</span><input type='text'
              style={{width: '70%', height: '30px', border: '0px'}} /></p>

            <button type='submit'
              disabled={!this.state.creator}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '15px',
                backgroundColor: '#457DDD',
                color: '#fff',
                fontSize: '10px'
              }}
              value='submit'> 提交
            </button>

          </form>

        </div>
      </div>
    )
  }
}

export default AddCar