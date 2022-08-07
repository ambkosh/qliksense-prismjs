/* PrismJS 1.28.0
http://localhost:8000/download.html#themes=prism&languages=qliksense */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof i?new i(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,i;switch(t=t||{},a.util.type(n)){case"Object":if(i=a.util.objId(n),t[i])return t[i];for(var l in r={},t[i]=r,n)n.hasOwnProperty(l)&&(r[l]=e(n[l],t));return r;case"Array":return i=a.util.objId(n),t[i]?t[i]:(r=[],t[i]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}},getLanguage:function(e){for(;e;){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(n,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var i=(r=r||a.languages)[e],l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var s in t)t.hasOwnProperty(s)&&(l[s]=t[s]);t.hasOwnProperty(o)||(l[o]=i[o])}var u=r[e];return r[e]=l,a.languages.DFS(a.languages,(function(n,t){t===u&&n!=e&&(this[n]=l)})),l},DFS:function e(n,t,r,i){i=i||{};var l=a.util.objId;for(var o in n)if(n.hasOwnProperty(o)){t.call(n,o,n[o],r||o);var s=n[o],u=a.util.type(s);"Object"!==u||i[l(s)]?"Array"!==u||i[l(s)]||(i[l(s)]=!0,e(s,t,o,i)):(i[l(s)]=!0,e(s,t,null,i))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,l=0;i=r.elements[l++];)a.highlightElement(i,!0===n,r.callback)},highlightElement:function(n,t,r){var i=a.util.getLanguage(n),l=a.languages[i];a.util.setLanguage(n,i);var o=n.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&a.util.setLanguage(o,i);var s={element:n,language:i,grammar:l,code:n.textContent};function u(e){s.highlightedCode=e,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a.hooks.run("after-highlight",s),a.hooks.run("complete",s),r&&r.call(s.element)}if(a.hooks.run("before-sanity-check",s),(o=s.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!s.code)return a.hooks.run("complete",s),void(r&&r.call(s.element));if(a.hooks.run("before-highlight",s),s.grammar)if(t&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else u(a.highlight(s.code,s.grammar,s.language));else u(a.util.encode(s.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new s;return u(a,a.head,e),o(e,a,n,a.head,0),function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n)}},Token:i};function i(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function l(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function o(e,n,t,r,s,g){for(var f in t)if(t.hasOwnProperty(f)&&t[f]){var h=t[f];h=Array.isArray(h)?h:[h];for(var d=0;d<h.length;++d){if(g&&g.cause==f+","+d)return;var v=h[d],p=v.inside,m=!!v.lookbehind,y=!!v.greedy,k=v.alias;if(y&&!v.pattern.global){var x=v.pattern.toString().match(/[imsuy]*$/)[0];v.pattern=RegExp(v.pattern.source,x+"g")}for(var b=v.pattern||v,w=r.next,A=s;w!==n.tail&&!(g&&A>=g.reach);A+=w.value.length,w=w.next){var E=w.value;if(n.length>e.length)return;if(!(E instanceof i)){var P,L=1;if(y){if(!(P=l(b,A,e,m))||P.index>=e.length)break;var S=P.index,O=P.index+P[0].length,j=A;for(j+=w.value.length;S>=j;)j+=(w=w.next).value.length;if(A=j-=w.value.length,w.value instanceof i)continue;for(var C=w;C!==n.tail&&(j<O||"string"==typeof C.value);C=C.next)L++,j+=C.value.length;L--,E=e.slice(A,j),P.index-=A}else if(!(P=l(b,0,E,m)))continue;S=P.index;var N=P[0],_=E.slice(0,S),M=E.slice(S+N.length),W=A+E.length;g&&W>g.reach&&(g.reach=W);var z=w.prev;if(_&&(z=u(n,z,_),A+=_.length),c(n,z,L),w=u(n,z,new i(f,p?a.tokenize(N,p):N,k,N)),M&&u(n,w,M),L>1){var I={cause:f+","+d,reach:W};o(e,n,t,w.prev,A,I),g&&I.reach>g.reach&&(g.reach=I.reach)}}}}}}function s(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function u(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function c(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;n.next=r,r.prev=n,e.length-=a}if(e.Prism=a,i.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t)})),r}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},l=n.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),a.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,i=t.code,l=t.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),l&&e.close()}),!1),a):a;var g=a.util.currentScript();function f(){a.manual||a.highlightAll()}if(g&&(a.filename=g.src,g.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var h=document.readyState;"loading"===h||"interactive"===h&&g&&g.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.qliksense={variable:{pattern:/(?<!\/\/.*)(?<=let |set )\w+/i,lookbehind:!0,greedy:!0},constant:{pattern:/(\w*)(?<!lib)(?::)/},property:[{pattern:/(?<!\/\/.*)(?<=as\ )\w+/i,lockbehind:!0,greedy:!0},/\"(?<=")(.*)(?=")\"/,{pattern:/(?<=LOAD)(.)*(?=FROM)/ms,lockbehind:!0,greedy:!0,inside:{punctuation:/,/g}}],keyword:/(?<!\/\/.*)\b(Add|Alias|And|As|Autogenerate|Binary|Buffer|Call|Case|Comment|Concatenate|Connect|Crosstable|Custom|Default|Derive|Detail|Dimension|Directory|Disconnect|Drop|Distinct|Do|Each|Else|Elseif|Endif|Endsub|End|Endswitch|Execute|First|FlushLog|For|Force|From|From_Field|Generic|Hierarchy|10|HierarchyBelongsTo|10|if|In|Inline|Inputfield|10|Intervalmatch|10|Into|join|load|Let|Lib|Loop|Loosen|Map|Measure|Native|Next|Noconcatenate|Not|NullAsNull|NullAsValue|ODBC|OLEDB|Or|Qualify|Replace|Resident|Sample|Script|Section|Select|Semantic|Set|Sleep|SQL|SQLColumns|SQLTables|SQLTypes|Star|Step|Store|Sub|Switch|Table|Then|To|Trace|Unless|Unmap|Unqualify|Untag|Using|When|Where|With)\b/i,builtin:/\b(Acos|Addmonths|Addyears|Age|Alt|Applycodepage|Applymap|Argb|Asin|Atan|Atan2|Attribute|Author|Autonumber|Autonumberhash128|Autonumberhash256|Avg|Bitcount|Black|Blackandschole|Blue|Brown|Capitalize|Ceil|Chi2test_chi2|Chi2test_df|Chi2test_p|Chidist|Chiinv|Chr|Class|Clientplatform|Color|Colormaphue|Colormapjet|Colormix1|Colormix2|Combin|Computername|Concat|Connectstring|Converttolocaltime|Correl|Cos|Cosh|Count|Cyan|Darkgray|Day|Dayend|Daylightsaving|Dayname|Daynumberofquarter|Daynumberofyear|Daystart|Div|DocumentName|DocumentPath|DocumentTitle|Dual|E|Evaluate|Even|Exists|Exp|Fabs|Fact|False|Fdist|FieldIndex|FieldName|FieldNumber|FieldValue|FieldValueCount|FileBaseName|FileDir|FileExtension|FileList|FileName|FilePath|FileSize|FileTime|FindOneOf|Finv|FirstSortedValue|FirstValue|FirstWorkDate|Floor|Fmod|Frac|Fractile|Fv|GetExtendedProperty|GetFolderPath|GetObjectField|GetRegistryString|GMT|Green|Hash128|Hash160|Hash256|Hour|HSL|InDay|InDayToTime|Index|InLunarWeek|InLunarWeekToDate|InMonth|InMonths|InMonthsToDate|InMonthToDate|Input|InputAvg|InputSum|InQuarter|InQuarterToDate|Interval|Interval#|InWeek|InWeekToDate|InYear|InYearToDate|IRR|IsNull|IsNum|IsPartialReload|IsText|IterNo|KeepChar|Kurtosis|LastValue|LastWorkDate|Len|LightBlue|LightCyan|LightGray|LightGreen|LightMagenta|LightRed|LINEST_B|LINEST_DF|LINEST_F|LINEST_M|LINEST_R2|LINEST_SEB|LINEST_SEM|LINEST_SEY|LINEST_SSREG|LINEST_SSRESID|LocalTime|log|log10|Lookup|Lower|LTrim|LunarWeekEnd|LunarWeekName|LunarWeekStart|Magenta|MakeDate|MakeTime|MakeWeekDate|MapSubString|Match|Max|MaxString|Median|Mid|Min|MinString|Minute|MissingCount|MixMatch|Mod|Mode|Money|Money#|Month|MonthEnd|MonthName|MonthsEnd|MonthsName|MonthsStart|MonthStart|MsgBox|NetWorkDays|NoOfFields|NoOfReports|NoOfRows|NoOfTables|NORMDIST|NORMINV|Now|nPer|NPV|Null|NullCount|Num|Num|NumAvg|NumCount|NumericCount|NumMax|NumMin|NumSum|Odd|Only|Ord|OSUser|Peek|Permut|Pi|Pick|Pmt|pow|Previous|PurgeChar|PV|QlikTechBlue|QlikTechGray|QlikViewVersion|QuarterEnd|QuarterName|QuarterStart|QvdCreateTime|QvdFieldName|QvdNoOfFields|QvdNoOfRecords|QvdTableName|QVUser|Rand|RangeAvg|RangeCorrel|RangeCount|RangeFractile|RangeIRR|RangeKurtosis|RangeMax|RangeMaxString|RangeMin|RangeMinString|RangeMissingCount|RangeMode|RangeNPV|RangeNullCount|RangeNumericCount|RangeOnly|RangeSkew|RangeStdev|RangeSum|RangeTextCount|RangeXIRR|RangeXNPV|Rate|RecNo|Red|ReloadTime|Repeat|Replace|ReportComment|ReportId|ReportName|ReportNumber|RGB|Round|RowNo|RTrim|Second|SetDateYear|SetDateYearMonth|Sign|sin|sinh|Skew|sqr|sqrt|Stdev|Sterr|STEYX|SubField|10|SubStringCount|Sum|SysColor|TableName|TableNumber|tan|tanh|TDIST|Text|TextBetween|TextCount|TimeZone|TINV|Today|Trim|True|TTest1_conf|TTest1_df|TTest1_dif|TTest1_lower|TTest1_sig|TTest1_sterr|TTest1_t|TTest1_upper|TTest1w_conf|TTest1w_df|TTest1w_dif|TTest1w_lower|TTest1w_sig|TTest1w_sterr|TTest1w_t|TTest1w_upper|TTest_conf|TTest_df|TTest_dif|TTest_lower|TTest_sig|TTest_sterr|TTest_t|TTest_upper|TTestw_conf|TTestw_df|TTestw_dif|TTestw_lower|TTestw_sig|TTestw_sterr|TTestw_t|TTestw_upper|Upper|UTC|Week|WeekDay|WeekEnd|WeekName|WeekStart|WeekYear|White|WildMatch|WildMatch5|XIRR|XNPV|Year|Year2Date|YearEnd|YearName|YearStart|YearToDate|Yellow|ZTest_conf|ZTest_dif|ZTest_lower|ZTest_sig|ZTest_sterr|ZTest_upper|ZTest_z|ZTestw_conf|ZTestw_dif|ZTestw_lower|ZTestw_sig|ZTestw_sterr|ZTestw_upper|ZTestw_z)\b(?=\()/i,comment:{pattern:/(?<!:)(\/\/)(.*)/,greedy:!0},string:/(?<!\/\/.*)\'(?<=')(.*)(?=')\'/};