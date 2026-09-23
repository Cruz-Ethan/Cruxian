import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class CounterKwargsTemplate extends Template {
    generateProblem() {
        const apples = randomInteger(1, 10)
        const oranges = randomInteger(1, 10)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a Python counter apples={apples} and oranges={oranges}.</pre>,
            <code>Counter({apples}=1, {oranges}=3)</code>
        )
    }
}