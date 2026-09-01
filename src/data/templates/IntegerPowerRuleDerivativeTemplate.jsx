import Template from "../../classes/Template.js"
import Problem from "../../classes/Problem.js"
import { MathJax } from 'better-react-mathjax'
import randomInteger from "../utils/randomInteger.js"
import renderPolynomialTerm from "../utils/renderPolynomialTerm.js"

export default class IntegerPowerRuleDerivativeTemplate extends Template {
    generateProblem() {
        let coefficient = 0
        while (coefficient === 0) {
            coefficient = randomInteger(-10, 10)
        }
        const exponent = randomInteger(0, 10)

        return new Problem(
            <MathJax>
                {`$$ \\frac{d}{dx} ${renderPolynomialTerm(coefficient, "x", exponent)} $$`}
            </MathJax>,
            <MathJax>{`$$ ${exponent ? renderPolynomialTerm(coefficient * exponent, "x", exponent - 1) : 0} $$`}</MathJax>
        )
    }
}