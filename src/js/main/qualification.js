var maxAppend = 0;
$("#qualificationWorkingDays").click(function () {
    if (maxAppend >= 1) return;

    var addinput = $(
        "<div class='row'><div class='small-6 columns'>" +
        "<label class='right inline'>Enter Your Certificate</label></div>" +
        "<div class='small-6 columns'><input type='text'></div></div>");
    maxAppend++;

    $(".qualification__div").append(addinput);
});
$("#qualificationExperience").click(function () {
    if (maxAppend >= 10) return;

    var experienceInput = $(
        "<div class='qualification__div--item'><div class='qualification__div--top'>" +
        "<span class='mr-2'>Minimum of </span>"+
        "<select class='iq-experienceYears' name='experienceYears'><option class='experienceYears_option' value='1' selected=''>1 year</option><option class='experienceYears_option' value='2'>2 years</option><option class='experienceYears_option' value='3'>3 years</option><option class='experienceYears_option' value='4'>4 years</option><option class='experienceYears_option' value='5'>5 years</option><option class='experienceYears_option' value='6'>6 years</option><option class='experienceYears_option' value='7'>7 years</option><option class='experienceYears_option' value='8'>8 years</option><option class='experienceYears_option' value='9'>9 years</option><option class='experienceYears_option' value='10'>10 years</option></select>"+
        "<span class='mx-2'> of </span><input type='text'><span class='mx-2'> experience </span> </div>  " +
        "<div class='qualification__div--bottom'>" +
        "<div class='switch-block'>" +
        "<label class='switch-light switch-candy'>" +
        "<input type='checkbox' name='' id='' />" +
        "<span>" +
        "<span>Preffered</span>" +
        " <span>Required</span>" +
        "<a></a>" +
        "</span>" +
        "</label>" +
        "</div>" +
        "</div>" +
        " <div class='qualification--remove-btn'><i class='fas fa-times'></i></div></div>");
    maxAppend++;

    $(".qualification__div").append(experienceInput);

    $(".qualification--remove-btn").click(function () {
        console.log(this);
        $(this).closest('.qualification__div--item').remove();
    });
});
$("#qualificationEducation").click(function () {
    if (maxAppend >= 10) return;

    var educationInput = $(
        "<div class='qualification__div--item'><div class='qualification__div--top'>" +
        "<span class='mr-2'>Minimum level of education: </span>"+
        "<select class='iq-localizedEduLevel' name='localizedEduLevel'><option class='localizedEduLevel_option' value='12' selected=''>High school or equivalent</option><option class='localizedEduLevel_option' value='14'>Associate</option><option class='localizedEduLevel_option' value='16'>Bachelor's</option><option class='localizedEduLevel_option' value='18'>Master's</option><option class='localizedEduLevel_option' value='22'>Doctorate</option></select>"+
        " </div>  " +
        "<div class='qualification__div--bottom'>" +
        "<div class='switch-block'>" +
        "<label class='switch-light switch-candy'>" +
        "<input type='checkbox' name='' id='' />" +
        "<span>" +
        "<span>Preffered</span>" +
        " <span>Required</span>" +
        "<a></a>" +
        "</span>" +
        "</label>" +
        "</div>" +
        "</div>" +
        " <div class='qualification--remove-btn'><i class='fas fa-times'></i></div></div>");
    maxAppend++;

    $(".qualification__div").append(educationInput);

    $(".qualification--remove-btn").click(function () {
        console.log(this);
        $(this).closest('.qualification__div--item').remove();
    });
});


$("#qualificationLanguage").click(function () {
    if (maxAppend >= 10) return;
    var languages = ["Ada","Java", "LISP", "Javascript","PHP","C","C++","Visual Basic","HTML","CSS","JQuery"]; 
    //Can add more,separate with commas.
    //Added CSS,HTML cause people know them more.               
  
   
    var languageInput = $(
        "<div class='qualification__div--item'><div class='qualification__div--top'>" +
        " <div class='ui-widget'><label class='mr-2' for='qualificationLang'>Language: </label> <input id='qualificationLang' class='qualificationLang'/></div>"+
        "<label class='mx-2'> Level: </label>"+
        "<select class='iq-languageLevel' name='languageLevel'><option class='languageLevel_option' value='beginner' selected=''>Beginner</option><option class='languageLevel_option' value='elementary'>Elementary</option><option class='languageLevel_option' value='intermediate'>Intermediate</option><option class='languageLevel_option' value='upperIntermediate'>Upper Intermediate</option><option class='languageLevel_option' value='advanced'>Advanced</option><option class='experienceYears_option' value='proficient'>Proficient</option></select>"+
        "</div>" +
        "<div class='qualification__div--bottom'>" +
        "<div class='switch-block'>" +
        "<label class='switch-light switch-candy'>" +
        "<input type='checkbox' name='' id='' />" +
        "<span>" +
        "<span>Preffered</span>" +
        " <span>Required</span>" +
        "<a></a>" +
        "</span>" +
        "</label>" +
        "</div>" +
        "</div>" +
        " <div class='qualification--remove-btn'><i class='fas fa-times'></i></div></div>");
    maxAppend++;

    $(".qualification__div").append(languageInput);

 
    $( ".qualificationLang" ).autocomplete({
        source: languages
      });

    $(".qualification--remove-btn").click(function () {
        console.log(this);
        $(this).closest('.qualification__div--item').remove();
    });
});