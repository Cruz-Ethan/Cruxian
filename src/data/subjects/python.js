import Subject from "../../classes/Subject.js"
import Topic from "../../classes/Topic.js"
import ListAppendTemplate from "../templates/python/ListAppendTemplate.jsx"
import ListClearTemplate from "../templates/python/ListClearTemplate.jsx"
import ListCopyTemplate from "../templates/python/ListCopyTemplate.jsx"
import ListCountTemplate from "../templates/python/ListCountTemplate.jsx"
import ListExtendTemplate from "../templates/python/ListExtendTemplate.jsx"
import ListIndexEndTemplate from "../templates/python/ListIndexEndTemplate.jsx"
import ListIndexErrorTemplate from "../templates/python/ListIndexErrorTemplate.jsx"
import ListIndexSimpleTemplate from "../templates/python/ListIndexSimpleTemplate.jsx"
import ListIndexStartTemplate from "../templates/python/ListIndexStartTemplate.jsx"
import ListInsertOutOfBoundsTemplate from "../templates/python/ListInsertOutOfBoundsTemplate.jsx"
import ListInsertTemplate from "../templates/python/ListInsertTemplate.jsx"
import ListPopErrorTemplate from "../templates/python/ListPopErrorTemplate.jsx"
import ListPopIndexTemplate from "../templates/python/ListPopIndexTemplate.jsx"
import ListPopSimpleTemplate from "../templates/python/ListPopSimpleTemplate.jsx"
import ListRemoveErrorTemplate from "../templates/python/ListRemoveErrorTemplate.jsx"
import ListRemoveTemplate from "../templates/python/ListRemoveTemplate.jsx"
import ListReverseTemplate from "../templates/python/ListReverseTemplate.jsx"
import ListSortKeyTemplate from "../templates/python/ListSortKeyTemplate.jsx"
import ListSortReverseTemplate from "../templates/python/ListSortReverseTemplate.jsx"
import ListSortSimpleTemplate from "../templates/python/ListSortSimpleTemplate.jsx"

const sbjPython = new Subject("Python")
export default sbjPython

const tpcPythonListMethods = new Topic("List Methods")
sbjPython.addTopic(tpcPythonListMethods)

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