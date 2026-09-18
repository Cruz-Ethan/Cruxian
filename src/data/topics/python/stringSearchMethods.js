import Topic from "../../../classes/Topic"
import StringCountIndexTemplate from "../../templates/python/str_search_methods/StringCountIndexTemplate"
import StringCountTemplate from "../../templates/python/str_search_methods/StringCountTemplate"
import StringFindIndexTemplate from "../../templates/python/str_search_methods/StringFindIndexTemplate"
import StringFindNothingTemplate from "../../templates/python/str_search_methods/StringFindNothingTemplate"
import StringFindTemplate from "../../templates/python/str_search_methods/StringFindTemplate"
import StringIndexIndexTemplate from "../../templates/python/str_search_methods/StringIndexIndexTemplate"
import StringIndexNothingTemplate from "../../templates/python/str_search_methods/StringIndexNothingTemplate"
import StringIndexTemplate from "../../templates/python/str_search_methods/StringIndexTemplate"
import StringRightFindIndexTemplate from "../../templates/python/str_search_methods/StringRightFindIndexTemplate"
import StringRightFindTemplate from "../../templates/python/str_search_methods/StringRightFindTemplate"
import StringRightIndexIndexTemplate from "../../templates/python/str_search_methods/StringRightIndexIndexTemplate"
import StringRightIndexTemplate from "../../templates/python/str_search_methods/StringRightIndexTemplate"
import StringSearchOutOfBoundsTemplate from "../../templates/python/str_search_methods/StringSearchOutOfBoundsTemplate"

const tpcPythonStringSearchMethods = new Topic('String Search Methods')
export default tpcPythonStringSearchMethods

tpcPythonStringSearchMethods.addTemplate(new StringCountTemplate())
tpcPythonStringSearchMethods.addTemplate(new StringFindTemplate())
tpcPythonStringSearchMethods.addTemplate(new StringRightFindTemplate())
tpcPythonStringSearchMethods.addTemplate(new StringIndexTemplate())
tpcPythonStringSearchMethods.addTemplate(new StringRightIndexTemplate())

tpcPythonStringSearchMethods.addTemplate(new StringCountIndexTemplate())
tpcPythonStringSearchMethods.addTemplate(new StringFindIndexTemplate())
tpcPythonStringSearchMethods.addTemplate(new StringRightFindIndexTemplate())
tpcPythonStringSearchMethods.addTemplate(new StringIndexIndexTemplate())
tpcPythonStringSearchMethods.addTemplate(new StringRightIndexIndexTemplate())

tpcPythonStringSearchMethods.addTemplate(new StringSearchOutOfBoundsTemplate())
tpcPythonStringSearchMethods.addTemplate(new StringFindNothingTemplate())
tpcPythonStringSearchMethods.addTemplate(new StringIndexNothingTemplate())