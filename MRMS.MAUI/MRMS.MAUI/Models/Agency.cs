namespace MRMS.MAUI.Models
{
    public class Agency
    {
        public int AgencyId { get; set; }

        public string Name { get; set; } = default!;

        public string RL { get; set; } = default!;

        public string Address { get; set; } = default!;

        public string ContactNo { get; set; } = default!;

        public string Manager { get; set; } = default!;

        public string Accountant { get; set; } = default!;
    }
}
