import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DictUpdateTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Add and override the dictionary <code> dct </code> with the item-iterable <code> iter </code>.</pre>,
            <code>dct.update(iter)</code>
        )
    }
}