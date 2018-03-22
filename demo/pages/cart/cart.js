// pages/cart/cart.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id:"1","shopname": "商城abc", "isChecked": false, "products": [
        { "isChecked": false, "name": "盆栽花四季播种单品单束", "spec": "粉，鲜花种子", "unit": "30粒/包", "price": "$18.00", "num": "3", id: "01" },
        { "isChecked": false, "name": "盆栽花四季播种单品单束", "spec": "粉，鲜花种子", "unit": "30粒/包", "price": "$18.00", "num": "3", id: "02" },
        { "isChecked": false, "name": "盆栽花四季播种单品单束", "spec": "粉，鲜花种子", "unit": "30粒/包", "price": "18.00", "num": "3", id: "03" }
      ]
    }],
    isChecked: false,
    checkedCarts: [],
    isItemChecked: false
  },
  onManage() {
    this.setData({
      isChecked: !this.data.isChecked
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var checkedCarts = [];
    for (var i = 0; i < this.data.list.length; i++) {
      var shopItem = this.data.list[i]
      if (!(shopItem.products && shopItem.products.length > 0)) {
        continue
      }
      var shop_id = shopItem.id;
      var carts = [];
      var flag = true;
      let sum = 0;
      for (var j = 0; j < shopItem.products.length; j++) {
        var cartItem = shopItem.products[j];
        carts.push(cartItem);
        if (cartItem.isChecked) {
          sum += cartItem.price * cartItem.num;
          //存储已选数组
          checkedCarts.push(cartItem.id)
        } else {
          flag = false
        }
      }
    }    
  },
  toggleCheckedCarts(e) {
    // var isItemChecked = e.target.dataset.item.isChecked
    
    console.log(e.target.dataset.item.isChecked)
    this.setData({
      isItemChecked: !this.data.isItemChecked
    })
    // console.log(!e.target.dataset.isChecked)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      
    })
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