import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SuperRuleTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What is the rule regarding calling super()?</pre>,
            <code>You must call super() before calling this.</code>
        )
    }
}