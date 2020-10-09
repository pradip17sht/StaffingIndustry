using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace StaffingIndustry.Application.Model.Transaction
{
    public class MvTransaction
    {
        [Required]
        public int assignmentId { get; set; }

        [Required]
        public int workHours { get; set; }

        [Required]
        public int payPerHour { get; set; }
    }
}
