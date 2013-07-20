using System.Web.Optimization;

namespace ArcanumReborn.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/Libs").Include(
                "~/Scripts/Libs/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/Scripts/Game").Include(
                "~/Scripts/Engine/*.js",
                "~/Scripts/Game/*.js"));

            bundles.Add(new StyleBundle("~/Styles").Include(
                "~/Content/css/*.css"));
        }
    }
}