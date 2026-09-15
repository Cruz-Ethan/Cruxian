import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"

export default class DictPopTemplate extends Template {
    generateProblem() {
        const key = `'${randomLower()}'`
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Delete and return the value associated with the key <code> {key} </code> in the dictionary <code> dct </code>.</pre>,
            <code>dct.pop({key})</code>
        )
    }
}