$(document).ready(function () {
    createMenu();
    loadView();
})
function createMenu() {
    $.getJSON('menu.json', function(json) {
        var menu = json.menu;
        let sidebar = document.getElementById("sidebarbody"); 
        var content = "";

        menu.forEach(function(item)  {
            if(item.active == 1) {
                content += "<a href='" + item.url + "'>" + item.name + "</a><br><br>";
            }
        });
        sidebar.innerHTML = content;
    })
}
function loadView() {
    $('#sidebarbody').on('click', 'a', function(e) {
        var htmlFile = $(this).attr('href');
        $('.content').load("assets/views/" + htmlFile);
        e.preventDefault();
    });
}
