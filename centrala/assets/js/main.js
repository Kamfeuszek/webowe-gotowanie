$(document).ready(function () {
    createMenu();
    loadView();
})
function createMenu() {
    $.getJSON('data/menu.json', function(json) {
        var menu = json.menu;
        var content = "";

        menu.forEach(function(item)  {
            if(item.active == 1) {
                content += "<a href='" + item.url + "'>" + item.name + "</a><br><br>";
            }
        });
        $("#sidebarbody").html(content);
    })
}
function loadView() {
    $('#sidebarbody').on('click', 'a', function(e) {
        var htmlFile = $(this).attr('href');
        if(htmlFile != "#") {
            $('.content').load("views/" + htmlFile);
        } 
        helperHideSidebar();
        e.preventDefault();
    });
}
function helperHideSidebar() {
    var offcanvas = bootstrap.Offcanvas.getInstance($('#offcanvasLeft'));
    offcanvas.hide();
}