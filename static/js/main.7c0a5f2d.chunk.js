(this["webpackJsonpmodule-react-03-t1-hooks"]=this["webpackJsonpmodule-react-03-t1-hooks"]||[]).push([[0],{165:function(e,t,a){},166:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),l=a(31),i=a(16),u=a(17),s=a(21),m=a(20),h=a(18),g=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={targetValue:""},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmt(e.state.targetValue)},e.handleChange=function(t){console.log(Object(h.a)(e)),e.setState({targetValue:t.target.value})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,value:this.state.targetValue,placeholder:"Search images and photos",onChange:this.handleChange})))}}]),a}(n.Component);a(33);function p(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL;return r.a.createElement("li",{"data-attribute":"SRL",id:t,className:"ImageGalleryItem"},r.a.createElement("img",{src:a,alt:"",className:"ImageGalleryItem-image","data-index":n}))}var f=a(19),y=(a(145),a(52)),d=a.n(y);function b(e){var t=e.images;return r.a.createElement(f.a,null,r.a.createElement("ul",{className:"ImageGallery"},t.map((function(e){return console.log(e),r.a.createElement(p,{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,key:e.id})}))),r.a.createElement(d.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}))}var v={key:"18291614-3687f9869972091b65dd4882c",perPage:12,crateFetchFind:function(e,t){return console.log(t),fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=\n        ".concat(e,"&page=").concat(t,"&per_page=").concat(this.perPage,"&key=").concat(this.key)).then((function(e){return e.json()})).then((function(e){return e.hits}))}},E=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchQuery:"",pageQuery:1},e.fetchImages=function(){v.crateFetchFind(e.state.searchQuery,e.state.pageQuery).then((function(t){e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),pageQuery:e.pageQuery+1}})),e.lazyLoadImg()}))},e.handlerSearchQuery=function(t){e.setState({searchQuery:t,images:[],pageQuery:1})},e.options={rootMargin:"50px"},e.onEntry=function(t,a){t.forEach((function(t){t.isIntersecting&&(console.log("\u0437\u0430\u0448\u043b\u0438 onEntry"),a.unobserve(t.target),e.fetchImages())}))},e.infinityScroll=new IntersectionObserver(e.onEntry,e.options),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t,a){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"lazyLoadImg",value:function(){console.log("\u0437\u0430\u0448\u043b\u0438 lazyLoadImg");var e=document.querySelectorAll(".ImageGalleryItem");this.infinityScroll.observe(e[e.length-1])}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.b,null,r.a.createElement(g,{onSubmt:this.handlerSearchQuery}),this.state.images.length>0&&r.a.createElement(b,{images:this.state.images})))}}]),a}(n.Component);a(165);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null))),document.getElementById("root"))},53:function(e,t,a){e.exports=a(166)}},[[53,1,2]]]);
//# sourceMappingURL=main.7c0a5f2d.chunk.js.map