import Topic from "../../../classes/Topic";
import ArrayEveryTemplate from "../../templates/javascript/array_methods/ArrayEveryTemplate";
import ArrayFilterTemplate from "../../templates/javascript/array_methods/ArrayFilterTemplate";
import ArrayFindTemplate from "../../templates/javascript/array_methods/ArrayFindTemplate";
import ArrayForEachTemplate from "../../templates/javascript/array_methods/ArrayForEachTemplate";
import ArrayIncludesTemplate from "../../templates/javascript/array_methods/ArrayIncludesTemplate";
import ArrayJoinTemplate from "../../templates/javascript/array_methods/ArrayJoinTemplate";
import ArrayLastIndexOfTemplate from "../../templates/javascript/array_methods/ArrayLastIndexOfTemplate";
import ArrayLengthTemplate from "../../templates/javascript/array_methods/ArrayLengthTemplate";
import ArrayMapTemplate from "../../templates/javascript/array_methods/ArrayMapTemplate";
import ArrayPopMissingTemplate from "../../templates/javascript/array_methods/ArrayPopMissingTemplate";
import ArrayPopTemplate from "../../templates/javascript/array_methods/ArrayPopTemplate";
import ArrayPushTemplate from "../../templates/javascript/array_methods/ArrayPushTemplate";
import ArrayReduceTemplate from "../../templates/javascript/array_methods/ArrayReduceTemplate";
import ArrayShiftTemplate from "../../templates/javascript/array_methods/ArrayShiftTemplate";
import ArraySliceOutOfBoundsTemplate from "../../templates/javascript/array_methods/ArraySliceOutOfBoundsTemplate";
import ArraySliceTemplate from "../../templates/javascript/array_methods/ArraySliceTemplate";
import ArraySomeTemplate from "../../templates/javascript/array_methods/ArraySomeTemplate";
import ArrayUnshiftTemplate from "../../templates/javascript/array_methods/ArrayUnshiftTemplate";
import ArrayIndexOfTemplate from "../../templates/javascript/array_methods/ArrIndexOfTemplate";

const tpcJavaScriptArrayMethods = new Topic("Array Methods")
export default tpcJavaScriptArrayMethods
tpcJavaScriptArrayMethods.addTemplate(new ArrayPushTemplate())
tpcJavaScriptArrayMethods.addTemplate(new ArrayPopTemplate())
tpcJavaScriptArrayMethods.addTemplate(new ArrayShiftTemplate())
tpcJavaScriptArrayMethods.addTemplate(new ArrayUnshiftTemplate())
tpcJavaScriptArrayMethods.addTemplate(new ArrayPopMissingTemplate())
tpcJavaScriptArrayMethods.addTemplate(new ArrayLengthTemplate())
tpcJavaScriptArrayMethods.addTemplate(new ArrayJoinTemplate())
tpcJavaScriptArrayMethods.addTemplate(new ArraySliceTemplate())
tpcJavaScriptArrayMethods.addTemplate(new ArraySliceOutOfBoundsTemplate())
tpcJavaScriptArrayMethods.addTemplate(new ArrayIncludesTemplate())
tpcJavaScriptArrayMethods.addTemplate(new ArrayIndexOfTemplate())
tpcJavaScriptArrayMethods.addTemplate(new ArrayLastIndexOfTemplate())

tpcJavaScriptArrayMethods.addTemplate(new ArrayFilterTemplate())
tpcJavaScriptArrayMethods.addTemplate(new ArrayMapTemplate())
tpcJavaScriptArrayMethods.addTemplate(new ArrayFindTemplate())
tpcJavaScriptArrayMethods.addTemplate(new ArrayForEachTemplate())
tpcJavaScriptArrayMethods.addTemplate(new ArrayReduceTemplate())
tpcJavaScriptArrayMethods.addTemplate(new ArraySomeTemplate())
tpcJavaScriptArrayMethods.addTemplate(new ArrayEveryTemplate())