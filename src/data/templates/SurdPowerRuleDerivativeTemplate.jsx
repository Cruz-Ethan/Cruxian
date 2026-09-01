import Template from "../../classes/Template.js"
import Problem from "../../classes/Problem.js"
import { MathJax } from 'better-react-mathjax'
import randomInteger from "../utils/randomInteger.js"
import renderTerm from "../utils/renderTerm.js"
import renderPolynomialTerm from "../utils/renderPolynomialTerm.js"
import getGCD from "../utils/getGCD.js"

export default class SurdPowerRuleDerivativeTemplate extends Template {
    generateProblem() {
        let coefficient = 0
        while (coefficient === 0) {
            coefficient = randomInteger(-10, 10)
        }
        
        const exponent = randomInteger(2, 10)
        const gcd = getGCD(coefficient, exponent)

        return new Problem(
            <MathJax>
                {`$$ \\frac{d}{dx} ${renderTerm(coefficient, `\\sqrt${exponent === 2 ? "" : `[${exponent}]`}{x}`, true)} $$`}
            </MathJax>,
            <MathJax>{`$$ \\frac{${coefficient / gcd}}{${renderTerm(exponent / gcd, `\\sqrt${exponent === 2 ? "" : `[${exponent}]`}{${renderPolynomialTerm(1, "x", exponent - 1)}}`, true)}} $$`}</MathJax>
        )
    }
}