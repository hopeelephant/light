var timeout;
$(document).ready(function(){
  $("#tabfirst li").each(function(index){
    var liNode=$(this);
    liNode.hover(function(){
      timeout=setTimeout(function(){
        $(".show").removeClass("show");
        $("#tabfirst li.tabin").removeClass("tabin");
        $(".banner img").eq(index).addClass("show");
        liNode.addClass("tabin");
      },300);
    }).mouseout(function(){
      clearTimeout(timeout);
    });

  });


});

var time=""
var index = 1;
$(function () {
xiang(index);
//鼠标移入移出
$(".spannum span").hover(function () {
clearTimeout(time);
var icon=$(this).text();
$(".spannum span").removeClass("onselect").eq(icon-1).addClass("onselect");
$("#banner-img li").hide().stop(true,true).eq(icon-1).fadeIn("slow");
}, function () {
index=$(this).text()> 5 ? 1 :parseInt($(this).text())+1;
time = setTimeout("xiang(" + index + ")", 3000);
});
});
function xiang(num) {
index = num;
$(".spannum span").removeClass("onselect").eq(index-1).addClass("onselect");
$("#banner-img li").hide().stop(true,true).eq(index-1).fadeIn("slow");
index = index + 1 > 6 ? 1 : index + 1;
time = setTimeout("xiang(" + index + ")", 3000);
}
