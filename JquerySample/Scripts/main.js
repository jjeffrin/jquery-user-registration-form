$(document).ready(function () {

    console.log("Ready");

    // Storing all form values in variables
    var firstName = $('#first-name');
    var lastName = $('#last-name');
    var age = $('#age');
    var gender = $('#gender');
    var address1 = $('#address1');
    var address2 = $('#address2');
    var country = $('#country');
    var state = $('#state');
    var city = $('#city')
    var mobileNumber = $('#mobile-number');
    // $('input[name="relocation-radio"]:checked', '#user-reg-form').val()
    var comment = $('#comment');

    // Populate Age details
    $('#age').click(() => {

    });

    // On Submit button click
    $('#btn-submit').click(() => {
        console.log('Submit');
    });

});





//function clearFields() {
//    $('#user-reg-form').trigger('reset');
//}
