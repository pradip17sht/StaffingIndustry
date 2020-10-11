using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StaffingIndustry.Application.Model.Invoice;
using StaffingIndustry.Application.Service.Invoice;
using StaffingIndustry.Application.WebApi.Areas.Base;

namespace StaffingIndustry.Application.WebApi.Areas.Invoice
{
    public class InvoiceController : BaseController
    {
        private IInvoiceService _invoiceService;
        public InvoiceController(IInvoiceService invoiceService)
        {
            _invoiceService = invoiceService;
        }

        [HttpPost]
        public IActionResult AddInvoice([FromBody] MvInvoice invoice)
        {
            try
            {
                var added = _invoiceService.AddInvoice(invoice);
                if (!added)
                {
                    return BadRequest();
                }
                return Ok();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        [HttpGet]
        public IActionResult AllInvoiceDetail()
        {
            try
            {
                dynamic jsonString = _invoiceService.GetAllInvoiceDetail();
                return Ok(jsonString);
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
