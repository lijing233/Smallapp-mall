// pages/cart/cart.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id:"1","shopname": "商城abc", "isChecked": true, "products": [
        { "isChecked": true, "name": "盆栽花四季播种单品单束", "spec": "粉，鲜花种子", "unit": "30粒/包", "price": "$18.00", "num": "3", id: "01" },
        { "isChecked": true, "name": "盆栽花四季播种单品单束", "spec": "粉，鲜花种子", "unit": "30粒/包", "price": "$18.00", "num": "3", id: "02" },
        { "isChecked": true, "name": "盆栽花四季播种单品单束", "spec": "粉，鲜花种子", "unit": "30粒/包", "price": "18.00", "num": "3", id: "03" }
      ]
    }],
    isChecked: true,//商城checkbox
    checkedCarts: []
  },
  onManage() {
    this.setData({
      isChecked: !this.data.isChecked,
      list: this.data.list
    })    
    // console.log(this.data.isChecked)
    let carts = this.data.list[0].products;
    let _this = this;
    carts.forEach(function (t) {
      t.isChecked = _this.data.isChecked;
    })
    //将改完的状态赋值给data中的list
    this.data.list[0].products = carts;
    this.data.list[0].isChecked = this.data.isChecked;
    //重新赋值list
    this.setData({
      isChecked: this.data.isChecked,
      list: this.data.list
    })
  },
  toggleCheckedCarts(e) {
    let carts = this.data.list[0].products;
    let eId = (e.target.dataset.id).toString();
    let cart = {};
    for (let i = 0, length = carts.length; i < length; i++) {
      let item = carts[i];
      if (item.id === eId) {
        cart = item
        cart.isChecked = !cart.isChecked;
        break
      }      
    }
    this.setData({
      list: this.data.list
    })
    //实现点击单个商品切换全选按钮
    let isCheckeds = [];
    for (let j = 0, length = this.data.list[0].products.length; j < length; j++) {
      let item = this.data.list[0].products[j];
      isCheckeds.push(item.isChecked);  
    }
    if (isCheckeds.indexOf(false)>-1) {
      this.setData({
        isChecked: false
      })
    }else {
      this.setData({
        isChecked: true
      })    
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  //  console.log(this.data.list,this.data.isChecked)
    this.calCart = this.selectComponent("#calCart")
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