(function(e,f,a){var b=f.event,c;b.special.smartresize={setup:function(){f(this).bind("resize",b.special.smartresize.handler)},teardown:function(){f(this).unbind("resize",b.special.smartresize.handler)},handler:function(h,j){var g=this,i=arguments;h.type="smartresize",c&&clearTimeout(c),c=setTimeout(function(){f.event.handle.apply(g,i)},j==="execAsap"?0:100)}},f.fn.smartresize=function(g){return g?this.bind("smartresize",g):this.trigger("smartresize",["execAsap"])},f.Mason=function(g,h){this.element=f(h),this._create(g),this._init()},f.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1,containerStyle:{position:"relative"}},f.Mason.prototype={_filterFindBricks:function(g){var h=this.options.itemSelector;return h?g.filter(h).add(g.find(h)):g},_getBricks:function(g){var h=this._filterFindBricks(g).css({position:"absolute"}).addClass("masonry-brick");return h},_create:function(j){this.options=f.extend(!0,{},f.Mason.settings,j),this.styleQueue=[];var k=this.element[0].style;this.originalStyle={height:k.height||""};var h=this.options.containerStyle;for(var g in h){this.originalStyle[g]=k[g]||""}this.element.css(h),this.horizontalDirection=this.options.isRTL?"right":"left",this.offset={x:parseInt(this.element.css("padding-"+this.horizontalDirection),10),y:parseInt(this.element.css("padding-top"),10)},this.isFluid=this.options.columnWidth&&typeof this.options.columnWidth=="function";var i=this;setTimeout(function(){i.element.addClass("masonry")},0),this.options.isResizable&&f(e).bind("smartresize.masonry",function(){i.resize()}),this.reloadItems()},_init:function(g){this._getColumns(),this._reLayout(g)},option:function(g,h){f.isPlainObject(g)&&(this.options=f.extend(!0,this.options,g))},layout:function(v,w){for(var x=0,g=v.length;x<g;x++){this._placeBrick(v[x])}var h={};h.height=Math.max.apply(Math,this.colYs);if(this.options.isFitWidth){var i=0;x=this.cols;while(--x){if(this.colYs[x]!==0){break}i++}h.width=(this.cols-i)*this.columnWidth-this.options.gutterWidth}this.styleQueue.push({$el:this.element,style:h});var j=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",k=this.options.animationOptions,l;for(x=0,g=this.styleQueue.length;x<g;x++){l=this.styleQueue[x],l.$el[j](l.style,k)}this.styleQueue=[],w&&w.call(v),this.isLaidOut=!0},_getColumns:function(){var g=this.options.isFitWidth?this.element.parent():this.element,h=g.width();this.columnWidth=this.isFluid?this.options.columnWidth(h):this.options.columnWidth||this.$bricks.outerWidth(!0)||h,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((h+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(j){var k=f(j),l,n,o,C,D;l=Math.ceil(k.outerWidth(!0)/this.columnWidth),l=Math.min(l,this.cols);if(l===1){o=this.colYs}else{n=this.cols+1-l,o=[];for(D=0;D<n;D++){C=this.colYs.slice(D,D+l),o[D]=Math.max.apply(Math,C)}}var E=Math.min.apply(Math,o),F=0;for(var G=0,g=o.length;G<g;G++){if(o[G]===E){F=G;break}}var h={top:E+this.offset.y};h[this.horizontalDirection]=this.columnWidth*F+this.offset.x,this.styleQueue.push({$el:k,style:h});var i=E+k.outerHeight(!0),m=this.cols+1-g;for(G=0;G<m;G++){this.colYs[F+G]=i}},resize:function(){var g=this.cols;this._getColumns(),(this.isFluid||this.cols!==g)&&this._reLayout()},_reLayout:function(g){var h=this.cols;this.colYs=[];while(h--){this.colYs.push(0)}this.layout(this.$bricks,g)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(g){this.reloadItems(),this._init(g)},appended:function(h,i,j){if(i){this._filterFindBricks(h).css({top:this.element.height()});var g=this;setTimeout(function(){g._appended(h,j)},1)}else{this._appended(h,j)}},_appended:function(h,i){var g=this._getBricks(h);this.$bricks=this.$bricks.add(g),this.layout(g,i)},remove:function(g){this.$bricks=this.$bricks.not(g),g.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var g=this.element[0].style;for(var h in this.originalStyle){g[h]=this.originalStyle[h]}this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),f(e).unbind(".masonry")}},f.fn.imagesLoaded=function(h){function u(){h.call(i,j)}function g(n){var m=n.target;m.src!==l&&f.inArray(m,t)===-1&&(t.push(m),--k<=0&&(setTimeout(u),j.unbind(".imagesLoaded",g)))}var i=this,j=i.find("img").add(i.filter("img")),k=j.length,l="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t=[];return k||u(),j.bind("load.imagesLoaded error.imagesLoaded",g).each(function(){var m=this.src;this.src=l,this.src=m}),i};var d=function(g){e.console&&e.console.error(g)};f.fn.masonry=function(g){if(typeof g=="string"){var h=Array.prototype.slice.call(arguments,1);this.each(function(){var i=f.data(this,"masonry");if(!i){d("cannot call methods on masonry prior to initialization; attempted to call method '"+g+"'");return}if(!f.isFunction(i[g])||g.charAt(0)==="_"){d("no such method '"+g+"' for masonry instance");return}i[g].apply(i,h)})}else{this.each(function(){var i=f.data(this,"masonry");i?(i.option(g||{}),i._init()):f.data(this,"masonry",new f.Mason(g,this))})}return this}})(window,jQuery);