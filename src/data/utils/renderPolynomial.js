import renderTerm from "./renderTerm"

export function renderReversePolynomial(variable, ...coefficients) {
    const polynomial = coefficients.reduce((polynomialString, coefficient, index) => {
        const xTerm = index === 0 ? "" : index === 1 ? variable : `${variable}^{${index}}`
        return polynomialString += renderTerm(coefficient, xTerm, !polynomialString)
    }, '')
    if(!polynomial) return "0"
    return polynomial
}

export function renderPolynomial(variable, ...coefficients) {
    const polynomial = coefficients.reduce((polynomialString, coefficient, index) => {
        const xTerm = index === 0 ? "" : index === 1 ? variable : `${variable}^{${index}}`
        return polynomialString = renderTerm(coefficient, xTerm, false) + polynomialString
    }, '')
    if(polynomial.startsWith("+")) return polynomial.substring(1)
    if(!polynomial) return "0"
    return polynomial
}