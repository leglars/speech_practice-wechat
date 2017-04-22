//index.js
//获取应用实例
var app = getApp();
var config = app.config;

Page({
  data: {
    userInfo: {},
    
    labels: {
      statusLabel: ["游客", "已注册", "学员"],
      infoLabel: ["完成练习", "本期剩余", "学习积分"],
      labelMapToKey: ["completed", "available", "point"],
    },
    userdata: {
    },
    practice: {
      course: 24,
      practiceStatus: 10,
      grade: 78,
    },
    introduction: {
      title: "口语天天练",
      content: "口语天天练是由合肥学道吉教育科技有限公司开发。为全国的托福雅思考生提高品质1对1的口语练习服务。"
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
    //调用应用实例的方法获取全局数据
    var that = this;
    // userInfo {
      // avatarUrl: url,
      // city,country,nickName,province: string
      // gender: boolean
      // language: "zh_CN"
    // }
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      });
    })
  },

  onShow: function() {
    var that = this;

    // check user status
    wx.request({
      url: "https://" + config.host + "/get-user-data",
      data: {
        userId: this.data.userInfo.nickName
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      
      success: function(res){
        

      },
      fail: function() {
        that.setData({
          userdata: {
            status: 2,
            data: {
              completed: 0,
              available: 0,
              point: 0
            },
          },
        });
      },
      complete: function() {
        // complete
      }
    })
  },
})
