import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringFindNothingTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call <code> str.find </code> and nothing is found?</pre>,
            <code>returns -1</code>
        )
    }
}