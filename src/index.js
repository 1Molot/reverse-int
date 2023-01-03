module.exports = function reverse(n) {
    return +String(n > 0 ? n : 0 - n).split("").reverse().join("")

}
