using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StaffingIndustry.Application.Model.Job;
using StaffingIndustry.Application.Service.Job;
using StaffingIndustry.Application.WebApi.Areas.Base;

namespace StaffingIndustry.Application.WebApi.Areas.Job
{
    public class JobController : BaseController
    {
        private IJobService _jobService;

        public JobController(IJobService jobService)
        {
            _jobService = jobService;
        }

        [HttpGet]
        public IActionResult AllJobDetail()
        {
            try
            {
                dynamic jsonString = _jobService.GetAllJobDetail();
                return Ok(jsonString);
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        [HttpPost]
        public IActionResult AddJob([FromBody] MvJob job)
        {
            try
            {
                var added = _jobService.AddJob(job);
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
        public IActionResult EditJob([FromBody] MvEditJob job)
        {
            try
            {
                var edited = _jobService.EditJob(job);
                if (!edited)
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
