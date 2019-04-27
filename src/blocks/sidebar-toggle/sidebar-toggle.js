jQuery(document).ready(function(a) {
    "use strict";
    function c() {n.removeClass("open")}
    var j = a(".sub-menu-toggle");
    a("").on("click"),
        function(b, c, d) {
            a(b).on("click", function() {
                a(this).addClass("sidebar-open"), a©.addClass("open")
            }), a(d).on("click", function() {
                a(b).removeClass("sidebar-open"), a©.removeClass("open")
            })
        }(".sidebar-toggle", ".sidebar-offcanvas",".sidebar-close");
});