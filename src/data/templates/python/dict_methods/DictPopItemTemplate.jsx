import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DictPopItemTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Delete and return the last item added to the dictionary <code> dct </code> as a tuple.</pre>,
            <code>dct.popitem()</code>
        )
    }
}