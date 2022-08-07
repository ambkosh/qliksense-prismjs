# qliksense-prismjs
Qlik Sense script highlighting with prism.js

Basic language definition via prism.js. Follow [this](https://prismjs.com/extending.html#creating-a-new-language-definition) guide from the official documentation.

The core language definition is in prism-qliksense.js. I took the list of keywords from [this](https://github.com/MattFryer/Qlik-Notepad-plus-plus) project by Matt Fryer
with a much more in depth functionality for Notepad++

## Definition

I wanted to keep the entire definition with the [standard tokens of prism.js](https://prismjs.com/tokens.html#standard-tokens). I didn't want to have the headache that the definition wouldn't work with different themes.

### variable

```javascript
    'variable': {
        pattern: /(?<!\/\/.*)(?<=let |set )\w+/i,
        lookbehind: true,
        greedy: true
    },
```

I mark everything after let and set as a variable that is a full word and is not after // (comment)

### constant for tables

```javascript
    'constant': {
        pattern: /(\w*)(?<!lib)(?::)/
    },
```

Every word that is followed by a ":" but that isn't preceeded by lib. Constant is not the correct name for it it was "free" from the standard tokens.

### property for fields names in tables

```javascript
    'property': [
        {
            pattern: /(?<!\/\/.*)(?<=as\ )\w+/i,
            lockbehind: true,
            greedy: true
        },
        /\"(?<=")(.*)(?=")\"/,
        {
            pattern: /(?<=LOAD)(.)*(?=FROM)/ms,
            lockbehind: true,
            greedy: true,
            inside: {
                'punctuation': /,/g
            }
        },

```

Everything between LOAD [...] FROM and everything after "as". I used the inside syntax to exclude the ",". Can easily be extended to highlight other things within.

### keyword

```javascript
    'keyword': /(?<!\/\/.*)\b(Add|Alias|And|As|Autogenerate|Binary|Buffer|Call|Case|Comment|Concatenate|Connect|Crosstable|Custom|Default|Derive|Detail|Dimension|Directory|Disconnect|Drop|Distinct|Do|Each|Else|Elseif|Endif|Endsub|End|Endswitch|Execute|First|FlushLog|For|Force|From|From_Field|Generic|Hierarchy|10|HierarchyBelongsTo|10|if|In|Inline|Inputfield|10|Intervalmatch|10|Into|join|load|Let|Lib|Loop|Loosen|Map|Measure|Native|Next|Noconcatenate|Not|NullAsNull|NullAsValue|ODBC|OLEDB|Or|Qualify|Replace|Resident|Sample|Script|Section|Select|Semantic|Set|Sleep|SQL|SQLColumns|SQLTables|SQLTypes|Star|Step|Store|Sub|Switch|Table|Then|To|Trace|Unless|Unmap|Unqualify|Untag|Using|When|Where|With)\b/i,

```

Pretty self-explanatory

### builtin

```javascript
    'builtin': /\b(Acos|Addmonths|Addyears|Age|Alt|Applycodepage|Applymap|Argb|Asin|Atan|Atan2|Attribute|Author|Autonumber|Autonumberhash128|Autonumberhash256|Avg|Bitcount|Black|Blackandschole|Blue|Brown|Capitalize|Ceil|Chi2test_chi2|Chi2test_df|Chi2test_p|Chidist|Chiinv|Chr|Class|Clientplatform|Color|Colormaphue|Colormapjet|Colormix1|Colormix2|Combin|Computername|Concat|Connectstring|Converttolocaltime|Correl|Cos|Cosh|Count|Cyan|Darkgray|Day|Dayend|Daylightsaving|Dayname|Daynumberofquarter|Daynumberofyear|Daystart|Div|DocumentName|DocumentPath|DocumentTitle|Dual|E|Evaluate|Even|Exists|Exp|Fabs|Fact|False|Fdist|FieldIndex|FieldName|FieldNumber|FieldValue|FieldValueCount|FileBaseName|FileDir|FileExtension|FileList|FileName|FilePath|FileSize|FileTime|FindOneOf|Finv|FirstSortedValue|FirstValue|FirstWorkDate|Floor|Fmod|Frac|Fractile|Fv|GetExtendedProperty|GetFolderPath|GetObjectField|GetRegistryString|GMT|Green|Hash128|Hash160|Hash256|Hour|HSL|InDay|InDayToTime|Index|InLunarWeek|InLunarWeekToDate|InMonth|InMonths|InMonthsToDate|InMonthToDate|Input|InputAvg|InputSum|InQuarter|InQuarterToDate|Interval|Interval#|InWeek|InWeekToDate|InYear|InYearToDate|IRR|IsNull|IsNum|IsPartialReload|IsText|IterNo|KeepChar|Kurtosis|LastValue|LastWorkDate|Len|LightBlue|LightCyan|LightGray|LightGreen|LightMagenta|LightRed|LINEST_B|LINEST_DF|LINEST_F|LINEST_M|LINEST_R2|LINEST_SEB|LINEST_SEM|LINEST_SEY|LINEST_SSREG|LINEST_SSRESID|LocalTime|log|log10|Lookup|Lower|LTrim|LunarWeekEnd|LunarWeekName|LunarWeekStart|Magenta|MakeDate|MakeTime|MakeWeekDate|MapSubString|Match|Max|MaxString|Median|Mid|Min|MinString|Minute|MissingCount|MixMatch|Mod|Mode|Money|Money#|Month|MonthEnd|MonthName|MonthsEnd|MonthsName|MonthsStart|MonthStart|MsgBox|NetWorkDays|NoOfFields|NoOfReports|NoOfRows|NoOfTables|NORMDIST|NORMINV|Now|nPer|NPV|Null|NullCount|Num|Num|NumAvg|NumCount|NumericCount|NumMax|NumMin|NumSum|Odd|Only|Ord|OSUser|Peek|Permut|Pi|Pick|Pmt|pow|Previous|PurgeChar|PV|QlikTechBlue|QlikTechGray|QlikViewVersion|QuarterEnd|QuarterName|QuarterStart|QvdCreateTime|QvdFieldName|QvdNoOfFields|QvdNoOfRecords|QvdTableName|QVUser|Rand|RangeAvg|RangeCorrel|RangeCount|RangeFractile|RangeIRR|RangeKurtosis|RangeMax|RangeMaxString|RangeMin|RangeMinString|RangeMissingCount|RangeMode|RangeNPV|RangeNullCount|RangeNumericCount|RangeOnly|RangeSkew|RangeStdev|RangeSum|RangeTextCount|RangeXIRR|RangeXNPV|Rate|RecNo|Red|ReloadTime|Repeat|Replace|ReportComment|ReportId|ReportName|ReportNumber|RGB|Round|RowNo|RTrim|Second|SetDateYear|SetDateYearMonth|Sign|sin|sinh|Skew|sqr|sqrt|Stdev|Sterr|STEYX|SubField|10|SubStringCount|Sum|SysColor|TableName|TableNumber|tan|tanh|TDIST|Text|TextBetween|TextCount|TimeZone|TINV|Today|Trim|True|TTest1_conf|TTest1_df|TTest1_dif|TTest1_lower|TTest1_sig|TTest1_sterr|TTest1_t|TTest1_upper|TTest1w_conf|TTest1w_df|TTest1w_dif|TTest1w_lower|TTest1w_sig|TTest1w_sterr|TTest1w_t|TTest1w_upper|TTest_conf|TTest_df|TTest_dif|TTest_lower|TTest_sig|TTest_sterr|TTest_t|TTest_upper|TTestw_conf|TTestw_df|TTestw_dif|TTestw_lower|TTestw_sig|TTestw_sterr|TTestw_t|TTestw_upper|Upper|UTC|Week|WeekDay|WeekEnd|WeekName|WeekStart|WeekYear|White|WildMatch|WildMatch5|XIRR|XNPV|Year|Year2Date|YearEnd|YearName|YearStart|YearToDate|Yellow|ZTest_conf|ZTest_dif|ZTest_lower|ZTest_sig|ZTest_sterr|ZTest_upper|ZTest_z|ZTestw_conf|ZTestw_dif|ZTestw_lower|ZTestw_sig|ZTestw_sterr|ZTestw_upper|ZTestw_z)\b(?=\()/i,
```

Build in functions

### comment

```javascript
    'comment': {
		pattern: /(?<!:)(\/\/)(.*)/,
        greedy: true
	},

```

Everything after "//"

### string

```javascript
    'string': /(?<!\/\/.*)\'(?<=')(.*)(?=')\'/,
```

Everything between "' '"
