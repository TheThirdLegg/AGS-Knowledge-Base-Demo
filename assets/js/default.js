$(function() {

  hideUnchecked.call(this);
  showChecked.call(this);
  //on hide all button pressed
  /*
  $('form button').click(function() {

    $(this).siblings(':checkbox').prop("checked", false);

    hideUnchecked.call(this);
    showChecked.call(this);
  });
*/
  //on checkbox or radio button change
  $('.itemcheckbox').change(function() { //when item is checked or unchecked
    hideUnchecked.call(this);
    showChecked.call(this);
  });


  function updateIems() {
    /*
        if ($(this).is(":checked")) { //if checked

          var checked = $(this).val(); //any class's match value of checked item
          $('.' + checked).show(); // shows

        } else { //if unchecked

          var checked = $(this).val(); //any class's match value of unchecked item
          $('.' + checked).hide(); // hides
        }
    */
    hideUnchecked.call(this);
    showChecked.call(this);
  }

  function hideUnchecked() {
    if ($('#Class2').is(":not(:checked)")) { //checks if Big Red are checked
      $('.Class2').hide(); //and shows
    }
    if ($('#Class3').is(":not(:checked)")) { //checks if Big Red are checked
      $('.Class3').hide(); //and shows
    }
    if ($('#HistoricalHorseRacing').is(":not(:checked)")) { //checks if Big Red are checked
      $('.HistoricalHorseRacing').hide(); //and shows
    }

    if ($('#OrionPortrait').is(":not(:checked)")) { //checks if OrionSlant are checked
      $('.OrionPortrait').hide(); //and shows
    }
    if ($('#OrionSlant').is(":not(:checked)")) { //checks if OrionSlant are checked
      $('.OrionSlant').hide(); //and shows
    }
    if ($('#OrionCurve').is(":not(:checked)")) { //checks if Orion Curve are checked
      $('.OrionCurve').hide(); //and shows
    }
    if ($('#OrionRise').is(":not(:checked)")) { //checks if Orion Rise are checked
      $('.OrionRise').hide(); //and shows
    }
    if ($('#Icon').is(":not(:checked)")) { //checks if Icon are checked
      $('.Icon').hide(); //and shows
    }
    if ($('#BigRed').is(":not(:checked)")) { //checks if Big Red are checked
      $('.BigRed').hide(); //and shows
    }

    if ($('#ProgressiveController').is(":not(:checked)")) { //checks if Big Red are checked
      $('.ProgressiveController').hide(); //and shows
    }
    if ($('#SignController').is(":not(:checked)")) { //checks if Big Red are checked
      $('.SignController').hide(); //and shows
    }

    if ($('#AtlasPlayer').is(":not(:checked)")) { //checks if Big Red are checked
      $('.AtlasPlayer').hide(); //and shows
    }
    if ($('#ThreeDPlayer').is(":not(:checked)")) { //checks if Big Red are checked
      $('.ThreeDPlayer').hide(); //and shows
    }

  }

  function showChecked() {
    if ($('#Class2').is(":checked")) { //checks if Big Red are checked
      $('.Class2').show(); //and shows
    }
    if ($('#Class3').is(":checked")) { //checks if Big Red are checked
      $('.Class3').show(); //and shows
    }
    if ($('#HistoricalHorseRacing').is(":checked")) { //checks if Big Red are checked
      $('.HistoricalHorseRacing').show(); //and shows
    }

    if ($('#OrionPortrait').is(":checked")) { //checks if OrionSlant are checked
      $('.OrionPortrait').show(); //and shows
    }
    if ($('#OrionSlant').is(":checked")) { //checks if OrionSlant are checked
      $('.OrionSlant').show(); //and shows
    }
    if ($('#OrionCurve').is(":checked")) { //checks if Orion Curve are checked
      $('.OrionCurve').show(); //and shows
    }
    if ($('#OrionRise').is(":checked")) { //checks if Orion Rise are checked
      $('.OrionRise').show(); //and shows
    }
    if ($('#Icon').is(":checked")) { //checks if Icon are checked
      $('.Icon').show(); //and shows
    }
    if ($('#BigRed').is(":checked")) { //checks if Big Red are checked
      $('.BigRed').show(); //and shows
    }

    if ($('#ProgressiveController').is(":checked")) { //checks if Big Red are checked
      $('.ProgressiveController').show(); //and shows
    }
    if ($('#SignController').is(":checked")) { //checks if Big Red are checked
      $('.SignController').show(); //and shows
    }

    if ($('#AtlasPlayer').is(":checked")) { //checks if Big Red are checked
      $('.AtlasPlayer').show(); //and shows
    }
    if ($('#ThreeDPlayer').is(":checked")) { //checks if Big Red are checked
      $('.ThreeDPlayer').show(); //and shows
    }

    $('.Generic').show(); //Shows Generic Info

  }

});
