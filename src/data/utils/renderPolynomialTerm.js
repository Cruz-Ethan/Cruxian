import renderTerm from "./renderTerm"

export default function renderPolynomialTerm(coefficient, variable, exponent) {
    const variableFactor = exponent === 0 ? "" : exponent === 1 ? variable : `${variable}^{${exponent}}`
    return renderTerm(coefficient, variableFactor, true)
}