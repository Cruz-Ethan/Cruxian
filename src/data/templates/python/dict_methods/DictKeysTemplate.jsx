import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DictKeysTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a view object of the keys of dictionary <code> dct </code>.</pre>,
            <code>dct.keys()</code>
        )
    }
}