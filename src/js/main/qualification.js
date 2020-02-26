var maxAppend = 0;
// EXPERIENCE
$("#qualificationExperience").click(function () {
    // if (maxAppend >= 10) return;

    var experienceInput = $(
        "<div class='qualification__div--item'><div class='qualification__div--top'>" +
        "<span class='mr-2'>Minimum of </span>" +
        "<select class='iq-experienceYears' name='experienceYears'><option class='experienceYears_option' value='1' selected=''>1 year</option><option class='experienceYears_option' value='2'>2 years</option><option class='experienceYears_option' value='3'>3 years</option><option class='experienceYears_option' value='4'>4 years</option><option class='experienceYears_option' value='5'>5 years</option><option class='experienceYears_option' value='6'>6 years</option><option class='experienceYears_option' value='7'>7 years</option><option class='experienceYears_option' value='8'>8 years</option><option class='experienceYears_option' value='9'>9 years</option><option class='experienceYears_option' value='10'>10 years</option></select>" +
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
// EDUCATION
$("#qualificationEducation").click(function () {
    // if (maxAppend >= 10) return;

    var educationInput = $(
        "<div class='qualification__div--item'><div class='qualification__div--top'>" +
        "<span class='mr-2'>Minimum level of education: </span>" +
        "<select class='iq-localizedEduLevel' name='localizedEduLevel'><option class='localizedEduLevel_option' value='12' selected=''>High school or equivalent</option><option class='localizedEduLevel_option' value='14'>Associate</option><option class='localizedEduLevel_option' value='16'>Bachelor's</option><option class='localizedEduLevel_option' value='18'>Master's</option><option class='localizedEduLevel_option' value='22'>Doctorate</option></select>" +
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

// LANGUAGE
$("#qualificationLanguage").click(function () {
    // if (maxAppend >= 10) return;
    var languages = ["Ada", "Java", "LISP", "Javascript", "PHP", "C", "C++", "Visual Basic", "HTML", "CSS", "JQuery"];
    //Can add more,separate with commas.
    //Added CSS,HTML cause people know them more.               


    var languageInput = $(
        "<div class='qualification__div--item'><div class='qualification__div--top'>" +
        " <div class='ui-widget'><label class='mr-2' for='qualificationLang'>Language: </label>"+
        " <div class='suggestions-container'><input id='pets' data-suggest type='text' autocomplete='off'><div class='suggestions'></div></div>" +
        " <input id='qualificationLang' class='qualificationLang'/></div>" +
        "<label class='mx-2'> Level: </label>" +
        "<select class='iq-languageLevel' name='languageLevel'><option class='languageLevel_option' value='beginner' selected=''>Beginner</option><option class='languageLevel_option' value='elementary'>Elementary</option><option class='languageLevel_option' value='intermediate'>Intermediate</option><option class='languageLevel_option' value='upperIntermediate'>Upper Intermediate</option><option class='languageLevel_option' value='advanced'>Advanced</option><option class='experienceYears_option' value='proficient'>Proficient</option></select>" +
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


    $(".qualificationLang").autocomplete({
        source: languages,
    });
    // AUTOCOMPLETE 2 START
    var pets = [
        'cat',
        'dog',
        'fish',
        'horse',
        'snake',
        'ferret',
        'lizard',
        'tortoise',
        'terrapin',
        'turtle',
        'pig',
        'hermit crab',
        'hamster',
        'gerbil',
        'rat',
        'tarantula',
        'great white shark',
        'dung beetle',
        'stick insect',
        'aardvark',
        'anteater'
      ];
      
      $('[data-suggest]').on('input', function() {
        
        var input = $(this);
        var scope = input.parents('.suggestions-container');
        
        $('.suggestions', scope).html('<div role="listbox"></div>');
        $('.suggestions-help', scope).empty();
        
        var value = input.val();
        var suggestions = _.filter(pets.sort(), function(pet) { 
          return !pet.indexOf(value); });
        
        if (value) {
          $.each(suggestions, function(k, v) {
            $('[role="listbox"]', scope).append(
              '<div role="option" tabindex="-1" >'+v+'</div>'
            );
          });
          $('[role="listbox"]  [role="option"]', scope).each(function() {
            $(this).attr('id', input.attr('id') + '-' + $(this).index());
          });
          if (!_.isEmpty(suggestions)) {
            $('.suggestions-help', scope).text(
            'There are '+suggestions.length+' suggestions. Use the up and down arrows to browse.');
          }
        }
        
        input.on('keydown', function(e) {
          if (e.keyCode == 40) {
            e.preventDefault();
            $('[role="listbox"]', scope)
              .attr('tabindex', '0')
              .focus();
            $('[role="listbox"]').attr('aria-activedescendant', $('[role="listbox"] [role="option"]:first-child', scope).attr('id'));
            $('[role="listbox"] [role="option"]:first-child').addClass('selected');
            $('#pets').val($('.selected').text());
          }
          if (e.keyCode == 9) {
            $('[role="listbox"]', scope).remove();
          }
        });
      
        $('[role="listbox"]', scope).on('keydown', function(e) {
          if (e.keyCode == 13) {
            e.preventDefault();
            e.stopPropagation();
            $('#pets').focus();
          }
          var newOption;
          if (e.keyCode == 40) {
            e.preventDefault();
            newOption = $('.selected').next();
          }
          if (e.keyCode == 38) {
            e.preventDefault();
            newOption = $('.selected').prev();
          }
          if (newOption.length) {
            $('.selected').removeClass('selected');
            newOption.addClass('selected');
            $(this).attr('aria-activedescendant', newOption.attr('id'));
            $('#pets').val($('.selected').text());
          }
        });
      
        $('[role="listbox"]', scope).on('blur', function() {
          $(this).children().remove();
        });
        
        $('[role="option"]', scope).on('click', function() {
          $('[data-suggest]', scope).val($(this).text())
          .focus();
          $('[role="listbox"]', scope).remove();
        });
        
      });
    // AUTOCOMPLETE 2 END

    $(".qualification--remove-btn").click(function () {
        console.log(this);
        $(this).closest('.qualification__div--item').remove();
    });
});


// LICENSE
$("#qualificationLicense").click(function () {
    // if (maxAppend >= 10) return;
    var license = ["Ada", "Java", "LISP", "Javascript", "PHP", "C", "C++", "Visual Basic", "HTML", "CSS", "JQuery"];
         


    var languageInput = $(
        "<div class='qualification__div--item'><div class='qualification__div--top'>" +
        " <div class='ui-widget'><span class='mr-2' for='qualificationLicense'>Valid </span> <input id='qualificationLicense' class='qualificationLicense'/></div>" +
        "<span class='mx-2' for='qualificationLicense'> license or certification </span></div>" +
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


    $(".qualificationLicense").autocomplete({
        source: license,
        // position: {
        //     offset: '30 40' // Shift 0px left, 4px down.
        // }
    });

    $(".qualification--remove-btn").click(function () {
        console.log(this);
        $(this).closest('.qualification__div--item').remove();
    });
});


//  WORKING DAYS
$("#qualificationWorkingDays").click(function () {
    if (maxAppend >= 1) return;




    var daysInput = $(
        "<div class='qualification__div--item'><div class='qualification__div--top'>" +
        "<span class='mr-2'>Available to work the following days: </span> </div>" +
        "<div class='qualification__div--middle'>"+
        "<select multiple data-placeholder='Add Working Days'>" +
        "<option class='workDays'>Monday</option>" +
        "<option class='workDays'>Tuesday</option>" +
        "<option class='workDays'>Wednesday</option>" +
        "<option class='workDays'>Thursday</option>" +
        "<option class='workDays'>Friday</option>" +
        "<option class='workDays'>Saturday</option>" +
        "<option class='workDays'>Sunday</option>" +
        "</select>" +
        "</div>  " +
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

    $(".qualification__div").append(daysInput);

    var select = $('select[multiple]');
    var options = select.find('option');

    var div = $('<div />').addClass('selectMultiple');
    var active = $('<div />');
    var list = $('<ul />');
    var placeholder = select.data('placeholder');

    var span = $('<span />').text(placeholder).appendTo(active);
    options.each(function () {
        var text = $(this).text();
        if ($(this).is(':selected')) {
            active.append($('<a />').html('<em>' + text + '</em><i></i>'));
            span.addClass('hide');
        } else {
            list.append($('<li />').html(text));
        }
    });

    active.append($('<div />').addClass('arrow'));
    div.append(active).append(list);

    select.wrap(div);

    $(document).on('click', '.selectMultiple ul li', function (e) {
        var select = $(this).parent().parent();
        var li = $(this);
        if (!select.hasClass('clicked')) {
            select.addClass('clicked');
            li.prev().addClass('beforeRemove');
            li.next().addClass('afterRemove');
            li.addClass('remove');
            var a = $('<a />').addClass('notShown').html('<em>' + li.text() + '</em><i></i>').hide().appendTo(select.children('div'));
            a.slideDown(400, function () {
                setTimeout(function () {
                    a.addClass('shown');
                    select.children('div').children('span').addClass('hide');
                    select.find('option:contains(' + li.text() + ')').prop('selected', true);
                }, 500);
            });
            setTimeout(function () {
                if (li.prev().is(':last-child')) {
                    li.prev().removeClass('beforeRemove');
                }
                if (li.next().is(':first-child')) {
                    li.next().removeClass('afterRemove');
                }
                setTimeout(function () {
                    li.prev().removeClass('beforeRemove');
                    li.next().removeClass('afterRemove');
                }, 200);

                li.slideUp(400, function () {
                    li.remove();
                    select.removeClass('clicked');
                });
            }, 600);
        }
    });

    $(document).on('click', '.selectMultiple > div a', function (e) {
        var select = $(this).parent().parent();
        var self = $(this);
        self.removeClass().addClass('remove');
        select.addClass('open');
        setTimeout(function () {
            self.addClass('disappear');
            setTimeout(function () {
                self.animate({
                    width: 0,
                    height: 0,
                    padding: 0,
                    margin: 0
                }, 300, function () {
                    var li = $('<li />').text(self.children('em').text()).addClass('notShown').appendTo(select.find('ul'));
                    li.slideDown(400, function () {
                        li.addClass('show');
                        setTimeout(function () {
                            select.find('option:contains(' + self.children('em').text() + ')').prop('selected', false);
                            if (!select.find('option:selected').length) {
                                select.children('div').children('span').removeClass('hide');
                            }
                            li.removeClass();
                        }, 400);
                    });
                    self.remove();
                })
            }, 300);
        }, 400);
    });

    $(document).on('click', '.selectMultiple > div .arrow, .selectMultiple > div span', function (e) {
        $(this).parent().parent().toggleClass('open');
    });

    $(".qualification--remove-btn").click(function () {
        console.log(this);
        $(this).closest('.qualification__div--item').remove();
    });
});
