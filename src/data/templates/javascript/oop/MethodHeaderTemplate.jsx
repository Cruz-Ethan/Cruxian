import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class MethodHeaderTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Write the header for a method (in a class) called "display".</pre>,
            <code>display()</code>
        )
    }
}