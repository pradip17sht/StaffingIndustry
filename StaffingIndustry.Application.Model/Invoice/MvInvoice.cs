using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace StaffingIndustry.Application.Model.Invoice
{
    public class MvInvoice
    {

        [Required]
        public int transactionId { get; set; }
    }
}
