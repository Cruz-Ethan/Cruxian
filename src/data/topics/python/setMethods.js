import Topic from "../../../classes/Topic.js"
import SetAddTemplate from "../../templates/python/set_methods/SetAddTemplate.jsx"
import SetClearTemplate from "../../templates/python/set_methods/SetClearTemplate.jsx"
import SetCopyTemplate from "../../templates/python/set_methods/SetCopyTemplate.jsx"
import SetDifferenceMultipleTemplate from "../../templates/python/set_methods/SetDifferenceMultipleTemplate.jsx"
import SetDifferenceSimpleTemplate from "../../templates/python/set_methods/SetDifferenceSimpleTemplate.jsx"
import SetDifferenceUpdateMultipleTemplate from "../../templates/python/set_methods/SetDifferenceUpdateMultipleTemplate.jsx"
import SetDifferenceUpdateSimpleTemplate from "../../templates/python/set_methods/SetDifferenceUpdateSimpleTemplate.jsx"
import SetDiscardMissingTemplate from "../../templates/python/set_methods/SetDiscardMissingTemplate.jsx"
import SetDiscardTemplate from "../../templates/python/set_methods/SetDiscardTemplate.jsx"
import SetIntersectionMultipleTemplate from "../../templates/python/set_methods/SetIntersectionMultipleTemplate.jsx"
import SetIntersectionSimpleTemplate from "../../templates/python/set_methods/SetIntersectionSimpleTemplate.jsx"
import SetIntersectionUpdateMultipleTemplate from "../../templates/python/set_methods/SetIntersectionUpdateMultipleTemplate.jsx"
import SetIntersectionUpdateSimpleTemplate from "../../templates/python/set_methods/SetIntersectionUpdateSimpleTemplate.jsx"
import SetIsDisjointTemplate from "../../templates/python/set_methods/SetIsDisjointTemplate.jsx"
import SetIsSubsetTemplate from "../../templates/python/set_methods/SetIsSubsetTemplate.jsx"
import SetIsSupersetTemplate from "../../templates/python/set_methods/SetIsSupersetTemplate.jsx"
import SetPopErrorTemplate from "../../templates/python/set_methods/SetPopErrorTemplate.jsx"
import SetPopTemplate from "../../templates/python/set_methods/SetPopTemplate.jsx"
import SetRemoveTemplate from "../../templates/python/set_methods/SetRemoveTemplate.jsx"
import SetRemoveMissingTemplate from "../../templates/python/set_methods/SetRemovingMissingTemplate.jsx"
import SetSymmetricDifferenceTemplate from "../../templates/python/set_methods/SetSymmetricDifferenceTemplate.jsx"
import SetSymmetricDifferenceUpdateTemplate from "../../templates/python/set_methods/SetSymmetricDifferenceUpdateTemplate.jsx"
import SetUnionMultipleTemplate from "../../templates/python/set_methods/SetUnionMultipleTemplate.jsx"
import SetUnionSimpleTemplate from "../../templates/python/set_methods/SetUnionSimpleTemplate.jsx"
import SetUpdateMultipleTemplate from "../../templates/python/set_methods/SetUpdateMultipleTemplate.jsx"
import SetUpdateSimpleTemplate from "../../templates/python/set_methods/SetUpdateSimpleTemplate.jsx"

const tpcPythonSetMethods = new Topic("Set Methods")
export default tpcPythonSetMethods
tpcPythonSetMethods.addTemplate(new SetAddTemplate())
tpcPythonSetMethods.addTemplate(new SetClearTemplate())
tpcPythonSetMethods.addTemplate(new SetCopyTemplate())
tpcPythonSetMethods.addTemplate(new SetDifferenceSimpleTemplate())
tpcPythonSetMethods.addTemplate(new SetDifferenceMultipleTemplate())
tpcPythonSetMethods.addTemplate(new SetDifferenceUpdateSimpleTemplate())
tpcPythonSetMethods.addTemplate(new SetDifferenceUpdateMultipleTemplate())
tpcPythonSetMethods.addTemplate(new SetDiscardTemplate())
tpcPythonSetMethods.addTemplate(new SetDiscardMissingTemplate())
tpcPythonSetMethods.addTemplate(new SetIntersectionSimpleTemplate())
tpcPythonSetMethods.addTemplate(new SetIntersectionMultipleTemplate())
tpcPythonSetMethods.addTemplate(new SetIntersectionUpdateSimpleTemplate())
tpcPythonSetMethods.addTemplate(new SetIntersectionUpdateMultipleTemplate())
tpcPythonSetMethods.addTemplate(new SetIsDisjointTemplate())
tpcPythonSetMethods.addTemplate(new SetIsSubsetTemplate())
tpcPythonSetMethods.addTemplate(new SetIsSupersetTemplate())
tpcPythonSetMethods.addTemplate(new SetPopTemplate())
tpcPythonSetMethods.addTemplate(new SetPopErrorTemplate())
tpcPythonSetMethods.addTemplate(new SetRemoveTemplate())
tpcPythonSetMethods.addTemplate(new SetRemoveMissingTemplate())
tpcPythonSetMethods.addTemplate(new SetSymmetricDifferenceTemplate())
tpcPythonSetMethods.addTemplate(new SetSymmetricDifferenceUpdateTemplate())
tpcPythonSetMethods.addTemplate(new SetUnionSimpleTemplate())
tpcPythonSetMethods.addTemplate(new SetUnionMultipleTemplate())
tpcPythonSetMethods.addTemplate(new SetUpdateSimpleTemplate())
tpcPythonSetMethods.addTemplate(new SetUpdateMultipleTemplate())