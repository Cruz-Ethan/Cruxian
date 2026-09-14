import Topic from "../../../classes/Topic.js"
import IntegerPowerRuleDerivativeTemplate from "../../templates/calculus/power_rule/IntegerPowerRuleDerivativeTemplate.jsx"
import DenominatorPowerRuleDerivativeTemplate from "../../templates/calculus/power_rule/DenominatorPowerRuleDerivativeTemplate.jsx"
import SurdPowerRuleDerivativeTemplate from "../../templates/calculus/power_rule/SurdPowerRuleDerivativeTemplate.jsx"

const tpcPowerRule = new Topic("Power Rule")
export default tpcPowerRule
tpcPowerRule.addTemplate(new IntegerPowerRuleDerivativeTemplate())
tpcPowerRule.addTemplate(new DenominatorPowerRuleDerivativeTemplate())
tpcPowerRule.addTemplate(new SurdPowerRuleDerivativeTemplate())