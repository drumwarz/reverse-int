module.exports = function reverse(n) {
    return +n.toString().replace(/\D/, "").split("").reverse().join("");
};
