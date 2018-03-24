$(function() {

  $('#calendar').fullCalendar({
    themeSystem: 'bootstrap4',
      defaultView: 'month',
      header: {
        left: ' addEventButton,prev, next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listYear',
    
                 },
                 eventLimit: true, // allow "more" link when too many events
                 events: 'https://fullcalendar.io/demo-events.json',          
        customButtons: {
        addEventButton: {
                    text: 'add event...',
                    click: function() {
                      var dateStr = prompt('Enter a date in YYYY-MM-DD format');
                      var date = moment(dateStr);
                      if (date.isValid()) {
                        $('#calendar').fullCalendar('renderEvent', {
                          title: 'dynamic event',
                          start: date,
                          allDay: true,
                        });
                        alert('Great. Now, update your database...');
                      } else {
                        alert('Invalid date.');        
                      }
                    }
                  }, 
            // US Holidays 
        
                  displayEventTime: false,
                  googleCalendarApiKey: "AIzaSyB9J2ghets4yF_E6shVw79vOQvfTU4OE00", 
                  events1: 'https://en.usa#holiday@group.v.calendar.google.com',
                  eventClick: function(events1) {
                                 // opens events in a popup window
                    window.open(events1.url, '_blank', 'width=700,height=600')
                    return false; }} })
                  })
