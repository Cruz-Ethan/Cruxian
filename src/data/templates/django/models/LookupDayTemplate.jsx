import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class LookupDayTemplate extends Template {
    generateProblem() {
        const day = randomInteger(1, 31)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get a queryset of blogs (Blog) with the pub_date day on {day}.</pre>,
            <code>Blog.objects.filter(pub_date__day={day})</code>
        )
    }
}