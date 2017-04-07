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
            url: this.data.promptPath,
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
    bindReturn: function () {
        const delta = getCurrentPages().length - 1;
        wx.navigateBack({
            delta: delta
        })
    },

    onReady: function() {
        // set returnPath & promptPath
        // set buttonState
    },
    onLoad: function() {

    }
});