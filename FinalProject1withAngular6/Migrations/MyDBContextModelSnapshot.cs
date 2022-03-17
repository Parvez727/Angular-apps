﻿// <auto-generated />
using System;
using FinalProject1withAngular6.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FinalProject1withAngular6.Migrations
{
    [DbContext(typeof(MyDBContext))]
    partial class MyDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.13")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FinalProject1withAngular6.Context.Attendance", b =>
                {
                    b.Property<string>("attendanceid")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("employeeid")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("presenttime")
                        .HasColumnType("datetime2");

                    b.Property<int>("slno")
                        .HasColumnType("int");

                    b.HasKey("attendanceid");

                    b.HasIndex("employeeid");

                    b.ToTable("Attendances");
                });

            modelBuilder.Entity("FinalProject1withAngular6.Context.BonusSetting", b =>
                {
                    b.Property<string>("bonusid")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("bonusname")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("percent")
                        .HasColumnType("int");

                    b.HasKey("bonusid");

                    b.ToTable("BonusSettings");
                });

            modelBuilder.Entity("FinalProject1withAngular6.Context.Department", b =>
                {
                    b.Property<string>("departmentid")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("departmentname")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("departmentid");

                    b.ToTable("Department");
                });

            modelBuilder.Entity("FinalProject1withAngular6.Context.Employees", b =>
                {
                    b.Property<string>("employeeid")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("activesection")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("departmentid")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("isactive")
                        .HasColumnType("bit");

                    b.Property<DateTime>("joindate")
                        .HasColumnType("datetime2");

                    b.Property<string>("name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("picture")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("employeeid");

                    b.HasIndex("departmentid");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("FinalProject1withAngular6.Context.Holiday", b =>
                {
                    b.Property<int>("holidayid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("date")
                        .HasColumnType("datetime2");

                    b.Property<string>("reason")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("holidayid");

                    b.ToTable("Holidays");
                });

            modelBuilder.Entity("FinalProject1withAngular6.Context.Holiday1", b =>
                {
                    b.Property<string>("holidayid")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("date")
                        .HasColumnType("datetime2");

                    b.Property<string>("reason")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("holidayid");

                    b.ToTable("Holidays1");
                });

            modelBuilder.Entity("FinalProject1withAngular6.Context.SaleDetail", b =>
                {
                    b.Property<string>("saleid")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("slno")
                        .HasColumnType("int");

                    b.Property<decimal?>("costprice")
                        .HasColumnType("decimal(18,4)");

                    b.Property<DateTime>("detaildate")
                        .HasColumnType("datetime2");

                    b.Property<string>("itemcode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("qty")
                        .HasColumnType("int");

                    b.Property<decimal?>("total")
                        .HasColumnType("decimal(18,4)");

                    b.HasKey("saleid", "slno");

                    b.ToTable("SaleDetails");
                });

            modelBuilder.Entity("FinalProject1withAngular6.Context.SaleMaster", b =>
                {
                    b.Property<string>("saleid")
                        .HasColumnType("nvarchar(450)");

                    b.Property<decimal?>("discount")
                        .HasColumnType("decimal(18,4)");

                    b.Property<decimal?>("due")
                        .HasColumnType("decimal(18,4)");

                    b.Property<DateTime>("masterdate")
                        .HasColumnType("datetime2");

                    b.Property<decimal?>("net")
                        .HasColumnType("decimal(18,4)");

                    b.Property<decimal?>("paid")
                        .HasColumnType("decimal(18,4)");

                    b.Property<string>("partyid")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal?>("total")
                        .HasColumnType("decimal(18,4)");

                    b.HasKey("saleid");

                    b.ToTable("SaleMasters");
                });

            modelBuilder.Entity("FinalProject1withAngular6.Context.Attendance", b =>
                {
                    b.HasOne("FinalProject1withAngular6.Context.Employees", "employees")
                        .WithMany("Attendances")
                        .HasForeignKey("employeeid");

                    b.Navigation("employees");
                });

            modelBuilder.Entity("FinalProject1withAngular6.Context.Employees", b =>
                {
                    b.HasOne("FinalProject1withAngular6.Context.Department", "department")
                        .WithMany("employees")
                        .HasForeignKey("departmentid");

                    b.Navigation("department");
                });

            modelBuilder.Entity("FinalProject1withAngular6.Context.SaleDetail", b =>
                {
                    b.HasOne("FinalProject1withAngular6.Context.SaleMaster", "saleMaster")
                        .WithMany("SaleDetails")
                        .HasForeignKey("saleid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("saleMaster");
                });

            modelBuilder.Entity("FinalProject1withAngular6.Context.Department", b =>
                {
                    b.Navigation("employees");
                });

            modelBuilder.Entity("FinalProject1withAngular6.Context.Employees", b =>
                {
                    b.Navigation("Attendances");
                });

            modelBuilder.Entity("FinalProject1withAngular6.Context.SaleMaster", b =>
                {
                    b.Navigation("SaleDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
