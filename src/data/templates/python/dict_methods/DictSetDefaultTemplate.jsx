import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"
import randomLower from "../../../utils/randomLower.js"

export default class DictSetDefaultTemplate extends Template {
    generateProblem() {
        const key = `'${randomLower()}'`
        const val = randomInteger()
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Set the value of key <code> {key} </code> to <code> {val} </code> in the dictionary <code> dct </code> or return the value of {key} if it exists.</pre>,
            <code>dct.setdefault({key}, {val})</code>
        )
    }
}