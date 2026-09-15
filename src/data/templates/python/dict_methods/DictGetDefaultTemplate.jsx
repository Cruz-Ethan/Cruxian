import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"
import randomLower from "../../../utils/randomLower.js"

export default class DictGetDefaultTemplate extends Template {
    generateProblem() {
        const key = `'${randomLower()}'`
        const val = randomInteger()
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return the value of key <code> {key} </code> in the dictionary <code> dct </code> or <code> {val} </code> if no such key exists.</pre>,
            <code>dct.get({key}, {val})</code>
        )
    }
}