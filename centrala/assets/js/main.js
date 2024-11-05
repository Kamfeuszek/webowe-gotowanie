$(document).ready(function () {
    $('#hetero').click(function(e) {
        $('#sidebar').show();
        e.preventDefault();
    });
    createMenu();
    loadView();
})
function createMenu() {
    $.getJSON('menu.json', function(json) {
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
        $('.content').load("assets/views/" + htmlFile);
        helperHideSidebar();
        e.preventDefault();
    });
}
function helperHideSidebar() {
    $('#sidebar').hide();
}