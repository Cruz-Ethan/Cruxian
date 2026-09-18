import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringSplitTypeErrorTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call <code> str.split </code> with only a number?</pre>,
            <code>TypeError</code>
        )
    }
}