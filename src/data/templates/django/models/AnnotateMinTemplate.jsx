import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class AnnotateMinTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Add "min_purachase_amount" to objects in a queryset from the Customer model.</pre>,
            <code>Customer.objects.annotate(min_purchase_amount=Min('purchases__amount'))</code>
        )
    }
}