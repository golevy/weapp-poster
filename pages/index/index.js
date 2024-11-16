import { mockTripData } from '../../utils/mocks';

Component({
  data: {
    ...mockTripData,
  },
  lifetimes: {
    attached() {
      wx.loadFontFace({
        family: 'Monaco',
        source: 'url("https://fonts.cdnfonts.com/s/14106/Monaco.woff")',
        scopes: ['webview', 'native'],
        success: (res) => {
          console.log('success', res.status);
          this.render();
        },
        fail: function (res) {
          console.error(res);
        },
        complete(res) {
          console.log('🚀 ~ loadFontFace ~ complete ~ res:', res);
        },
      });
    },
  },
  methods: {
    handleDownloadPoster() {
      wx.loadFontFace({
        family: 'Monaco',
        source: 'url("https://fonts.cdnfonts.com/s/14106/Monaco.woff")',
        scopes: ['webview', 'native'],
        success: (res) => {
          console.log('success', res.status);
          this.render();
        },
        fail: function (res) {
          console.error(res);
        },
        complete(res) {
          console.log('111', res);
        },
      });

      this.createSelectorQuery()
        .select('#view')
        .node()
        .exec((res) => {
          const node = res[0].node;
          console.log('🚀 ~ .exec ~ node:', node);

          node.takeSnapshot({
            type: 'arraybuffer',
            format: 'png',
            success: (res) => {
              console.log('@@ res:', res);
              const f = `${wx.env.USER_DATA_PATH}/share.png`;
              const fs = wx.getFileSystemManager();
              console.log('🚀 ~ .exec ~ f:', f);
              fs.writeFileSync(f, res.data, 'binary');
              wx.showToast({
                title: '保存成功',
              });

              this.setData({
                img: f,
              });

              // setTimeout(() => {
              wx.saveImageToPhotosAlbum({
                filePath: f,
                complete(res) {
                  console.log('🚀 ~ complete ~ res:', res);
                },
              });
              // }, 1000)
              wx.getImageInfo({
                src: f,
                success(res) {
                  console.log('🚀 ~ success ~ res:', res);
                },
              });
            },
            fail(res) {
              console.log('🚀 ~ fail ~ res:', res);
            },
          });
        });
    },
  },
});
