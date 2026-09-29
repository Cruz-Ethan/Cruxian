import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class IntegerFieldTemplate extends Template {
    generateProblem() {
        const field = randomElement(['views', 'likes', 'word_count'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new field called "{field}" for a Post model.</pre>,
            <code>{field} = models.IntegerField()</code>
        )
    }
}