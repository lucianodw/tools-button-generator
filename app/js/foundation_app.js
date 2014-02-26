$(document).foundation();

//Common JS for all UK websites
$(function() {
    $(document).delegate('input[name="prefChoice"]', 'click', prefChosen);
});

//Change text on preference selection
function prefChosen() {
    var prefDesc = $(this).data('desc');
    $(this).closest('.js-pref').find('#pref-choice span').text(prefDesc);
};

/*$("input[name='prefChoice']").on("click", function() {
    var inputText = $(this).data('desc');
    $("#pref-choice span").text(inputText);
});

$("input[name='prefChoice2']").on("change", function() {
    var inputText = $(this).data('desc');
    var inputCat = $(this).data('cat');
    $("#pref-choice2 span").text(inputText);
    $("#pref-choice2 small").text(inputCat);
});*/


// $(document).ready(function() {
//     // Handler for .ready() called.
//     caseBuilder.init();
// });


// var caseBuilder = {
//     init: function() {
//         caseBuilder.setCartWines();
//     },
//     setCartWines: function() {

//     }
// };
