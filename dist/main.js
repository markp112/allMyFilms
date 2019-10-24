!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n,o=function(){function e(e,t,r,n,o){this._emptyPoster="/src/assets/film.png",this._title=e,this._year=t,this._type=n,this._imdbID=r,this._poster="N/A"===o?this._emptyPoster:o}return Object.defineProperty(e.prototype,"title",{get:function(){return this._title},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"poster",{get:function(){return this._poster},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"year",{get:function(){return this._year},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"imdbID",{get:function(){return this._imdbID},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"type",{get:function(){return this._type},enumerable:!0,configurable:!0}),e}(),i=new(function(){function e(){var e=this;this._currentPage=1,this._movies=[],this._maxMovies=0,this._apiKey="&apikey=7a0a2352",this._omdbURL="http://www.omdbapi.com/",this._yearFilter="",this.addMovie=function(t){e._movies.push(t)},this.clearMovies=function(){e._movies=[],e._currentPage=1,e._maxMovies=0},this.isAtEndOfMovies=function(){return 10*e._currentPage>e._maxMovies},this.getMoviebyID=function(t){return e._movies.filter((function(e){return e.imdbID===t}))[0]}}return Object.defineProperty(e.prototype,"maxMovies",{get:function(){return this._maxMovies},set:function(e){this._maxMovies=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentPage",{get:function(){return this._currentPage},set:function(e){this._currentPage=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"yearFilter",{set:function(e){this._yearFilter=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"movies",{get:function(){var e=this;return""!=this._yearFilter?this._movies.filter((function(t){return t.year===e._yearFilter})):this._movies},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"apiKey",{get:function(){return this._apiKey},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"omdbURL",{get:function(){return this._omdbURL},enumerable:!0,configurable:!0}),e}());!function(e){e[e.WatchedMovie=0]="WatchedMovie",e[e.Bookmark=1]="Bookmark"}(n||(n={}));var c=function(e,t){var r=i.getMoviebyID(t),o=JSON.parse(localStorage.getItem(n[e]));null===o&&(o=[]);var c=o.length;return r&&(o.push(r),localStorage.setItem(n[e],JSON.stringify(o)),c++),c},a=function(e){var t=JSON.parse(localStorage.getItem(n[e]));return null===t?0:t.length},u=function(){return document.querySelector("#movie-search").value},s=function(e){var t="Actors:"+e.Actors.toString();document.querySelector(".modal-content").innerHTML=t,document.querySelector("#modal-popup").classList.add("modal-visible"),document.querySelector("#modal-popup").classList.remove("modal-hidden")},l=function(){i.currentPage++;var e,t,r,n,o=u();(e=o,t=i.currentPage,r=i.apiKey,n=i.omdbURL+"?s="+e+"&page="+t+r,new Promise((function(e,t){fetch(n).then((function(t){e(t.json())})).catch((function(e){throw new Error(e)}))}))).then((function(e){h(e.Search)})),p()},f=function(e){var t=function(e){var t=JSON.parse(localStorage.getItem(n[e]));return null===t?[]:t}(e);t.length&&(i.clearMovies(),b(t),p())},d=function(e){(function(e){var t=i.apiKey,r=i.omdbURL+"?i="+e+"&plot=full"+t;return new Promise((function(e,t){fetch(r).then((function(t){e(t.json())})).catch((function(e){throw new Error(e)}))}))})(e).then((function(e){var t=e;console.log("moviePlot :",t),s(t)}))},m=function(e){var t,r,o=document.querySelector(".content"),i=""+("<div class='card-header'><p>"+e.title+"</p></div>")+("<div class='card-body'><img src=\""+e.poster+'"/></div>')+(t=e.year,r=e.imdbID,"<div class='card-footer'><div><p>Year: "+t+'</p><i class="fas fa-binoculars" ></i></div><div><p>imdbID: '+r+'</p><i class="fas fa-bookmark"></i></div></div>'),a=document.createElement("div");a.setAttribute("class","card"),a.innerHTML=i,a.querySelector(".card-body").addEventListener("click",(function(){return d(e.imdbID)})),a.querySelector(".fa-binoculars").addEventListener("click",(function(){return function(e){var t=c(n.WatchedMovie,e);v(n.WatchedMovie,t)}(e.imdbID)})),a.querySelector(".fa-bookmark").addEventListener("click",(function(){return function(e){var t=c(n.Bookmark,e);v(n.Bookmark,t)}(e.imdbID)})),o.appendChild(a)},p=function(){document.querySelector(".content").innerHTML="";try{i.movies.forEach((function(e){m(e)}))}catch(e){throw console.log("import data failed with err",e),new Error(e)}},v=function(e,t){(e===n.WatchedMovie?document.querySelector("#watchedCount"):document.querySelector("#toWatchCount")).innerHTML=t.toString()},h=function(e){e.forEach((function(e){var t=new o(e.Title,e.Year,e.imdbID,e.Type,e.Poster);i.addMovie(t)}))},y=function(){var e,t,r=u();(e=r,t="http://www.omdbapi.com/?s="+e+i.apiKey,new Promise((function(e,r){fetch(t).then((function(t){e(t.json())})).catch((function(e){throw new Error(e)}))}))).then((function(e){i.clearMovies(),i.maxMovies=e.totalResults,h(e.Search),p(),document.querySelector("#matching-films p span").innerHTML=i.maxMovies.toString()}))},b=function(e){e.forEach((function(e){var t=new o(e._title,e._year,e._imdbID,e._type,e._poster);i.addMovie(t)}))},g=function(){document.querySelector("#movie-search").addEventListener("change",(function(){return y()})),document.querySelector(".content").addEventListener("wheel",(function(e){return t=e.deltaY,void(i.isAtEndOfMovies()||t>0&&l());var t}),{capture:!1,passive:!0}),document.querySelector("#year-picker").addEventListener("change",(function(){return e=document.querySelector("#year-picker").value,console.log("TCL: yearPicker",e),void(isNaN(parseInt(e))&&""!=e||e.length<4&&e.length>0||(i.yearFilter=e,p()));var e})),document.querySelector("#watched-movies-link").addEventListener("click",(function(){f(n.WatchedMovie)})),document.querySelector("#to-watch-link").addEventListener("click",(function(){f(n.Bookmark)}))};window.onload=function(){g(),v(n.WatchedMovie,a(n.WatchedMovie)),v(n.Bookmark,a(n.Bookmark))}}]);