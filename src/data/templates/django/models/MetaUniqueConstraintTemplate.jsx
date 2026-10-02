import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class MetaUniqueConstraintTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a unique_booking constraint with room and date fields.</pre>,
            <code>constraints = [models.UniqueConstraint(fields=['room', 'date'], name='unique_booking')]</code>
        )
    }
}