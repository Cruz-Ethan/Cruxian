export default function getGCD(x, y) {
    if(x < 0)       return getGCD(-x, y)
    if(y < 0)       return getGCD(x, -y)
    if(x === 0)     return 1
    if(y === 0)     return 1

    return getGCDHelper(x, y)
}

function getGCDHelper(x, y) {
    if(x % y === 0)     return y
    
    const quotient = Math.trunc(x / y)
    const remainder = x - y * quotient
    return getGCDHelper(y, remainder)
}