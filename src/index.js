class SealCache {
    constructor(){
        this.list = {}
    }
    get(key){
        return this.list[key]
    }
    set(key, value){
        this.list[key] = value
    }
    clear(){
        this.list = {}
    }
}
window.SealCache = SealCache