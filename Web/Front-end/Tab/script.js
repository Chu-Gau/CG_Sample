$(document).ready(function(){
    $(".cg.tab-header .cg").click(function(){
        $(".cg.tab-container .active").removeClass("active");

        //Lấy content với class giống y hệt
        $('[class="' + $(this).attr("class") + '"]').addClass("active");
        
        $(this).addClass("active");
    });
});