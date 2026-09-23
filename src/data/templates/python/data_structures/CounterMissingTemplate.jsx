import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class CounterMissingTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">If you call <code> counter[value] </code> in Python with a non-existent value, what happens?</pre>,
            <code>returns 0</code>
        )
    }
}