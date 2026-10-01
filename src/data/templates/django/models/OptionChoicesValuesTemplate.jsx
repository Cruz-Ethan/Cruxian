import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class OptionChoicesValuesTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What do the first and second values represent in Django choices?</pre>,
            <code>actual value (in database), readable value (for humans)</code>
        )
    }
}