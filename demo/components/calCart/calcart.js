// components/calCart/calcart.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemId: {
        type: String,
        value: ''
      },
      num: {
        type: Number,
        value: 0
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    number: 0,
    itemId: ''
  },
  /**
   * 组件的方法列表
   */
  ready() {
    this.setData({
      number: this.properties.num,
      itemId: this.properties.itemId
    })
  },
  methods: {
    plusNumber(e) {
      console.log(this.data.number++)
      let pn = this.data.number++
      this.setData({
        number: pn,
        itemId: this.properties.itemId
      })
    },    
    minusNumber(e) {
      console.log(this.data.number--)
      let mn = this.data.number--
      if(mn<0) {
        mn = 0
      }
      this.setData({
        number: mn,
        itemId: this.properties.itemId
      })
      wx.setStorageSync('info', this.data.number+'-'+this.data.itemId)
    }
  }
})
