using Microsoft.EntityFrameworkCore.Migrations;

namespace FinalProject1withAngular6.Migrations
{
    public partial class Bonus : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BonusSettings",
                columns: table => new
                {
                    bonusid = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    bonusname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    percent = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BonusSettings", x => x.bonusid);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BonusSettings");
        }
    }
}
