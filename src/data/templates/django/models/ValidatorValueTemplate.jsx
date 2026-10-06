import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class ValidatorValueTemplate extends Template {
    generateProblem() {
        const min = randomInteger(10, 30)
        const max = min + randomInteger(10, 30)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create an Integer field with min={min} and max={max}.</pre>,
            <code>models.IntegerField(validators=[MinValueValidator({min}), MaxValueValidator({max})])</code>
        )
    }
}