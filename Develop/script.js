//display todays date
var date_today = dayjs().format('dddd, MMMM D');
$("#currentDay").text(date_today);

$(function () {
    //when the save button is clicked, 
    //save the timeblock as the key in local storage, 
    //& save the text entered by the user in the timeblock as the value in local storage.
    $('.saveBtn').on("click", function() {
        var schedule_text = $(this).siblings(".description").val();
        var schedule_hour = $(this).parent().attr("id");
        localStorage.setItem(schedule_hour, schedule_text);
    })



    function timeblock_color_set(){
        var current_hour = dayjs().hour()
        $('.time-block').each(function(){
            var block_hour = parseInt(this.id.replace("hour-", ""));
            //if the timeblock is in a past hour, add a class of "past"
            //which will then make the background gray
            if (current_hour > block_hour){
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            //if the timeblock is in the present hour, add a class of "present"
            //which will then make the background red
            else if (current_hour === block_hour){
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            //if the timeblock is in a future hour, add a class of "future"
            //which will then make the background green
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    
       
    };
    timeblock_color_set();
    
    //retrieve the user input typed into a textbox from local storage
    //& display it on the time-block representing that hour
    $(".time-block .description").each(function(){
        var schedule_hour = $(this).parent().attr("id"); 
        var this_hour = localStorage.getItem(schedule_hour);
        $(this).text(this_hour);
    });
  });
  
  