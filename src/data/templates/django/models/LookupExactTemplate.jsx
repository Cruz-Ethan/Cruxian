import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class LookupExactTemplate extends Template {
    generateProblem() {
        const isSensitive = randomElement(['i', ''])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get a queryset from Blog with the exact title 'my dog pedro' (case {isSensitive === 'i' ? 'in' : ''}sensitive).</pre>,
            <code>Blog.objects.filter(title__{isSensitive}exact='my dog pedro')</code>
        )
    }
}