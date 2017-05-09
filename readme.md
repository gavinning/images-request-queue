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
简单的递归应用
```js
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
