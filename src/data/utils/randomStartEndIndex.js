import randomInteger from "./randomInteger"

export default function randomStartEndIndex(minLength=1) {
    let startIndex
    let endIndex
    do {
        startIndex = randomInteger(-10, 10)
        endIndex = startIndex + randomInteger(minLength, 10)
    } while(startIndex * endIndex <= 0)
    return [startIndex, endIndex]
}