import Template from "../../classes/Template.js"
import Problem from "../../classes/Problem.js"
import { MathJax } from 'better-react-mathjax'
import randomInteger from "../utils/randomInteger.js"
import { renderReversePolynomial, renderPolynomial } from "../utils/renderPolynomial.js"

export default class NonZeroDenominatorLimitTemplate extends Template {
    generateProblem() {
        const x = randomInteger(1, 10)

        const c1 = randomInteger(1, 10)
        const c2 = randomInteger(1, 10)
        const c3 = randomInteger(1, 10)

        const d1 = randomInteger(1, 10)

        return new Problem(
            <MathJax>
                {`$$ \\lim_{x \\rightarrow ${x}} \\frac{${renderReversePolynomial("x", c1, c2, c3)}}{${renderPolynomial("x", x*d1, -x-d1, 1)}} $$`}
            </MathJax>,
            'The limit does not exist.'
        )
    }
}