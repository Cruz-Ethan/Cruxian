import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"

export default class DictGetNoneTemplate extends Template {
    generateProblem() {
        const key = `'${randomLower()}'`
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call <code> dct.get({key}) </code> and the key does not exist?</pre>,
            <code>returns None</code>
        )
    }
}