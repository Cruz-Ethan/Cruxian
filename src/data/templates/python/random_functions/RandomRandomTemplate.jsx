import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class RandomRandomTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get a random float between 0 and 1.</pre>,
            <code>random.random()</code>
        )
    }
}