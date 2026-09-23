import Topic from "../../../classes/Topic"
import IterAllTemplate from "../../templates/python/iterators/IterAllTemplate"
import IterAnyTemplate from "../../templates/python/iterators/IterAnyTemplate"
import IterEnumerateStartTemplate from "../../templates/python/iterators/IterEnumerateStartTemplate"
import IterEnumerateTemplate from "../../templates/python/iterators/IterEnumerateTemplate"
import IterIterTemplate from "../../templates/python/iterators/IterIterTemplate"
import IterNextDefaultTemplate from "../../templates/python/iterators/IterNextDefaultTemplate"
import IterNextStopTemplate from "../../templates/python/iterators/IterNextStopTemplate"
import IterNextTemplate from "../../templates/python/iterators/IterNextTemplate"
import IterRangeErrorTemplate from "../../templates/python/iterators/IterRangeErrorTemplate"
import IterRangeStepTemplate from "../../templates/python/iterators/IterRangeStepTemplate"
import IterRangeTemplate from "../../templates/python/iterators/IterRangeTemplate"
import IterZipShortestTemplate from "../../templates/python/iterators/IterZipShortestTemplate"
import IterZipTemplate from "../../templates/python/iterators/IterZipTemplate"
import IterDictTemplate from "../../templates/python/iterators/IterDictTemplate";
import IterFilterTemplate from "../../templates/python/iterators/IterFilterTemplate";
import IterFrozenSetTemplate from "../../templates/python/iterators/IterFrozenSetTemplate";
import IterListTemplate from "../../templates/python/iterators/IterListTemplate";
import IterMapTemplate from "../../templates/python/iterators/IterMapTemplate";
import IterReversedTemplate from "../../templates/python/iterators/IterReversedTemplate";
import IterSetTemplate from "../../templates/python/iterators/IterSetTemplate";
import IterSortedTemplate from "../../templates/python/iterators/IterSortedTemplate";
import IterTupleTemplate from "../../templates/python/iterators/IterTupleTemplate";
import ObjLenTemplate from "../../templates/python/iterators/ObjLenTemplate";

const tpcPythonIterators = new Topic("Iterators")
export default tpcPythonIterators
tpcPythonIterators.addTemplate(new IterAllTemplate())
tpcPythonIterators.addTemplate(new IterAnyTemplate())

tpcPythonIterators.addTemplate(new IterIterTemplate())
tpcPythonIterators.addTemplate(new IterNextTemplate())
tpcPythonIterators.addTemplate(new IterNextDefaultTemplate())
tpcPythonIterators.addTemplate(new IterNextStopTemplate())

tpcPythonIterators.addTemplate(new IterRangeTemplate())
tpcPythonIterators.addTemplate(new IterRangeStepTemplate())
tpcPythonIterators.addTemplate(new IterRangeErrorTemplate())

tpcPythonIterators.addTemplate(new IterEnumerateTemplate())
tpcPythonIterators.addTemplate(new IterEnumerateStartTemplate())
tpcPythonIterators.addTemplate(new IterZipTemplate())
tpcPythonIterators.addTemplate(new IterZipShortestTemplate())

tpcPythonIterators.addTemplate(new ObjLenTemplate())
tpcPythonIterators.addTemplate(new IterSortedTemplate())
tpcPythonIterators.addTemplate(new IterReversedTemplate())
tpcPythonIterators.addTemplate(new IterFilterTemplate())
tpcPythonIterators.addTemplate(new IterMapTemplate())

tpcPythonIterators.addTemplate(new IterListTemplate())
tpcPythonIterators.addTemplate(new IterTupleTemplate())
tpcPythonIterators.addTemplate(new IterSetTemplate())
tpcPythonIterators.addTemplate(new IterFrozenSetTemplate())
tpcPythonIterators.addTemplate(new IterDictTemplate())