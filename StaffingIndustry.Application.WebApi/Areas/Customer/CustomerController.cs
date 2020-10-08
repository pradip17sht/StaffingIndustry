using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StaffingIndustry.Application.Model.Customer;
using StaffingIndustry.Application.Service.Customer;
using StaffingIndustry.Application.WebApi.Areas.Base;

namespace StaffingIndustry.Application.WebApi.Areas.Customer
{
    public class CustomerController : BaseController
    {
        private ICustomerService _customerService;

        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        [HttpGet]
        public IActionResult AllCustomerDetail()
        {
            try
            {
                dynamic jsonString = _customerService.GetAllCustomerDetail();
                return Ok(jsonString);
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        [HttpPost]
        public IActionResult AddCustomer([FromBody] MvCustomer customer)
        {
            try
            {
                var added = _customerService.AddCustomer(customer);
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
    }
}
