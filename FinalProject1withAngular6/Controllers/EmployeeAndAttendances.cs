using FinalProject1withAngular6.Context;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace FinalProject1withAngular6.Controllers
{
    public class EmployeeAndAttendances : Controller
    {
        private MyDBContext db;
        private IHostingEnvironment _HostEnvironment;
        public EmployeeAndAttendances(MyDBContext _db, IHostingEnvironment HostEnvironment)
        {
            db = _db;
            _HostEnvironment = HostEnvironment;
        }

        [HttpPost]
        public async Task<IActionResult> Post(IFormFile files)
        {
            string filename = ContentDispositionHeaderValue.Parse(files.ContentDisposition).FileName.Trim('"');
            filename = this.EnsureCorrectFilename(filename);
            using (FileStream output = System.IO.File.Create(this.GetPathAndFilename(filename)))
                await files.CopyToAsync(output);
            return Ok();
        }
        private string EnsureCorrectFilename(string filename)
        {
            if (filename.Contains("\\"))
                filename = filename.Substring(filename.LastIndexOf("\\") + 1);

            return filename;
        }
        private string GetPathAndFilename(string filename)
        {
            return Path.Combine(_HostEnvironment.WebRootPath, "uploads", filename);
        }

        public JsonResult InsertEmployee(Employees e)
        {
            Employees a = new Employees();
            a.employeeid = e.employeeid;
            a.name = e.name;
            a.departmentid = e.departmentid;
            a.activesection = e.activesection;
            a.joindate = DateTime.Parse(e.joindate.ToShortDateString());
            a.isactive = e.isactive;
            a.picture = e.picture;
            db.Employees.Add(a);
            db.SaveChanges();
            return Json(a);

        }

        public JsonResult InsertAttendance(Attendance e)
        {
            Attendance a1 = new Attendance();
            a1.attendanceid = e.attendanceid;
            a1.slno = e.slno;
            a1.employeeid = e.employeeid;
            a1.presenttime = DateTime.Parse(e.presenttime.ToShortDateString());
            db.Attendances.Add(a1);
            db.SaveChanges();
            return Json(a1);

        }

        public JsonResult DeleteAttendanceByattendanceid(string id)
        {
            List<Attendance> st5 = db.Attendances.Where(xx => xx.attendanceid == id).ToList();
            db.Attendances.RemoveRange(st5);
            db.SaveChanges();
            return Json("OK");
        }

        public JsonResult DeleteAttendance(string id)
        {
            List<Attendance> st5 = db.Attendances.Where(xx => xx.employeeid == id).ToList();
            db.Attendances.RemoveRange(st5);
            db.SaveChanges();
            return Json("OK");
        }

        public JsonResult DeleteAllEmployeeAndAttendance(string id)
        {
            List<Attendance> st5 = db.Attendances.Where(xx => xx.employeeid == id).ToList();
            db.Attendances.RemoveRange(st5);
            Employees st6 = db.Employees.Find(id);
            if (st6 != null)
            {
                db.Employees.Remove(st6);
            }
            db.SaveChanges();
            return Json("OK");
        }

        public JsonResult DltAll()
        {

            foreach (Employees e in db.Employees)
            {
                db.Employees.RemoveRange(e);
            }
            db.SaveChanges();
            return Json("OK");
        }

        public JsonResult DeleteEmployeeByEmployeeid(string id)
        {
            Employees st6 = db.Employees.Where(xx => xx.employeeid == id).FirstOrDefault();
            db.Employees.Remove(st6);
            db.SaveChanges();
            return Json("OK");
        }
        public JsonResult DeleteEmployee(string id)
        {
            List<Employees> st6 = db.Employees.Where(xx => xx.employeeid == id).ToList();
            db.Employees.RemoveRange(st6);
            db.SaveChanges();
            return Json("OK");
        }



        public JsonResult GetAllEmployees()
        {
            var a = (from d in db.Employees select d);
            return Json(a);
        }

        public JsonResult GetEmployees(string id)
        {
            var a = (from d in db.Employees where d.employeeid == id select d);
            return Json(a);
        }

        public JsonResult GetAllAttendance()
        {
            var a = (from d in db.Attendances select d);
            return Json(a);
        }

        public JsonResult GetAllDepartment()
        {
            var a = (from d in db.Department select d);
            return Json(a);
        }

        public JsonResult GetAttendance(string id)
        {
            var a = (from d in db.Attendances where d.employeeid == id select d);
            return Json(a);
        }
    }
}
