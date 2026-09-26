import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class DateNumberConstructorTemplate extends Template {
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

        const year = randomInteger(2005, 2030)
        const month = randomElement(months)
        const maxDate = month === 'February' ? 28 : month === 'April' || month === 'June' || month === 'September' || month === 'October' ? 30 : 31
        const date = randomInteger(1, maxDate)

        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new date with only numbers for {month} {date}, {year}.</pre>,
            <code>new Date({year}, {months.indexOf(month)}, {date})</code>
        )
    }
}