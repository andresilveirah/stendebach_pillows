(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{181:function(e,t,a){e.exports=a.p+"static/media/pillow8.86a8f888.jpg"},182:function(e,t,a){e.exports=a.p+"static/media/pillow10.8c9ea886.jpg"},183:function(e,t,a){e.exports=a.p+"static/media/pillow13.41319dbe.jpg"},184:function(e,t,a){e.exports=a.p+"static/media/G-Cozy_Vermessung.d1ac8e85.png"},186:function(e,t,a){e.exports=a(372)},370:function(e,t,a){},372:function(e,t,a){"use strict";a.r(t);a(187);var n=a(0),l=a.n(n),r=a(106),i=a.n(r),c=a(16),o=a(14),s=a(28),u=a(15),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ATTRIBUTE":return Object(u.a)({},e,Object(s.a)({},t.attributeName,t.value));default:return e}},d=a(107),h=a.n(d),b={shoulders:[27,31,35,39,43,47,51,55,59,64],neck:[25,27,30,32,35,37,40,43,46,49],head:[40,44,48,52,56,60,64,68,72,79],earToShoulder:[8,10,12,14,16,18,20,22,24,27]},p=function(e,t){return function(e,t){var a=h()(t,function(t){return e<=t});if(-1===a)throw new Error("Could not find a score for value: ".concat(e));return a+1}(t,b[e]||[])},f=function(e,t){return e+parseInt(t,10)},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ATTRIBUTE":return b.hasOwnProperty(t.attributeName)?Object(u.a)({},e,Object(s.a)({},t.attributeName,p(t.attributeName,t.value))):e;default:return e}},E={bellyDown:1,backDown:1.2,lateralLeaning:1.3,lateral:1.5},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ATTRIBUTE":if("sleepingPosition"===t.attributeName){var a=E[t.value];if(void 0===a)throw new Error("could not find a score for ".concat(t.attributeName," with the value of ").concat(t.value));return a}return e;default:return e}},k={watterBed:1,soft:1.2,medium:1.3,hard:1.5},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ATTRIBUTE":if("mattressType"===t.attributeName){var a=k[t.value];if(void 0===a)throw new Error("could not find a score for ".concat(t.attributeName," with the value of ").concat(t.value));return a}return e;default:return e}},O=function(e){var t,a=e.scores;return t=a.bodyMeasurements,Object.values(t).reduce(f,0)*function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}(a.sleepingPosition)*function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}(a.mattressType)},y=Object(o.b)({bodyMeasurements:v,sleepingPosition:g,mattressType:w}),j=a(177),N=a.n(j),C=a(178),T=a.n(C),M=a(179),S=a.n(M),x=a(180),_=a.n(x),D=a(181),P=a.n(D),U=a(182),V=a.n(U),A=a(183),H=a.n(A),I=[{name:"Nackenst\xfctzkissen VisCozy",height:"8 cm",picture:P.a},{name:"Nackenst\xfctzkissen VisCozy",height:"10 cm",picture:V.a},{name:"Nackenst\xfctzkissen VisCozy",height:"13 cm",picture:H.a}],z=[{maximumScore:36,pillow:I[0]},{maximumScore:66,pillow:I[1]},{maximumScore:90,pillow:I[2]}],B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:z;return N()(T()(["maximumScore"]),S()(function(t){var a=t.maximumScore;return e<=a}),_()(Object))(t).pillow},R=Object(o.b)({attributes:m,scores:y}),L=a(57),K=a(58),X=a(61),J=a(59),W=a(60),F=a(8),G=(a(7),function(e){return l.a.createElement("fieldset",{className:"form-group row"},l.a.createElement("legend",{className:"col-form-legend"},e.legend),l.a.createElement("hr",null),l.a.createElement("div",{className:"col-sm-12"},e.children))}),q=a(29),Q=function(e){var t=e.current,a=e.min,n=e.max;return l.a.createElement("span",{className:"col-sm-3 score"},function(e,t,a){return function(e,t,a){return e===t?"bis":e===a?"von":""}(e,t,a)+" "+e+" cm"}(t,a,n))},Y=function(e){function t(e){var a;return Object(L.a)(this,t),(a=Object(X.a)(this,Object(J.a)(t).call(this,e))).onChangeHandler=a.onChangeHandler.bind(Object(F.a)(Object(F.a)(a))),a}return Object(W.a)(t,e),Object(K.a)(t,[{key:"isChecked",value:function(){return this.isCheckable()&&(this.props.checked||this.props.defaultChecked)}},{key:"isCheckable",value:function(){return"checkbox"===this.props.type||"radio"===this.props.type}},{key:"initialValue",value:function(){return this.props.value||this.props.defaultValue}},{key:"dispatchUpdateAttribute",value:function(e,t){var a;this.props.dispatch({type:"UPDATE_ATTRIBUTE",attributeName:(a={attributeName:e,value:t}).attributeName,value:a.value})}},{key:"componentDidMount",value:function(){this.isCheckable()&&!this.isChecked()||this.setInitialValues()}},{key:"setInitialValues",value:function(){this.dispatchUpdateAttribute(this.props.name,this.initialValue())}},{key:"onChangeHandler",value:function(e){this.dispatchUpdateAttribute(e.target.name,e.target.value)}},{key:"render",value:function(){var e=this.props,t=(e.dispatch,Object(q.a)(e,["dispatch"]));return l.a.createElement("input",Object.assign({},t,{onInput:this.onChangeHandler,onChange:this.onChangeHandler}))}}]),t}(l.a.PureComponent),Z=Y=Object(c.b)()(Y),$=function(e){var t=e.value,a=e.label,n=Object(q.a)(e,["value","label"]),r=Object(u.a)({defaultValue:n.min},n);return l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:r.name,className:"col-sm-4 col-form-label"},a),l.a.createElement("div",{className:"col-sm-5"},l.a.createElement(Z,Object.assign({type:"range",className:"form-control"},r))),l.a.createElement(Q,{min:r.min,max:r.max,current:t||r.defaultValue}))},ee=a(184),te=a.n(ee),ae=function(e){var t=e.shoulders,a=e.neck,n=e.head,r=e.earToShoulder;return l.a.createElement("div",{className:"row align-items-center"},l.a.createElement("div",{className:"col-md-8 col-sm-12"},l.a.createElement(G,{legend:"K\xf6rperma\xdfe"},l.a.createElement($,{name:"shoulders",label:"Schulterabstand",min:"23",max:"64",value:t}),l.a.createElement($,{name:"neck",label:"Halsumfang",min:"22",max:"49",value:a}),l.a.createElement($,{name:"head",label:"Kopfumfang",min:"36",max:"79",value:n}),l.a.createElement($,{name:"earToShoulder",label:"Halsl\xe4nge",min:"4",max:"27",value:r}))),l.a.createElement("div",{className:"col-md-4 col-sm-12"},l.a.createElement("img",{className:"img-fluid rounded mx-auto d-block",alt:"Vermessungsbeispiel",src:te.a})))},ne=ae=Object(c.b)(function(e){return Object(u.a)({},e.attributes)})(ae),le=function(e){var t=e.label,a=Object(q.a)(e,["label"]);return l.a.createElement("div",{className:"form-check"},l.a.createElement("label",{className:"form-check-label"},l.a.createElement(Z,Object.assign({className:"form-check-input",type:"radio"},a))," ",t||a.value))},re=function(){return l.a.createElement(G,{legend:"Bevorzugte Schlafposition"},l.a.createElement(le,{name:"sleepingPosition",label:"Bauchlage",value:"bellyDown",defaultChecked:!0}),l.a.createElement(le,{name:"sleepingPosition",label:"R\xfcckenlage",value:"backDown"}),l.a.createElement(le,{name:"sleepingPosition",label:"Seitenlage nach vorne gebeugt",value:"lateralLeaning"}),l.a.createElement(le,{name:"sleepingPosition",label:"Seitenlage",value:"lateral"}))},ie=function(e){return l.a.createElement(G,{legend:"Matratzenart"},l.a.createElement(le,{name:"mattressType",label:"Wasserbett",value:"watterBed",defaultChecked:!0}),l.a.createElement(le,{name:"mattressType",label:"Weiche Matratze",value:"soft"}),l.a.createElement(le,{name:"mattressType",label:"Mittlere Matratzenfestigkeit",value:"medium"}),l.a.createElement(le,{name:"mattressType",label:"Harte Matratze",value:"hard"}))},ce=function(e){return l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("button",{type:"submit",className:"col-sm-4 btn btn-primary"},"Mein perfektes Kissen \u2192"))},oe=a(185),se=a.n(oe),ue=function(e){var t=e.showModal,a=e.onCloseModalClick,n=e.pillow;return l.a.createElement(se.a,{isOpen:t,contentLabel:"Mein perfektes kissen"},l.a.createElement("button",{className:"btn btn-outline-secondary btn-lg float-right",onClick:a},"\xd7"),l.a.createElement("h1",null,"Ihr perfektes Kissen: "),l.a.createElement("h2",{className:"display-3"},n.name," ",l.a.createElement("small",{className:"text-muted"},"H\xf6he ",n.height)),l.a.createElement("br",null),l.a.createElement("img",{className:"img-fluid rounded mx-auto d-block",alt:"Bild von ".concat(n.name),src:n.picture}))},me=function(e){function t(){var e;return Object(L.a)(this,t),(e=Object(X.a)(this,Object(J.a)(t).call(this))).state={showModal:!1},e.formSubmitHandler=e.formSubmitHandler.bind(Object(F.a)(Object(F.a)(e))),e.onCloseModalClick=e.onCloseModalClick.bind(Object(F.a)(Object(F.a)(e))),e}return Object(W.a)(t,e),Object(K.a)(t,[{key:"formSubmitHandler",value:function(e){e.preventDefault(),this.showModal()}},{key:"showModal",value:function(){this.setState({showModal:!0})}},{key:"onCloseModalClick",value:function(e){e.preventDefault(),this.setState({showModal:!1})}},{key:"render",value:function(){return l.a.createElement("form",{action:"#",onSubmit:this.formSubmitHandler},l.a.createElement(ne,null),l.a.createElement(re,null),l.a.createElement(ie,null),l.a.createElement(ce,null),l.a.createElement(ue,{showModal:this.state.showModal,onCloseModalClick:this.onCloseModalClick,pillow:this.props.pillow}))}}]),t}(l.a.PureComponent),de=me=Object(c.b)(function(e){return{pillow:function(e){return B(O(e))}(e)}})(me),he=(a(370),function(){return l.a.createElement("div",{className:"container"},l.a.createElement(de,null))}),be=Object(o.c)(R,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(l.a.createElement(c.a,{store:be},l.a.createElement(he,null)),document.getElementById("root"))},7:function(e,t,a){}},[[186,2,1]]]);
//# sourceMappingURL=main.7daac133.chunk.js.map