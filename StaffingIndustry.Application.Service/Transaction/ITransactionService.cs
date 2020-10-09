using StaffingIndustry.Application.Model.Transaction;
using System;
using System.Collections.Generic;
using System.Text;

namespace StaffingIndustry.Application.Service.Transaction
{
    public interface ITransactionService
    {
        bool AddTransaction(MvTransaction transaction);
        dynamic GetAllTransactionDetail();
    }
}
