import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class MetaCheckConstraintTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a positive_view_count constraint with view_count field.</pre>,
            <code>constraints = [models.CheckConstraint(condition=Q(view_count__gte=0), name='positive_view_count')]</code>
        )
    }
}