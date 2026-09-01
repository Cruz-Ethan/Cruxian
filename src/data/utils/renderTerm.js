export default function renderTerm(coefficient, variables, isFirstTerm=false) {
    if(coefficient === 0) {return ""}

    if(coefficient === 1) {
        if(!variables && isFirstTerm) return "1"
        if(!variables && !isFirstTerm) return "+1"
        if(variables && isFirstTerm) return variables
        return `+${variables}`
    }
    if(coefficient === -1) {
        if(!variables) return "-1"
        return `-${variables}`
    }

    if(coefficient < 0 || isFirstTerm) return `${coefficient}${variables}`
    return `+${coefficient}${variables}`
}