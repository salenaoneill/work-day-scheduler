var date_today = dayjs().format('dddd, MMMM, D');
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    $('.saveBtn').on("click", function() {
        var schedule_text = $(this).siblings(".description").val();
        var schedule_hour = $(this).parent().attr("id");
        localStorage.setItem(schedule_hour, schedule_text);
    })



    function timeblock_color_set(){
        var current_hour = dayjs().hour()
        $('.time-block').each(function(){
            var block_hour = parseInt(this.id.replace("hour-", ""));
            if (current_hour > block_hour){
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
    
            else if (current_hour === block_hour){
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
    
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    
       
    };
    timeblock_color_set();
    
    $(".time-block .description").each(function(){
        var schedule_hour = $(this).parent().attr("id"); 
        var this_hour = localStorage.getItem(schedule_hour);
        $(this).text(this_hour);
    });
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  
  