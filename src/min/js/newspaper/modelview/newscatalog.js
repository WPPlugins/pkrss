function modelview_catalog(){this.catalogSelector="#navitem_rssCatalog";this.tableSelector="#navitem_rssTable"}modelview_catalog.prototype.init=function(b,d,a,c){this.catalogSelector=b;this.tableSelector=d;this.init_catandtab(a,c);this.init_rsschangeevent()};modelview_catalog.prototype.init_catandtab=function(a,c){var b=this;b.initcat(function(){if(c){pkrss.profile.usersetting.selectedTId=c}b.inittab(a);b=null})};modelview_catalog.prototype.init_rsschangeevent=function(){var a=this;pkrss.q(this.catalogSelector).change(function(c){var b=pkrss.q(this).val();if(pkrss.profile.usersetting.selectedCId==b){return}var e=pkrss.profile.usersetting.selectedCId;var d=pkrss.profile.usersetting.selectedTId;pkrss.profile.usersetting.selectedCId=b;pkrss.profile.usersetting.selectedTId=0;pkrss.modelview.catalog.inittab();pkrss.event.trigger(pkrss.model.event.catalogChanged,{cid:b,oldCid:e});pkrss.event.trigger(pkrss.model.event.tableChanged,{tid:b,oldTid:d})});pkrss.q(this.tableSelector).change(function(c){var b=pkrss.q(this).val();var d=pkrss.profile.usersetting.selectedTId;if(pkrss.profile.usersetting.selectedTId==b){return}pkrss.profile.usersetting.selectedTId=b;pkrss.event.trigger(pkrss.model.event.tableChanged,{tid:b,oldTid:d})});pkrss.event.bind(pkrss.model.event.localeChanged,function(){a.init_catandtab(function(){pkrss.event.trigger(pkrss.model.event.catalogChanged,{cid:pkrss.profile.usersetting.selectedCId,oldCid:0});pkrss.event.trigger(pkrss.model.event.tableChanged,{tid:pkrss.profile.usersetting.selectedTId,oldTid:0})})})};modelview_catalog.prototype.initcat=function(a){pkrss.profile.usersetting.selectedCId=0;var b=this;pkrss.model.catalog.init(false,function(c){var d=pkrss.q(b.catalogSelector);b.loadnav(d,c);b.loadnavlabel(d);b=null;if(a){a()}})};modelview_catalog.prototype.loadnav=function(e,d){var c="";c+="<option value='0'>"+pkgetLocaleString("All")+"</option>";if(d){for(var a in d){var b=d[a];c+="<option value='"+b.id+"'>"+b.text+"</option>"}}e.empty();e.append(c)};modelview_catalog.prototype.loadnavlabel=function(b){try{b.val(pkrss.profile.usersetting.selectedCId)}catch(a){}};modelview_catalog.prototype.inittab=function(a){var b=this;pkrss.model.table.init(false,function(c){var d=pkrss.q(b.tableSelector);b.loadtab(d,c);b.loadtablabel(d);b=null;if(a){a()}})};modelview_catalog.prototype.loadtab=function(h,b){var d="";d+="<option value='0'>"+pkgetLocaleString("All")+"</option>";if(b){for(var c in b){var f=b[c];d+="<option value='"+f.id+"'>"+(f.title||f.text)+"</option>"}}h.empty();h.append(d);try{if(this.currentChangeCatalogTableId){var a=this.currentChangeCatalogTableId;this.currentChangeCatalogTableId=0;h.val(a);h.trigger("change")}}catch(g){}};modelview_catalog.prototype.loadtablabel=function(b){try{b.val(pkrss.profile.usersetting.selectedTId)}catch(a){}};modelview_catalog.prototype.changeRssTable=function(d,b){var c=pkrss.q(this.catalogSelector);var a=pkrss.q(this.tableSelector);if(d&&c.val()!=d){this.currentChangeCatalogTableId=b;c.val(d);c.trigger("change")}else{if(b&&a.val()!=b){a.val(b);a.trigger("change")}}return false};pkrss.define("pkrss.modelview",{catalog:new modelview_catalog()});