import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class ArraySomeTemplate extends Template {
    generateProblem() {
        const minLength = randomInteger(4, 10)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Check if there is a word longer than {minLength} characters in the array "words".</pre>,
            <code>words.some(word =&gt; word.length &gt; {minLength})</code>
        )
    }
}