App({
  // Called when the Mini Program is launched
  onLaunch() {
    // Perform WeChat login authentication
    wx.login({
      success: (res) => {
        // Send res.code to backend server to exchange for:
        // - openId: unique identifier for the user in this Mini Program
        // - sessionKey: used for data decryption
        // - unionId: unique identifier for the user across all Mini Programs (if available)
      },
    });
  },
  // Global data storage accessible throughout the Mini Program
  globalData: {
    userInfo: null, // Stores user information after login
  },
});
