import Topic from "../../../classes/Topic";
import StringEndsWithIndexTemplate from "../../templates/python/str_predicate_methods/StringEndsWithIndexTemplate";
import StringEndsWithTemplate from "../../templates/python/str_predicate_methods/StringEndsWithTemplate";
import StringIdentifierTestTemplate from "../../templates/python/str_predicate_methods/StringIdentifierTestTemplate";
import StringIsAlnumTemplate from "../../templates/python/str_predicate_methods/StringIsAlnumTemplate";
import StringIsAlphaTemplate from "../../templates/python/str_predicate_methods/StringIsAlphaTemplate";
import StringIsAsciiTemplate from "../../templates/python/str_predicate_methods/StringIsAsciiTemplate";
import StringIsDecimalTemplate from "../../templates/python/str_predicate_methods/StringIsDecimalTemplate";
import StringIsIdentifierTemplate from "../../templates/python/str_predicate_methods/StringIsIdentifierTemplate";
import StringIsLowerTemplate from "../../templates/python/str_predicate_methods/StringIsLowerTemplate";
import StringIsPrintableTemplate from "../../templates/python/str_predicate_methods/StringIsPrintableTemplate";
import StringIsSpaceTemplate from "../../templates/python/str_predicate_methods/StringIsSpaceTemplate";
import StringIsTitleTemplate from "../../templates/python/str_predicate_methods/StringIsTitleTemplate";
import StringIsUpperTemplate from "../../templates/python/str_predicate_methods/StringIsUpperTemplate";
import StringPrintableTestTemplate from "../../templates/python/str_predicate_methods/StringPrintableTestTemplate";
import StringStartsWithIndexTemplate from "../../templates/python/str_predicate_methods/StringStartsWithIndexTemplate";
import StringStartsWithTemplate from "../../templates/python/str_predicate_methods/StringStartsWithTemplate";
import StringTitleTestTemplate from "../../templates/python/str_predicate_methods/StringTitleTestTemplate";

const tpcPythonStringPredicateMethods = new Topic("String Predicate Methods")
export default tpcPythonStringPredicateMethods
tpcPythonStringPredicateMethods.addTemplate(new StringIsAlphaTemplate())
tpcPythonStringPredicateMethods.addTemplate(new StringIsDecimalTemplate())
tpcPythonStringPredicateMethods.addTemplate(new StringIsAlnumTemplate())
tpcPythonStringPredicateMethods.addTemplate(new StringIsAsciiTemplate())
tpcPythonStringPredicateMethods.addTemplate(new StringIsSpaceTemplate())

tpcPythonStringPredicateMethods.addTemplate(new StringIsUpperTemplate())
tpcPythonStringPredicateMethods.addTemplate(new StringIsLowerTemplate())

tpcPythonStringPredicateMethods.addTemplate(new StringIsIdentifierTemplate())
tpcPythonStringPredicateMethods.addTemplate(new StringIsTitleTemplate())
tpcPythonStringPredicateMethods.addTemplate(new StringIsPrintableTemplate())

tpcPythonStringPredicateMethods.addTemplate(new StringIdentifierTestTemplate())
tpcPythonStringPredicateMethods.addTemplate(new StringTitleTestTemplate())
tpcPythonStringPredicateMethods.addTemplate(new StringPrintableTestTemplate())

tpcPythonStringPredicateMethods.addTemplate(new StringStartsWithTemplate())
tpcPythonStringPredicateMethods.addTemplate(new StringStartsWithIndexTemplate())
tpcPythonStringPredicateMethods.addTemplate(new StringEndsWithTemplate())
tpcPythonStringPredicateMethods.addTemplate(new StringEndsWithIndexTemplate())