import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class LookupYearTemplate extends Template {
    generateProblem() {
        const year = randomInteger(2000, 2030)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get a queryset of blogs (Blog) with the pub_date year in {year}.</pre>,
            <code>Blog.objects.filter(pub_date__year={year})</code>
        )
    }
}