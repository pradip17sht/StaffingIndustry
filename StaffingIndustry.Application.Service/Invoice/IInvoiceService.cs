using StaffingIndustry.Application.Model.Invoice;
using System;
using System.Collections.Generic;
using System.Text;

namespace StaffingIndustry.Application.Service.Invoice
{
    public interface IInvoiceService
    {
        bool AddInvoice(MvInvoice invoice);
        dynamic GetAllInvoiceDetail();
    }
}
