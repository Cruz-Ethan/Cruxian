import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ArrayReduceTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get the total length of the words in the array "words".</pre>,
            <code>words.reduce((total, word) =&gt; total + word.length, 0)</code>
        )
    }
}