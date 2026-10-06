import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class LookupInTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get a queryset of blogs (Blog) with the category (CharField) 'Tech' or 'News'.</pre>,
            <code>Blog.objects.filter(category__in=['Tech', 'News'])</code>
        )
    }
}