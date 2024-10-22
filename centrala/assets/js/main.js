function createMenu() {
    $.getJSON('menu.json', function(json) {
        var menu = json.menu;
        let sidebar = document.getElementById("sidebarbody"); 
        var content = "";

        menu.forEach(function(item)  {
            if(item.active == 1) {
                content += "<a href='" + item.url + "' onclick='loadView(this);'>" + item.name + "</a><br><br>";
            }
        });
        sidebar.innerHTML = content;
    })
}
createMenu();
function loadView() {
    
}
loadView();