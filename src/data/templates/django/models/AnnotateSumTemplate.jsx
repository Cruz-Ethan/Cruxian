import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class AnnotateSumTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Add "total_purachase_amount" to objects in a queryset from the Customer model.</pre>,
            <code>Customer.objects.annotate(total_purchase_amount=Sum('purchases__amount'))</code>
        )
    }
}