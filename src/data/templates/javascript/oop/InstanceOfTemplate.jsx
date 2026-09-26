import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class InstanceOfTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Check if "obj" is an object of a class or subclass of "Person".</pre>,
            <code>obj instanceof Person</code>
        )
    }
}