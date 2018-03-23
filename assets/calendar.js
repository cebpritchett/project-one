$(function() {
<<<<<<< HEAD

=======
>>>>>>> eda682532bb88cb57a5cd0854810c2d9e083017d
  $('#calendar').fullCalendar({
    themeSystem: 'bootstrap4',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,listMonth'
    },
    weekNumbers: true,
    eventLimit: true, // allow "more" link when too many events
    events: 'https://fullcalendar.io/demo-events.json'
  });

});