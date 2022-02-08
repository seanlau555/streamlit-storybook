import t from"react";import e from"@mui/material/Slider";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},n(t,e)};var r=function(r){function o(n){var o=r.call(this,n)||this;return o.state={value:0},o.onChange=function(t){o.props.onChange&&o.props.onChange(t)},o.render=function(){var n,r=o.props.options,a=void 0===r?["1","2","3"]:r;return t.createElement(e,{"aria-label":"Restricted values",defaultValue:0,min:0,max:a.length-1,step:null,size:"small",value:o.state.value,valueLabelDisplay:"off",marks:(n=a,n.map((function(t,e){return{value:e,label:t}}))),onChange:function(t,e){var n=a[Number(e)];o.setState({value:e}),o.onChange(n)},disabled:o.props.disabled})},o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(o,r),o}(t.PureComponent);export{r as DiscreteSlider};
