(this["webpackJsonpword-wort"]=this["webpackJsonpword-wort"]||[]).push([[0],{79:function(e,t,a){e.exports=a(94)},84:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),l=a.n(o),c=(a(84),a(151)),i=a(146),s=a(153),u=a(127),m=a(124),d=a(126),g=a(128),E=a(24),f=a(129),h=a(130),b=a(95),p=a(11),W=function(e,t){return{type:"ADD_WORD",payload:{englishWord:e,germanWord:t}}},y=function(e){return{type:"CHANGE_APP_MODE",payload:e}},O=a(44),j=a(45),w=Object(b.a)((function(e){return{card:{maxWidth:345},cardContent:{height:120},cardVocab:{backgroundColor:e.palette.secondary.dark},cardIcon:{height:140}}})),v=function(){var e=w(),t=Object(p.c)((function(e){return e.WordList})),a=Object(p.b)();return n.a.createElement(m.a,{className:e.card+" "+e.cardVocab},n.a.createElement(d.a,{onClick:function(){return a(y(1))}},n.a.createElement(u.a,{className:e.cardIcon,alignItems:"center",container:!0,justify:"center"},n.a.createElement(O.a,{size:"6x",icon:j.a})),n.a.createElement(g.a,{className:e.cardContent},n.a.createElement(E.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Vocabulary"),n.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},t.length>0?"You have "+t.length+" words in your vocabulary list. You can add new words that you've learnt or delete the misspelled words.":"Your vocabulary list is currently empty. Learn new words and add to your list."))),n.a.createElement(f.a,null,n.a.createElement(h.a,{onClick:function(){return a(y(1))},size:"small",color:"inherit"},"Expand Word List")))},C=a(12),L=a(134),k=a(155),x=a(147),D=a(141),N=a(66),S=a(132),_=a(133),P=a(152),A=a(136),R=a(137),I=a(131),T=Object(N.a)((function(e){return{errorMessage:{color:e.palette.error.main},successMessage:{color:I.a.A400}}})),G=function(e){var t=T(),a=Object(p.b)(),o=Object(r.useState)(""),l=Object(C.a)(o,2),c=l[0],i=l[1],s=Object(r.useState)(""),m=Object(C.a)(s,2),d=m[0],g=m[1],E=Object(r.useRef)(null),f=Object(r.useRef)(null),b=Object(p.c)((function(e){return e.WordList})),y=Object(r.useState)(!1),O=Object(C.a)(y,2),j=O[0],w=O[1],v=Object(r.useState)(!1),L=Object(C.a)(v,2),k=L[0],x=L[1];Object(r.useEffect)((function(){w(b.find((function(e){return e.englishWord.toLowerCase()===c.toLowerCase()}))),x(b.find((function(e){return e.germanWord.toLowerCase()===d.toLowerCase()})))}),[c,d]);var D=function(){!c&&E.current.getElementsByTagName("input")[0].focus(),!d&&f.current.getElementsByTagName("input")[0].focus(),c&&d&&!j&&!k&&(a(W(c,d)),i(""),g(""),E.current.getElementsByTagName("input")[0].focus())},N=function(e){"Enter"===e.key&&(D(),e.preventDefault())};return n.a.createElement(n.a.Fragment,null,n.a.createElement(S.a,{id:"form-dialog-title"},"Add Word"),n.a.createElement(_.a,null,n.a.createElement(u.a,{spacing:2,justify:"center",container:!0},n.a.createElement(u.a,{item:!0,xs:12},n.a.createElement(P.a,{fullWidth:!0,id:"englishWordField",value:c,onChange:function(e){return i(e.target.value)},onKeyPress:N,tabIndex:"0",color:"secondary",label:"English Word",ref:E})),n.a.createElement(u.a,{item:!0,xs:12},n.a.createElement(P.a,{fullWidth:!0,id:"germanWordField",value:d,onChange:function(e){return g(e.target.value)},onKeyPress:N,tabIndex:"1",color:"secondary",label:"German Word",ref:f})),n.a.createElement(u.a,{item:!0,xs:12},n.a.createElement(A.a,null,"Fill The Words and Hit Enter"),n.a.createElement(A.a,{className:t.errorMessage},k&&d+" Exists in Vocabulary List. ",j&&c+" Exists in Vocabulary List. ")))),n.a.createElement(R.a,null,n.a.createElement(h.a,{onClick:e.closeAction,tabIndex:-1,color:"inherit"},"BACK"),n.a.createElement(h.a,{disabled:!0===j||!(c.length>0)||!0===k||!(d.length>0),onClick:function(){return D()},tabIndex:-1,color:"secondary"},"ADD")))},F=a(138),M=a(139),B=a(140),q=function(e){var t=Object(b.a)((function(t){return{appBarTitle:{color:t.palette.grey[100],fontWeight:800},root:{backgroundColor:"primary"===e.color?t.palette.primary.dark:t.palette.secondary.dark}}})),a=Object(p.b)(),r=t();return n.a.createElement(F.a,{className:r.root,position:"fixed"},n.a.createElement(M.a,null,n.a.createElement(B.a,{onClick:function(){return a(y(0))},className:r.appBarTitle,edge:"start","aria-label":"menu"},n.a.createElement(D.a,null,"arrow_back")),n.a.createElement(E.a,{className:r.appBarTitle,variant:"h6"},e.title)))},V=a(135),z=a(142),H=a(143),U=a(144),Y=a(145),K=function(){var e=Object(p.c)((function(e){return e.WordList})),t=Object(r.useState)(""),a=Object(C.a)(t,2),o=a[0],l=a[1],c=Object(p.b)();return n.a.createElement(V.a,{subheader:n.a.createElement(z.a,{component:"div"},n.a.createElement(H.a,null,n.a.createElement(P.a,{value:o,onChange:function(e){return l(e.target.value)},color:"secondary",label:"Search"})),"Words")},e.filter((function(e){return e.englishWord.toLowerCase().includes(o.toLowerCase())||e.germanWord.toLowerCase().includes(o.toLowerCase())})).map((function(e,t){return n.a.createElement(U.a,{key:t,divider:!0},n.a.createElement(Y.a,{primary:e.englishWord,secondary:e.germanWord}),n.a.createElement(H.a,null,n.a.createElement(B.a,{onClick:function(){return c({type:"DELETE_WORD",payload:e.englishWord})}},n.a.createElement(D.a,null,"delete"))))})),0===e.filter((function(e){return e.englishWord.toLowerCase().includes(o.toLowerCase())||e.germanWord.toLowerCase().includes(o.toLowerCase())})).length&&n.a.createElement(U.a,null,n.a.createElement(Y.a,{secondary:"No Record Found"})))},X=n.a.forwardRef((function(e,t){return n.a.createElement(L.a,Object.assign({direction:"up",ref:t},e))})),J=Object(b.a)((function(e){return{paperRoot:{backgroundColor:e.palette.background.default},fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(4)}}})),Q=function(){var e=Object(p.c)((function(e){return e.AppMode})),t=J(),a=Object(r.useState)(!1),o=Object(C.a)(a,2),l=o[0],c=o[1];return n.a.createElement(k.a,{PaperProps:{className:t.paperRoot},fullScreen:!0,open:1===e,TransitionComponent:X},n.a.createElement(q,{title:"Vocabulary List",color:"secondary"}),n.a.createElement(u.a,{container:!0,justify:"center"},n.a.createElement(i.a,{maxWidth:"md"},n.a.createElement(s.a,{mt:10,mb:10},n.a.createElement(K,null)))),n.a.createElement(x.a,{color:"secondary","aria-label":"add",onClick:function(){return c(!0)},className:t.fab},n.a.createElement(D.a,null,"add")),n.a.createElement(k.a,{open:l,"aria-labelledby":"form-dialog-title"},n.a.createElement(G,{closeAction:function(){return c(!1)}})))},Z=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(Q,null),n.a.createElement(v,null))},$=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.WordList})),a=Object(r.useState)(!1),o=Object(C.a)(a,2),l=o[0],c=o[1];Object(r.useEffect)((function(){c(t.length<20)}),[t]);var i=Object(b.a)((function(e){return{card:{maxWidth:345},cardContent:{height:120},cardVocab:{backgroundColor:l?e.palette.grey[800]:e.palette.primary.dark,color:l?e.palette.grey[500]:e.palette.grey[100]},cardIcon:{height:140}}}))();return n.a.createElement(m.a,{className:i.card+" "+i.cardVocab},n.a.createElement(d.a,{disabled:l,onClick:function(){return e(y(2))}},n.a.createElement(u.a,{className:i.cardIcon,alignItems:"center",container:!0,justify:"center"},n.a.createElement(O.a,{size:"6x",icon:j.b})),n.a.createElement(g.a,{className:i.cardContent},n.a.createElement(E.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Pop Quiz"),n.a.createElement(E.a,{variant:"body2",component:"p"},l?"You don't have enough words to test yourself. Fill the words in vocabulary list and get ready for the challange.":"Test your vocabulary, find out your progress easily."))),n.a.createElement(f.a,null,!l&&n.a.createElement(h.a,{onClick:function(){return e(y(2))},size:"small",disabled:l,color:"inherit"},"Challenge Yourself"),l&&n.a.createElement(h.a,{onClick:function(){[{englishWord:"Hello",germanWord:"Hallo"},{englishWord:"Love",germanWord:"Liebe"},{englishWord:"Hate",germanWord:"Hass"},{englishWord:"Success",germanWord:"Erfolg"},{englishWord:"Brother",germanWord:"Bruder"},{englishWord:"Victory",germanWord:"Sieg"},{englishWord:"Laugh",germanWord:"Lachen"},{englishWord:"Income",germanWord:"Einkommen"},{englishWord:"Truth",germanWord:"Wahrheit"},{englishWord:"act",germanWord:"Akt"},{englishWord:"why",germanWord:"warum"},{englishWord:"ask",germanWord:"fragen"},{englishWord:"men",germanWord:"M\xe4nner"},{englishWord:"change",germanWord:"Ver\xe4nderung"},{englishWord:"went",germanWord:"ging"},{englishWord:"light",germanWord:"Licht"},{englishWord:"kind",germanWord:"Art"},{englishWord:"off",germanWord:"aus"},{englishWord:"need",germanWord:"m\xfcssen"},{englishWord:"house",germanWord:"Haus"},{englishWord:"picture",germanWord:"Bild"},{englishWord:"try",germanWord:"versuchen"},{englishWord:"us",germanWord:"uns"},{englishWord:"again",germanWord:"wieder"},{englishWord:"animal",germanWord:"Tier"},{englishWord:"point",germanWord:"Punkt"},{englishWord:"mother",germanWord:"Mutter"},{englishWord:"world",germanWord:"Welt"},{englishWord:"build",germanWord:"bauen"},{englishWord:"self",germanWord:"selbst"}].map((function(t){return e(W(t.englishWord,t.germanWord))}))},size:"small",color:"primary"},"Fill With Mock Data")))},ee=a(148),te=a(149),ae=Object(b.a)((function(){return{root:{justifyContent:"center"},textError:{textDecoration:"line-through",marginLeft:"10px"}}})),re=function(){var e=ae(),t=Object(r.useState)(!1),a=Object(C.a)(t,2),o=a[0],l=a[1],c=Object(r.useState)(""),d=Object(C.a)(c,2),b=d[0],W=d[1],y=Object(r.useState)(""),O=Object(C.a)(y,2),j=O[0],w=O[1],v=Object(r.useState)(0),L=Object(C.a)(v,2),k=L[0],x=L[1],N=Object(r.useState)(!1),S=Object(C.a)(N,2),_=S[0],A=S[1],R=Object(r.useState)([]),I=Object(C.a)(R,2),T=I[0],G=I[1],F=Object(r.useRef)(),M=Object(r.useRef)(),B=Object(r.useState)(Object(p.c)((function(e){return e.WordList})).sort((function(){return.5-Math.random()})).slice(0,20)),q=Object(C.a)(B,1)[0],z=Math.round(T.filter((function(e){return e.questionEnglish.toLowerCase()===e.answerEnglish.toLowerCase()&&e.questionGerman.toLowerCase()===e.answerGerman.toLowerCase()})).length/(T?T.length:1)*100),K=function(){var e={questionGerman:q[k].germanWord,answerGerman:j,questionEnglish:q[k].englishWord,answerEnglish:b,wasGerman:_},t=T;t.push(e),G(t),A(Math.random()>=.5),x(k+1)};Object(r.useEffect)((function(){F.current&&F.current.focus()}),[o]),Object(r.useEffect)((function(){k<20&&(W(_?q[k].englishWord:""),w(_?"":q[k].germanWord),_?M.current&&M.current.focus():F.current&&F.current.focus())}),[k]);var X=function(e){"Enter"===e.key&&(j&&b&&K(),e.preventDefault())};return n.a.createElement(i.a,null,n.a.createElement(u.a,{spacing:2,container:!0,justify:"center",alignItems:"center",alignContent:"center"},!o&&k<20&&n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{xs:12,item:!0},n.a.createElement(s.a,{mt:10},n.a.createElement(E.a,{variant:"h5",align:"center"},"In this quiz, you will be asked 20 questions. WordWort will give you a German or English word, and you will write down the equivelant of the word in other language. When you feel ready, hit it on!"))),n.a.createElement(h.a,{onClick:function(){l(!0)},size:"large",variant:"contained",color:"primary"},"READY")),o&&k<20&&n.a.createElement(u.a,{item:!0},n.a.createElement(m.a,null,n.a.createElement(ee.a,{title:n.a.createElement(te.a,{variant:"buffer",value:5*k,valueBuffer:100})}),n.a.createElement(g.a,null,n.a.createElement(u.a,{spacing:2,container:!0},n.a.createElement(u.a,{xs:12,item:!0},n.a.createElement(P.a,{disabled:_,inputRef:F,onKeyPress:X,fullWidth:!0,label:"In English",value:b,onChange:function(e){return W(e.target.value)}})),n.a.createElement(u.a,{xs:12,item:!0},n.a.createElement(P.a,{disabled:!_,inputRef:M,onKeyPress:X,fullWidth:!0,label:"In German",value:j,onChange:function(e){return w(e.target.value)}})))),n.a.createElement(f.a,null,n.a.createElement(u.a,{container:!0,justify:"flex-end"},n.a.createElement(h.a,{onClick:K,disabled:_?!j:!b,color:"primary"},k<19?"Next":"Finish"))))),20===k&&n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{item:!0,xs:12},n.a.createElement(E.a,{color:z<49?"error":"primary",align:"center",variant:"h4"},n.a.createElement(s.a,{fontWeight:900},"Success Rate: ",z,"%"))),n.a.createElement(u.a,{xs:12,item:!0},n.a.createElement(V.a,null,T.map((function(t,a){var r=t.wasGerman?t.questionGerman.toLowerCase()===t.answerGerman.toLowerCase():t.questionEnglish.toLowerCase()===t.answerEnglish.toLowerCase();return n.a.createElement(U.a,{divider:!0,key:a},t.wasGerman&&n.a.createElement(n.a.Fragment,null,n.a.createElement(Y.a,{primary:n.a.createElement(n.a.Fragment,null,n.a.createElement(E.a,{display:"inline"},t.questionGerman),n.a.createElement(E.a,{align:"right",display:"inline",color:"error",variant:"subtitle2",className:e.textError},!r&&t.answerGerman)),secondary:t.questionEnglish})),!t.wasGerman&&n.a.createElement(n.a.Fragment,null,n.a.createElement(Y.a,{primary:n.a.createElement(n.a.Fragment,null,n.a.createElement(E.a,{display:"inline"},t.questionEnglish),n.a.createElement(E.a,{align:"right",display:"inline",color:"error",variant:"subtitle2",className:e.textError},!r&&t.answerEnglish)),secondary:t.questionGerman})),n.a.createElement(H.a,null,n.a.createElement(D.a,{color:r?"primary":"error"},r?"check_circle_outline":"close")))})))))))},ne=n.a.forwardRef((function(e,t){return n.a.createElement(L.a,Object.assign({direction:"up",ref:t},e))})),oe=Object(N.a)((function(e){return{paperRoot:{backgroundColor:e.palette.background.default}}})),le=function(){var e=Object(p.c)((function(e){return e.AppMode})),t=oe();return n.a.createElement(k.a,{PaperProps:{className:t.paperRoot},fullScreen:!0,open:2===e,TransitionComponent:ne},n.a.createElement(q,{title:"Quiz",color:"primary"}),n.a.createElement(u.a,{container:!0,justify:"center"},n.a.createElement(u.a,{item:!0,xs:12},n.a.createElement(s.a,{mt:10},n.a.createElement(re,null)))))},ce=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(le,null),n.a.createElement($,null))},ie=function(){return n.a.createElement("div",null,n.a.createElement(i.a,{maxWidth:!1},n.a.createElement(s.a,{mt:3},n.a.createElement(u.a,{justify:"center",direction:"row",style:{minHeight:"100vh"},spacing:2,alignItems:"center",container:!0},n.a.createElement(u.a,{item:!0},n.a.createElement(Z,null)),n.a.createElement(u.a,{item:!0},n.a.createElement(ce,null))))))},se=a(69),ue=a(150),me=a(50);var de=function(){var e=n.a.useMemo((function(){return Object(se.a)({palette:{type:"dark",primary:{main:I.a.A200},secondary:{main:me.a.A200}}})}),[]),t=Object(se.a)(e);return n.a.createElement(ue.a,{theme:t},n.a.createElement(c.a,null),n.a.createElement("div",{className:"App"},n.a.createElement(ie,null)))},ge=a(20),Ee=a(8),fe=a(17);function he(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function be(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?he(a,!0).forEach((function(t){Object(Ee.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):he(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var pe=[],We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_WORD":return e.find((function(e){return e.englishWord.toLowerCase()===t.payload.englishWord.toLowerCase()}))?e:[].concat(Object(fe.a)(e),[t.payload]).sort((function(e,t){var a=e.englishWord.toUpperCase(),r=t.englishWord.toUpperCase();return a<r?-1:a>r?1:0}));case"UPDATE_WORD":return e.map((function(e,a){return a!==t.index?e:be({},e,{},t.payload)}));case"DELETE_WORD":var a=e.filter((function(e){return e.englishWord!==t.payload}));return a;default:return e.sort((function(e,t){var a=e.englishWord.toUpperCase(),r=t.englishWord.toUpperCase();return a<r?-1:a>r?1:0}))}},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_APP_MODE":return t.payload;default:return e}},Oe=Object(ge.b)({WordList:We,AppMode:ye}),je=a(55),we=a(67),ve={key:"root",storage:a.n(we).a,whitelist:["WordList"]},Ce=Object(je.a)(ve,Oe),Le=Object(ge.c)(Ce,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),ke=Object(je.b)(Le),xe=a(68),De=n.a.createElement(p.a,{store:Le},n.a.createElement(xe.a,{loading:null,persistor:ke},n.a.createElement(de,null)));l.a.render(De,document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.b0d5835e.chunk.js.map