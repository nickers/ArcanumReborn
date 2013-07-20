using System.Web.Optimization;

namespace ArcanumReborn.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts").Include(
                "~/Scripts/jquery-{version}.js",
                "~/Scripts/sheetengine-{version}.js")
                );

            bundles.Add(new StyleBundle("~/Styles").Include(
                "~/Content/css/*.css")
                );
        }
    }
}