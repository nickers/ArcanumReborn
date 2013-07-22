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
        var assetSize = 512,
            mainHeight = assetSize * 5,
            mainWidth = assetSize * 5;

        sheetengine.scene.init(canvas, { w: mainWidth, h: mainHeight });

        var img = new Image(),
            sahara = $.SoundsManager.GetResourceByName("Sahara");
        img.src = sahara.Url + "." + sahara.Format;

        for (var x = -1; x <= 1; x++) {
            for (var y = -1; y <= 1; y++) {
                var basesheet = new sheetengine.Sheet({ x: x * assetSize, y: y * assetSize, z: 0 }, { alphaD: 90, betaD: 0, gammaD: 0 }, { w: assetSize, h: assetSize });
                //basesheet.color = '#5D7E36';
                basesheet.context.drawImage(img, 0,0);
            }
        }

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
            //sheetengine.calc.calculateChangedSheets();
            sheetengine.drawing.drawScene();
        });
    });
})();