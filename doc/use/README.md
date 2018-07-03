# 使用文档

## 初始化

```javaScript

var data = {
    'num': '01',
    'name': 'xiaoming',
    'age': 18,
    'hobby': ['足球', '篮球', '羽毛球']
};

var SC = window.SealCache;
var cache = new SC();
```
## 设置

```js
cache.set('user', data)
```

## 获取

```javaScript
cache.get('user')
```

## 移除
```javaScript
cache.remove('user')
```