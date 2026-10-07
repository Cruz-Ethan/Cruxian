import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import { MathJax } from 'better-react-mathjax'
import randomInteger from "../../../utils/randomInteger.js"
import randomElement from "../../../utils/randomElement.js"
import round from "../../../utils/round.js"

export default class MissingDistanceTemplate extends Template {
    generateProblem() {
        const vi = randomInteger(0, 100) / 10
        const t = randomInteger(0, 100) / 10
        const a = randomInteger(0, 100) / 10
        const vf = round(vi + a * t, 2)

        const variableToSolveFor = randomElement(['t', 'v_i', 'v_f', 'a'])
        let value
        switch(variableToSolveFor) {
            case 't':
                value = t
                break
            case 'v_i':
                value = vi
                break
            case 'v_f':
                value = vf
                break
            case 'a':
                value = a
                break
        }

        return new Problem(
            <MathJax>
                {variableToSolveFor !== 't' && <div>{`$$ t = ${t} $$`}</div>}
                {variableToSolveFor !== 'v_i' && <div>{`$$ v_i = ${vi} $$`}</div>}
                {variableToSolveFor !== 'v_f' && <div>{`$$ v_f = ${vf} $$`}</div>}
                {variableToSolveFor !== 'a' && <div>{`$$ a = ${a} $$`}</div>}
                <span>{`$$\\text{Solve for } ${variableToSolveFor}$$`}</span>
            </MathJax>,
            <MathJax>$${variableToSolveFor} = {value}$$</MathJax>
        )
    }
}