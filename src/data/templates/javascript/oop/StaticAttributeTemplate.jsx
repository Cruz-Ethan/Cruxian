import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StaticAttributeTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Declare a static field userCount.</pre>,
            <code>static userCount</code>
        )
    }
}