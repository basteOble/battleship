function ship (length) {
    let hitCount = 0
    return {
        length, 
        hitCount,
        hit: function () {
            this.hitCount++
        },
        isSunken: function () {
            return this.hitCount === this.length
        }
    }
}

export default ship