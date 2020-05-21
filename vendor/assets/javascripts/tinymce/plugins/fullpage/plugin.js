/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.3.0 (2020-05-21)
 */
!function(p){"use strict";var s=function(e){var t=e;return{get:function(){return t},set:function(e){t=e}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=function(){return(u=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},y=tinymce.util.Tools.resolve("tinymce.util.Tools"),t=tinymce.util.Tools.resolve("tinymce.html.DomParser"),m=tinymce.util.Tools.resolve("tinymce.html.Node"),f=tinymce.util.Tools.resolve("tinymce.html.Serializer"),h=function(e){return e.getParam("fullpage_hide_in_source_view")},o=function(e){return e.getParam("fullpage_default_encoding")},g=function(e){return e.getParam("fullpage_default_font_family")},v=function(e){return e.getParam("fullpage_default_font_size")},_=function(e){return t({validate:!1,root_name:"#document"}).parse(e,{format:"xhtml"})},d=function(l,i){var e,t,n,o,r,a,c=(e=l,t=i.get(),r=_(t),(a={}).fontface=g(e),a.fontsize=v(e),7===(n=r.firstChild).type&&(a.xml_pi=!0,(o=/encoding="([^"]+)"/.exec(n.value))&&(a.docencoding=o[1])),(n=r.getAll("#doctype")[0])&&(a.doctype="<!DOCTYPE"+n.value+">"),(n=r.getAll("title")[0])&&n.firstChild&&(a.title=n.firstChild.value),y.each(r.getAll("meta"),function(e){var t,n=e.attr("name"),l=e.attr("http-equiv");n?a[n.toLowerCase()]=e.attr("content"):"Content-Type"===l&&(t=/charset\s*=\s*(.*)\s*/gi.exec(e.attr("content")))&&(a.docencoding=t[1])}),(n=r.getAll("html")[0])&&(a.langcode=s(n,"lang")||s(n,"xml:lang")),a.stylesheets=[],y.each(r.getAll("link"),function(e){"stylesheet"===e.attr("rel")&&a.stylesheets.push(e.attr("href"))}),(n=r.getAll("body")[0])&&(a.langdir=s(n,"dir"),a.style=s(n,"style"),a.visited_color=s(n,"vlink"),a.link_color=s(n,"link"),a.active_color=s(n,"alink")),a);function s(e,t){return e.attr(t)||""}var d=u(u({},{title:"",keywords:"",description:"",robots:"",author:"",docencoding:""}),c);l.windowManager.open({title:"Metadata and Document Properties",size:"normal",body:{type:"panel",items:[{name:"title",type:"input",label:"Title"},{name:"keywords",type:"input",label:"Keywords"},{name:"description",type:"input",label:"Description"},{name:"robots",type:"input",label:"Robots"},{name:"author",type:"input",label:"Author"},{name:"docencoding",type:"input",label:"Encoding"}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:d,onSubmit:function(e){var t=e.getData(),n=function(e,o,t){var r,n,l,a,i,c=e.dom;function s(e,t,n){e.attr(t,n||undefined)}function d(e){n.firstChild?n.insert(e,n.firstChild):n.append(e)}r=_(t),(n=r.getAll("head")[0])||(a=r.getAll("html")[0],n=new m("head",1),a.firstChild?a.insert(n,a.firstChild,!0):a.append(n)),a=r.firstChild,o.xml_pi?(i='version="1.0"',o.docencoding&&(i+=' encoding="'+o.docencoding+'"'),7!==a.type&&(a=new m("xml",7),r.insert(a,r.firstChild,!0)),a.value=i):a&&7===a.type&&a.remove(),a=r.getAll("#doctype")[0],o.doctype?(a||(a=new m("#doctype",10),o.xml_pi?r.insert(a,r.firstChild):d(a)),a.value=o.doctype.substring(9,o.doctype.length-1)):a&&a.remove(),a=null,y.each(r.getAll("meta"),function(e){"Content-Type"===e.attr("http-equiv")&&(a=e)}),o.docencoding?(a||((a=new m("meta",1)).attr("http-equiv","Content-Type"),a.shortEnded=!0,d(a)),a.attr("content","text/html; charset="+o.docencoding)):a&&a.remove(),a=r.getAll("title")[0],o.title?(a?a.empty():d(a=new m("title",1)),a.append(new m("#text",3)).value=o.title):a&&a.remove(),y.each("keywords,description,author,copyright,robots".split(","),function(e){var t,n,l=r.getAll("meta"),i=o[e];for(t=0;t<l.length;t++)if((n=l[t]).attr("name")===e)return void(i?n.attr("content",i):n.remove());i&&((a=new m("meta",1)).attr("name",e),a.attr("content",i),a.shortEnded=!0,d(a))});var u={};return y.each(r.getAll("link"),function(e){"stylesheet"===e.attr("rel")&&(u[e.attr("href")]=e)}),y.each(o.stylesheets,function(e){u[e]||((a=new m("link",1)).attr({rel:"stylesheet",text:"text/css",href:e}),a.shortEnded=!0,d(a)),delete u[e]}),y.each(u,function(e){e.remove()}),(a=r.getAll("body")[0])&&(s(a,"dir",o.langdir),s(a,"style",o.style),s(a,"vlink",o.visited_color),s(a,"link",o.link_color),s(a,"alink",o.active_color),c.setAttribs(e.getBody(),{style:o.style,dir:o.dir,vLink:o.visited_color,link:o.link_color,aLink:o.active_color})),(a=r.getAll("html")[0])&&(s(a,"lang",o.langcode),s(a,"xml:lang",o.langcode)),n.firstChild||n.remove(),(l=f({validate:!1,indent:!0,indent_before:"head,html,body,meta,title,script,link,style",indent_after:"head,html,body,meta,title,script,link,style"}).serialize(r)).substring(0,l.indexOf("</body>"))}(l,y.extend(c,t),i.get());i.set(n),e.close()}})},b=y.each,x=function(e){return e.replace(/<\/?[A-Z]+/g,function(e){return e.toLowerCase()})},k=function(e,t,n,l){var i,o,r,a,c,s,d="",u=e.dom;if(!l.selection&&(c=e.settings.protect,s=l.content,y.each(c,function(e){s=s.replace(e,function(e){return"\x3c!--mce:protected "+escape(e)+"--\x3e"})}),r=s,!("raw"===l.format&&t.get()||l.source_view&&h(e)))){0!==r.length||l.source_view||(r=y.trim(t.get())+"\n"+y.trim(r)+"\n"+y.trim(n.get())),-1!==(i=(r=r.replace(/<(\/?)BODY/gi,"<$1body")).indexOf("<body"))?(i=r.indexOf(">",i),t.set(x(r.substring(0,i+1))),-1===(o=r.indexOf("</body",i))&&(o=r.length),l.content=y.trim(r.substring(i+1,o)),n.set(x(r.substring(o)))):(t.set(C(e)),n.set("\n</body>\n</html>")),a=_(t.get()),b(a.getAll("style"),function(e){e.firstChild&&(d+=e.firstChild.value)});var m=a.getAll("body")[0];m&&u.setAttribs(e.getBody(),{style:m.attr("style")||"",dir:m.attr("dir")||"",vLink:m.attr("vlink")||"",link:m.attr("link")||"",aLink:m.attr("alink")||""}),u.remove("fullpage_styles");var f=e.getDoc().getElementsByTagName("head")[0];if(d)u.add(f,"style",{id:"fullpage_styles"}).appendChild(p.document.createTextNode(d));var g={};y.each(f.getElementsByTagName("link"),function(e){"stylesheet"===e.rel&&e.getAttribute("data-mce-fullpage")&&(g[e.href]=e)}),y.each(a.getAll("link"),function(e){var t=e.attr("href");if(!t)return!0;g[t]||"stylesheet"!==e.attr("rel")||u.add(f,"link",{rel:"stylesheet",text:"text/css",href:t,"data-mce-fullpage":"1"}),delete g[t]}),y.each(g,function(e){e.parentNode.removeChild(e)})}},C=function(e){var t,n="",l="";if(e.getParam("fullpage_default_xml_pi")){var i=o(e);n+='<?xml version="1.0" encoding="'+(i||"ISO-8859-1")+'" ?>\n'}return n+=e.getParam("fullpage_default_doctype","<!DOCTYPE html>"),n+="\n<html>\n<head>\n",(t=e.getParam("fullpage_default_title"))&&(n+="<title>"+t+"</title>\n"),(t=o(e))&&(n+='<meta http-equiv="Content-Type" content="text/html; charset='+t+'" />\n'),(t=g(e))&&(l+="font-family: "+t+";"),(t=v(e))&&(l+="font-size: "+t+";"),(t=e.getParam("fullpage_default_text_color"))&&(l+="color: "+t+";"),n+="</head>\n<body"+(l?' style="'+l+'"':"")+">\n"},A=function(e,t,n,l){l.selection||l.source_view&&h(e)||(l.content=(y.trim(t)+"\n"+y.trim(l.content)+"\n"+y.trim(n)).replace(/<!--mce:protected ([\s\S]*?)-->/g,function(e,t){return unescape(t)}))};!function n(){e.add("fullpage",function(e){var t,n,l,i,o,r,a=s(""),c=s("");n=a,(t=e).addCommand("mceFullPageProperties",function(){d(t,n)}),(l=e).ui.registry.addButton("fullpage",{tooltip:"Metadata and document properties",icon:"document-properties",onAction:function(){l.execCommand("mceFullPageProperties")}}),l.ui.registry.addMenuItem("fullpage",{text:"Metadata and document properties",icon:"document-properties",onAction:function(){l.execCommand("mceFullPageProperties")}}),o=a,r=c,(i=e).on("BeforeSetContent",function(e){k(i,o,r,e)}),i.on("GetContent",function(e){A(i,o.get(),r.get(),e)})})}()}(window);