(function(){function a(){var c="Browser";var k,h;function j(){if((typeof(chrome)!="undefined")&&chrome&&(typeof(chrome.tts)!="undefined")&&chrome.tts){return true}return false}function l(){if(!j()){return}k=chrome.tts;speaktts.addengine(this)}function d(n){if(!j()){n(null,c);return false}if(!h){h=[];chrome.tts.getVoices(function(o){var q,s,r;for(var p=0;p<o.length;p++){q=o[p];r=s[q.lang];if(!r){r={locale:q.lang,tts:[]};h.push(r)}r.tts.push({id:q.extensionId,name:q.voiceName})}if(n){n(h,c)}})}else{if(n){n(h,c)}}return true}function m(n){}function f(n){k.speak(n,{lang:"zh-CN",onEvent:function(o){if(o.type=="end"){speaktts.onend()}}});return true}function i(){if(k.played){k.pause()}}function e(n){}function g(n){}return{name:c,init:l,getTTSList:d,setCurrentTTS:m,speak:f,stop:i,mute:e,volume:g}}var b=new a();pkrss.utils.tts.factory.regist(b,true);pkrss.define("pkrss.utils.tts",{chrome:b})})();