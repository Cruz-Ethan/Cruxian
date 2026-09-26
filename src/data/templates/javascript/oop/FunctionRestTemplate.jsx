import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class FunctionRestTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Write the header for a "sum()" method with rest parameters "nums".</pre>,
            <code>sum(...nums)</code>
        )
    }
}