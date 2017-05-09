function imglist() {

    let arr = []

    for(let i=0; i<56; i++){
        arr.push(`http://img1.mm131.com/pic/2904/${i+1}.jpg`)
    }

    return arr.map(url => {
        return `${url}?t=${new Date().getTime().toString()+Math.random().toString().slice(2)}`
    })
}

function imglistDeep() {

    let arr = []

    for(let i=0; i<56; i++){
        arr.push({
            img: {
                url: `http://img1.mm131.com/pic/2904/${i+1}.jpg`
            }
        })
    }

    return arr.map(item => {
        item.img.url += `?t=${new Date().getTime().toString()+Math.random().toString().slice(2)}`
        return item
    })
}
