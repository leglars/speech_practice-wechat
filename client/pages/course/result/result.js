var app = getApp();

Page({
    data: {
        promptButtonState: {
            label: "付款",
            loading: false,
        },
        result: {
            title: "报名成功",
            content: "您已成功报名，学道吉4月口语天天练 - 托福 1，2 题专项。我们将为您预留此名额2天，请于2天内完成付款。"
        },
        returnPath: "/pages/index/index",
        promptPath: "/pages/payment/result/result",
    },

    bindPrompt: function () {

        wx.redirectTo({
            url: this.data.returnPath,
            success: function(res){
                // success
                wx.redirectTo({
                    url: "/pages/course/intro/intro"
                })
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        })
    },
    bindReturn: function () {
        const delta = getCurrentPages().length - 1;
        wx.navigateBack({
            delta: delt
        })
    },

    onLoad: function() {
        // get enroll info from enroll page and set data
        console.log("get enroll result.")
        // set returnPath & promptPath
        // set buttonState
        // construct the content with enroll page data
    }
});