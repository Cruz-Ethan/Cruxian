import Template from "../../classes/Template.js"
import Problem from "../../classes/Problem.js"
import { MathJax } from 'better-react-mathjax'
import randomInteger from "../utils/randomInteger.js"
import { renderReversePolynomial } from "../utils/renderPolynomial.js"

export default class PolynomialLimitTemplate extends Template {
    generateProblem() {
        const x = randomInteger(-10, 10)

        const c1 = randomInteger(-10, 10)
        const c2 = randomInteger(-10, 10)
        const c3 = randomInteger(-10, 10)

        const answer = c1 + x * (c2 + x * c3)

        return new Problem(
            <MathJax>
                {`$$ \\lim_{x \\rightarrow ${x}} ${renderReversePolynomial("x", c1, c2, c3)} $$`}
            </MathJax>,
            <MathJax>{`$$ ${answer} $$`}</MathJax>
        )
    }
}