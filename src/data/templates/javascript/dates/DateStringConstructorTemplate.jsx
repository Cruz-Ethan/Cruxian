import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class DateStringConstructorTemplate extends Template {
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

        function displayDoubleDigits(number) {
            return number < 10 ? `0${number}` : `${number}`
        }

        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new date with one string for {month} {date}, {year}.</pre>,
            <code>new Date("{year}-{displayDoubleDigits(monthNumber)}-{displayDoubleDigits(date)}")</code>
        )
    }
}