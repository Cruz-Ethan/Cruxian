export default function randomInteger(min=1, max=10) {
    return Math.trunc(Math.random() * (max - min + 1)) + min
}