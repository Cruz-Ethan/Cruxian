import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class IterDictTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a dict from dictionary <code> dct </code>.</pre>,
            <code>dict(dct)</code>
        )
    }
}