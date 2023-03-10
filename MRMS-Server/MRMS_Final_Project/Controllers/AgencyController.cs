using Microsoft.AspNetCore.Mvc;
using MRMS.DAL;
using MRMS.Model.AgencySection;
using MRMS.Model.ViewModels;

namespace MRMS_Final_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgencyController : ControllerBase
    {
        private IGlobalRepository _globalRepository;
        private IGenericRepository<Agency> _agencyRepository;
        private IGenericRepository<AgencySyndicate> _syndicateRepository;


        public AgencyController(IGlobalRepository globalRepository)
        {
            this._globalRepository = globalRepository;
            this._agencyRepository = _globalRepository.AgencyRepository;
            this._syndicateRepository = _globalRepository.AgencySyndicateRepository;
        }

        //Get Agency
        [HttpGet]
        public IEnumerable<Agency> GetAgency()
        {
            return _agencyRepository.GetAll();
        }

        //Post Agency
        [HttpPost]
        public IActionResult AgencyPost([FromForm] AgencyVM agencyVM)
        {
            try
            {
                _globalRepository.BeginTransaction();
                Agency agency = new Agency
                {
                    Name = agencyVM.Name,
                    RL = agencyVM.RL,
                    Address = agencyVM.Address,
                    ContactNo = agencyVM.ContactNo,
                    Manager = agencyVM.Manager,
                    Accountant = agencyVM.Accountant
                };
                _agencyRepository.Insert(agency);
                _globalRepository.Save();

                AgencySyndicate agencySyndicate = new AgencySyndicate
                {
                    AgencyId = agencyVM.AgencyId
                };
                _syndicateRepository.Insert(agencySyndicate);
                _globalRepository.Save();
                _globalRepository.CommitTransaction();
            }
            catch (Exception)
            {
                _globalRepository.RollbackTransaction();
            }
            return Ok(agencyVM);
            //_agencyRepository.Insert(agency);
            //_globalRepository.Save();
            //return Ok(agency);
        }

        //Update Agency
        [HttpPut]
        public IActionResult AgencyUpdate(Agency agency)
        {
            if (agency.AgencyId==0)
            {
                return NotFound();
            }
            _agencyRepository.Update(agency);
            _globalRepository.Save();
            return Ok(agency);
        }

        //Delete Agency
        [HttpDelete("{id}")]
        public IActionResult DeleteAgency(int id)
        {
            Agency agency = _agencyRepository.Get(id);
            if (agency == null)
            {
                return NotFound();
            }
         
            _agencyRepository.Delete(agency);
            _globalRepository.Save();
            return Ok(agency);
        }
    }
}
