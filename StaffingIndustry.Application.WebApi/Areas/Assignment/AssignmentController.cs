﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StaffingIndustry.Application.Model.Assignment;
using StaffingIndustry.Application.Service.Assignment;
using StaffingIndustry.Application.WebApi.Areas.Base;

namespace StaffingIndustry.Application.WebApi.Areas.Assignment
{
    public class AssignmentController : BaseController
    {
        private IAssignmentService _assignmentService;
        public AssignmentController(IAssignmentService assignmentService)
        {
            _assignmentService = assignmentService;
        }

        [HttpPost]
        public IActionResult AddAssignment([FromBody] MvAssignment assignment)
        {
            try
            {
                var added = _assignmentService.AddAssignment(assignment);
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


        [HttpPost]
        public IActionResult UpdateAssignment([FromBody] MvAssignmentUpdate assignmentUpdate)
        {
            try
            {
                var updated = _assignmentService.UpdateAssignment(assignmentUpdate);
                if (!updated)
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

        [HttpPost]
        public IActionResult CompleteAssignment([FromBody] MvAssignmentUpdate completeAssignment)
        {
            try
            {
                var updated = _assignmentService.CompleteAssignment(completeAssignment);
                if (!updated)
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
        public IActionResult AllAssignmentDetail()
        {
            try
            {
                dynamic jsonString = _assignmentService.GetAllAssignmentDetail();
                return Ok(jsonString);
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
