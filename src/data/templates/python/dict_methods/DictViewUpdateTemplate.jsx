import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DictViewUpdateTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens to a dictionary view object after you update the original dictionary?</pre>,
            <code>It is also updated.</code>
        )
    }
}