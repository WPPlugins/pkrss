(function(d){var o=d.extend,j="mousedown",p="mousemove",k="mouseup",n="touchstart",h="touchmove",q="touchend",f="touchcancel";function e(w,u,v){if(u.substr(0,5)!=="touch"){return d(w).unbind(u,v)}var x,t;for(t=0;t<s._binds.length;t++){if(s._binds[t].elem===w&&s._binds[t].type===u&&s._binds[t].func===v){if(document.addEventListener){w.removeEventListener(u,s._binds[t].fnc,false)}else{w.detachEvent("on"+u,s._binds[t].fnc)}s._binds.splice(t--,1)}}}function s(x,u,w,v){if(u.substr(0,5)!=="touch"){return d(x).bind(u,v,w)}var y,t;if(s[u]){return s[u].bind(x,u,w,v)}y=function(z){if(!z){z=window.event}if(!z.stopPropagation){z.stopPropagation=function(){this.cancelBubble=true}}z.data=v;w.call(x,z)};if(document.addEventListener){x.addEventListener(u,y,false)}else{x.attachEvent("on"+u,y)}s._binds.push({elem:x,type:u,func:w,fnc:y})}function g(u,t){var v={move:{x:0,y:0},offset:{x:0,y:0},position:{x:0,y:0},start:{x:0,y:0},affects:document.documentElement,stopPropagation:false,preventDefault:true,touch:true};o(v,t);v.element=u;s(u,j,r,v);if(v.touch){s(u,n,a,v)}}function i(t){e(t,j,j)}function r(t){t.data.position.x=t.pageX;t.data.position.y=t.pageY;t.data.start.x=t.pageX;t.data.start.y=t.pageY;t.data.event=t;if(t.data.onstart&&t.data.onstart.call(t.data.element,t.data)){return}if(t.preventDefault&&t.data.preventDefault){t.preventDefault()}if(t.stopPropagation&&t.data.stopPropagation){t.stopPropagation()}s(t.data.affects,p,b,t.data);s(t.data.affects,k,m,t.data)}function b(t){if(t.preventDefault&&t.data.preventDefault){t.preventDefault()}if(t.stopPropagation&&t.data.preventDefault){t.stopPropagation()}t.data.move.x=t.pageX-t.data.position.x;t.data.move.y=t.pageY-t.data.position.y;t.data.position.x=t.pageX;t.data.position.y=t.pageY;t.data.offset.x=t.pageX-t.data.start.x;t.data.offset.y=t.pageY-t.data.start.y;t.data.event=t;if(t.data.onmove){t.data.onmove.call(t.data.element,t.data)}}function m(t){if(t.preventDefault&&t.data.preventDefault){t.preventDefault()}if(t.stopPropagation&&t.data.stopPropagation){t.stopPropagation()}e(t.data.affects,p,b);e(t.data.affects,k,m);t.data.event=t;if(t.data.onfinish){t.data.onfinish.call(t.data.element,t.data)}}function a(t){t.data.position.x=t.touches[0].pageX;t.data.position.y=t.touches[0].pageY;t.data.start.x=t.touches[0].pageX;t.data.start.y=t.touches[0].pageY;t.data.event=t;if(t.data.onstart&&t.data.onstart.call(t.data.element,t.data)){return}if(t.preventDefault&&t.data.preventDefault){t.preventDefault()}if(t.stopPropagation&&t.data.stopPropagation){t.stopPropagation()}s(t.data.affects,h,l,t.data);s(t.data.affects,q,c,t.data)}function l(t){if(t.preventDefault&&t.data.preventDefault){t.preventDefault()}if(t.stopPropagation&&t.data.stopPropagation){t.stopPropagation()}t.data.move.x=t.touches[0].pageX-t.data.position.x;t.data.move.y=t.touches[0].pageY-t.data.position.y;t.data.position.x=t.touches[0].pageX;t.data.position.y=t.touches[0].pageY;t.data.offset.x=t.touches[0].pageX-t.data.start.x;t.data.offset.y=t.touches[0].pageY-t.data.start.y;t.data.event=t;if(t.data.onmove){t.data.onmove.call(t.data.elem,t.data)}}function c(t){if(t.preventDefault&&t.data.preventDefault){t.preventDefault()}if(t.stopPropagation&&t.data.stopPropagation){t.stopPropagation()}e(t.data.affects,h,l);e(t.data.affects,q,c);t.data.event=t;if(t.data.onfinish){t.data.onfinish.call(t.data.element,t.data)}}s._binds=[];d.fn.grab=function(u,t){return this.each(function(){return g(this,u,t)})};d.fn.ungrab=function(t){return this.each(function(){return i(this,t)})}})(jQuery);