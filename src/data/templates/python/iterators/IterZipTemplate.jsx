import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class IterZipTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return (value, value, value) tuples for iterables <code> iter1 </code>, <code> iter2 </code>, and <code> iter3 </code>.</pre>,
            <code>zip(iter1, iter2, iter3)</code>
        )
    }
}