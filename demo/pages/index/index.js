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
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]
  },
  //事件处理函数
  onLoad: function () {

  },

})
