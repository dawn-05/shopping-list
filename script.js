$(function(){
    $("#js-shopping-list-form").submit( event => {
        event.preventDefault();

        let name= ($(this).find('input[name="shopping-list-entry"]').val());

       $("ul").append(" <li> <span class=\"shopping-item\"> "+ name +" </span> <div class=\"shopping-item-controls\"> <button class=\"shopping-item-toggle\"> <span class=\"button-label\">check</span> </button> <button class=\"shopping-item-delete\"> <span class=\"button-label\">delete</span> </button> </div> </li>");
    });
        $(".shopping-list").on("click", ".shopping-item-delete", function() {
            $(this).parent().parent().remove();
        });

        $(".shopping-list").on("click", ".shopping-item-toggle",function(){
            $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
        });
});
