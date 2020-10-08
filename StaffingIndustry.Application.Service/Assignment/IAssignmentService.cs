using StaffingIndustry.Application.Model.Assignment;
using System;
using System.Collections.Generic;
using System.Text;

namespace StaffingIndustry.Application.Service.Assignment
{
    public interface IAssignmentService
    {

        dynamic GetAllAssignmentDetail(); 
        bool AddAssignment(MvAssignment job);
        bool UpdateAssignment(MvAssignmentUpdate assignmentUpdate);
        bool CompleteAssignment(MvAssignmentUpdate completeAssignment);
       
    }
}
