parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"epB2":[function(require,module,exports) {
var o=$(".siteList"),t=o.find("li.last"),l=localStorage.getItem("x"),e=JSON.parse(l),i=e||[{logo:"B",logoType:"text",url:"https://www.bilibili.com/"},{logo:"T",logoType:"text",url:"https://www.taobao.com/"},{logo:"Z",logoType:"text",url:"https://www.zhihu.com/"}],n=function(o){return o.replace("https://","").replace("http://","").replace("www.","").replace(/\/.*/,"")},s=function l(){o.find("li:not(.last)").remove(),i.forEach(function(o,e){var s=$(' <li>\n    <div class="site">\n      <div class="logo">'+o.logo+'</div>\n      <div class="link">'+n(o.url)+'</div>\n      <div class="close"><svg class="iconpark-icon"><use href="#close"></use></svg></svg></div>\n      </div>\n</li>').insertBefore(t);s.on("click",function(){window.open(o.url)}),s.on("click",".close",function(o){o.stopPropagation(),i.splice(e,1),l()})})};s(),$(".addButton").on("click",function(){var o=window.prompt("输入你想添加的网址");0!==o.indexOf("http")&&(o="https://"+o),i.push({logo:n(o)[0].toUpperCase(),logoType:"text",url:o}),console.log(o),s()}),window.onbeforeunload=function(){var o=JSON.stringify(i);localStorage.setItem("x",o)};
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.110f00ba.map