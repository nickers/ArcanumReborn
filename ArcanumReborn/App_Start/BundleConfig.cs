using System.Web.Optimization;

namespace ArcanumReborn.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/Libraries").Include(
                "~/Scripts/Libs/jquery-{version}.js",
                "~/Scripts/Libs/jquery-ui-{version}.js",
                "~/Scripts/Libs/buzz.js",
                "~/Scripts/Libs/preloadjs-{version}.js"));

            bundles.Add(new ScriptBundle("~/Scripts/GameStaff").Include(
                "~/Scripts/Engine/*.js",
                "~/Scripts/Game/contentManager.js",
                "~/Scripts/Game/contentLoader.js",
                "~/Scripts/Game/soundsManager.js",
                "~/Scripts/Game/assetsManager.js",
                "~/Scripts/Game/keyboardManager.js",
                "~/Scripts/Game/main.js"));

            bundles.Add(new StyleBundle("~/Styles").Include(
                "~/Content/css/*.css",
                "~/Content/themes/base/jquery-ui.css",
                "~/Content/themes/base/jquery.ui.progressbar.css"));
        }
    }
}