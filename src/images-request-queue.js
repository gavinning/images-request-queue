class IR {
    constructor(queue) {
        this.__list = queue.slice(0)
    }

    __queue(size) {
        return this.__list.splice(0, size)
    }

    __loadimg(url, fn) {
        let img = new Image
        img.src = url
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
