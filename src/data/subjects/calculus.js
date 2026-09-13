import Subject from "../../classes/Subject.js"
import Topic from "../../classes/Topic.js"
import NonZeroDenominatorLimitTemplate from "../templates/calculus/NonZeroDenominatorLimitTemplate.jsx"
import ZeroDenominatorLimitTemplate from "../templates/calculus/ZeroDenominatorLimitTemplate.jsx"
import PolynomialLimitTemplate from "../templates/calculus/PolynomiaLimitTemplate.jsx"
import SquareDerivativeLimitTemplate from "../templates/calculus/SquareDerivativeLimitTemplate.jsx"
import SquareRootDerivativeLimitTemplate from "../templates/calculus/SquareRootDerivativeLimitTemplate.jsx"
import IntegerPowerRuleDerivativeTemplate from "../templates/calculus/IntegerPowerRuleDerivativeTemplate.jsx"
import DenominatorPowerRuleDerivativeTemplate from "../templates/calculus/DenominatorPowerRuleDerivativeTemplate.jsx"
import SurdPowerRuleDerivativeTemplate from "../templates/calculus/SurdPowerRuleDerivativeTemplate.jsx"

const sbjCalculus = new Subject("Calculus")
export default sbjCalculus

const tpcLimits = new Topic("Limits")
sbjCalculus.addTopic(tpcLimits)

tpcLimits.addTemplate(new PolynomialLimitTemplate())
tpcLimits.addTemplate(new NonZeroDenominatorLimitTemplate())
tpcLimits.addTemplate(new ZeroDenominatorLimitTemplate())
tpcLimits.addTemplate(new SquareDerivativeLimitTemplate())
tpcLimits.addTemplate(new SquareRootDerivativeLimitTemplate())

const tpcPowerRule = new Topic("Power Rule")
sbjCalculus.addTopic(tpcPowerRule)

tpcPowerRule.addTemplate(new IntegerPowerRuleDerivativeTemplate())
tpcPowerRule.addTemplate(new DenominatorPowerRuleDerivativeTemplate())
tpcPowerRule.addTemplate(new SurdPowerRuleDerivativeTemplate())