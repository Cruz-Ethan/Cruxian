import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"

export default class DictPopErrorTemplate extends Template {
    generateProblem() {
        const key = `'${randomLower()}'`
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call <code> dct.pop({key}) </code> or <code> dct.popitem() </code> and there is nothing to return?</pre>,
            <code>KeyError</code>
        )
    }
}