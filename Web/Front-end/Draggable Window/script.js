$(document).ready(function () {

    $(".cg.window .title").on("mousedown", function (event) {

        //lấy vị trí  chuột cũ và 
        mousePosition = { top: event.pageX, left: event.pageY }
        console.log(mousePosition);
        windowPosition = $(".cg.window").offset();
        console.log(windowPosition);
        

        //theo dõi sự thay đổi của vị trí chuột
        $(window).on("mousemove", function (event) {
            console.log(windowPosition.top + event.pageX - mousePosition.top);
            
            //Tính toán lại vị trí cửa sổ
            windowDelta = {
                top: windowPosition.top + event.pageY - mousePosition.left,
                left: windowPosition.left + event.pageX - mousePosition.top
            }
            
            console.log(windowDelta);

            // Dịch chuyển cửa sổ
            $(".cg.window").offset(windowDelta);
        })
    });

    $(window).on("mouseup", function (event) {
        $(window).off("mousemove");
    });
});
