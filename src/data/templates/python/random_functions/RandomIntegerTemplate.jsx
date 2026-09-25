import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class RandomIntegerTemplate extends Template {
    generateProblem() {
        const min = randomInteger(20, 50)
        const max = randomInteger(60, 90)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get a random integer between {min} and {max}.</pre>,
            <code>random.randint({min}, {max})</code>
        )
    }
}