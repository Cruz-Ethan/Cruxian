import Topic from "../../../classes/Topic";
import DateConstructorWhichTemplate from "../../templates/javascript/dates/DateConstructorWhichTemplate";
import DateGetDateTemplate from "../../templates/javascript/dates/DateGetDAteTemplate";
import DateGetDayTemplate from "../../templates/javascript/dates/DateGetDayTemplate";
import DateGetHoursTemplate from "../../templates/javascript/dates/DateGetHoursTemplate";
import DateGetMinutesTemplate from "../../templates/javascript/dates/DateGetMinutesTemplate";
import DateGetMonthTemplate from "../../templates/javascript/dates/DateGetMonthTemplate";
import DateGetSecondsTemplate from "../../templates/javascript/dates/DateGetSecondsTemplate";
import DateGetYearTemplate from "../../templates/javascript/dates/DateGetYearTemplate";
import DateLocaleStringTemplate from "../../templates/javascript/dates/DateLocaleStringTemplate";
import DateNowConstructorTemplate from "../../templates/javascript/dates/DateNowConstructorTemplate";
import DateNumberConstructorTemplate from "../../templates/javascript/dates/DateNumberConstructorTemplate";
import DateSetDateTemplate from "../../templates/javascript/dates/DateSetDateTemplate";
import DateSetHoursTemplate from "../../templates/javascript/dates/DateSetHoursTemplate";
import DateSetMinutesTemplate from "../../templates/javascript/dates/DateSetMinutesTemplate";
import DateSetMonthTemplate from "../../templates/javascript/dates/DateSetMonthTemplate";
import DateSetSecondsTemplate from "../../templates/javascript/dates/DateSetSecondsTemplate";
import DateSetYearTemplate from "../../templates/javascript/dates/DateSetYearTemplate";
import DateStringConstructorTemplate from "../../templates/javascript/dates/DateStringConstructorTemplate";
import TimeNumberConstructorTemplate from "../../templates/javascript/dates/TimeNumberConstructorTemplate";
import TimeStringConstructorTemplate from "../../templates/javascript/dates/TimeStringConstructorTemplate";

const tpcJavaScriptDates = new Topic('Dates')
export default tpcJavaScriptDates
tpcJavaScriptDates.addTemplate(new DateNowConstructorTemplate())
tpcJavaScriptDates.addTemplate(new DateNumberConstructorTemplate())
tpcJavaScriptDates.addTemplate(new TimeNumberConstructorTemplate())
tpcJavaScriptDates.addTemplate(new DateStringConstructorTemplate())
tpcJavaScriptDates.addTemplate(new DateConstructorWhichTemplate())
tpcJavaScriptDates.addTemplate(new TimeStringConstructorTemplate())
tpcJavaScriptDates.addTemplate(new DateLocaleStringTemplate())

tpcJavaScriptDates.addTemplate(new DateGetYearTemplate())
tpcJavaScriptDates.addTemplate(new DateGetMonthTemplate())
tpcJavaScriptDates.addTemplate(new DateGetDateTemplate())
tpcJavaScriptDates.addTemplate(new DateGetDayTemplate())
tpcJavaScriptDates.addTemplate(new DateGetHoursTemplate())
tpcJavaScriptDates.addTemplate(new DateGetMinutesTemplate())
tpcJavaScriptDates.addTemplate(new DateGetSecondsTemplate())

tpcJavaScriptDates.addTemplate(new DateSetYearTemplate())
tpcJavaScriptDates.addTemplate(new DateSetMonthTemplate())
tpcJavaScriptDates.addTemplate(new DateSetDateTemplate())
tpcJavaScriptDates.addTemplate(new DateSetHoursTemplate())
tpcJavaScriptDates.addTemplate(new DateSetMinutesTemplate())
tpcJavaScriptDates.addTemplate(new DateSetSecondsTemplate())