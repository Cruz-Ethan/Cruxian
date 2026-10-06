import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class LookupMonthTemplate extends Template {
    generateProblem() {
        const months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ]
        const month = randomElement(months)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get a queryset of blogs (Blog) with the pub_date month in {month}.</pre>,
            <code>Blog.objects.filter(pub_date__month={months.indexOf(month) + 1})</code>
        )
    }
}