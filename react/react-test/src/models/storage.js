 const storage = {
    set (key, val) {
        localStorage.setItem(key,JSON.stringify(val))
    },
    get (key) {
        return JSON.parse(localStorage.getItem(key))
    },
    remove (key) {
        localStorage.removeItem(key)
    }
}

export default storage;