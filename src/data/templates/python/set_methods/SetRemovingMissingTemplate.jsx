import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SetRemoveMissingTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call <code> set.remove </code> with a non-existent element?</pre>,
            <code>KeyError</code>
        )
    }
}