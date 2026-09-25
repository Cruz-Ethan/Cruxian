import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ArrayMapTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a new array of the length of each word in the array "words".</pre>,
            <code>words.map(word =&gt; word.length)</code>
        )
    }
}