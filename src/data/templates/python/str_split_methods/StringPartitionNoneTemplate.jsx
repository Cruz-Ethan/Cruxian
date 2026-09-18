import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringPartitionNoneTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call <code> str.partition </code> with a value not in the string?</pre>,
            <code>return (str, '', '')</code>
        )
    }
}