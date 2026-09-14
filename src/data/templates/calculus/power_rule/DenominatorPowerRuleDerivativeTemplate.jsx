import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import { MathJax } from 'better-react-mathjax'
import randomInteger from "../../../utils/randomInteger.js"
import renderPolynomialTerm from "../../../utils/renderPolynomialTerm.js"

export default class DenominatorPowerRuleDerivativeTemplate extends Template {
    generateProblem() {
        let coefficient = 0
        while (coefficient === 0) {
            coefficient = randomInteger(-10, 10)
        }
        const exponent = randomInteger(1, 10)

        return new Problem(
            <MathJax>
                {`$$ \\frac{d}{dx} \\frac{${coefficient}}{${renderPolynomialTerm(1, "x", exponent)}} $$`}
            </MathJax>,
            <MathJax>{`$$ \\frac{${coefficient * -exponent}}{${renderPolynomialTerm(1, "x", exponent + 1)}} $$`}</MathJax>
        )
    }
}