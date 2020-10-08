using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace StaffingIndustry.Application.Model.Customer
{
    public class MvCustomer
    {
        [Required]
        public string organizationName { get; set; }

        [Required]
        public string city { get; set; }

        [Required]
        public string state { get; set; }

        [Required]
        public int phoneNo { get; set; }

        [Required]
        public string emailId { get; set; }
    }

    public class MvEditCustomer
    {
        [Required]
        public int organizationId { get; set; }
        
        [Required]
        public string organizationName { get; set; }

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
