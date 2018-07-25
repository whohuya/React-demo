import React, { Component } from 'react'
import logo from './logo.svg'
import lynuLogo from './image/logo.png'
import NewItem from './NewItem'
import AddCar from './AddCar'
import './App.css'

const titleStyle = {
  textAlign: 'center',
  marginTop: '48px',
  color: '#2F6B40',
  fontSize: '32px',
  fontWeight: '900'
}
const headerTitle = {
  borderBottom: '4px solid #2F6B40',
  height: '100%',
  padding: '32px',
  display: 'flex',
  justifyContent: 'space-around',
  background: 'linear-gradient(52deg,#F0FFFF,#F0F8FF)'
}
const busTimeItem = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  height: '150',
  background: 'linear-gradient(52deg,#F0FFFF,#F0F8FF)',
  opacity: 0.8,
  marginTop: '16px',
  borderRadius: '15px',
  width: '100%',
  alignItems: 'space-around',
  border: '2px solid #2F6B40'
}
const trafficInformation = {
  margin: '16px',

}

class App extends Component {
  state = {
    carList: [
      {
        id: '001',
        startPlace: '成均桥',
        endPlace: '高铁站',
        startTime: '12:00',
        endTime: '12:50',
        allTime: '50分钟',
        carNumber: '9527y'
      },
      {
        id: '002',
        startPlace: '成均桥',
        endPlace: '洛阳站',
        startTime: '12:10',
        endTime: '14:00',
        allTime: '1时50分',
        carNumber: '33M33'
      },
      {
        id: '003',
        startPlace: '枣园',
        endPlace: '高铁站',
        startTime: '12:00',
        endTime: '12:50',
        allTime: '50分钟',
        carNumber: '1111a'
      },
      {
        id: '004',
        startPlace: '枣园',
        endPlace: '洛阳站',
        startTime: '12:10',
        endTime: '14:00',
        allTime: '1时50分',
        carNumber: '2222b'
      },
      {
        id: '005',
        startPlace: '成均桥',
        endPlace: '高铁站',
        startTime: '17:00',
        endTime: '17:50',
        allTime: '50分钟',
        carNumber: '3333c'
      },
      {
        id: '006',
        startPlace: '成均桥',
        endPlace: '洛阳站',
        startTime: '17:30',
        endTime: '19:20',
        allTime: '1时50分',
        carNumber: '9444c'
      },
      {
        id: '007',
        startPlace: '枣园',
        endPlace: '高铁站',
        startTime: '17:10',
        endTime: '18:00',
        allTime: '50分钟',
        carNumber: 'dc132'
      },
      {
        id: '008',
        startPlace: '枣园',
        endPlace: '洛阳站',
        startTime: '17:30',
        endTime: '19:30',
        allTime: '2小时',
        carNumber: 'dfs34'
      },
      {
        id: '009',
        startPlace: '成均桥',
        endPlace: '高铁站',
        startTime: '19:00',
        endTime: '19:50',
        allTime: '50分钟',
        carNumber: 'sd22y'
      },
      {
        id: '010',
        startPlace: '成均桥',
        endPlace: '洛阳站',
        startTime: '19:20',
        endTime: '21:10',
        allTime: '1时50分',
        carNumber: '1254s'
      },
    ],
    newDetail: '',
    show: false,
    apply: false,
  }
  onClick = (newDetail) => {
    this.setState({
      show: true,
      apply: false,
      newDetail: newDetail
    })
  }

  onAdd = (newDetail) => {
    let newCarList = this.state.carList
    newCarList.push(newDetail)
    this.setState({carList: newCarList})
    // {
    //   id: '010',
    //     startPlace: '成均桥',
    //   endPlace: '洛阳站',
    //   startTime: '19:20',
    //   endTime: '21:10',
    //   allTime:'1时50分',
    //   carNumber: '1254s'
    // }
    // newDetail:object

    //把一个新的车次添加到carList里

    // this.setState({
    //
    //   sho: false,
    //   apply: true,
    //   newDetail: newDetail
    // })
  }

  onOpen = () => {
    this.setState({
      show: false,
      apply: true,
    })
  }

  changeHandler () {
    this.setState({})
  }

  render () {

    return (
      <div className="all"
        style={{
          background: 'linear-gradient(180deg,#F0FFFF,#fff)',
          width: '100%',
          height: '100%',
          minWidth: '1030px'
        }}>
        <div id='head' style={headerTitle}>
          <div style={{margin: '0 auto'}}><img src={lynuLogo}
            style={{width: '100%', height: '100%'}} /></div>
          <div style={{margin: '0 auto'}}><p style={titleStyle}>洛阳师范学院班车时刻表</p></div>
        </div>
        <button onClick={() => {this.onOpen()}} style={{
          width: '100%',
          height: '45px',
          borderRadius: '15px',
          background: '#457DDD',
          fontSize: '32px',
          color: '#fff'
        }}>申请临时加车
        </button>
        <div id='main'
          style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
          <div id='list' style={{display: 'flex', flexDirection: 'column', flexBasis: '40%',}}>
            {this.state.carList.length > 0 && this.state.carList.map(item =>
              <div key={item.id} style={busTimeItem}>
                <div id='start' style={trafficInformation}>
                  <p style={{fontWeight: 900, fontSize: '20px'}}>{item.startTime}</p>
                  <p style={{textAlign: 'center'}}><span
                    style={{marginRight: '4px', color: '#3399FF'}}>始</span>{item.startPlace}</p>
                </div>
                <div id='mess' style={trafficInformation}>
                  <p style={{fontWeight: 900, textAlign: 'center'}}>{item.carNumber}</p>
                  <hr />
                  {item.creator ?  <p> <span style={{color:'#FE1A00'}}>申请人：</span>{item.creator}</p>:<p style={{textAlign:'center'}}>{item.allTime}</p>}
                </div>
                <div id='end' style={trafficInformation}>
                  <p style={{fontWeight: 900, fontSize: '20px'}}>{item.endTime}</p>
                  <p style={{textAlign: 'center'}}><span
                    style={{marginRight: '4px', color: '#F09D3D'}}>终</span>{item.endPlace}</p>
                </div>
                <div id='btn' style={trafficInformation}>
                  <button
                    style={{
                      width: '100%',
                      height: '100px',
                      borderRadius: '15px',
                      backgroundColor: '#F09D3D',
                      color: '#fff',
                      fontSize: '10px'
                    }}
                    onClick={() => {this.onClick(item)}}>乘坐此次车
                  </button>
                  <br />
                </div>
              </div>
            )}
          </div>
          <div id='rightNews' style={{flexBasis: '40%', padding: '16px'}}>
            {this.state.show && <NewItem newDetail={this.state.newDetail} />}
            {this.state.apply && <AddCar onAdd={this.onAdd} />}
          </div>
        </div>
      </div>
    )
  }
}

export default App
