var app = getApp();

Page({
    data: {
        array: ['美国', '中国', '巴西', '日本'],
        objectArray: [
            {
                id: 0,
                name: '美国'
            },
            {
                id: 1,
                name: '中国'
            },
            {
                id: 2,
                name: '巴西'
            },
            {
                id: 3,
                name: '日本'
            }
        ],
        index: 0,
        date: '2016-09-01',
        time: '12:01',
        buttonState: {
            label: "报名",
            loading: false,
        }
    },
    bindPickerChange: function () {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.setData({
        index: e.detail.value
        });
    },
    bindDateChange: function(e) {
        this.setData({
        date: e.detail.value
        })
    },
    bindTimeChange: function(e) {
        this.setData({
        time: e.detail.value
        })
    },
    bindPrompt: function(e) {
        if(!this.data.buttonState.loading) {
            this.setData({
                buttonState: {
                    label: "报名",
                    loading: true,
                },
            });
        }

        console.log("upload enroll info");
        console.log("update user status");

        // success get data
        // update user status
        // navigateTo

        // put enroll info in url & send to result page
        wx.redirectTo({
            url: "/pages/course/result/result",
            success: function(res){
                // success
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        })
        

    },
    onLoad: function() {
        // get recent course information from server.
    }
})