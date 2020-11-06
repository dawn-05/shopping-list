$(function(){
    $("#js-shopping-list-form").submit( event => {
        event.preventDefault();

        let name= ($(this).find('input[name="shopping-list-entry"]').val());

       $("ul").append(" <li> <span class=\"shopping-item\"> "+ name +" </span> <div class=\"shopping-item-controls\"> <button class=\"shopping-item-toggle\"> <span class=\"button-label\">check</span> </button> <button class=\"shopping-item-delete\"> <span class=\"button-label\">delete</span> </button> </div> </li>");
    });
        $(".shopping-item-delete").on("click", function() {
            $(this).parent().parent().remove();
        });

        $(".shopping-item-toggle").on("click", function(){
            $(this).closest("li").find("span").toggleClass("shopping-item__checked");
        });
});
