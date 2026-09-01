export default function round(number, decimalPlaces=0) {
    const tenPower = Math.pow(10, decimalPlaces)
    return Math.round(number * tenPower) / tenPower
}