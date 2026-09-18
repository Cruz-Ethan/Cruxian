import Topic from "../../../classes/Topic";
import StringJoinTemplate from "../../templates/python/str_split_methods/StringJoinTemplate";
import StringPartitionNoneTemplate from "../../templates/python/str_split_methods/StringPartitionNoneTemplate";
import StringPartitionTemplate from "../../templates/python/str_split_methods/StringPartitionTemplate";
import StringRightPartitionTemplate from "../../templates/python/str_split_methods/StringRightPartitionTemplate";
import StringRightSplitTemplate from "../../templates/python/str_split_methods/StringRightSplitTemplate";
import StringSplitLinesIncludeTemplate from "../../templates/python/str_split_methods/StringSplitLinesIncludeTemplate";
import StringSplitLinesTemplate from "../../templates/python/str_split_methods/StringSplitLinesTemplate";
import StringSplitMaxTemplate from "../../templates/python/str_split_methods/StringSplitMaxTemplate";
import StringSplitNegativeTemplate from "../../templates/python/str_split_methods/StringSplitNegativeTemplate";
import StringSplitSeparatorTemplate from "../../templates/python/str_split_methods/StringSplitSeparatorTemplate";
import StringSplitTemplate from "../../templates/python/str_split_methods/StringSplitTemplate";
import StringSplitTypeErrorTemplate from "../../templates/python/str_split_methods/StringSplitTypeError";
import StringSplitValueErrorTemplate from "../../templates/python/str_split_methods/StringSplitValueError";

const tpcPythonStringSplitMethods = new Topic("String Split Methods")
export default tpcPythonStringSplitMethods

tpcPythonStringSplitMethods.addTemplate(new StringJoinTemplate())
tpcPythonStringSplitMethods.addTemplate(new StringSplitTemplate())
tpcPythonStringSplitMethods.addTemplate(new StringSplitSeparatorTemplate())
tpcPythonStringSplitMethods.addTemplate(new StringSplitMaxTemplate())

tpcPythonStringSplitMethods.addTemplate(new StringSplitNegativeTemplate())
tpcPythonStringSplitMethods.addTemplate(new StringSplitTypeErrorTemplate())
tpcPythonStringSplitMethods.addTemplate(new StringSplitValueErrorTemplate())

tpcPythonStringSplitMethods.addTemplate(new StringRightSplitTemplate())
tpcPythonStringSplitMethods.addTemplate(new StringSplitLinesTemplate())
tpcPythonStringSplitMethods.addTemplate(new StringSplitLinesIncludeTemplate())

tpcPythonStringSplitMethods.addTemplate(new StringPartitionTemplate())
tpcPythonStringSplitMethods.addTemplate(new StringRightPartitionTemplate())
tpcPythonStringSplitMethods.addTemplate(new StringPartitionNoneTemplate())