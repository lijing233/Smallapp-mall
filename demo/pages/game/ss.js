//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    grid: [
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', '']
    ]
  },
  touchStartX: 0,
  touchStartY: 0,
  touchEndX: 0,
  touchEndY: 0,
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    // 随机添加两个数
    this.providNumber()
    this.providNumber()
    this.providNumber()
  },
  getUserInfo: function (e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  providNumber: function () {
    // console.log('aa')
    const base = [2, 4];
    var a = parseInt(Math.random() * 4);
    var b = parseInt(Math.random() * 4);
    var ind = Math.round(Math.random());
    // console.log(this.data.grid)
    if (this.data.grid[a][b] === '') {
      this.data.grid[a][b] = base[ind];
      this.setData({ grid: this.data.grid })
    } else {
      this.providNumber();
    }
    // console.log(this.data.grid)
  },
  startfun: function (e) {
    // console.log(e)
    var touchData = e.touches[0];
    this.touchStartX = touchData.clientX;
    this.touchStartY = touchData.clientY;
  },
  movefun: function (e) {
    var touchData = e.touches[0];
    this.touchEndX = touchData.clientX;
    this.touchEndY = touchData.clientY;
  },
  endfun: function (e) {
    var xMove = this.touchEndX - this.touchStartX;
    var absXMove = Math.abs(xMove);
    var yMove = this.touchEndY - this.touchStartY
    var absYMove = Math.abs(yMove);
    console.log(xMove)
    console.log(yMove)
    var direction = absXMove > absYMove ? (xMove > 0 ? 'right' : 'left') : (yMove > 0 ? 'down' : 'up');
    console.log(direction)
    this.moveNumber(direction);
  },
  moveNumber: function (dir) {
    var templist = this.turnlist(dir);
    // console.log('11111', templist);
    templist = this.combinelist(templist);
    // console.log('22222', templist);
    templist = this.turnbacklist(dir, templist);
    // console.log('33333', templist);
    this.setData({ grid: templist });


  },
  turnlist: function (dir) {
    var list = [[], [], [], []];
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        switch (dir) {
          case 'up':
            list[i].push(this.data.grid[j][3 - i]);
            break;
          case 'right':
            list[i].push(this.data.grid[3 - i][3 - j]);
            break;
          case 'down':
            list[i].push(this.data.grid[3 - j][3 - i]);
            break;
          case 'left':
            list[i].push(this.data.grid[i][j]);
            break;
        }
      }
    }
    // console.log('旋转后', list);
    return list;
  },
  combinelist: function (list) {
    console.log(list)
    var templist = [];
    for (var i = 0; i < 4; i++) {
      console.log(templist)
      console.log(this.movelist(list[i]));
      templist.push(this.movelist(list[i]));
      console.log(templist);
    }
    console.log('cob', templist)
    console.log(templist)
    // for(var m=0; m<4; m++){
    //   for(var n =0; n<3; n++) {
    //     if(templist[m][n] === templist[m][n+1] && templist[m][n] !== '') {
    //       templist[m][n] = templist[m][n] * 2;
    //       templist[m][n + 1] = '';
    //       break;
    //     }
    //   }
    // }
    // console.log('cob2', templist)

    return templist;
  },
  movelist: function (list) {
    // console.log(list);
    var newlist = ['', '', '', ''],
      num = 0;
    for (var i = 0; i < list.length; i++) {
      if (list[i] !== '') {
        newlist[num] = list[i];
        num++;
      }
    }
    // newlist = newlist.fill('', num);
    // console.log(newlist);
    return newlist;
  },
  turnbacklist(dir, list) {
    // console.log('ssssssssss', list)
    var resultlist = [[], [], [], []];
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        switch (dir) {
          case 'up':
            list[i].push(this.data.grid[i][3 - j]);
            break;
          case 'right':
            list[i].push(this.data.grid[3 - i][3 - j]);
            break;
          case 'down':
            list[i].push(this.data.grid[3 - j][3 - i]);
            break;
          case 'left':
            list[i].push(this.data.grid[i][j]);
            break;
        }
      }
    }
    // console.log('旋转后', resultlist);
    return resultlist;
  }
})
