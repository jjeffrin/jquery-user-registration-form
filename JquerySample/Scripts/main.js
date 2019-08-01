$(document).ready(function () {

    console.log("Ready");

    // Storing all form values in variables
    var firstName = $('#first-name');
    var lastName = $('#last-name');
    var age = $('#age');
    var gender = $('#gender');
    var address1 = $('#address-1');
    var address2 = $('#address-2');
    var country = $('#country');
    var state = $('#state');
    var city = $('#city')
    var mobileNumber = $('#mobile-number');
    // $('input[name="relocation-radio"]:checked', '#user-reg-form').val()
    var comment = $('#comment');

    // Flag variables
    var fNameCorrect, lNameCorrect, ageCorrect, genderCorrect, address1Correct, countryCorrect, stateCorrect, cityCorrect, mobileCorrect, commentCorrect;

    // Listen for Name changes
    firstName.on('input', () => {
        if (firstName.val() == '') {
            removeSalutation();
        }
        else {
            setSalutation();
            setGender();
        }
    });
    lastName.on('input', () => {
        if (lastName.val() == '') {
            removeSalutation();
        }
        else {
            setSalutation();
            setGender();
        }
    });
    
    // Theme Changing
    $('#theme').click(() => {
        if ($('#theme').text() == "Switch to Dark Mode") {
            $('#background').css('background-color', 'black');
            $('label').css('color', 'white');
            $('h2').css('color', 'white');
            $('#theme').html("Switch to Light Mode");
        }
        else {
            $('#background').css('background-color', '#eeeeee');
            $('label').css('color', 'black');
            $('h2').css('color', 'black');
            $('#theme').html("Switch to Dark Mode");
        }
    });



    // Listen for Gender change
    gender.change(() => {
        setGender();
    });

    // Set Gender
    function setGender() {
        if (gender.val() == 'male') {
            $('#gender-salutation').html("Mr. ");
        }
        if (gender.val() == 'female') {
            $('#gender-salutation').html("Ms. ");
        }
    }

    // Set Salutation
    function setSalutation() {
        $("#salutation").html("<hr>Welcome, <span id='gender-salutation'></span>" + firstName.val() + " " + lastName.val())
    }

    // Remove Salutation
    function removeSalutation() {
        $("#salutation").html('');
    }

    // Populate Age details
    $.getJSON('Home/GetAgeOptions', (datas) => {
        console.log(datas);
        var content = '';
        $.each(datas, (index, data) => {
            content += "<option value=" + data + ">" + data + "</option>";
        });
        $('#age').html(content);
    });

    // Populate Country Details
    $.getJSON('Home/GetCountries', (datas) => {
        console.log(datas);
        var content = '';
        //$("#country").html("<option value='0'>Please choose a country</option>");
        $.each(datas, (index, data) => {
            content += "<option value=" + data.CountryId + ">" + data.CountryName + "</option>";
        });
        $('#country').html(content);
        $('#country').prepend("<option value='0' selected>Please choose a country</option>");
    });

    // Populate State Details
    $('#country').change(() => {
        console.log($('#country').val());
        $.getJSON('Home/GetState/?countryId='+$('#country').val(), (datas) => {
            console.log(datas);
            var content = '';
            $('#city').html(content);
            $.each(datas, (index, data) => {
                content += "<option value=" + data.StateId + ">" + data.StateName + "</option>";
            });
            $('#state').html(content);
            $('#state').prepend("<option value='0' selected>Please choose a state</option>");
        });
    });

    // Populate City Details
    $('#state').change(() => {
        console.log($('#state').val());
        $.getJSON('Home/GetCity/?stateId=' + $('#state').val(), (datas) => {
            console.log(datas);
            var content = '';
            $.each(datas, (index, data) => {
                content += "<option value=" + data.CityId + ">" + data.CityName + "</option>";
            });
            $('#city').html(content);
        });
    });


    // On Submit button click
    $('#btn-submit').click(() => {
        // Check First Name
        if (!(firstName.val().length <= 50 && firstName.val() != "" && /^[A-Za-z]+$/.test(firstName.val()))) {
            $('#first-name-error').html("<div class='alert alert-danger show col-sm-6' role='alert'>Please enter valid values.</div>");
            fNameCorrect = false;
        } else {
            $('#first-name-error').html('');
            fNameCorrect = true;
        }

        // Check Last Name
        if (!(lastName.val().length <= 50 && lastName.val() != "" && /^[A-Za-z]+$/.test(lastName.val()))) {
            $('#last-name-error').html("<div class='alert alert-danger show col-sm-6' role='alert'>Please enter valid values.</div>");
            lNameCorrect = false;
        } else {
            $('#last-name-error').html('');
            lNameCorrect = true;
        }

        // Check Address Line 1
        if (!(address1.val().length <= 150 && lastName.val() != "")) {
            $('#address-error').html("<div class='alert alert-danger show col-sm-6' role='alert'>Please enter valid values.</div>");
            address1Correct = false;
        } else {
            $('#address-error').html('');
            address1Correct = true;
        }

        // Check Gender
        console.log(gender.val());
        if (gender.val() == 0) {
            $('#gender-error').html("<div class='alert alert-danger show col-sm-6' role='alert'>Please select a gender.</div>");
            genderCorrect = false;
        }
        else {
            $('#gender-error').html('');
            genderCorrect = true;
        }

        // Check Country
        console.log(country.val());
        if (country.val() == 0) {
            $('#country-error').html("<div class='alert alert-danger show col-sm-6' role='alert'>Please select a country.</div>");
            countryCorrect = false;
        }
        else {
            $('#country-error').html('');
            countryCorrect = true;
        }

        // Check State
        console.log(state.val());
        if (state.val() == null) {
            $('#state-error').html("<div class='alert alert-danger show col-sm-6' role='alert'>Please select a state.</div>");
            stateCorrect = false;
        }
        else {
            $('#state-error').html('');
            stateCorrect = true;
        }

        // Check City
        if (city.val() == null) {
            $('#city-error').html("<div class='alert alert-danger show col-sm-6' role='alert'>Please select a city.</div>");
            cityCorrect = false;
        }
        else {
            $('#city-error').html('');
            cityCorrect = true;
        }

        // Check Mobile Number 
        if (!/^[6-9]{1}[0-9]{9}$/.test(mobileNumber.val())) {
            $('#mobile-error').html("<div class='alert alert-danger show col-sm-6' role='alert'>Please enter a valid mobile number.</div>");
            mobileCorrect = false;
        }
        else {
            $('#mobile-error').html('');
            mobileCorrect = true;
        }

        // Check Comment        
        if (comment.val().length > 1000 && !comment.val() == null) {
            $('#comment-error').html("<div class='alert alert-danger show col-sm-6' role='alert'>Please enter only 1000 characters.</div>");
            commentCorrect = false;
        }
        else {
            $('#comment-error').html('');
            commentCorrect = true;
        }

        // Submit
        console.log(fNameCorrect, lNameCorrect, genderCorrect, address1Correct, countryCorrect, stateCorrect, cityCorrect, mobileCorrect, commentCorrect);
        if (fNameCorrect && lNameCorrect && genderCorrect && address1Correct && countryCorrect && stateCorrect && cityCorrect && mobileCorrect && commentCorrect) {
            console.log('correct');
            var userDetails = {
                firstName: firstName.val(),
                lastName: lastName.val(),
                age: age.val(),
                gender: gender.val(),
                address1: address1.val(),
                address2: address2.val(),
                country: country.find("option[value=" + country.val() + "]").text(),
                state: state.find("option[value="+state.val()+"]").text(),
                city: city.find("option[value=" + city.val() + "]").text(),
                mobileNumber: mobileNumber.val(),
                relocation: $('input[name="relocation-radio"]:checked', '#user-reg-form').val(),
                comment: comment.val()
            };
            console.log(userDetails);
            $.ajax({
                type: "POST",
                url: "Home/SubmitForm",
                data: userDetails,
                traditional: true,
                success: () => {
                    console.log("Success");
                }
            });
        }
        else {
            console.log('wrong');
        }
    });
});
