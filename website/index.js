var menu = false;
$(".menu-icon").on("click", function(){
    if(menu === false){
        $("#nv > div").addClass("menu");
        $("#nv").slideDown();
        menu = true;
    }
    else{
        $("#nv").slideUp();
        menu = false;
    }
})
