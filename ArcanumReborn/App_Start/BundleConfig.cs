using System.Web.Optimization;

namespace ArcanumReborn.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/Libraries").Include(
                "~/Scripts/Libs/jquery-{version}.js",
                "~/Scripts/Libs/buzz.js"));

            bundles.Add(new ScriptBundle("~/Scripts/GameStaff").Include(
                "~/Scripts/Engine/*.js",
                "~/Scripts/Game/soundsManager.js",
                "~/Scripts/Game/main.js"));

            bundles.Add(new StyleBundle("~/Styles").Include(
                "~/Content/css/*.css"));
        }
    }
}