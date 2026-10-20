import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import { MathJax } from 'better-react-mathjax'
import randomInteger from "../../../utils/randomInteger.js"
import randomElement from "../../../utils/randomElement.js"
import round from "../../../utils/round.js"
import { sinDegrees } from "../../../utils/trigDegrees.js"
import projectileImage from './Projectile.png'

export default class ProjectileTimeTemplate extends Template {
    constructor() {
        super()
        this.imageUrl = projectileImage
    }

    generateProblem() {
        const v = randomInteger(0, 100) / 10
        const theta = randomInteger(1, 90)
        const T = round((2 * v * sinDegrees(theta)) / 9.81, 2)

        const variableToSolveFor = randomElement(['v', '\\theta', 'T'])
        let value
        switch(variableToSolveFor) {
            case 'v':
                value = v
                break
            case '\\theta':
                value = theta
                break
            case 'T':
                value = T
                break
        }

        return new Problem(
            <MathJax>
                {variableToSolveFor !== '\\theta' && <div>{`$$ \\theta = ${theta} $$`}</div>}
                {variableToSolveFor !== 'v' && <div>{`$$ v = ${v} $$`}</div>}
                {variableToSolveFor !== 'T' && <div>{`$$ T = ${T} $$`}</div>}
                <span>{`$$\\text{Solve for } ${variableToSolveFor}$$`}</span>
            </MathJax>,
            <MathJax>$${variableToSolveFor} = {value}$$</MathJax>,
        )
    }
}