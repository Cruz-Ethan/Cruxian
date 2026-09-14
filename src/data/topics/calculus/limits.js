import Topic from "../../../classes/Topic.js"
import NonZeroDenominatorLimitTemplate from "../../templates/calculus/limits/NonZeroDenominatorLimitTemplate.jsx"
import ZeroDenominatorLimitTemplate from "../../templates/calculus/limits/ZeroDenominatorLimitTemplate.jsx"
import PolynomialLimitTemplate from "../../templates/calculus/limits/PolynomiaLimitTemplate.jsx"
import SquareDerivativeLimitTemplate from "../../templates/calculus/limits/SquareDerivativeLimitTemplate.jsx"
import SquareRootDerivativeLimitTemplate from "../../templates/calculus/limits/SquareRootDerivativeLimitTemplate.jsx"

const tpcLimits = new Topic("Limits")
export default tpcLimits
tpcLimits.addTemplate(new PolynomialLimitTemplate())
tpcLimits.addTemplate(new NonZeroDenominatorLimitTemplate())
tpcLimits.addTemplate(new ZeroDenominatorLimitTemplate())
tpcLimits.addTemplate(new SquareDerivativeLimitTemplate())
tpcLimits.addTemplate(new SquareRootDerivativeLimitTemplate())