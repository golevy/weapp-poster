Component({
  options: {
    multipleSlots: true, // Enable multiple slots support in component options
  },
  /**
   * Component properties list
   */
  properties: {
    extClass: {
      type: String,
      value: '',
    },
    title: {
      type: String,
      value: '',
    },
    background: {
      type: String,
      value: '',
    },
    color: {
      type: String,
      value: '',
    },
    back: {
      type: Boolean,
      value: true,
    },
    loading: {
      type: Boolean,
      value: false,
    },
    homeButton: {
      type: Boolean,
      value: false,
    },
    animated: {
      // Opacity animation effect when showing/hiding
      type: Boolean,
      value: true,
    },
    show: {
      // Show/hide navigation. When hidden, navigation-bar height placeholder remains
      type: Boolean,
      value: true,
      observer: '_showChange',
    },
    // Page depth to return when back is true
    delta: {
      type: Number,
      value: 1,
    },
  },
  /**
   * Component's initial data
   */
  data: {
    displayStyle: '',
  },
  lifetimes: {
    attached() {
      const rect = wx.getMenuButtonBoundingClientRect();
      wx.getSystemInfo({
        success: (res) => {
          const isAndroid = res.platform === 'android';
          const isDevtools = res.platform === 'devtools';
          this.setData({
            ios: !isAndroid,
            innerPaddingRight: `padding-right: ${
              res.windowWidth - rect.left
            }px`,
            leftWidth: `width: ${res.windowWidth - rect.left}px`,
            safeAreaTop:
              isDevtools || isAndroid
                ? `height: calc(var(--height) + ${res.safeArea.top}px); padding-top: ${res.safeArea.top}px`
                : ``,
          });
        },
      });
    },
  },
  /**
   * Component methods list
   */
  methods: {
    _showChange(show) {
      const animated = this.data.animated;
      let displayStyle = '';
      if (animated) {
        displayStyle = `opacity: ${show ? '1' : '0'};transition:opacity 0.5s;`;
      } else {
        displayStyle = `display: ${show ? '' : 'none'}`;
      }
      this.setData({
        displayStyle,
      });
    },
    back() {
      const data = this.data;
      if (data.delta) {
        wx.navigateBack({
          delta: data.delta,
        });
      }
      this.triggerEvent('back', { delta: data.delta }, {});
    },
  },
});
