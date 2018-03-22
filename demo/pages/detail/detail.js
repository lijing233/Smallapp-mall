// pages/detail/detail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {},
    list: [{
      id: "1", "shopname": "商城abc", "isChecked": false, "products": [
        { "isChecked": false, "name": "盆栽花四季播种单品单束", "spec": "粉，鲜花种子", "unit": "30粒/包", "price": "$18.00", "num": "3", id: "01" },
        { "isChecked": false, "name": "盆栽花四季播种单品单束", "spec": "粉，鲜花种子", "unit": "30粒/包", "price": "$18.00", "num": "3", id: "02" },
        { "isChecked": false, "name": "盆栽花四季播种单品单束", "spec": "粉，鲜花种子", "unit": "30粒/包", "price": "18.00", "num": "3", id: "03" }
      ]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      item: app.globalData.detailItem
    })
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

  }
})