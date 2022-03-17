using FinalProject1withAngular6.Context;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalProject1withAngular6.Controllers
{
    public class CtrlHoliday : Controller
    {
        private MyDBContext db;
        private IHostingEnvironment _HostEnvironment;
        public CtrlHoliday(MyDBContext _db, IHostingEnvironment HostEnvironment)
        {
            db = _db;
            _HostEnvironment = HostEnvironment;
        }

        public JsonResult InsertHoliday(Holiday1 H)
        {
            Holiday1 a = new Holiday1();
            a.holidayid = H.holidayid;
            a.date = DateTime.Parse(H.date.ToShortDateString());
            a.reason = H.reason;
            db.Holidays1.Add(a);
            db.SaveChanges();
            return Json(a);
        }

        public JsonResult DeleteHoliday(string id)
        {
            Holiday1 st6 = db.Holidays1.Where(xx => xx.holidayid == id).FirstOrDefault();
            db.Holidays1.Remove(st6);
            db.SaveChanges();
            return Json("OK");
        }

        public JsonResult GetAllHoliday()
        {
            var a = (from d in db.Holidays1 select d);
            return Json(a);
        }

        public JsonResult GetHoliday(string id)
        {
            var a = (from d in db.Holidays1 where d.holidayid == id select d);
            return Json(a);
        }

    }
}
