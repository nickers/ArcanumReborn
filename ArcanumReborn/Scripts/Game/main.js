(function () {
    $.ContentLoader.AddContent($.SoundsManager.GetAllResourcesUrl());
    $.ContentLoader.StartLoading(function() {
        var canvas = document.getElementById('world');

        $(window).resize(function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        $(window).trigger("resize");

        $.SoundsManager.Init();

        // First canvas content
        sheetengine.scene.init(canvas, { w: 2000, h: 3000 });

        var basesheet = new sheetengine.BaseSheet({ x: 0, y: 0, z: 0 }, { alphaD: 90, betaD: 0, gammaD: 0 }, { w: 200, h: 200 });
        basesheet.color = '#5D7E36';

        sheetengine.calc.calculateAllSheets();

        sheetengine.drawing.drawScene(true);

        $(document).keyup(function(event) {
            var displacement = { x: 0, y: 0, z: 0 };

            switch (event.keyCode) {
            case $.ui.keyCode.DOWN:
                displacement.z = -50;
                break;
            case $.ui.keyCode.UP:
                displacement.z = 50;
                break;
            case $.ui.keyCode.LEFT:
                displacement.y = 70;
                displacement.z = 25;
                break;
            case $.ui.keyCode.RIGHT:
                displacement.x = 70;
                displacement.z = 25;
                break;
            }

            sheetengine.scene.moveCenter(displacement);
            sheetengine.calc.calculateAllSheets();
            sheetengine.drawing.drawScene(true);
        });
    });
})();