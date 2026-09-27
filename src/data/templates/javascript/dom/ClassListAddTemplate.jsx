import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class ClassListAddTemplate extends Template {
    generateProblem() {
        const attributes = ['bg', 'text']
        const colors = ['red', 'yellow', 'green', 'emerald', 'cyan', 'blue', 'purple', 'gray']
        const style = "'" + randomElement(attributes) + '-' + randomElement(colors) + "-" + (randomInteger(1, 9) * 100) + "'"
        
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Add the class {style} from "myElement".</pre>,
            <code>myElement.classList.add({style})</code>
        )
    }
}