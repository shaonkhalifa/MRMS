using Microsoft.AspNetCore.Mvc;
using MRMS_Blazor.Shared;
using MRMS_Blazor.Shared.EmployeeSection;

namespace MRMS_Blazor.Server.Controllers
{
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeFilesController : ControllerBase
    {
        private IGlobalRepository _globalRepository;
        private IGenericRepository<EmployeeFile> _employyeefileRepository;


        public EmployeeFilesController(IGlobalRepository globalRepository)
        {
            this._globalRepository = globalRepository;
            this._employyeefileRepository = _globalRepository.GetRepository<EmployeeFile>();
        }


        [HttpGet]
        public IEnumerable<EmployeeFile> GetFileType()
        {
            return _employyeefileRepository.GetAll();
        }
        [HttpGet("{id}")]
        public ActionResult<EmployeeFile>Get(int id)
        {
            EmployeeFile employeeFile= _employyeefileRepository.Get(id);
            if (employeeFile == null)
            {
                return NotFound();
            }
            return employeeFile;
        }
        [HttpPost]
        public ActionResult EmployeeFilePost(EmployeeFile employeeFile)
        {
            try
            {
                _employyeefileRepository.Insert(employeeFile);
                _globalRepository.Save();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
            return Ok(employeeFile);
        }

        [HttpPut("{id}")]
        public ActionResult EmployeeFilleUpdate(EmployeeFile employeeFile)
        {
         
            try
            {
                if (employeeFile.EmployeeFileId == 0)
                {
                    return NoContent();
                }
                _employyeefileRepository.Update(employeeFile);
                _globalRepository.Save();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
            return Ok(employeeFile);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteEmployeeFile(int id)
        {
         
            try
            {
                var employeeFile = _employyeefileRepository.Get(id);
                if (employeeFile == null)
                {
                    return NotFound();
                }
                _employyeefileRepository.Delete(employeeFile);
                _globalRepository.Save();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
            return NoContent();
        }



        
    }
}
