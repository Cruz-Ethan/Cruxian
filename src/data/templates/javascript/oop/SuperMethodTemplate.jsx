import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SuperMethodTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Call the method speak() in the Dog subclass from the Animal superclass.</pre>,
            <code>super.speak()</code>
        )
    }
}