//check off specific todos by clicking
$("ul").on("click","li",function(){
    //if li is gray
    //turn it into black
    $(this).toggleClass("completed");
});

//click on X to delete To-DO
$("ul").on("click","span",function(event){
    event.stopPropagation();//prevent when clicking on parent elements doing nothing
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
});

$("input[type='text']").keypress(function(event){
    if(event.which===13){
        var todoText=$(this).val();
        $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> "+todoText+"</li>");
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});