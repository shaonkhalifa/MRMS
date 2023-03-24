using Microsoft.AspNetCore.Mvc;
using MRMS_Blazor.Server;
using MRMS_Blazor.Shared;
using MRMS_Blazor.Shared.ApplicationSection;

namespace MRMS_Blazor.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationIssuesController : ControllerBase
    {
        private IGlobalRepository _globalRepo;
        private IGenericRepository<ApplicationIssue> _applicationIssueRepo;
        public ApplicationIssuesController(IGlobalRepository _globalRepo)
        {
            this._globalRepo = _globalRepo;
            this._applicationIssueRepo = _globalRepo.GetRepository<ApplicationIssue>();
        }

        //Get Data
        [HttpGet]
        public IEnumerable<ApplicationIssue> GetApplicationIssues()
        {
            return _applicationIssueRepo.GetAll();

        }
        [HttpPost]
        public IActionResult PostApplicationIssue(ApplicationIssue applicationIssue)
        {
            _applicationIssueRepo.Insert(applicationIssue);
            _globalRepo.Save();
            return Ok(applicationIssue);
        }
        [HttpPut]
        public IActionResult UpdateApplicationIssue(ApplicationIssue applicationIssue)
        {
            if (applicationIssue.ApplicationIssueId == 0)
            {
                return NotFound();
            }

            _applicationIssueRepo.Update(applicationIssue);
            _globalRepo.Save();
            return Ok(applicationIssue);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteApplicationIssue(int id)
        {
            ApplicationIssue applicationIssue = _applicationIssueRepo.Get(id);
            if (applicationIssue == null)
            {
                return NotFound();
            }

            _applicationIssueRepo.Delete(applicationIssue);
            _globalRepo.Save();
            return Ok(applicationIssue);
        }
    }
}
