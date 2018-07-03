class SealCache {

    set(name, data) {
        let dataType = typeof data
        if (dataType === 'object') {
            window.localStorage.setItem(name, JSON.stringify(data))
        }
        else if (['number', 'string', 'boolean'].indexOf(dataType) >= 0 ) {
            window.localStorage.setItem(name, data)
        }
        else {
            alert('该类型不能用于本地存储！')
        }
    }
    get(name) {
        let data = window.localStorage.getItem(name)
        if(data) {
            return JSON.parse(data)
        }
        else {
            return ''
        }
    }
    remove(name) {
        window.localStorage.removeItem(name)
    }
}
window.SealCache = SealCache