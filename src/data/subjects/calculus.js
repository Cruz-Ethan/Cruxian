import Subject from "../../classes/Subject.js"
import tpcLimits from "../topics/calculus/limits.js"
import tpcPowerRule from "../topics/calculus/powerRule.js"

const sbjCalculus = new Subject("Calculus")
export default sbjCalculus
sbjCalculus.addTopic(tpcLimits)
sbjCalculus.addTopic(tpcPowerRule)