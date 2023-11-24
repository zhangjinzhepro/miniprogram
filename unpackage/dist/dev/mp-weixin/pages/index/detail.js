"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_title2 = common_vendor.resolveComponent("uni-title");
  _easycom_uni_title2();
}
const _easycom_uni_title = () => "../../uni_modules/uni-title/components/uni-title/uni-title.js";
if (!Math) {
  _easycom_uni_title();
}
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const info = common_vendor.ref({});
    common_vendor.onMounted(() => {
      info.value = common_vendor.index.getStorageSync("indexdetail");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "h1",
          title: info.value.title,
          align: "center"
        }),
        b: common_vendor.p({
          type: "h6",
          title: info.value.time,
          align: "center"
        }),
        c: info.value.desc
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/Projects/myuniapp/我的小程序/pages/index/detail.vue"]]);
wx.createPage(MiniProgramPage);
