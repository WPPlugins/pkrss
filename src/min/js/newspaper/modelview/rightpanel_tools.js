pkrss.cls.rightpanel_tools=function(){this.init()};pkrss.cls.rightpanel_tools.prototype.init=function(){var a="";a='<div id="tool_right_pane_item_tool_con" class="tool_float_pane_container">  <div>		<div>			<a href="#" id="tool_right_pane_item_translate" class="pkico" title="'+pkgetLocaleString("Translate in Bing")+'"><span style="right:40px;"></span></a>      <a href="#" onclick="pkrss.modelview.rightpanel.switchComponentContentType(\'search\');return false;" class="pkico pkico-common pkico-search" title="'+pkgetLocaleString("Search")+'"><span style="right:40px;"></span></a>		</div>	</div></div>';pkrss.q("#plugin_container").append(a);pkrss.modelview.rightpanel.floatpanel(pkrss.q("#tool_right_pane_item_tool"),"_con","tool_right_pane_li_a_sel");this.init_mst()};pkrss.cls.rightpanel_tools.prototype.init_mst=function(){var a='<div id="MicrosoftTranslatorWidget" style="width: 200px; min-height: 0px; border-color: #000033; background-color: #003366; display: none;position:fixed;z-index:2;"><noscript><a href="https://ssl.microsofttranslator.com/bv.aspx?a=http%3a%2f%2fwww.pk17s.cn%2f">Translate this page</a><br />Powered by <a href="http://www.bing.com/translator">Microsoft? Translator</a></noscript></div>';pkrss.q(a).insertBefore("#container");function b(e){if(e=="zh_CN"||e=="zh"){e="zh-CHS"}else{if(e=="zh_TW"){e="zh-CHT"}else{var d=e.indexOf("_");if(d>=0){e=e.substr(d)}}}return e}var c=false;pkrss.q("#tool_right_pane_item_translate").on("click",function(d){var e=pkrss.q("#MicrosoftTranslatorWidget");if(e.is(":visible")){e.hide();pkrss.q("#MSTTExitLink").trigger("click")}else{var f=b(pkrss.model.locale.curlocale());if(f!=c){c=f;setTimeout(function(){var g=document.createElement("script");g.type="text/javascript";g.charset="UTF-8";g.async=true;g.src=((location&&location.href&&location.href.indexOf("https")==0)?"https://ssl.microsofttranslator.com":"http://www.microsofttranslator.com")+"/ajax/v2/widget.aspx?siteData=5-gDYmgEWBZuboGmL97tEWjMG24TdsZTMNcOWXxd4XYf-JvgsEoJFJYO-v2afS8f4mycCfDEY8-Ffw5Xt4aALuoh_iNs7-eHctwKAluzZXljrxXkPsQ0K7kgiGNFtUl2&mode=manual&from="+f+"&layout=ts";var h=document.getElementsByTagName("head")[0]||document.documentElement;h.insertBefore(g,h.firstChild)},0)}e.show()}});pkrss.timer.interval2(300,30,function(){return pkrss.q("#MSTTExitLink").length>0?true:false},function(){pkrss.q("#MSTTExitLink").on("click",function(d){pkrss.q("#MicrosoftTranslatorWidget").hide()})})};pkrss.define("pkrss.modelview.rightpanel",{tools:new pkrss.cls.rightpanel_tools()});