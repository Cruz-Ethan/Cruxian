import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SerializerValidateFieldTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Write the header and return statement to validate the field 'product'.</pre>,
            <pre className="whitespace-pre-wrap break-words">{`def validate_product(self, value):
    return value`}</pre>
        )
    }
}