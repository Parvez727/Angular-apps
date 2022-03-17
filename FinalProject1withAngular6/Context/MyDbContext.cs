using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalProject1withAngular6.Context
{
    public class MyDBContext : DbContext
    {
        public MyDBContext()
        { }

        public MyDBContext(DbContextOptions<MyDBContext> options)
            : base(options)
        {
        }

        public DbSet<Department> Department { get; set; }
        public DbSet<Employees> Employees { get; set; }
        public DbSet<Attendance> Attendances { get; set; }
        public DbSet<Holiday> Holidays { get; set; }
        public DbSet<Holiday1> Holidays1 { get; set; }
        public DbSet<BonusSetting> BonusSettings { get; set; }
        public DbSet<SaleMaster> SaleMasters { get; set; }
        public DbSet<SaleDetail> SaleDetails { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SaleDetail>()
                .HasKey(c => new { c.saleid, c.slno });
        }
    }

  
}
