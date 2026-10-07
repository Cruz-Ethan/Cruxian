import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import { MathJax } from 'better-react-mathjax'
import randomInteger from "../../../utils/randomInteger.js"
import randomElement from "../../../utils/randomElement.js"
import round from "../../../utils/round.js"

export default class MissingVelocityTemplate extends Template {
    generateProblem() {
        const vi = randomInteger(0, 100) / 10
        const t = randomInteger(0, 10)
        const a = randomInteger(0, 100) / 10
        const x = round(vi * t + 0.5 * a * t ** 2, 2)

        const variableToSolveFor = randomElement(['t', 'v_i', 'x', 'a'])
        let value
        switch(variableToSolveFor) {
            case 't':
                value = t
                break
            case 'v_i':
                value = vi
                break
            case 'x':
                value = x
                break
            case 'a':
                value = a
                break
        }

        return new Problem(
            <MathJax>
                {variableToSolveFor !== 't' && <div>{`$$ t = ${t} $$`}</div>}
                {variableToSolveFor !== 'v_i' && <div>{`$$ v_i = ${vi} $$`}</div>}
                {variableToSolveFor !== 'x' && <div>{`$$ x = ${x} $$`}</div>}
                {variableToSolveFor !== 'a' && <div>{`$$ a = ${a} $$`}</div>}
                <span>{`$$\\text{Solve for } ${variableToSolveFor}$$`}</span>
            </MathJax>,
            <MathJax>$${variableToSolveFor} = {value}$$</MathJax>
        )
    }
}