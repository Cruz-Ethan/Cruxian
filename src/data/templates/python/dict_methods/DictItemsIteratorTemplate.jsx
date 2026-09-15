import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DictItemsIteratorTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a view object of the items of dictionary <code> dct </code>.</pre>,
            <code>dct.items()</code>
        )
    }
}