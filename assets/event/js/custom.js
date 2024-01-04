$(document).ready(function() {
	$(".js-open-menu").on("click", function(e) {
        e.stopPropagation();
        $(this).find(".button-open-menu").toggleClass("open");
        //$(".expmenu").toggleClass("is-opened");
		$(".expmenu").animate({width:'toggle'}, 200);
        $("body").toggleClass("is-opened")
    });
	$("#mclose").on("click", function(e) {
        e.stopPropagation();
        $(".js-open-menu").find(".button-open-menu").toggleClass("open");
        //$(".expmenu").toggleClass("is-opened");
		$(".expmenu").animate({width:'toggle'}, 200);
        $("body").toggleClass("is-opened")
    });
    $(".submit").click(function() {
        return false
    });
    setTimeout(function() {
        $("body").addClass("loaded")
    }, 300);
	
	$("#srch").click(function(){
		$(".searchexp").slideToggle();
	});
	$("#srhcls").click(function(){
		$(".searchexp").slideToggle();
	});
	
});


$(document).ready(function(){
$(".ex_title").click(function(){$(".ex_cnt").is(":visible")&&($(".ex_cnt").hide("slow"),$(".ex_title").removeClass("active_ex")),$(this).next(".ex_cnt").is(":visible")?($(".ex_cnt").hide("slow"),$(this).removeClass("active_ex")):($(this).next(".ex_cnt").show("slow"),$(this).addClass("active_ex"))})});