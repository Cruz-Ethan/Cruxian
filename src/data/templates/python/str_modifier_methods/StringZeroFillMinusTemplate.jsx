import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringZeroFillMinusTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call <code> str.zfill </code> but str starts with a '-'?</pre>,
            <code>'-' goes before the 0's.</code>
        )
    }
}