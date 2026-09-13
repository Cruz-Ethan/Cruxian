import Template from "../../../classes/Template.js"
import Problem from "../../../classes/Problem.js"
import { MathJax } from 'better-react-mathjax'
import randomInteger from "../../utils/randomInteger.js"

export default class SquareDerivativeLimitTemplate extends Template {
    generateProblem() {
        let x = 0
        while(x === 0) {
            x = randomInteger(-10, 10)
        }

        const answer = 2 * x

        return new Problem(
            <MathJax>
                {`$$ \\lim_{h \\rightarrow 0} \\frac{(${x}+h)^2 - ${x * x}}{h} $$`}
            </MathJax>,
            <MathJax>{`$$ ${answer} $$`}</MathJax>
        )
    }
}