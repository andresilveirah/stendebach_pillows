(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{183:function(e,t,a){e.exports=a(373)},371:function(e,t,a){},373:function(e,t,a){"use strict";a.r(t);a(184);var n=a(0),l=a.n(n),r=a(106),i=a.n(r),c=a(16),o=a(14),s=a(28),u=a(15),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ATTRIBUTE":return Object(u.a)({},e,Object(s.a)({},t.attributeName,t.value));default:return e}},d=a(107),h=a.n(d),b={shoulders:[27,31,35,39,43,47,51,55,59,64],neck:[25,27,30,32,35,37,40,43,46,49],head:[40,44,48,52,56,60,64,68,72,79],earToShoulder:[8,10,12,14,16,18,20,22,24,27]},f=function(e,t){return function(e,t){var a=h()(t,function(t){return e<=t});if(-1===a)throw new Error("Could not find a score for value: ".concat(e));return a+1}(t,b[e]||[])},p=function(e,t){return e+parseInt(t,10)},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ATTRIBUTE":return b.hasOwnProperty(t.attributeName)?Object(u.a)({},e,Object(s.a)({},t.attributeName,f(t.attributeName,t.value))):e;default:return e}},E={bellyDown:1,backDown:1.2,lateralLeaning:1.3,lateral:1.5},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ATTRIBUTE":if("sleepingPosition"===t.attributeName){var a=E[t.value];if(void 0===a)throw new Error("could not find a score for ".concat(t.attributeName," with the value of ").concat(t.value));return a}return e;default:return e}},k={watterBed:1,soft:1.2,medium:1.3,hard:1.5},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ATTRIBUTE":if("mattressType"===t.attributeName){var a=k[t.value];if(void 0===a)throw new Error("could not find a score for ".concat(t.attributeName," with the value of ").concat(t.value));return a}return e;default:return e}},O=function(e){var t,a=e.scores;return t=a.bodyMeasurements,Object.values(t).reduce(p,0)*function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}(a.sleepingPosition)*function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}(a.mattressType)},y=Object(o.b)({bodyMeasurements:v,sleepingPosition:g,mattressType:w}),N=a(178),j=a.n(N),T=a(179),C=a.n(T),M=a(180),S=a.n(M),x=a(181),_=a.n(x),D=[{name:"Nackenst\xfctzkissen VisCozy",height:"8 cm",picture:"http://betteninnovation.com/kissen-klein/"},{name:"Nackenst\xfctzkissen VisCozy",height:"10 cm",picture:"http://betteninnovation.com/kissen-mittle/"},{name:"Nackenst\xfctzkissen VisCozy",height:"13 cm",picture:"http://betteninnovation.com/kissen-gross/"}],P=[{maximumScore:36,pillow:D[0]},{maximumScore:66,pillow:D[1]},{maximumScore:90,pillow:D[2]}],U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P;return j()(C()(["maximumScore"]),S()(function(t){var a=t.maximumScore;return e<=a}),_()(Object))(t).pillow},V=Object(o.b)({attributes:m,scores:y}),A=a(57),H=a(58),I=a(61),z=a(59),B=a(60),R=a(8),L=(a(7),function(e){return l.a.createElement("fieldset",{className:"form-group row"},l.a.createElement("legend",{className:"col-form-legend"},e.legend),l.a.createElement("hr",null),l.a.createElement("div",{className:"col-sm-12"},e.children))}),K=a(29),X=function(e){var t=e.current,a=e.min,n=e.max;return l.a.createElement("span",{className:"col-sm-3 score"},function(e,t,a){return function(e,t,a){return e===t?"bis":e===a?"von":""}(e,t,a)+" "+e+" cm"}(t,a,n))},J=function(e){function t(e){var a;return Object(A.a)(this,t),(a=Object(I.a)(this,Object(z.a)(t).call(this,e))).onChangeHandler=a.onChangeHandler.bind(Object(R.a)(Object(R.a)(a))),a}return Object(B.a)(t,e),Object(H.a)(t,[{key:"isChecked",value:function(){return this.isCheckable()&&(this.props.checked||this.props.defaultChecked)}},{key:"isCheckable",value:function(){return"checkbox"===this.props.type||"radio"===this.props.type}},{key:"initialValue",value:function(){return this.props.value||this.props.defaultValue}},{key:"dispatchUpdateAttribute",value:function(e,t){var a;this.props.dispatch({type:"UPDATE_ATTRIBUTE",attributeName:(a={attributeName:e,value:t}).attributeName,value:a.value})}},{key:"componentDidMount",value:function(){this.isCheckable()&&!this.isChecked()||this.setInitialValues()}},{key:"setInitialValues",value:function(){this.dispatchUpdateAttribute(this.props.name,this.initialValue())}},{key:"onChangeHandler",value:function(e){this.dispatchUpdateAttribute(e.target.name,e.target.value)}},{key:"render",value:function(){var e=this.props,t=(e.dispatch,Object(K.a)(e,["dispatch"]));return l.a.createElement("input",Object.assign({},t,{onInput:this.onChangeHandler,onChange:this.onChangeHandler}))}}]),t}(l.a.PureComponent),W=J=Object(c.b)()(J),F=function(e){var t=e.value,a=e.label,n=Object(K.a)(e,["value","label"]),r=Object(u.a)({defaultValue:n.min},n);return l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:r.name,className:"col-sm-4 col-form-label"},a),l.a.createElement("div",{className:"col-sm-5"},l.a.createElement(W,Object.assign({type:"range",className:"form-control"},r))),l.a.createElement(X,{min:r.min,max:r.max,current:t||r.defaultValue}))},q=function(e){var t=e.shoulders,a=e.neck,n=e.head,r=e.earToShoulder;return l.a.createElement("div",{className:"row align-items-center"},l.a.createElement("div",{className:"col-md-8 col-sm-12"},l.a.createElement(L,{legend:"K\xf6rperma\xdfe"},l.a.createElement(F,{name:"shoulders",label:"Schulterabstand",min:"23",max:"64",value:t}),l.a.createElement(F,{name:"neck",label:"Halsumfang",min:"22",max:"49",value:a}),l.a.createElement(F,{name:"head",label:"Kopfumfang",min:"36",max:"79",value:n}),l.a.createElement(F,{name:"earToShoulder",label:"Halsl\xe4nge",min:"4",max:"27",value:r}))),l.a.createElement("div",{className:"col-md-4 col-sm-12"},l.a.createElement("img",{className:"img-fluid rounded mx-auto d-block",alt:"Vermessungsbeispiel",src:"http://betteninnovation.com/Vermessungsbeispiel/"})))},G=q=Object(c.b)(function(e){return Object(u.a)({},e.attributes)})(q),Q=function(e){var t=e.label,a=Object(K.a)(e,["label"]);return l.a.createElement("div",{className:"form-check"},l.a.createElement("label",{className:"form-check-label"},l.a.createElement(W,Object.assign({className:"form-check-input",type:"radio"},a))," ",t||a.value))},Y=function(){return l.a.createElement(L,{legend:"Bevorzugte Schlafposition"},l.a.createElement(Q,{name:"sleepingPosition",label:"Bauchlage",value:"bellyDown",defaultChecked:!0}),l.a.createElement(Q,{name:"sleepingPosition",label:"R\xfcckenlage",value:"backDown"}),l.a.createElement(Q,{name:"sleepingPosition",label:"Seitenlage nach vorne gebeugt",value:"lateralLeaning"}),l.a.createElement(Q,{name:"sleepingPosition",label:"Seitenlage",value:"lateral"}))},Z=function(e){return l.a.createElement(L,{legend:"Matratzenart"},l.a.createElement(Q,{name:"mattressType",label:"Wasserbett",value:"watterBed",defaultChecked:!0}),l.a.createElement(Q,{name:"mattressType",label:"Weiche Matratze",value:"soft"}),l.a.createElement(Q,{name:"mattressType",label:"Mittlere Matratzenfestigkeit",value:"medium"}),l.a.createElement(Q,{name:"mattressType",label:"Harte Matratze",value:"hard"}))},$=function(e){return l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("button",{type:"submit",className:"col-sm-4 btn btn-primary"},"Mein perfektes Kissen \u2192"))},ee=a(182),te=a.n(ee),ae=function(e){var t=e.showModal,a=e.onCloseModalClick,n=e.pillow;return l.a.createElement(te.a,{isOpen:t,contentLabel:"Mein perfektes kissen"},l.a.createElement("button",{className:"btn btn-outline-secondary btn-lg float-right",onClick:a},"\xd7"),l.a.createElement("h1",null,"Ihr perfektes Kissen: "),l.a.createElement("h2",{className:"display-3"},n.name," ",l.a.createElement("small",{className:"text-muted"},"H\xf6he ",n.height)),l.a.createElement("br",null),l.a.createElement("img",{className:"img-fluid rounded mx-auto d-block",alt:"Bild von ".concat(n.name),src:n.picture}))},ne=function(e){function t(){var e;return Object(A.a)(this,t),(e=Object(I.a)(this,Object(z.a)(t).call(this))).state={showModal:!1},e.formSubmitHandler=e.formSubmitHandler.bind(Object(R.a)(Object(R.a)(e))),e.onCloseModalClick=e.onCloseModalClick.bind(Object(R.a)(Object(R.a)(e))),e}return Object(B.a)(t,e),Object(H.a)(t,[{key:"formSubmitHandler",value:function(e){e.preventDefault(),this.showModal()}},{key:"showModal",value:function(){this.setState({showModal:!0})}},{key:"onCloseModalClick",value:function(e){e.preventDefault(),this.setState({showModal:!1})}},{key:"render",value:function(){return l.a.createElement("form",{action:"#",onSubmit:this.formSubmitHandler},l.a.createElement(G,null),l.a.createElement(Y,null),l.a.createElement(Z,null),l.a.createElement($,null),l.a.createElement(ae,{showModal:this.state.showModal,onCloseModalClick:this.onCloseModalClick,pillow:this.props.pillow}))}}]),t}(l.a.PureComponent),le=ne=Object(c.b)(function(e){return{pillow:function(e){return U(O(e))}(e)}})(ne),re=(a(371),function(){return l.a.createElement("div",{className:"container"},l.a.createElement(le,null))}),ie=Object(o.c)(V,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(l.a.createElement(c.a,{store:ie},l.a.createElement(re,null)),document.getElementById("root"))},7:function(e,t,a){}},[[183,2,1]]]);
//# sourceMappingURL=main.23e3b99d.chunk.js.map