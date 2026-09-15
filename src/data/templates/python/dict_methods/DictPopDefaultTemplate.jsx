import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"
import randomLower from "../../../utils/randomLower.js"

export default class DictPopDefaultTemplate extends Template {
    generateProblem() {
        const key = `'${randomLower()}'`
        const val = randomInteger()
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Delete and return the value associated with the key <code> {key} </code> in the dictionary <code> dct </code> or return <code> {val} </code> if no such key exists.</pre>,
            <code>dct.pop({key}, {val})</code>
        )
    }
}