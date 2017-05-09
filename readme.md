Images-request-queue
---
图片处理队列

```sh
npm i images-request-queue --save
```

### Usage
```js
const IR = require('images-request-queue')
const ir = new IR([ imgurls ])

ir.load(2).then(res => console.log(res))
```
简单url列表的递归应用
```js
const IR = require('images-request-queue')
const ir = new IR( easyList )
function render() {
    ir.load(2).then(res => {
        if(!res.length) return
        res.forEach((img, index) => {
            document.body.appendChild(img)
            if(index === res.length-1){
                render()
            }
        })
    })
}
render()
```
深度url列表的递归应用
```js
const IR = require('images-request-queue')
const ir = new IR({
    deep: 'img.url',
    list: deepList
})
function render() {
    ir.load(2).then(res => {
        if(!res.length) return
        res.forEach((img, index) => {
            document.body.appendChild(img)
            if(index === res.length-1){
                render()
            }
        })
    })
}
render()
```

简单url列表
```js
var easyList = [
    'http://a.com/1.jpg',
    'http://a.com/2.jpg',
    'http://a.com/3.jpg',
    'http://a.com/4.jpg',
    'http://a.com/5.jpg',
]
```

深度url列表
```js
var deepList = [
    {
        id: 1,
        img: {
            url: 'http://a.com/1.jpg'
        }
    },
    {
        id: 2,
        img: {
            url: 'http://a.com/2.jpg'
        }
    },
    {
        id: 3,
        img: {
            url: 'http://a.com/3.jpg'
        }
    },
    {
        id: 4,
        img: {
            url: 'http://a.com/4.jpg'
        }
    },
    {
        id: 5,
        img: {
            url: 'http://a.com/5.jpg'
        }
    },
]
```
