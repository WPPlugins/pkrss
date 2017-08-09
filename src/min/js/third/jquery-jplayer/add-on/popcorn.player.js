(function(b){var f=function(j,i){j=j||b.nop;i=i||b.nop;return function(){j.apply(this,arguments);i.apply(this,arguments)}};var g=/^(#([\w\-\_\.]+))$/;var d="ogg|oga|aac|mp3|wav",e="ogg|ogv|mp4|webm",h=d+"|"+e;var c=new RegExp("^.*\\.("+d+")($|\\?)"),a=new RegExp("^.*\\.("+h+")($|\\?)");b.player=function(i,j){if(b[i]){return}j=j||{};var k=function(u,l,A){A=A||{};var p=new Date()/1000,r=p,n=0,s=0,t=1,x=false,z={},m=typeof u==="string"?b.dom.find(u):u,q={},w,y;if(!Object.prototype.__defineGetter__){q=m||document.createElement("div")}for(var o in m){if(o in q){continue}if(typeof m[o]==="object"){q[o]=m[o]}else{if(typeof m[o]==="function"){q[o]=(function(B){if("length" in m[B]&&!m[B].call){return m[B]}else{return function(){return m[B].apply(m,arguments)}}}(o))}else{b.player.defineProperty(q,o,{get:(function(B){return function(){return m[B]}}(o)),set:b.nop,configurable:true})}}}var v=function(){p=new Date()/1000;if(!q.paused){q.currentTime=q.currentTime+(p-r);q.dispatchEvent("timeupdate");w=setTimeout(v,10)}r=p};q.play=function(){this.paused=false;if(q.readyState>=4){r=new Date()/1000;q.dispatchEvent("play");v()}};q.pause=function(){this.paused=true;q.dispatchEvent("pause")};b.player.defineProperty(q,"currentTime",{get:function(){return n},set:function(B){n=+B;q.dispatchEvent("timeupdate");return n},configurable:true});b.player.defineProperty(q,"volume",{get:function(){return t},set:function(B){t=+B;q.dispatchEvent("volumechange");return t},configurable:true});b.player.defineProperty(q,"muted",{get:function(){return x},set:function(B){x=+B;q.dispatchEvent("volumechange");return x},configurable:true});b.player.defineProperty(q,"readyState",{get:function(){return s},set:function(B){s=B;return s},configurable:true});q.addEventListener=function(C,B){if(!z[C]){z[C]=[]}z[C].push(B);return B};q.removeEventListener=function(E,D){var B,C=z[E];if(!C){return}for(B=z[E].length-1;B>=0;B--){if(D===C[B]){C.splice(B,1)}}return D};q.dispatchEvent=function(E){var B,D=this,G,C=E.type;if(!C){C=E;G=b.events.getInterface(C);if(G){B=document.createEvent(G);B.initEvent(C,true,true,window,1)}}if(z[C]){for(var F=z[C].length-1;F>=0;F--){z[C][F].call(D,B,D)}}};q.src=l||"";q.duration=0;q.paused=true;q.ended=0;A&&A.events&&b.forEach(A.events,function(C,B){q.addEventListener(B,C,false)});if(j._canPlayType(m.nodeName,l)!==false){if(j._setup){j._setup.call(q,A)}else{q.readyState=4;q.dispatchEvent("loadedmetadata");q.dispatchEvent("loadeddata");q.dispatchEvent("canplaythrough")}}else{setTimeout(function(){q.dispatchEvent("error")},0)}y=new b.p.init(q,A);if(j._teardown){y.destroy=f(y.destroy,function(){j._teardown.call(q,A)})}return y};k.canPlayType=j._canPlayType=j._canPlayType||b.nop;b[i]=b.player.registry[i]=k};b.player.registry={};b.player.defineProperty=Object.defineProperty||function(j,k,i){j.__defineGetter__(k,i.get||b.nop);j.__defineSetter__(k,i.set||b.nop)};b.player.playerQueue=function(){var i=[],j=false;return{next:function(){j=false;i.shift();i[0]&&i[0]()},add:function(k){i.push(function(){j=true;k&&k()});!j&&i[0]()}}};b.smart=function(s,j,x){var v,m=["AUDIO","VIDEO"],o,p,n=b.dom.find(s),q,k,l=document.createElement("video"),t={ogg:"video/ogg",ogv:"video/ogg",oga:"audio/ogg",webm:"video/webm",mp4:"video/mp4",mp3:"audio/mp3"};var w=function(i){return l.canPlayType(t[i])};var r=function(i){k=a.exec(i);if(!k||!k[1]){return false}return w(k[1])};if(!n){b.error("Specified target "+s+" was not found.");return}if(m.indexOf(n.nodeName)>-1&&!j){if(typeof j==="object"){x=j;j=undefined}return b(n,x)}if(typeof(j)==="string"){j=[j]}for(q=0,srcLength=j.length;q<srcLength;q++){if(r(j[q])){j=j[q];break}for(var u in b.player.registry){if(b.player.registry.hasOwnProperty(u)){if(b.player.registry[u].canPlayType(n.nodeName,j[q])){return b[u](n,j[q],x)}}}}if(m.indexOf(n.nodeName)===-1){p=typeof(j)==="string"?j:j.length?j[0]:j;s=document.createElement(!!c.exec(p)?m[0]:m[1]);s.controls=true;n.appendChild(s);n=s}x&&x.events&&x.events.error&&n.addEventListener("error",x.events.error,false);n.src=j;return b(n,x)}})(Popcorn);