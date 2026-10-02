import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class MetaOrderingTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Make Post querysets return in the order of created_at (descending) and title.</pre>,
            <code>ordering = ['-created_at', 'title']</code>
        )
    }
}