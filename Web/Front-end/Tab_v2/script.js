$(document).ready(function(){
    $(".cg.tab-header>div").click(function(){
        $(".cg.tab-container .active").removeClass("active");

        //Lấy content với class giống y hệt
        $(".cg.tab-content").children().eq($(this).index()).addClass("active");
        
        $(this).addClass("active");
    });
});