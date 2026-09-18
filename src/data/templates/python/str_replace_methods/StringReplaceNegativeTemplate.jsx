import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringReplaceNegativeTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call <code> str.replace </code> with a negative amount of occurences?</pre>,
            <code>All occurences are replaced.</code>
        )
    }
}