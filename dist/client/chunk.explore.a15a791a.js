webpackJsonp([2],{268:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(6),u=a(l),r=n(12),o=a(r),s=n(8),i=a(s),c=n(7),f=a(c),d=n(1),p=a(d),h=n(269),_=a(h),v=n(347),m=a(v),b=function(e){function t(){return(0,u.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return(0,f.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.userInfo,n=e.actions;return p.default.createElement("div",{className:m.default.app},p.default.createElement(_.default,{userInfo:t,actions:n}))}}]),t}(d.Component);t.default=b,e.exports=t.default},269:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(6),u=a(l),r=n(12),o=a(r),s=n(8),i=a(s),c=n(7),f=a(c),d=n(1),p=a(d),h=n(348),_=a(h),v=function(e){function t(){return(0,u.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return(0,f.default)(t,e),(0,o.default)(t,[{key:"componentWillMount",value:function(){this.handleFetch()}},{key:"handleFetch",value:function(){var e=this.props.actions;e.fetchUserInfo()}},{key:"handleClear",value:function(){var e=this.props.actions;e.clearUserInfo()}},{key:"render",value:function(){var e=this.props.userInfo;return p.default.createElement("section",{className:_.default.sectionMain},"Explore",p.default.createElement("a",{href:"javascript:void(0)",className:_.default.btn,onClick:this.handleFetch.bind(this)},"Fetch Data"),p.default.createElement("a",{href:"javascript:void(0)",className:_.default.btn,onClick:this.handleClear.bind(this)},"Clear"),p.default.createElement("br",null),p.default.createElement("span",{className:_.default.info},e&&JSON.stringify(e)))}}]),t}(d.Component);t.default=v,e.exports=t.default},347:function(e,t){e.exports={app:"_2hn9_0yv"}},348:function(e,t){e.exports={"section-main":"cR8Jtics",sectionMain:"cR8Jtics",btn:"ONC9r7Ss",info:"_2hxu_wzB"}}});