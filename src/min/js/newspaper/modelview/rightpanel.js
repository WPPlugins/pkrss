pkrss.cls.rightpanel=function(){this.items=[{name:"onoff",title:"Open/Off",ns:"pkrss.modelview.rightpanel.onoff",js:pkrss.ajax.pkurlresurlpath+"js/newspaper/modelview/rightpanel_onoff.js"},{name:"tool",title:"Tool Plugin",ns:"pkrss.modelview.rightpanel.tools",js:pkrss.ajax.pkurlresurlpath+"js/newspaper/modelview/rightpanel_tools.js"},{name:"imgplugin",title:"Change UI",ns:"pkrss.modelview.rightpanel.picimg",js:pkrss.ajax.pkurlresurlpath+"js/newspaper/modelview/rightpanel_picimg.js"}];this.init()};pkrss.cls.rightpanel.prototype.init=function(c){if(!c){c="body"}var b='<div id="tool_right_pane_container"><ul id="tool_right_pane">';var d;for(var a in this.items){d=this.items[a];b+='<li class="pkhalftransparent"><a href="javascript:;" onclick="return pkrss.modelview.rightpanel.onRightPanelClick(this,\''+d.name+'\')" id="tool_right_pane_item_'+d.name+'" class="pkico pkico-'+d.name+' tool_right_pane_item_btn" title="'+pkgetLocaleString(d.title)+'"><span style="right:40px;"></span></a></li>'}b+="</ul></div>";pkrss.q(c).append(b)};pkrss.cls.rightpanel.prototype.append=function(a,b){if(b){pkrss.q("#tool_right_pane").prepend(a)}else{pkrss.q("#tool_right_pane").append(a)}};pkrss.cls.rightpanel.prototype.onRightPanelClick=function(b,a){this.loaditem(b,a);return false};pkrss.cls.rightpanel.prototype.loaditem=function(f,b,a){f=pkrss.q(f);var d=f.parent();if(d.hasClass("pkhalftransparent")){d.removeClass("pkhalftransparent");f.prop("onclick","return false");var e;for(var c in this.items){e=this.items[c];if(e.name==b){if(e.js){pkrss.utils.html.loadPlateformJs([{ns:e.ns,src:e.js}],a)}break}}return true}else{if(a){a(true)}}return false};pkrss.cls.rightpanel.prototype.floatpanel=function(e,g,a,f){var d="pkrss.cls.floatpanel";var b=pkrss.getObjFromNamespace(d);if(b){var c=new b(e,g,a);if(!f){c.onHoverLeave(true)}}else{pkrss.utils.html.loadPlateformJs([{ns:d,src:pkrss.ajax.pkurlresurlpath+"js/modelview/floatpanel.js"}],function(i){if(!i){return}var h=new pkrss.cls.floatpanel(e,g,a);if(!f){h.onHoverLeave(true)}shownow=null;g=null;e=null;a=null})}};pkrss.cls.rightpanel.prototype.switchComponentContentType=function(a){this.loaditem(pkrss.q("#tool_right_pane_item_onoff"),"onoff",function(b){if(!b){return}var c=pkrss.getObjFromNamespace("pkrss.controller.header");if(c){c.switchComponentContentType(a);a=null}else{pkrss.modelview.rightpanel.onoff.onItemClick("header",pkrss.q("#tool_right_pane_item_header"),function(d){if(!d){return}pkrss.controller.header.switchComponentContentType(a);a=null})}})};pkrss.define("pkrss.modelview",{rightpanel:new pkrss.cls.rightpanel()});