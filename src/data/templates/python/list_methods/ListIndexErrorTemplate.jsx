import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ListIndexErrorTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call <code> lst.index(elmnt) </code> and Python finds nothing?</pre>,
            <code>ValueError</code>
        )
    }
}