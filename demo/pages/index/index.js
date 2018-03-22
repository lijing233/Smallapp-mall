//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperOption: {
      indicatorDots: true,
      autoplay: true,
      circular: true,
      duration: 500,
      interval: 3000
    },
    imgList: [
      'http://yanxuan.nosdn.127.net/f6b72d4923c015989e6c01742c66c95d.jpg?quality=95&thumbnail=1920x420&imageView',
      'http://yanxuan.nosdn.127.net/3b188c8485ab9d88c081a510e623a709.jpg?quality=95&thumbnail=1920x420&imageView',
      'http://yanxuan.nosdn.127.net/005e4f45a18c48766933979a1393eeda.jpg?quality=95&thumbnail=1920x420&imageView',
      'http://yanxuan.nosdn.127.net/9460dadb0824473e45cf45e6df2d1eae.jpg?quality=95&thumbnail=1920x420&imageView'
    ],
    goodsImgList: [
      'http://i8.mifile.cn/v1/a1/77570ffe-db66-7a1a-4fb4-63683591794e!360x360.webp',
      'http://i8.mifile.cn/v1/a1/b9833bde-d7e9-ac73-14b2-0b9a27aa75bc!360x360.webp',
      'http://i8.mifile.cn/v1/a1/c46f28b5-636e-ffcc-c0cb-2347bd2c4890!360x360.webp',
      'http://i8.mifile.cn/v1/a1/656a5863-6af1-6302-4e36-a33bd49e45cb!360x360.webp',
      'http://i8.mifile.cn/v1/a1/81aed22a-ec72-e3ac-1016-f03dbd595e41!360x360.webp',
      'http://i8.mifile.cn/v1/a1/af223246-90ca-79a1-1a0a-bb7ef93a082e!360x360.webp'
    ],
    imgsrc: 'http://i8.mifile.cn/v1/a1/b9833bde-d7e9-ac73-14b2-0b9a27aa75bc!360x360.webp',
    goodsList: []
  },
  //事件处理函数
  onLoad: function () {
    this.reqGoodList()
    wx.showLoading({
    })
  },
  // 请求商品列表
  reqGoodList() {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ab1c898099ac320aa6ba70e/wechat/lijing/goods',
      success: (res) => {
        wx.hideLoading()
        console.log(res)
        this.setData({
          goodsList: res.data.data.goodsList
        })
      }
    })
  },
  // 跳转详情页
  toDetail(e) {
    var item = e.currentTarget.dataset.item;
    item.img = this.data.goodsImgList[item.img];
    app.globalData.detailItem = item;
    wx.navigateTo({
      url: '../../pages/detail/detail'
    })
  }

})
