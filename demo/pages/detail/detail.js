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
    lightValue: '',
    cartList: app.globalData.cartList
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

  // 添加到购物车
  addCart() {
    
    var shopid = this.data.item.shopid,
      itemid = this.data.item.id

    var cartList = app.globalData.cartList;
    console.log(cartList)
    var hasshop = false;
    for(var i=0; i<cartList.length; i++){
      if(cartList[i].shopid === shopid){
        hasshop = true;
        var flag = true;
        for (var j = 0; j < cartList[i].products.length; j++){
          if (cartList[i].products[j].id == itemid){
            cartList[i].products[j].num ++;
            flag = false;
            break;
          }
        }
        if(flag){
          var goods = {
            "isChecked": true,
            "name": this.data.item.name,
            "spec": this.data.item.spec,
            "unit": "30粒/包",
            "price": this.data.item.price,
            "num": 1,
            id: this.data.item.id
          }
          cartList[i].products.push(goods)
        }
        break;
      }
    }

    if(!hasshop){
      var goods = {
        shopid: shopid,
        isChecked: true,
        shopname: this.data.item.shopname,
        products: [{
          "isChecked": true,
          "name": this.data.item.name,
          "spec": this.data.item.spec,
          "unit": "30粒/包",
          "price": this.data.item.price,
          "num": 1,
          id: this.data.item.id
        }]
      }
      app.globalData.cartList.push(goods);
    }
    console.log(app.globalData.cartList)
  }
  
})