using StaffingIndustry.Application.Model.Customer;
using System;
using System.Collections.Generic;
using System.Text;

namespace StaffingIndustry.Application.Service.Customer
{
    public interface ICustomerService
    {
        dynamic GetAllCustomerDetail();
        bool AddCustomer(MvCustomer customer);
        bool EditCustomer(MvEditCustomer customer);
    }
}
