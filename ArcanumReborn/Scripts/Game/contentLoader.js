$.ContentLoader = $.ContentLoader || {};
$.extend($.ContentLoader, (function($) {
    var $loader = $("#loader"),
        $loaderProgress = $("#loaderProgress"),

        manifest = [],
        addContent = function(src) {
            manifest.push({ src: src });
        },
        handleProgress = function(event) {
            $loaderProgress.progressbar({
                value: event.progress * 100
            });
        },
        handleComplete = function() {
            $loader.hide();
        };

    return {
        Reset: function() {
            manifest = [];
        },

        AddContent: function(content) {
            if (!content) {
                return;
            }

            if (typeof content == "string") {
                addContent(content);
            } else if (typeof content == "object" && content.length > 0) {
                $.each(content, function(i, element) {
                    addContent(element);
                });
            }
        },

        StartLoading: function(onComplete) {
            var loader = new createjs.LoadQueue(true);

            loader.addEventListener("complete", function() {
                handleComplete();
                onComplete();
            });
            loader.addEventListener("progress", handleProgress);

            loader.loadManifest(manifest);
        }
    };
})(jQuery));