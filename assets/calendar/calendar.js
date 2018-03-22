 $(document).ready(function(){

    var todoList = document.createElement("fullcalendar");
    todoList.addEventListener('click', function() { 
        console.log(todoList)
           $("calendar").fullCalendar({
             defaultView: "listWeek",
         
             // customize the button names,
             // otherwise they'd all just say "list"
             views: {
               listDay: { buttonText: "list day" },
               listWeek: { buttonText: "list week" },
               listMonth: { buttonText: "list month" }
                    },
         
             header: {
               left: "title",
               center: "",
               right: "listDay,listWeek,listMonth"
                     },
             events: "https://fullcalendar.io/demo-events.json"
                                        });
         });
       });
        
