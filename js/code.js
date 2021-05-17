$(document).ready(function () {
        $(".menu_btn").click(function(){
            $(".menu").toggle(1000);
        })
    

        
        $(window).scroll(function(){
            var scroll = window.scrollY;
            console.log(scroll);
            if(scroll >= 200){
                $(".nav_bar").css("background", "linear-gradient(-120deg, #52057b, #ffffff)");  
                var media = window.matchMedia("(max-width:600px)");
                if(media.matches){
                    $(".logo").css("display", "block");
                }
            }
            else{
                $(".nav_bar").css("background", "transparent"); 
                var media = window.matchMedia("(max-width:600px)");
                if(media.matches){
                    $(".logo").css("display", "none");
                }
            }
        })
            
        
        

});