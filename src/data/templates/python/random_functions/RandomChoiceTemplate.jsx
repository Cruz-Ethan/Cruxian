import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class RandomChoiceTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get a random value from list <code> lst </code>.</pre>,
            <code>random.choice(lst)</code>
        )
    }
}