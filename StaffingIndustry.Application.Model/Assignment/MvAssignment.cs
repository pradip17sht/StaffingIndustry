using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace StaffingIndustry.Application.Model.Assignment
{
    public class MvAssignment
    {
        [Required]
        public string assignmentId { get; set; }
        
        [Required]
        public string assignmentName { get; set; }

        [Required]
        public string startDate { get; set; }

        [Required]
        public string endDate { get; set; }

        [Required]
        public string employeeId { get; set; }

        [Required]
        public string jobId { get; set; }
    }

    public class MvAssignmentUpdate
    {
        [Required]
        public string assignmentId { get; set; }

        [Required]
        public string assignmentName { get; set; }

        [Required]
        public string startDate { get; set; }

        [Required]
        public string endDate { get; set; }

        [Required]
        public string employeeId { get; set; }

        [Required]
        public string jobId { get; set; }
    }
}
