using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace StaffingIndustry.Application.Model.Employee
{
    public class MvEmployee
    {
        [Required]
        public string firstName { get; set; }

        [Required]
        public string middleName { get; set; }

        [Required]
        public string lastName { get; set; }

        [Required]
        public string city { get; set; }

        [Required]
        public string state { get; set; }

        [Required]
        public int phoneNo { get; set; }

        [Required]
        public string emailId { get; set; }
    }

    public class MvEditEmployee
    {
        [Required]
        public int personId { get; set; }

        [Required]
        public string firstName { get; set; }

        [Required]
        public string middleName { get; set; }

        [Required]
        public string lastName { get; set; }

        [Required]
        public string city { get; set; }

        [Required]
        public string state { get; set; }

        [Required]
        public int phoneNo { get; set; }

        [Required]
        public string emailId { get; set; }
    }
}
