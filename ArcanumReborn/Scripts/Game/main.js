(function () {
    var canvas = document.getElementById('world');

    $(window).resize(function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    $(window).trigger("resize");

    $.SoundsManager.Init();
})();