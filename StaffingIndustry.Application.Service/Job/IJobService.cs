using StaffingIndustry.Application.Model.Job;
using System;
using System.Collections.Generic;
using System.Text;

namespace StaffingIndustry.Application.Service.Job
{
    public interface IJobService
    {
        dynamic GetAllJobDetail();
        bool AddJob(MvJob job);
        bool EditJob(MvEditJob job);
    }
}
