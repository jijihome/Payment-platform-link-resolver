// paymentPlatforms.js
const paymentPlatforms = {
    "微信": {
        "url": "weixin://scanqrcode",
        "patterns": ["wxp://", "weixin.qq.com"]
    },
    "QQ钱包": {
        "url": "mqqapi://qrcode/scan_qrcode?version=1&src_type=app",
        "patterns": ["qianbao.qq.com"]
    },
    "支付宝": {
        "url": "alipayqr://platformapi/startapp?saId=10000007",
        "patterns": ["alipay.com", "95516.com"]
    }
};

module.exports = paymentPlatforms;