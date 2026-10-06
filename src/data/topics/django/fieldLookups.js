import Topic from "../../../classes/Topic";
import LookupContainsTemplate from "../../templates/django/models/LookupContainsTemplate";
import LookupDayTemplate from "../../templates/django/models/LookupDayTemplate";
import LookupExactTemplate from "../../templates/django/models/LookupExactTemplate";
import LookupGreaterTemplate from "../../templates/django/models/LookupGreaterTemplate";
import LookupInTemplate from "../../templates/django/models/LookupInTemplate";
import LookupMonthTemplate from "../../templates/django/models/LookupMonthTemplate";
import LookupNullTemplate from "../../templates/django/models/LookupNullTemplate";
import LookupOrderTemplate from "../../templates/django/models/LookupOrderTemplate";
import LookupOrTemplate from "../../templates/django/models/LookupOrTemplate";
import LookupYearTemplate from "../../templates/django/models/LookupYearTemplate";

const tpcDjangoFieldLookups = new Topic("Field Lookups")
export default tpcDjangoFieldLookups
tpcDjangoFieldLookups.addTemplate(new LookupExactTemplate())
tpcDjangoFieldLookups.addTemplate(new LookupContainsTemplate())
tpcDjangoFieldLookups.addTemplate(new LookupGreaterTemplate())
tpcDjangoFieldLookups.addTemplate(new LookupInTemplate())
tpcDjangoFieldLookups.addTemplate(new LookupNullTemplate())
tpcDjangoFieldLookups.addTemplate(new LookupYearTemplate())
tpcDjangoFieldLookups.addTemplate(new LookupMonthTemplate())
tpcDjangoFieldLookups.addTemplate(new LookupDayTemplate())
tpcDjangoFieldLookups.addTemplate(new LookupOrderTemplate())
tpcDjangoFieldLookups.addTemplate(new LookupOrTemplate())