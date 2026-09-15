import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"

export default class DictGetTemplate extends Template {
    generateProblem() {
        const key = `'${randomLower()}'`
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return the value of key <code> {key} </code> in the dictionary <code> dct </code>.</pre>,
            <code>dct.get({key})</code>
        )
    }
}