// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null,
    bol:true
  },
  getUserInfo(e){
    this.setData({
      userInfo:e.detail.userInfo
    })
  },
  topHandler:function(){
    wx.switchTab({
      url: '/pages/contact/contact',
    })
  },

  changeName: function(name){
    console.log(name);
    this.setData({
      bol: name
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    if(wx.getStorageSync('key')===0) return
    console.log(wx.getStorageSync('key'));
    this.setData({
      bol:wx.getStorageSync('key')
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