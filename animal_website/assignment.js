var animals_template, nav_template;

function animalTemplate(template, data){
    var html = template(data);
    $('#content').html(html);
}

function navTemplate(template, data){
    var html = template(data);
    $('#nav').html(html);
}

$(document).ready(function(){

    var source = $("#animals-template").html();
    animals_template = Handlebars.compile(source);

    animalTemplate(animals_template, animals_data);

    var source = $("#nav_template").html();
    nav_template = Handlebars.compile(source);

    navTemplate(nav_template, animals_data);

    $(".animal_picture").click(function() {
     $(this.nextElementSibling).modal('show');
    });

    $(".animal_description").click(function() {
     $(this.nextElementSibling).modal('show');
    });

});
