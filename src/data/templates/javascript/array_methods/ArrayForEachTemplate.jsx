import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ArrayForEachTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Print each word in the array "words".</pre>,
            <code>words.forEach(word =&gt; &lcub;console.log(word)&rcub;)</code>
        )
    }
}