using Microsoft.AspNetCore.Mvc;
using MRMS_Blazor.Shared;
using MRMS_Blazor.Shared.CommonSection;

namespace MRMS_Blazor.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileTypesController : ControllerBase
    {
        private IGlobalRepository _globalRepository;
        private IGenericRepository<FileType> _fileRepository;


        public FileTypesController(IGlobalRepository globalRepository)
        {
            this._globalRepository = globalRepository;
            this._fileRepository = _globalRepository.GetRepository<FileType>();
        }


        [HttpGet]
        public IEnumerable<FileType> GetFileType()
        {
            return _fileRepository.GetAll();
        }
        [HttpPost]
        public ActionResult FileTypePost(FileType fileType)
        {
            _fileRepository.Insert(fileType);
            _globalRepository.Save();
            return Ok(fileType);
        }
    }
}
