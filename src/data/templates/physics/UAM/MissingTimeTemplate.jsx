import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import { MathJax } from 'better-react-mathjax'
import randomInteger from "../../../utils/randomInteger.js"
import randomElement from "../../../utils/randomElement.js"
import round from "../../../utils/round.js"

export default class MissingTimeTemplate extends Template {
    generateProblem() {
        let vi
        let vf
        do {
            vi = randomInteger(0, 100) / 10
            vf = randomInteger(0, 100) / 10
        } while(vi === vf)
        const a = randomInteger(1, 100) / 10
        const x = round((vf ** 2 - vi ** 2) / (2 * a), 2)

        const variableToSolveFor = randomElement(['x', 'v_i', 'v_f', 'a'])
        let value
        switch(variableToSolveFor) {
            case 'x':
                value = x
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
                {variableToSolveFor !== 'x' && <div>{`$$ x = ${x} $$`}</div>}
                {variableToSolveFor !== 'v_i' && <div>{`$$ v_i = ${vi} $$`}</div>}
                {variableToSolveFor !== 'v_f' && <div>{`$$ v_f = ${vf} $$`}</div>}
                {variableToSolveFor !== 'a' && <div>{`$$ a = ${a} $$`}</div>}
                <span>{`$$\\text{Solve for } ${variableToSolveFor}$$`}</span>
            </MathJax>,
            <MathJax>$${variableToSolveFor} = {value}$$</MathJax>
        )
    }
}