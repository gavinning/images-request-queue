class IR {
    constructor(queue) {
        if(Array.isArray(queue)){
            this.__deep = false
            this.__list = queue.slice(0)
        }
        else{
            this.__deep = queue.deep
            this.__list = queue.list.slice(0)
        }
    }

    __queue(size) {
        return this.__list.splice(0, size)
    }

    __loadimg(url, fn) {
        let img = new Image
        this.__deep ? img.src = eval(`url.${this.__deep}`) : img.src = url
        img.onload = function(){
            fn(this)
        }
    }

    load(size) {
        let arr = this.__queue(size).map(url => {
            return new Promise((res, rej) => {
                try{
                    this.__loadimg(url, img => res(img))
                }
                catch(err){
                    rej(err)
                }
            })
        })
        return Promise.all(arr)
    }
}

module.exports = IR
