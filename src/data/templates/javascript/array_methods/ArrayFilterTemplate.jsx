import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class ArrayFilterTemplate extends Template {
    generateProblem() {
        const minLength = randomInteger(4, 10)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return all the words longer than {minLength} characters in the array "words".</pre>,
            <code>words.filter(word =&gt; word.length &gt; {minLength})</code>
        )
    }
}