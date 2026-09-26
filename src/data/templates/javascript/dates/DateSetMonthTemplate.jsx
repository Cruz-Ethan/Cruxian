import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class DateSetMonthTemplate extends Template {
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
            <pre className="whitespace-pre-wrap break-words">Set the month of Date "date" to {month}.</pre>,
            <code>date.setMonth({months.indexOf(month)})</code>
        )
    }
}