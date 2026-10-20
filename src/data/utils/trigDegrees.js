function degreesToRadians(angleDegrees) {
    return angleDegrees * (Math.PI / 180)
}

export function sinDegrees(angleDegrees) {
    const angleRadians = degreesToRadians(angleDegrees)
    return Math.sin(angleRadians)
}

export function cosDegrees(angleDegrees) {
    const angleRadians = degreesToRadians(angleDegrees)
    return Math.cos(angleRadians)
}

export function tanDegrees(angleDegrees) {
    const angleRadians = degreesToRadians(angleDegrees)
    return Math.tan(angleRadians)
}