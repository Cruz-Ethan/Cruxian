import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"

export default class DictSetDefaultMissingTemplate extends Template {
    generateProblem() {
        const key = `'${randomLower()}'`
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call <code> dct.setdefault({key}) </code> and no such key exists?</pre>,
            <code>dct sets {key} to None and returns None.</code>
        )
    }
}