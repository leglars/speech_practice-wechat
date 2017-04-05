//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    status: {
      value: 0,
      label: ["游客", "", ""],
    },
    userdata: {
      label: ["完成练习", "本期剩余", "学习积分"],
      labelMapToKey: ["completed", "available", "point"],
      data: {
        completed: 0,
        available: 0,
        point: 0
      }
    }
  },
  changeWord: function(e) {
      this.setData({
        motto: "hahaha"
      })
  },

  //Edit avatar
  bindAvatarTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
