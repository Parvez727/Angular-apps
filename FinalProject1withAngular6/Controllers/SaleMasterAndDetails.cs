using FinalProject1withAngular6.Context;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalProject1withAngular6.Controllers
{
    public class SaleMasterAndDetails : Controller
    {
        private MyDBContext db;
        private IHostingEnvironment _HostEnvironment;

        public SaleMasterAndDetails(MyDBContext _db, IHostingEnvironment HostEnvironment)
        {
            db = _db;
            _HostEnvironment = HostEnvironment;
        }


        public JsonResult InsertSalemaster(SaleMaster e)
        {
            SaleMaster a = new SaleMaster();
            a.saleid = e.saleid;
            a.masterdate = DateTime.Parse(e.masterdate.ToShortDateString());
            a.partyid = e.partyid;
            a.total = (decimal)e.total;
            a.discount = (decimal)e.discount;
            a.net = (decimal)e.net;
            a.paid = (decimal)e.paid;
            a.due = (decimal)e.due;
            db.SaleMasters.Add(a);
            db.SaveChanges();
            return Json(a);
        }

        public JsonResult InsertSaledetail(SaleDetail e)
        {
            SaleDetail a1 = new SaleDetail();
            a1.saleid = e.saleid;
            a1.slno = e.slno;
            a1.itemcode = e.itemcode;
            a1.detaildate = DateTime.Parse(e.detaildate.ToShortDateString());
            a1.costprice = (decimal)e.costprice;
            a1.qty = e.qty;
            a1.total = (decimal)e.total;
            db.SaleDetails.Add(a1);
            db.SaveChanges();
            return Json(a1);
        }

        //public JsonResult DeleteStudentByStudentid(string id)
        //{
        //    List<Student> st5 = db.Students.Where(xx => xx.studentid == id).ToList();
        //    db.Students.RemoveRange(st5);
        //    db.SaveChanges();
        //    return Json("OK");
        //}

        public JsonResult DeleteSaledetail(string id)
        {
            List<SaleDetail> st5 = db.SaleDetails.Where(xx => xx.saleid == id).ToList();
            db.SaleDetails.RemoveRange(st5);
            db.SaveChanges();
            return Json("OK");

        }

        public JsonResult DeleteAll(string id)
        {
            List<SaleDetail> st5 = db.SaleDetails.Where(xx => xx.saleid == id).ToList();
            db.SaleDetails.RemoveRange(st5);
            SaleMaster st6 = db.SaleMasters.Find(id);
            if (st6 != null)
            {
                db.SaleMasters.Remove(st6);
            }
            db.SaveChanges();
            return Json("OK");
        }


        public JsonResult GetAllSalemaster()
        {
            var a = (from d in db.SaleMasters select d);
            return Json(a);
        }

        public JsonResult GetSalemaster(string id)
        {
            var a = (from d in db.SaleMasters where d.saleid == id select d);
            return Json(a);
        }

        public JsonResult GetSaledetail(string id)
        {
            var a = (from d in db.SaleDetails where d.saleid == id select d);
            return Json(a);

        }

        public JsonResult GetAllSaledetail()
        {
            var a = (from d in db.SaleDetails select d);
            return Json(a);
        }
    }
}
