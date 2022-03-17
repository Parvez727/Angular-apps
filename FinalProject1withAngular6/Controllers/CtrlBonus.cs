using FinalProject1withAngular6.Context;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalProject1withAngular6.Controllers
{
    public class CtrlBonus : Controller
    {
        private MyDBContext db;
        private IHostingEnvironment _HostEnvironment;
        public CtrlBonus(MyDBContext _db, IHostingEnvironment HostEnvironment)
        {
            db = _db;
            _HostEnvironment = HostEnvironment;
        }

        public JsonResult InsertBonus(BonusSetting H)
        {
            BonusSetting a = new BonusSetting();
            a.bonusid = H.bonusid;
            a.bonusname = H.bonusname;
            a.percent = H.percent;
            db.BonusSettings.Add(a);
            db.SaveChanges();
            return Json(a);
        }

        public JsonResult DeleteBonus(string id)
        {
            BonusSetting st6 = db.BonusSettings.Where(xx => xx.bonusid == id).FirstOrDefault();
            db.BonusSettings.Remove(st6);
            db.SaveChanges();
            return Json("OK");
        }

        public JsonResult GetAllBonus()
        {
            var a = (from d in db.BonusSettings select d);
            return Json(a);
        }

        public JsonResult GetBonus(string id)
        {
            var a = (from d in db.BonusSettings where d.bonusid == id select d);
            return Json(a);
        }
    }
}
