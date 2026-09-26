import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ConstructorHeaderTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Write the constructor header for a Person class with a name and age attribute.</pre>,
            <code>constructor(name, age)</code>
        )
    }
}