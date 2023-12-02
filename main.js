// 主 JavaScript 文件
const platforms = require("./paymentPlatforms.js");

function matchPlatform(inputText) {
  let result = {
    matched: false,
    platform: "", // 添加一个用于存储匹配到的平台名称的属性
    text: "未匹配到已知支付平台"
  };

  for (let platform in platforms) {
    let { patterns } = platforms[platform];
    for (let pattern of patterns) {
      if (inputText.includes(pattern)) {
        result.matched = true;
        result.platform = platform; // 设置匹配到的平台名称
        result.text = platforms[platform].url;
        return result;
      }
    }
  }

  return result;
}




// 测试函数
function test() {
//  let inputText = "https://qr.alipay.com/fkx01966tivsnuduip4rgca";
  let inputText = $context.query.文本; // 从$context.query.文本获取输入
  let result = matchPlatform(inputText);
  console.info(result);
  $intents.finish(result); // 使用$intents.finish返回JSON结果
}

test(); // 运行测试函数
