using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JquerySample.Startup))]
namespace JquerySample
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
