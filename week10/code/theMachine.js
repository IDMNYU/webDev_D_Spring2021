console.log("the machine!");

let theP = "yr a hero"

var dat = $('#myButton')
dat.on('click', potato);

function potato() {
    console.log("potato click!");
    $('h3').append(theP)
    $('h4').append("<p>"+ theP + "</p>");
  
}

var here = $('#clickHere')
here.click(function() {
    console.log("yellow click");
    $('#other').text("now the green text is this");
    $('div').css("background-color", "red")
    $('body').css("background-color", "blue");
    $('h3').remove(":contains('hello')");

})
