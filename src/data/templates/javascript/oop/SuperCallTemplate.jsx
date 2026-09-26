import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SuperCallTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Pass the attribute "name" to from the Dog subclass constructor to the Animal superclass.</pre>,
            <code>super(name)</code>
        )
    }
}