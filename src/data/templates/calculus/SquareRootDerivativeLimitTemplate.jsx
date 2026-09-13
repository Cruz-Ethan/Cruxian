import Template from "../../../classes/Template.js"
import Problem from "../../../classes/Problem.js"
import { MathJax } from 'better-react-mathjax'
import randomInteger from "../../utils/randomInteger.js"
import renderTerm from "../../utils/renderTerm.js"

export default class SquareRootDerivativeLimitTemplate extends Template {
    generateProblem() {
        const a = randomInteger(1, 10)
        const answer = 2 * a

        return new Problem(
            <MathJax>
                {`$$ \\lim_{x \\rightarrow ${a * a}} \\frac{x - ${a * a}}{\\sqrt{x} ${renderTerm(-a, "")}} $$`}
            </MathJax>,
            <MathJax>{`$$ ${answer} $$`}</MathJax>
        )
    }
}