import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class FunctionDefaultTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Write the header for a "greet()" method with parameter "name" and default "Bob".</pre>,
            <code>greet(name = "Bob")</code>
        )
    }
}