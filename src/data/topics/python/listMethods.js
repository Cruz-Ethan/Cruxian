import Topic from "../../../classes/Topic.js"
import ListAppendTemplate from "../../templates/python/list_methods/ListAppendTemplate.jsx"
import ListClearTemplate from "../../templates/python/list_methods/ListClearTemplate.jsx"
import ListCopyTemplate from "../../templates/python/list_methods/ListCopyTemplate.jsx"
import ListCountTemplate from "../../templates/python/list_methods/ListCountTemplate.jsx"
import ListExtendTemplate from "../../templates/python/list_methods/ListExtendTemplate.jsx"
import ListIndexEndTemplate from "../../templates/python/list_methods/ListIndexEndTemplate.jsx"
import ListIndexErrorTemplate from "../../templates/python/list_methods/ListIndexErrorTemplate.jsx"
import ListIndexSimpleTemplate from "../../templates/python/list_methods/ListIndexSimpleTemplate.jsx"
import ListIndexStartTemplate from "../../templates/python/list_methods/ListIndexStartTemplate.jsx"
import ListInsertOutOfBoundsTemplate from "../../templates/python/list_methods/ListInsertOutOfBoundsTemplate.jsx"
import ListInsertTemplate from "../../templates/python/list_methods/ListInsertTemplate.jsx"
import ListPopErrorTemplate from "../../templates/python/list_methods/ListPopErrorTemplate.jsx"
import ListPopIndexTemplate from "../../templates/python/list_methods/ListPopIndexTemplate.jsx"
import ListPopSimpleTemplate from "../../templates/python/list_methods/ListPopSimpleTemplate.jsx"
import ListRemoveErrorTemplate from "../../templates/python/list_methods/ListRemoveErrorTemplate.jsx"
import ListRemoveTemplate from "../../templates/python/list_methods/ListRemoveTemplate.jsx"
import ListReverseTemplate from "../../templates/python/list_methods/ListReverseTemplate.jsx"
import ListSortKeyTemplate from "../../templates/python/list_methods/ListSortKeyTemplate.jsx"
import ListSortReverseTemplate from "../../templates/python/list_methods/ListSortReverseTemplate.jsx"
import ListSortSimpleTemplate from "../../templates/python/list_methods/ListSortSimpleTemplate.jsx"

const tpcPythonListMethods = new Topic("List Methods")
export default tpcPythonListMethods
tpcPythonListMethods.addTemplate(new ListAppendTemplate())
tpcPythonListMethods.addTemplate(new ListClearTemplate())
tpcPythonListMethods.addTemplate(new ListCopyTemplate())
tpcPythonListMethods.addTemplate(new ListCountTemplate())
tpcPythonListMethods.addTemplate(new ListExtendTemplate())
tpcPythonListMethods.addTemplate(new ListIndexSimpleTemplate())
tpcPythonListMethods.addTemplate(new ListIndexStartTemplate())
tpcPythonListMethods.addTemplate(new ListIndexEndTemplate())
tpcPythonListMethods.addTemplate(new ListIndexErrorTemplate())
tpcPythonListMethods.addTemplate(new ListInsertTemplate())
tpcPythonListMethods.addTemplate(new ListInsertOutOfBoundsTemplate())
tpcPythonListMethods.addTemplate(new ListPopSimpleTemplate())
tpcPythonListMethods.addTemplate(new ListPopIndexTemplate())
tpcPythonListMethods.addTemplate(new ListPopErrorTemplate())
tpcPythonListMethods.addTemplate(new ListRemoveTemplate())
tpcPythonListMethods.addTemplate(new ListRemoveErrorTemplate())
tpcPythonListMethods.addTemplate(new ListReverseTemplate())
tpcPythonListMethods.addTemplate(new ListSortSimpleTemplate())
tpcPythonListMethods.addTemplate(new ListSortSimpleTemplate())
tpcPythonListMethods.addTemplate(new ListSortReverseTemplate())
tpcPythonListMethods.addTemplate(new ListSortKeyTemplate())