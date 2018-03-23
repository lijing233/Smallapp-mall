// pages/testapi/testapi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  // 选择地理位置
  chooselocation() {
    wx.chooseLocation({
      success: (res) => {
        console.log(res)
        wx.showToast({ icon: 'success', title: '成功' })
        this.setData({
          address: res.name
        })
      }
    })
  },
  showPhoneInfo() {
    wx.getSystemInfo({
      success: (res) => {
        console.log(res)
      }
    })
  },
  // 二维码
  scancode() {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  brightChange(e) {
    console.log(e)
    wx.setScreenBrightness({
      value: e.detail.value / 100
    })
  },
  // 打开相册
  openpic() {
    wx.chooseImage({
      success: function (res) {
        console.log(res)
      },
    })
  },
})