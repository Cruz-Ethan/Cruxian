import randomInteger from "./randomInteger"

export default function randomElement(arr) {
    const index = randomInteger(0, arr.length - 1)
    return arr[index]
}