# seal-cache

- 轻量级前端缓存工具
- 对localStorage进行了封装
- 支持number, string, boolean, object类型

[官网](https://seal-cache.github.io/)

## 安装下载

- [下载地址](https://github.com/seal-cache/seal-cache/releases)
- `npm i seal-cache`
- CDN `http://unpkg.com/seal-cache/release/bundle.js`

## 快速使用

```javaScript
var data = {
    'num': '01',
    'name': 'xiaoming',
    'age': 18,
    'hobby': ['足球', '篮球', '羽毛球']
};

var SC = window.SealCache;
var cache = new SC();
cache.set('user', data);
console.log(cache.get('user'));
cache.remove('user');
```

- [使用文档](./doc/use/README.md)
- [二次开发文档](./doc/dev/README.md)

## 交流 & 提问

- 提问：https://github.com/seal-cache/seal-cache/issues

## 关于作者

- 个人主页
- 收款二维码