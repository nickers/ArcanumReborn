$.ContentManager = $.ContentManager || {};
$.extend($.ContentManager, (function() {
    var fullContent = [
        /* Sounds */
        {
            Name: "MainTheme",
            Url: $.Url.Content("~/Content/music/Arcanum.mp3")
        },



        /* Assets */
        {
            Name: "Sahara",
            Url: $.Url.Content("~/Content/images/textures/background/sahara.jpg")
        }
    ];

    return {
        GetContent: function(name) {
            var matchedContent = $.grep(fullContent, function (c) {
                return c.Name === name;
            });

            if (matchedContent.length === 0) {
                console.error("Content '%s' wasn't found", name);
                return null;
            }

            return matchedContent[0];
        },

        GetAllContent: function() {
            return fullContent;
        }
    };
})());