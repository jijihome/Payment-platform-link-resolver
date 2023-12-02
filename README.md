# 支付平台链接解析器

## 项目介绍
这个项目是一个 JSBox 应用，旨在帮助用户快速识别不同支付平台的链接。它能够解析输入的文本，检测其中是否包含特定的支付平台链接，并返回相应的结果。

## 安装
1. 确保你的设备上已安装 JSBox。
2. 下载本项目的文件到你的设备。
3. 打开 JSBox，导入项目文件。

## 如何使用
1. 启动 JSBox 应用。
2. 打开支付平台链接解析器。
3. 输入或粘贴你想要解析的文本。
4. 应用将自动识别并显示结果。

## 代码示例
以下是项目中一个关键功能的代码示例：

```javascript
// 引入外部JSON文件
const platforms = require('./paymentPlatforms.json');

function matchPlatform(inputText) {
    // 省略具体实现细节
}

function test() {
    let inputText = $context.query.文本;
    let result = matchPlatform(inputText);
    $intents.finish(result);
}

test();
```
