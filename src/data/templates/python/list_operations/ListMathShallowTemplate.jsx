import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ListMathShallowTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">When you use operations like + or * on a list, are they shallow or deep?</pre>,
            <code>Shallow</code>
        )
    }
}