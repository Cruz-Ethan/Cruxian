import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class TimeNumberConstructorTemplate extends Template {
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
        const monthNumber = months.indexOf(month) + 1
        const maxDate = monthNumber === 2 ? 28 : monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber === 11 ? 30 : 31
        const date = randomInteger(1, maxDate)
        
        const hour = randomInteger(0, 23)
        const minute = randomInteger(0, 59)

        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new date with only numbers for {hour % 12 ? hour % 12 : 12}:{minute < 10 ? `0${minute}` : minute}{hour < 12 ? 'AM' : 'PM'} {month} {date}, {year}.</pre>,
            <code>new Date({year}, {months.indexOf(month)}, {date}, {hour}, {minute})</code>
        )
    }
}