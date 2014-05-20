(function($) {

	Drupal.behaviors.csumb_schedule_calendar = {

		attach : function() {
				$('#my-calendar').fullCalendar({
					defaultView: 'agendaWeek',
					header: {
						left: '',
						center: 'title',
						right: ''
					},
					columnFormat : {
						week: 'ddd'
					},
					events: {
				        url: Drupal.settings.basePath + 'schedule/calendar/json',
				        error: function() {
				            alert('You have no sections bookmarked!');
				        },
				        textColor: 'white',
				    },
					allDayDefault: false,
					allDaySlot: false,
					minTime: 8,
					maxTime: 22,
					weekends: false,

				});
		}
	}
})(jQuery);