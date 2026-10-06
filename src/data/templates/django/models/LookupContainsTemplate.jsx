import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class LookupContainsTemplate extends Template {
    generateProblem() {
        const isSensitive = randomElement(['i', ''])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get a queryset of blogs (Blog) with the title containing 'pedro' (case {isSensitive === 'i' ? 'in' : ''}sensitive).</pre>,
            <code>Blog.objects.filter(title__{isSensitive}contains='pedro')</code>
        )
    }
}