$(function(){function a(a,b){return"http://api.tumblr.com/v2/blog/"+a+".tumblr.com/posts?api_key="+b+"&callback=?"}function b(a){a.forEach(function(a){var b=$(a.body);b.appendTo("#hero #hidden");var c=$("#hidden p:first-child").text(),d=$("#hidden a").attr("href"),e=$("#hidden a").text(),f=$("#hidden img").attr("src");console.log(e);var g=$('<div class="item" style="background-image: url('+f+');"><div class="container"><div class="caption vertical-center text-center"><h1 class="fadeInDown-1 light-color">'+a.title+'</h1><p class="fadeInDown-2 light-color">'+c+'</p><div class="fadeInDown-3"><a href="'+d+'" class="btn btn-large">'+e+"</a></div></div></div></div>");g.appendTo("#hero #owl-main"),b=null,c=null,d=null,e=null,f=null,g=null})}if($("body").hasClass("index")){var c="YyZzXfjcZm99hAMdsY4GTG3svTkEPrVpzwCaTfvUBLtTFmrSeJ",d=a("cincinnatiminemachineryco",c);$(function(){$.getJSON(d,function(a){b(a.response.posts)})})}});