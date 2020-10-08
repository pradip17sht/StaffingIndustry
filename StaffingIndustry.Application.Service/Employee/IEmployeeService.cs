using StaffingIndustry.Application.Model.Employee;
using System;
using System.Collections.Generic;
using System.Text;

namespace StaffingIndustry.Application.Service.Employee
{
    public interface IEmployeeService
    {
        dynamic GetAllEmployeeDetail();
        bool AddEmployee(MvEmployee employee);
        bool EditEmployee(MvEditEmployee employee);
    }
}
