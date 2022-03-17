using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FinalProject1withAngular6.Migrations
{
    public partial class abc : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Department",
                columns: table => new
                {
                    departmentid = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    departmentname = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Department", x => x.departmentid);
                });

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    employeeid = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    departmentid = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    activesection = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    joindate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    isactive = table.Column<bool>(type: "bit", nullable: false),
                    picture = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.employeeid);
                    table.ForeignKey(
                        name: "FK_Employees_Department_departmentid",
                        column: x => x.departmentid,
                        principalTable: "Department",
                        principalColumn: "departmentid",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Attendances",
                columns: table => new
                {
                    attendanceid = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    slno = table.Column<int>(type: "int", nullable: false),
                    employeeid = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    presenttime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Attendances", x => x.attendanceid);
                    table.ForeignKey(
                        name: "FK_Attendances_Employees_employeeid",
                        column: x => x.employeeid,
                        principalTable: "Employees",
                        principalColumn: "employeeid",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Attendances_employeeid",
                table: "Attendances",
                column: "employeeid");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_departmentid",
                table: "Employees",
                column: "departmentid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Attendances");

            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropTable(
                name: "Department");
        }
    }
}
