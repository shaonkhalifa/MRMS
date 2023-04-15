namespace MRMS.MAUI.Models
{
    public class Company
    {
        public int CompanyId { get; set; }

        public string Name { get; set; } = default!;

        public string Address { get; set; } = default!;

        public string Email { get; set; } = default!;

        public string Phone { get; set; } = default!;

        public int CountryId { get; set; }

    }
}
