import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"
import randomElement from "../../../utils/randomElement.js"

export default class StringFormatTemplate extends Template {
    generateProblem() {
        const value = randomInteger(11, 80)
        const name = randomElement(['age', 'price', 'days', 'value'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Format an f-string-like string <code> str </code> with kwarg {name} = {value}.</pre>,
            <code>str.format({name}={value})</code>
        )
    }
}