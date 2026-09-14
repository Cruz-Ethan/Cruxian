import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SetPopErrorTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call <code> set.pop </code> on an empty set?</pre>,
            <code>KeyError</code>
        )
    }
}