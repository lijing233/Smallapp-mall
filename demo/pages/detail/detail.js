// pages/detail/detail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {},
    likeFlag: false,
    list: [{
      id: "1", "shopname": "商城abc", "isChecked": false, "products": [
        { "isChecked": false, "name": "盆栽花四季播种单品单束", "spec": "粉，鲜花种子", "unit": "30粒/包", "price": "$18.00", "num": "3", id: "01" },
        { "isChecked": false, "name": "盆栽花四季播种单品单束", "spec": "粉，鲜花种子", "unit": "30粒/包", "price": "$18.00", "num": "3", id: "02" },
        { "isChecked": false, "name": "盆栽花四季播种单品单束", "spec": "粉，鲜花种子", "unit": "30粒/包", "price": "18.00", "num": "3", id: "03" }
      ]
    }],
    address:'',
    lightValue: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      item: app.globalData.detailItem
    })

    var list = wx.getStorageSync('likelist');
    for (var i = 0; i < list.length; i++) {
      if (list[i].name == this.data.item.name) {
        this.setData({
          likeFlag: true
        })
        break;
      }
    }

    wx.setNavigationBarTitle({
      title: this.data.item.name
    })

    // 获取亮度
    wx.getScreenBrightness({
      success: (res) => {
        console.log(res)
        this.setData({
          lightValue: parseInt(res.value*100)
        })
      }
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
    console.log(this.data.item.name)
    
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
  changeLike() {
    this.setData({
      likeFlag: !this.data.likeFlag
    })
    var list = wx.getStorageSync('likelist');
    console.log(list)
    if(this.data.likeFlag){
      var item = this.data.item;
      item.textStyle = "";
      item.txt = item.name;
      list.push(item);
    }else{
      for(var i=0; i<list.length; i++){
        if(list[i].name == this.data.item.name){
          list.splice(i,1);
          break;
        }
      }
    }
    wx.setStorageSync('likelist', list)
  },

  // 打开相册
  openpic(){
    wx.chooseImage({
      success: function(res) {
        console.log(res)
      },
    })
  },



  // 底部选择栏
  showaction() {
    wx.showActionSheet({
      itemList: ['ipone8 128G 黑色', 'ipone8 128G 白色', 'iponeX 128G 黑色'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
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
  showPhoneInfo(){
    wx.getSystemInfo({
      success: (res)=>{
        console.log(res)
      }
    })
  },
  // 二维码
  scancode(){
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  brightChange(e){
    console.log(e)
    wx.setScreenBrightness({
      value: e.detail.value/100
    })
  }
})