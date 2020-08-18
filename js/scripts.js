// Business Logic Interface
$(document).ready(function(){
  $("form#stress-test").submit(function(event) {
  event.preventDefault();

// User Interface

let warningResponses = [];
let symptomsResponses = [];
let copeResponses = [];

      $("input:checkbox[name=warning]:checked").each(function(){
        const warning = $(this).val();
        warningResponses.push(warning);
    });
    
    $("input:checkbox[name=symptoms]:checked").each(function(){
        const symptoms = $(this).val();
        symptomsResponses.push(symptoms);
    });
    $("input:checkbox[name=cope]:checked").each(function(){
        const cope = $(this).val();
        copeResponses.push(cope);
    });

    console.log(warningResponses);
    console.log(symptomsResponses);
    console.log(copeResponses);

    // Conditional Statement
    if (warningResponses.length >= 3 && symptomsResponses.length >= 3 && copeResponses.length <=1){
      $("#solution").append("High Stress! You should add more coping strategies!")
    } else if (warningResponses.length >= 3 && symptomsResponses.length >= 3 && copeResponses.length >=3){
      $("#solution").append("Stress level is high but you manage it well! Consider adding a few more techniques.")
    } else if (warningResponses.length <= 1 && symptomsResponses.length <= 1){
      $("#solution").append("Wow! Very low stress. You seem to have a handle on your coping strategies.")
    } else {
      $("#solution").append("Your results are mixed. Consider adding a few more coping skills to your repertoire.")
    };

    $("#solution").show();
    $("#stress-test").hide();
  });
});

// for (let index = 0; index , warning.length; index += 1) {
//   $("#solution").show("What goes here?")
// }

// let userResponses = [];
//   $("input:checkbox[name=warning]:checked").each(function(){
//       const warning = $(this).val();
//       userResponses.push(workTransportationMode);
//     });


    // if (personalityInput === "controled" && interestInput === "reading murder mystery" || personalityInput === "detail oriented" && interestInput === "playing Sudoku" || personalityInput === "controled" && interestInput === "playing Sudoku" || personalityInput === "detail oriented" && interestInput === "reading murder mystery") {
    //   $(".python, .weSuggest, .about").show(); 
    // } else if (personalityInput === "spontaneous" && interestInput === "going to a concert" || personalityInput === "spontaneous" && interestInput === "playing video games" || personalityInput === "care free" && interestInput === "going to a concert" || personalityInput === "care free" && interestInput === "playing video games") {
    //   $(".ruby, .weSuggest, .about").show(); 

    // } else {
    //   $(".java-script, .weSuggest, .about").show(); 
    // } 

