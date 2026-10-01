import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class OptionChoicesTypesTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What are the 3 main ways to define a collection of choies for Django fields?</pre>,
            <code>dictionary, list of tuples, enum class</code>
        )
    }
}