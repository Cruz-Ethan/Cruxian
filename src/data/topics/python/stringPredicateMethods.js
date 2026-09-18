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

const tpcStringPredicateMethods = new Topic("String Predicate Methods")
export default tpcStringPredicateMethods
tpcStringPredicateMethods.addTemplate(new StringIsAlphaTemplate())
tpcStringPredicateMethods.addTemplate(new StringIsDecimalTemplate())
tpcStringPredicateMethods.addTemplate(new StringIsAlnumTemplate())
tpcStringPredicateMethods.addTemplate(new StringIsAsciiTemplate())
tpcStringPredicateMethods.addTemplate(new StringIsSpaceTemplate())

tpcStringPredicateMethods.addTemplate(new StringIsUpperTemplate())
tpcStringPredicateMethods.addTemplate(new StringIsLowerTemplate())

tpcStringPredicateMethods.addTemplate(new StringIsIdentifierTemplate())
tpcStringPredicateMethods.addTemplate(new StringIsTitleTemplate())
tpcStringPredicateMethods.addTemplate(new StringIsPrintableTemplate())

tpcStringPredicateMethods.addTemplate(new StringIdentifierTestTemplate())
tpcStringPredicateMethods.addTemplate(new StringTitleTestTemplate())
tpcStringPredicateMethods.addTemplate(new StringPrintableTestTemplate())

tpcStringPredicateMethods.addTemplate(new StringStartsWithTemplate())
tpcStringPredicateMethods.addTemplate(new StringStartsWithIndexTemplate())
tpcStringPredicateMethods.addTemplate(new StringEndsWithTemplate())
tpcStringPredicateMethods.addTemplate(new StringEndsWithIndexTemplate())