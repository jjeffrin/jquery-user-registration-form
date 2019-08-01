using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JquerySample.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public void SubmitForm(UserModel userModel)
        {
            
        }

        public ActionResult GetAgeOptions()
        {
            List<int> ageList = new List<int>();
            for (int age = 18; age < 61; age++)
            {
                ageList.Add(age);
            }
            return Json(ageList, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetCountryOptions()
        {
            List<string> countryList = new List<string>();
            countryList.Add("India");
            countryList.Add("US");
            countryList.Add("UK");
            return Json(countryList, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetStateOptions(string country)
        {
            List<string> stateList = new List<string>() { "Tamil Nadu", "" };            
            return Json(stateList, JsonRequestBehavior.AllowGet);
        }


            List<Country> countries = new List<Country>() { new Country() { CountryId = 1, CountryName = "India" },
        new Country() {CountryId = 2, CountryName= "USA" },
        new Country() {CountryId = 3, CountryName = "UK" } };

            List<State> states = new List<State>() {
                new State() { CountryId = 1, StateName = "Tamil Nadu", StateId = 1 },
                new State() {CountryId = 1, StateName= "Kerala", StateId = 3 },
                new State() {CountryId = 1, StateName = "AP", StateId = 2 },
                new State() {CountryId = 2, StateName = "Georgia", StateId = 4 },
                new State() {CountryId = 2, StateName = "California", StateId = 5 },
                new State() {CountryId = 2, StateName = "Texas", StateId = 6 },
                new State() {CountryId = 3, StateName = "City of London", StateId = 7 },
                new State() {CountryId = 3, StateName = "Berkshire", StateId = 8 },
                new State() {CountryId = 3, StateName = "Kent", StateId = 9 }
            };

            List<City> city = new List<City>() {
                new City() { CityId = 1, CityName = "Chennai", StateId = 1 },
                new City() {CityId = 2, CityName= "Coimbatore", StateId = 1 },
                new City() {CityId = 3, CityName = "Vijayawada", StateId = 2 },
                new City() {CityId = 4, CityName = "Vishakapatnam", StateId = 2 },
                new City() {CityId = 5, CityName = "Cochin", StateId = 3 },
                new City() {CityId = 6, CityName = "Trivandrum", StateId = 3 },
                new City() {CityId = 7, CityName = "Atlanta", StateId = 4 },
                new City() {CityId = 8, CityName = "Savannah", StateId = 4 },
                new City() {CityId = 9, CityName = "Los Angeles", StateId = 5 },
                new City() {CityId = 10, CityName = "San Francisco", StateId = 5 },
                new City() {CityId = 11, CityName = "Dallas", StateId = 6 },
                new City() {CityId = 12, CityName = "Austin", StateId = 6 },
                new City() {CityId = 13, CityName = "Temple Church", StateId = 7 },
                new City() {CityId = 14, CityName = "Fleet Street", StateId = 7 },
                new City() {CityId = 15, CityName = "Windsor", StateId = 8 },
                new City() {CityId = 16, CityName = "Hungerford", StateId = 8 },
                new City() {CityId = 17, CityName = "Margate", StateId = 9 },
                new City() {CityId = 18, CityName = "Canterbury", StateId = 9 },
            };

            public ActionResult GetCountries()
            {
                return Json(countries, JsonRequestBehavior.AllowGet);
            }

            public ActionResult GetState(int countryId)
            {
                return Json(states.Where(x => x.CountryId == countryId), JsonRequestBehavior.AllowGet);
            }

            public ActionResult GetCity(int stateId)
            {
                return Json(city.Where(x => x.StateId == stateId), JsonRequestBehavior.AllowGet);
            }


        public class City
        {
            public int CityId { get; set; }

            public string CityName { get; set; }

            public int StateId { get; set; }
        }

        public class State
        {
            public int StateId { get; set; }

            public string StateName { get; set; }

            public int CountryId { get; set; }
        }

        public class Country
        {
            public int CountryId { get; set; }
            public string CountryName { get; set; }
        }

        public class UserModel
        {
            public string firstName { get; set; }
            public string lastName { get; set; }
            public string age { get; set; }
            public string gender { get; set; }
            public string address1 { get; set; }
            public string address2 { get; set; }
            public string country { get; set; }
            public string state { get; set; }
            public string city { get; set; }
            public double mobileNumber { get; set; }
            public string relocation { get; set; }
            public string comment { get; set; }
        }


        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}