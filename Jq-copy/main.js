$(document).ready(function () {

    function add() {
        $(".copyed").addClass("boune-effect")
    }

    function remove() {
        $(".copyed").removeClass("boune-effect")
    }
    // call
    $(".copy-button").click(function () {
        $("#textFild").select();
        document.execCommand("copy")
        add();
        setTimeout(remove, 800)
    });

});