using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FinalProject1withAngular6.Context
{
    public class Employees
    {
        [Key]
        public string employeeid { get; set; }
        public string name { get; set; }
        [ForeignKey("department")]
        public string departmentid { get; set; }
        public string activesection { get; set; }
        public DateTime joindate { get; set; }

        public Boolean isactive { get; set; }
        public string picture { get; set; }
        public IList<Attendance> Attendances { get; set; }
        public Department department { get; set; }
    }

    public class Department
    {
        [Key]
        public string departmentid { get; set; }
        public string departmentname { get; set; }
        public IList<Employees> employees { get; set; }
    }

    public class Attendance
    {
        [Key]
        public string attendanceid { get; set; }
        public int slno { get; set; }
        [ForeignKey("employees")]
        public string employeeid { get; set; }
        public DateTime presenttime { get; set; }
        public Employees employees { get; set; }
    }

    public class Holiday
    {
        [Key]
        public int holidayid { get; set; }
        public DateTime date { get; set; }
        public string reason { get; set; }
    }

    public class Holiday1
    {
        [Key]
        public string holidayid { get; set; }
        public DateTime date { get; set; }
        public string reason { get; set; }
    }

    public class BonusSetting
    {
        [Key]
        public string bonusid { get; set; }
        public string bonusname { get; set; }
        public int percent { get; set; }
    }

    public class SaleMaster
    {
        [Key]
        public string saleid { get; set; }
        public DateTime masterdate { get; set; }
        public string partyid { get; set; }
        [Column(TypeName = "decimal(18,4)")]
        public Nullable<decimal> total { get; set; }
        [Column(TypeName = "decimal(18,4)")]
        public Nullable<decimal> discount { get; set; }
        [Column(TypeName = "decimal(18,4)")]
        public Nullable<decimal> net { get; set; }
        [Column(TypeName = "decimal(18,4)")]
        public Nullable<decimal> paid { get; set; }
        [Column(TypeName = "decimal(18,4)")]
        public Nullable<decimal> due { get; set; }
        public IList<SaleDetail> SaleDetails { get; set; }
    }

    public class SaleDetail
    {
        [Key]
        [ForeignKey("saleMaster")]
        public string saleid { get; set; }
        [Key]
        public int slno { get; set; }
        public string itemcode { get; set; }
      
        public DateTime detaildate { get; set; }
        [Column(TypeName = "decimal(18,4)")]
        public Nullable<decimal> costprice { get; set; }
        public int qty { get; set; }
        [Column(TypeName = "decimal(18,4)")]
        public Nullable<decimal> total { get; set; }

   
        public SaleMaster saleMaster { get; set; }

    }

}
