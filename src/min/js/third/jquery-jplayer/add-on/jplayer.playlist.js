(function(a,b){jPlayerPlaylist=function(e,f,d){var c=this;this.current=0;this.loop=false;this.shuffled=false;this.removing=false;this.cssSelector=a.extend({},this._cssSelector,e);this.options=a.extend(true,{keyBindings:{next:{key:39,fn:function(){c.next()}},previous:{key:37,fn:function(){c.previous()}}}},this._options,d);this.playlist=[];this.original=[];this._initPlaylist(f);this.cssSelector.title=this.cssSelector.cssSelectorAncestor+" .jp-title";this.cssSelector.playlist=this.cssSelector.cssSelectorAncestor+" .jp-playlist";this.cssSelector.next=this.cssSelector.cssSelectorAncestor+" .jp-next";this.cssSelector.previous=this.cssSelector.cssSelectorAncestor+" .jp-previous";this.cssSelector.shuffle=this.cssSelector.cssSelectorAncestor+" .jp-shuffle";this.cssSelector.shuffleOff=this.cssSelector.cssSelectorAncestor+" .jp-shuffle-off";this.options.cssSelectorAncestor=this.cssSelector.cssSelectorAncestor;this.options.repeat=function(g){c.loop=g.jPlayer.options.loop};a(this.cssSelector.jPlayer).bind(a.jPlayer.event.ready,function(){c._init()});a(this.cssSelector.jPlayer).bind(a.jPlayer.event.ended,function(){c.next()});a(this.cssSelector.jPlayer).bind(a.jPlayer.event.play,function(){a(this).jPlayer("pauseOthers")});a(this.cssSelector.jPlayer).bind(a.jPlayer.event.resize,function(g){if(g.jPlayer.options.fullScreen){a(c.cssSelector.title).show()}else{a(c.cssSelector.title).hide()}});a(this.cssSelector.previous).click(function(){c.previous();a(this).blur();return false});a(this.cssSelector.next).click(function(){c.next();a(this).blur();return false});a(this.cssSelector.shuffle).click(function(){c.shuffle(true);return false});a(this.cssSelector.shuffleOff).click(function(){c.shuffle(false);return false}).hide();if(!this.options.fullScreen){a(this.cssSelector.title).hide()}a(this.cssSelector.playlist+" ul").empty();this._createItemHandlers();a(this.cssSelector.jPlayer).jPlayer(this.options)};jPlayerPlaylist.prototype={_cssSelector:{jPlayer:"#jquery_jplayer_1",cssSelectorAncestor:"#jp_container_1"},_options:{playlistOptions:{autoPlay:false,loopOnPrevious:false,shuffleOnLoop:true,enableRemoveControls:false,displayTime:"slow",addTime:"fast",removeTime:"fast",shuffleTime:"slow",itemClass:"jp-playlist-item",freeGroupClass:"jp-free-media",freeItemClass:"jp-playlist-item-free",removeItemClass:"jp-playlist-item-remove"}},option:function(c,d){if(d===b){return this.options.playlistOptions[c]}this.options.playlistOptions[c]=d;switch(c){case"enableRemoveControls":this._updateControls();break;case"itemClass":case"freeGroupClass":case"freeItemClass":case"removeItemClass":this._refresh(true);this._createItemHandlers();break}return this},_init:function(){var c=this;this._refresh(function(){if(c.options.playlistOptions.autoPlay){c.play(c.current)}else{c.select(c.current)}})},_initPlaylist:function(c){this.current=0;this.shuffled=false;this.removing=false;this.original=a.extend(true,[],c);this._originalPlaylist()},_originalPlaylist:function(){var c=this;this.playlist=[];a.each(this.original,function(d){c.playlist[d]=c.original[d]})},_refresh:function(d){var c=this;if(d&&!a.isFunction(d)){a(this.cssSelector.playlist+" ul").empty();a.each(this.playlist,function(f){a(c.cssSelector.playlist+" ul").append(c._createListItem(c.playlist[f]))});this._updateControls()}else{var e=a(this.cssSelector.playlist+" ul").children().length?this.options.playlistOptions.displayTime:0;a(this.cssSelector.playlist+" ul").slideUp(e,function(){var f=a(this);a(this).empty();a.each(c.playlist,function(g){f.append(c._createListItem(c.playlist[g]))});c._updateControls();if(a.isFunction(d)){d()}if(c.playlist.length){a(this).slideDown(c.options.playlistOptions.displayTime)}else{a(this).show()}})}},_createListItem:function(e){var c=this;var d="<li><div>";d+="<a href='javascript:;' class='"+this.options.playlistOptions.removeItemClass+"'>&times;</a>";if(e.free){var f=true;d+="<span class='"+this.options.playlistOptions.freeGroupClass+"'>(";a.each(e,function(h,g){if(a.jPlayer.prototype.format[h]){if(f){f=false}else{d+=" | "}d+="<a class='"+c.options.playlistOptions.freeItemClass+"' href='"+g+"' tabindex='1'>"+h+"</a>"}});d+=")</span>"}d+="<a href='javascript:;' class='"+this.options.playlistOptions.itemClass+"' tabindex='1'>"+e.title+(e.artist?" <span class='jp-artist'>by "+e.artist+"</span>":"")+"</a>";d+="</div></li>";return d},_createItemHandlers:function(){var c=this;a(this.cssSelector.playlist).off("click","a."+this.options.playlistOptions.itemClass).on("click","a."+this.options.playlistOptions.itemClass,function(){var d=a(this).parent().parent().index();if(c.current!==d){c.play(d)}else{a(c.cssSelector.jPlayer).jPlayer("play")}a(this).blur();return false});a(this.cssSelector.playlist).off("click","a."+this.options.playlistOptions.freeItemClass).on("click","a."+this.options.playlistOptions.freeItemClass,function(){a(this).parent().parent().find("."+c.options.playlistOptions.itemClass).click();a(this).blur();return false});a(this.cssSelector.playlist).off("click","a."+this.options.playlistOptions.removeItemClass).on("click","a."+this.options.playlistOptions.removeItemClass,function(){var d=a(this).parent().parent().index();c.remove(d);a(this).blur();return false})},_updateControls:function(){if(this.options.playlistOptions.enableRemoveControls){a(this.cssSelector.playlist+" ."+this.options.playlistOptions.removeItemClass).show()}else{a(this.cssSelector.playlist+" ."+this.options.playlistOptions.removeItemClass).hide()}if(this.shuffled){a(this.cssSelector.shuffleOff).show();a(this.cssSelector.shuffle).hide()}else{a(this.cssSelector.shuffleOff).hide();a(this.cssSelector.shuffle).show()}},_highlight:function(c){if(this.playlist.length&&c!==b){a(this.cssSelector.playlist+" .jp-playlist-current").removeClass("jp-playlist-current");a(this.cssSelector.playlist+" li:nth-child("+(c+1)+")").addClass("jp-playlist-current").find(".jp-playlist-item").addClass("jp-playlist-current");a(this.cssSelector.title+" li").html(this.playlist[c].title+(this.playlist[c].artist?" <span class='jp-artist'>by "+this.playlist[c].artist+"</span>":""))}},setPlaylist:function(c){this._initPlaylist(c);this._init()},add:function(c,d){a(this.cssSelector.playlist+" ul").append(this._createListItem(c)).find("li:last-child").hide().slideDown(this.options.playlistOptions.addTime);this._updateControls();this.original.push(c);this.playlist.push(c);if(d){this.play(this.playlist.length-1)}else{if(this.original.length===1){this.select(0)}}},remove:function(d){var c=this;if(d===b){this._initPlaylist([]);this._refresh(function(){a(c.cssSelector.jPlayer).jPlayer("clearMedia")});return true}else{if(this.removing){return false}else{d=(d<0)?c.original.length+d:d;if(0<=d&&d<this.playlist.length){this.removing=true;a(this.cssSelector.playlist+" li:nth-child("+(d+1)+")").slideUp(this.options.playlistOptions.removeTime,function(){a(this).remove();if(c.shuffled){var e=c.playlist[d];a.each(c.original,function(f){if(c.original[f]===e){c.original.splice(f,1);return false}});c.playlist.splice(d,1)}else{c.original.splice(d,1);c.playlist.splice(d,1)}if(c.original.length){if(d===c.current){c.current=(d<c.original.length)?c.current:c.original.length-1;c.select(c.current)}else{if(d<c.current){c.current--}}}else{a(c.cssSelector.jPlayer).jPlayer("clearMedia");c.current=0;c.shuffled=false;c._updateControls()}c.removing=false})}return true}}},select:function(c){c=(c<0)?this.original.length+c:c;if(0<=c&&c<this.playlist.length){this.current=c;this._highlight(c);a(this.cssSelector.jPlayer).jPlayer("setMedia",this.playlist[this.current])}else{this.current=0}},play:function(c){c=(c<0)?this.original.length+c:c;if(0<=c&&c<this.playlist.length){if(this.playlist.length){this.select(c);a(this.cssSelector.jPlayer).jPlayer("play")}}else{if(c===b){a(this.cssSelector.jPlayer).jPlayer("play")}}},pause:function(){a(this.cssSelector.jPlayer).jPlayer("pause")},next:function(){var c=(this.current+1<this.playlist.length)?this.current+1:0;if(this.loop){if(c===0&&this.shuffled&&this.options.playlistOptions.shuffleOnLoop&&this.playlist.length>1){this.shuffle(true,true)}else{this.play(c)}}else{if(c>0){this.play(c)}}},previous:function(){var c=(this.current-1>=0)?this.current-1:this.playlist.length-1;if(this.loop&&this.options.playlistOptions.loopOnPrevious||c<this.playlist.length-1){this.play(c)}},shuffle:function(c,e){var d=this;if(c===b){c=!this.shuffled}if(c||c!==this.shuffled){a(this.cssSelector.playlist+" ul").slideUp(this.options.playlistOptions.shuffleTime,function(){d.shuffled=c;if(c){d.playlist.sort(function(){return 0.5-Math.random()})}else{d._originalPlaylist()}d._refresh(true);if(e||!a(d.cssSelector.jPlayer).data("jPlayer").status.paused){d.play(0)}else{d.select(0)}a(this).slideDown(d.options.playlistOptions.shuffleTime)})}}}})(jQuery);