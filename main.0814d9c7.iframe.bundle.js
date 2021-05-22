/*! For license information please see main.0814d9c7.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{459:function(module,exports,__webpack_require__){__webpack_require__(460),__webpack_require__(617),__webpack_require__(618),__webpack_require__(819),__webpack_require__(820),__webpack_require__(823),__webpack_require__(824),__webpack_require__(822),__webpack_require__(821),__webpack_require__(825),__webpack_require__(826),module.exports=__webpack_require__(815)},527:function(module,exports){},618:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(324)},815:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(324).configure)([__webpack_require__(816),__webpack_require__(817)],module,!1)}).call(this,__webpack_require__(182)(module))},816:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=816},817:function(module,exports,__webpack_require__){var map={"./stories/pagination.stories.js":827};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=817},818:function(module,exports,__webpack_require__){},826:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(832),esm=__webpack_require__(5),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},827:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Template",(function(){return pagination_stories_Template}));var objectSpread2=__webpack_require__(438),react=__webpack_require__(0),react_default=__webpack_require__.n(react);function createCommonjsModule(fn,module){return fn(module={exports:{}},module.exports),module.exports}var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"==typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var reactIs_production_min={AsyncMode:l,ConcurrentMode:m,ContextConsumer:k,ContextProvider:h,Element:c,ForwardRef:n,Fragment:e,Lazy:t,Memo:r,Portal:d,Profiler:g,StrictMode:f,Suspense:p,isAsyncMode:function(a){return A(a)||z(a)===l},isConcurrentMode:A,isContextConsumer:function(a){return z(a)===k},isContextProvider:function(a){return z(a)===h},isElement:function(a){return"object"==typeof a&&null!==a&&a.$$typeof===c},isForwardRef:function(a){return z(a)===n},isFragment:function(a){return z(a)===e},isLazy:function(a){return z(a)===t},isMemo:function(a){return z(a)===r},isPortal:function(a){return z(a)===d},isProfiler:function(a){return z(a)===g},isStrictMode:function(a){return z(a)===f},isSuspense:function(a){return z(a)===p},isValidElementType:function(a){return"string"==typeof a||"function"==typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"==typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)},typeOf:z},getOwnPropertySymbols=(createCommonjsModule((function(module,exports){0})),createCommonjsModule((function(module){module.exports=reactIs_production_min})),Object.getOwnPropertySymbols),index_modern_hasOwnProperty=Object.prototype.hasOwnProperty,propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(null==val)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(val)}(function shouldUseNative(){try{if(!Object.assign)return!1;var test1=new String("abc");if(test1[5]="de","5"===Object.getOwnPropertyNames(test1)[0])return!1;for(var test2={},i=0;i<10;i++)test2["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(test2).map((function(n){return test2[n]})).join(""))return!1;var test3={};return"abcdefghijklmnopqrst".split("").forEach((function(letter){test3[letter]=letter})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},test3)).join("")}catch(err){return!1}})()&&Object.assign;var ReactPropTypesSecret_1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function checkPropTypes(typeSpecs,values,location,componentName,getStack){}checkPropTypes.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction;var propTypes=createCommonjsModule((function(module){module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret_1){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}()})),styles_pageNumber="_ZOm07",styles_ellipses="_rGG03",styles_active="_3sodH",styles_changePage="_3MSSt",styles_disable="_37CBb",styles_increment="_1wlKf",styles_decrement="_3-SCU",index_modern_Pagination=function Pagination(props){var currentPage=props.currentPage,totalPages=props.totalPages,onClickPageNumber=props.onClickPageNumber,disablePageChange=props.disablePageChange,onChangePage=function onChangePage(pageNumber){!disablePageChange&&pageNumber<=totalPages&&pageNumber>=1&&(onClickPageNumber(pageNumber),window.scrollTo({top:0}))};return react_default.a.createElement("div",null,react_default.a.createElement("span",{onClick:function onClick(){onChangePage(parseInt(currentPage)-1)},className:styles_changePage+" "+styles_decrement+" "+(1===currentPage?styles_disable:"")},react_default.a.createElement("span",null,"Prev")),currentPage>3&&totalPages>6&&react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("span",{className:styles_pageNumber,onClick:function onClick(){onChangePage(1)}},"1"),react_default.a.createElement("span",{className:styles_ellipses},"...")),function getPaginationNumbers(){if(totalPages>0){if(totalPages<=6)return Array.from(Array(totalPages).keys()).map((function(item){return item+1}));if(currentPage>3&&currentPage<totalPages-3)return[currentPage-1,currentPage,currentPage+1];if(currentPage<=3)return[1,2,3,4,5];if(currentPage>=totalPages-3)return[totalPages-4,totalPages-3,totalPages-2,totalPages-1,totalPages]}return[]}().map((function(pageNumber){return react_default.a.createElement("span",{key:pageNumber,className:styles_pageNumber+" "+(pageNumber===currentPage?styles_active:""),onClick:function onClick(){onChangePage(pageNumber)}},pageNumber)})),currentPage<totalPages-3&&totalPages>6&&react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("span",{className:styles_ellipses},"..."),react_default.a.createElement("span",{className:styles_pageNumber,onClick:function onClick(){onChangePage(totalPages)}},totalPages)),react_default.a.createElement("span",{onClick:function onClick(){onChangePage(parseInt(currentPage)+1)},className:styles_changePage+" "+styles_increment+" "+(currentPage===totalPages?styles_disable:"")},react_default.a.createElement("span",null,"Next")))};index_modern_Pagination.defaultProps={currentPage:1,totalPages:0,onClickPageNumber:function onClickPageNumber(){},disablePageChange:!1},index_modern_Pagination.propTypes={onClickPageNumber:propTypes.func,disablePageChange:propTypes.bool,currentPage:propTypes.number,totalPages:propTypes.number};var index_modern=index_modern_Pagination,pagination_stories_Template=(__webpack_require__(818),__webpack_exports__.default={title:"Pagination",component:index_modern},function Template(args){return react_default.a.createElement(index_modern,args)});pagination_stories_Template.args={onClickPageNumber:function onClickPageNumber(){},disablePageChange:!1,currentPage:3,totalPages:21},pagination_stories_Template.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Pagination {...args} />"}},pagination_stories_Template.parameters),pagination_stories_Template.__docgenInfo={description:"",methods:[],displayName:"Template"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/pagination.stories.js"]={name:"Template",docgenInfo:pagination_stories_Template.__docgenInfo,path:"src/stories/pagination.stories.js"})}},[[459,2,3]]]);
//# sourceMappingURL=main.0814d9c7.iframe.bundle.js.map