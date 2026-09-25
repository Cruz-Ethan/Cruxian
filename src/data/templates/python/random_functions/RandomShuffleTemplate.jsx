import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class RandomShuffleTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Randomly shuffle the list <code> lst </code> in place.</pre>,
            <code>random.shuffle(lst)</code>
        )
    }
}