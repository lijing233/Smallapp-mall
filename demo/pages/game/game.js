// pages/game/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grid: [
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', '']
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.providNumber()
    this.providNumber()
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

  // 生成随机数
  providNumber: function () {
    const base = [2, 4];
    var a = parseInt(Math.random() * 4);
    var b = parseInt(Math.random() * 4);
    var ind = Math.round(Math.random());
    if (this.data.grid[a][b] === '') {
      this.data.grid[a][b] = base[ind];
      this.setData({ grid: this.data.grid })
    } else {
      this.providNumber();
    }
  },

  // touch
  touchStartX: 0,
  touchStartY: 0,
  touchEndX: 0,
  touchEndY: 0,
  startfun(e) {
    var touchData = e.touches[0];
    this.touchStartX = touchData.clientX;
    this.touchStartY = touchData.clientY;
  },
  movefun(e) {
    var touchData = e.touches[0];
    this.touchEndX = touchData.clientX;
    this.touchEndY = touchData.clientY;
  },
  endfun(e) {
    var xMove = this.touchEndX - this.touchStartX;
    var absXMove = Math.abs(xMove);
    var yMove = this.touchEndY - this.touchStartY
    var absYMove = Math.abs(yMove);
    var direction = absXMove > absYMove ? (xMove > 0 ? 'right' : 'left') : (yMove > 0 ? 'down' : 'up');
    console.log(direction)
  }
})