
//= ../../node_modules/jquery/dist/jquery.js
//= ../../node_modules/popper.js/dist/umd/popper.js
//= ../../node_modules/bootstrap/dist/js/bootstrap.min.js
$(document).ready(function(a) {
    "use strict";
    function c() {n.removeClass("open")}
    var j = a(".sub-menu-toggle");
    a("").on("click"),
        function(b, c, d) {
            a(b).on("click", function() {
                a(this).addClass("sidebar-open"), a(c).addClass("open")
            }), a(d).on("click", function() {
                a(b).removeClass("sidebar-open"), a(c).removeClass("open")
            })
        }(".sidebar-toggle", ".sidebar-offcanvas",".sidebar-close");
});