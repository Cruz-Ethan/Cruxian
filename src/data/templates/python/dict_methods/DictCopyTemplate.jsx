import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DictCopyTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a shallow copy of the dictionary <code> dct </code>.</pre>,
            <code>dct.copy()</code>
        )
    }
}