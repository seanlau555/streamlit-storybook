"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("@mui/material/Slider");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e),o=r(t),a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},a(e,t)};var u=function(e){function t(t){var r=e.call(this,t)||this;return r.state={value:0},r.onChange=function(e){r.props.onChange&&r.props.onChange(e)},r.render=function(){var e,t=r.props.options,a=void 0===t?["1","2","3"]:t;return n.default.createElement(o.default,{"aria-label":"Restricted values",defaultValue:0,min:0,max:a.length-1,step:null,size:"small",value:r.state.value,valueLabelDisplay:"off",marks:(e=a,e.map((function(e,t){return{value:t,label:e}}))),onChange:function(e,t){var n=a[Number(t)];r.setState({value:t}),r.onChange(n)},disabled:r.props.disabled})},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t}(n.default.PureComponent);exports.DiscreteSlider=u;
