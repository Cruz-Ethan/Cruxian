import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringSplitNegativeTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call <code> str.split </code> with a negative number?</pre>,
            <code>All occurences are split.</code>
        )
    }
}