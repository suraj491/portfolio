$(window).on("load",function(){
    $(".loader .inner").fadeOut(4000,function(){
        $(".loader").fadeOut(750);
    })
})
$(document).ready(function(){
    $('#slides').superslides({
        animation:'fade',
        play:5000
    });
    var typed=new Typed(".typed",{
        strings:["web developer"],
        typeSpeed:70,
        loop:true,
        startDelay:1000,
        showCursor:false
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });
    $('.chart').easyPieChart({
        //your options goes here
        easing:'easeInOut',
        barColor:'#fff',
        trackColor:false,
        scaleColor:false,
        lineWidth:4,
        size:152,
        onStep:function(from,to,percent){
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    var skillsTopOffset=$(".skillsSection").offset().top;
    $(window).scroll(function(){
        if(window.pageYOffset>skillsTopOffset-$(window).height()+200)
        {
            $('.chart').easyPieChart({
                easing:'easeInOut',
                barColor:'#fff',
                trackColor:false,
                scaleColor:false,
                lineWidth:4,
                size:152,
                onStep:function(from,to,percent)
                {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });
    $("#navigation li a").click(function(e){
        e.preventDefault();
        var targetElement=$(this).attr("href");
        var targetPosition=$(targetElement).offset().top;
        $("html,body").animate({scrollTop:targetPosition-50},"slow")
    });
    const nav=$("#navigation");
    const navTop=nav.offset().top;
    $(window).on("scroll",stickyNavigation);
    function stickyNavigation()
    {
        var body=$("body");
        if($(window).scrollTop()>=navTop)
        {
            body.addClass("fixedNav");
        }
        else
        {
            body.removeClass("fixedNav");
        }
    }
});
