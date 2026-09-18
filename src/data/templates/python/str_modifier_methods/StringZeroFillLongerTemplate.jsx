import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringZeroFillLongerTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call <code> str.zfill </code>, but str is already longer than the argument?</pre>,
            <code>Nothing</code>
        )
    }
}