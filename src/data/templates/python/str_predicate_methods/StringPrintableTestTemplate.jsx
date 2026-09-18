import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringPrintableTestTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">When is a string printable?</pre>,
            <code>When it does not contain \n, \t, etc.</code>
        )
    }
}