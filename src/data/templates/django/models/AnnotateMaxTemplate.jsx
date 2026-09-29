import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class AnnotateMaxTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Add "max_purachase_amount" to objects in a queryset from the Customer model.</pre>,
            <code>Customer.objects.annotate(max_purchase_amount=Max('purchases__amount'))</code>
        )
    }
}