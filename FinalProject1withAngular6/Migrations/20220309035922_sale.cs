using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FinalProject1withAngular6.Migrations
{
    public partial class sale : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SaleMasters",
                columns: table => new
                {
                    saleid = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    masterdate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    partyid = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    total = table.Column<decimal>(type: "decimal(18,4)", nullable: true),
                    discount = table.Column<decimal>(type: "decimal(18,4)", nullable: true),
                    net = table.Column<decimal>(type: "decimal(18,4)", nullable: true),
                    paid = table.Column<decimal>(type: "decimal(18,4)", nullable: true),
                    due = table.Column<decimal>(type: "decimal(18,4)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SaleMasters", x => x.saleid);
                });

            migrationBuilder.CreateTable(
                name: "SaleDetails",
                columns: table => new
                {
                    saleid = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    slno = table.Column<int>(type: "int", nullable: false),
                    itemcode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    detaildate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    costprice = table.Column<decimal>(type: "decimal(18,4)", nullable: true),
                    qty = table.Column<int>(type: "int", nullable: false),
                    total = table.Column<decimal>(type: "decimal(18,4)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SaleDetails", x => new { x.saleid, x.slno });
                    table.ForeignKey(
                        name: "FK_SaleDetails_SaleMasters_saleid",
                        column: x => x.saleid,
                        principalTable: "SaleMasters",
                        principalColumn: "saleid",
                        onDelete: ReferentialAction.Cascade);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SaleDetails");

            migrationBuilder.DropTable(
                name: "SaleMasters");
        }
    }
}
