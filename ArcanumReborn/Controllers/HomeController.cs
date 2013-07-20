using System.Web.Mvc;

namespace ArcanumReborn.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Ping()
        {
            return Json(new { success = true });
        }

        public ActionResult Index()
        {
            return View();
        }
    }
}
