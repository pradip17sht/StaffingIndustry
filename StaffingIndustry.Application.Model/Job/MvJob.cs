using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace StaffingIndustry.Application.Model.Job
{
    public class MvJob
    {
        [Required]
        public string jobTitle { get; set; }

        [Required]
        public string customerId { get; set; }

        [Required]
        public string payPerHour { get; set; }
    }

    public class MvEditJob
    {
        [Required]
        public string jobId { get; set; }

        [Required]
        public string jobTitle { get; set; }

        [Required]
        public string customerId { get; set; }

        [Required]
        public string payPerHour { get; set; }
    }
}