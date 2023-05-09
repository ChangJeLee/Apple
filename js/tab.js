var button = $('.tab-button');
var content = $('.tab-content');

for(let i = 0; i < button.length; i++) {
    button.eq(i).on('click', function() {
        button.removeClass("orange");
        button.eq(i).addClass("orange");
        content.removeClass("show");
        content.eq(i).addClass("show");
    });
}