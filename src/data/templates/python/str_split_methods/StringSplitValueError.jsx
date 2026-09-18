import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringSplitValueErrorTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call <code> str.split </code> with '' as the separator?</pre>,
            <code>ValueError</code>
        )
    }
}