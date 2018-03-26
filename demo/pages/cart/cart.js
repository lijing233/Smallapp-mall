// pages/cart/cart.js
let app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    isChecked: true,//商城checkbox
    checkedCarts: [],
    number: 0,
    id: '',
    allSum: 0,
    isShow: false,
    isDelete: false
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
    if(!this.data.isChecked) {
      this.setData({
        allSum: 0
      })
    }else {
      this.originSum()     
    }
    //重新赋值list
    this.setData({
      isChecked: this.data.isChecked,
      list: this.data.list
    })
  },
  toggleCheckedCarts(e) {
    let carts = this.data.list[0].products;
    let eId = (e.target.dataset.id).toString();
    let ePrice = e.target.dataset.price;
    let eNum = e.target.dataset.num;
    let cart = {};
    let eItemSum = 0;
    for (let i = 0, length = carts.length; i < length; i++) {
      let item = carts[i];
      if (item.id === eId) {
        cart = item;
        cart.isChecked = !cart.isChecked;
        eItemSum = ePrice * eNum
        if (!cart.isChecked) {
          let changeSum = this.data.allSum - eItemSum
          this.setData({
            allSum: changeSum
          })
        }else {
          let changeSum = this.data.allSum + eItemSum
          this.setData({
            allSum: changeSum
          })
        }
        break
      }      
    }
    this.setData({
      list: this.data.list
    })
    //实现点击单个商品切换全选按钮
    this.allCheckedStatus()
  },
  allCheckedStatus() {
    let isCheckeds = [];
    for (let j = 0, length = this.data.list[0].products.length; j < length; j++) {
      let item = this.data.list[0].products[j];
      isCheckeds.push(item.isChecked);
    }
    if (isCheckeds.indexOf(false) > -1) {
      this.setData({
        isChecked: false
      })
    } else {
      this.setData({
        isChecked: true
      })
    }
  },
  //start组件粘贴过来的
  plusNumber(e) {
    this.commonFun(0, e)
  },
  minusNumber(e) {
    this.commonFun(1, e)
  },
  //end组件粘贴过来的
  commonFun(n, e) {
    let pn = parseInt(e.target.dataset.number);
    if (n == 0) {
      pn += 1
    } else {
      pn -= 1
      if (pn < 1 ) {
        pn = 1
        wx.showToast({
          title: '特贫证已颁发',
          duration: 3000
        })
      }
    }
    let itemId = e.target.dataset.id;
    let isChecked = e.target.dataset.isChecked;
    let carts = this.data.list[0].products;
    let _this = this;
    let allSum = 0;
    let itemSum = 0;
    if(n == 1) {
      carts.forEach(function (t) {
        if (t.id == itemId) {
          t.isChecked = true
          t.num = pn;
        }
        itemSum = t.num * t.price
        allSum = allSum - itemSum
      })
    }else if(n==0){
      carts.forEach(function (t) {
        if (t.id == itemId) {
          t.isChecked = true
          t.num = pn;
        }
        itemSum = t.num * t.price;
        allSum = allSum + itemSum
      })     
    }
    this.allCheckedStatus()
    //将改完的状态赋值给data中的list
    this.data.list[0].products = carts;
    //重新赋值list
    this.setData({
      list: this.data.list,
      number: pn,
      allSum: allSum > 0 ? allSum : allSum*(-1)
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.calCart = this.selectComponent("#calCart")
  },
  onLoad: function () {
    wx.showLoading({
    })
    wx.showNavigationBarLoading()
    this.reqCartList() 
  },
  reqCartList() {
    wx.request({
      url: "https://www.easy-mock.com/mock/5ab1c898099ac320aa6ba70e/wechat/lijing/carts",
      success: (res) => {
        wx.hideLoading()
        wx.hideNavigationBarLoading()
        this.setData({
          list: res.data.data.carts
        })
        this.originSum();
      }
    })
  },
  originSum() {
    let carts = this.data.list[0].products;
    let allSum = 0;
    let itemSum = 0;
    carts.forEach(function (t) {
      itemSum = t.num * t.price;
      allSum = allSum + itemSum
    })
    this.setData({
      allSum: allSum
    }) 
  },
  toggleDeleteItem() {
    this.setData({
      isDelete: !this.data.isDelete
    })
    if (this.data.isDelete) {
      this.onManage()
    }
  },
  cancelDelete() {
    this.setData({
      isDelete: false
    })
    this.onManage()
  },
  goToResult(e) {
    let type = e.target.dataset.type;
    this.goToResultApi(type)
  },
  goToResultApi(type) {
    let url;
    // if(type === '0') {
    //   url = " https://www.easy-mock.com/mock/5ab1c898099ac320aa6ba70e/wechat/lijing/delete"
    // }else {
    //   url = "https://www.easy-mock.com/mock/5ab1c898099ac320aa6ba70e/wechat/lijing/cal"
    // }
    //模拟删除
    if (type === '0') {
      let carts = this.data.list[0].products;
      let deleteItem = []
      carts.forEach(function (t) {
        if (t.isChecked) {
          console.log(t)
          carts.splice(t, 1)
        }
      })
      this.setData({
        list: [{
          "id": "1",
          "shopname": "商城abc",
          "isChecked": true,
          "products": carts
        }]
      })
    } else if(type === '1'){
      console.log(type)
      wx.showModal({
        title: '成功',
        content: "已结算",
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }

    // wx.request({
    //   url: url,
    //   success: (res) => {
    //     wx.hideLoading()
    //     wx.hideNavigationBarLoading()
    //     this.setData({
    //       list: res.data.data.carts
    //     })
    //   }
    // })
  }









})