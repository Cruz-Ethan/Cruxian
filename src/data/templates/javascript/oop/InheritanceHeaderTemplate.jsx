import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class InheritanceHeaderTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Write the class header for a subclass Dog of class Animal.</pre>,
            <code>class Dog extends Animal</code>
        )
    }
}