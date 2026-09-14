import Topic from "../../../classes/Topic";
import ListAccessTemplate from "../../templates/python/list_operations/ListAccessTemplate";
import ListAddTemplate from "../../templates/python/list_operations/ListAddTemplate";
import ListDeleteTemplate from "../../templates/python/list_operations/ListDeleteTemplate";
import ListMathShallowTemplate from "../../templates/python/list_operations/ListMathShallowTemplate";
import ListMultiplyTemplate from "../../templates/python/list_operations/ListMultiplyTemplate";
import ListSliceTemplate from "../../templates/python/list_operations/ListSliceTemplate";
import ListUpdateTemplate from "../../templates/python/list_operations/ListUpdateTemplate";

const tpcPythonListOperations = new Topic("List Operations")
export default tpcPythonListOperations
tpcPythonListOperations.addTemplate(new ListAddTemplate())
tpcPythonListOperations.addTemplate(new ListMultiplyTemplate())
tpcPythonListOperations.addTemplate(new ListMathShallowTemplate())
tpcPythonListOperations.addTemplate(new ListAccessTemplate)
tpcPythonListOperations.addTemplate(new ListUpdateTemplate())
tpcPythonListOperations.addTemplate(new ListDeleteTemplate())
tpcPythonListOperations.addTemplate(new ListSliceTemplate())