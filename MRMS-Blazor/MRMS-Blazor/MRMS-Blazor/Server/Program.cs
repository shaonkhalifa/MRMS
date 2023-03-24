using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MRMS_Blazor.Server.Context;
using MRMS_Blazor.Server.Services;
using MRMS_Blazor.Server;
using MRMS_Blazor.Shared.Authentication;
using System.Text;
using MRMS_Blazor.Shared.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();
ConfigurationManager configuration = builder.Configuration;
// Add services to the container.

builder.Services.AddControllers()
       .AddNewtonsoftJson(option =>
       {
           option.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Serialize;
           option.SerializerSettings.PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.Objects;
       });
var appSettingsSection = configuration.GetSection("AppSettings");
builder.Services.Configure<AppSettings>(appSettingsSection);

//jwt
//var appSettings = appSettingsSection.Get<AppSettings>();
//var key = Encoding.ASCII.GetBytes(appSettings.key);
//builder.Services.AddAuthentication(au =>
//{
//    au.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
//    au.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
//}).AddJwtBearer(jwt =>
//{
//    jwt.RequireHttpsMetadata = false;
//    jwt.SaveToken = true;
//    jwt.TokenValidationParameters = new TokenValidationParameters
//    {
//        ValidateIssuerSigningKey = true,
//        IssuerSigningKey = new SymmetricSecurityKey(key),
//        ValidateIssuer = false,
//        ValidateAudience = false,
//    };
//});
builder.Services.AddScoped<IAuthenticateService, AuthenticateService>();

builder.Services.AddControllers(
options => options.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = true);

//Connection
var connectionString = builder.Configuration.GetConnectionString("Connection");

builder.Services.AddDbContext<MRMSDBContext>(options =>
    options.UseSqlServer(connectionString));


//builder.Services.AddScoped<IGlobalRepository, GlobalRepository>();
builder.Services.AddScoped(typeof(IGlobalRepository), typeof(GlobalRepository));



builder.Services.AddHttpClient();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseWebAssemblyDebugging();
}
else
{
    app.UseExceptionHandler("/Error");
}

app.UseBlazorFrameworkFiles();
app.UseStaticFiles();

app.UseRouting();


app.MapRazorPages();
app.MapControllers();
app.MapFallbackToFile("index.html");

app.Run();
