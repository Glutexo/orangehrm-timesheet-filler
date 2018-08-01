/**
 * Simplifies OrangeHRM monthly timesheet submission.
 *
 * Fills in each regular day with the same time (08:00 – 16:30, 00:30 lunch break).
 * A regular day is a day without special flags: no public holiday, no vacation,
 * no weekend.
 */

(function() {
    function fillTimeSheet() {
		var rows = document.querySelectorAll('#timesheetTable .activeRow');

		function eachRow(row, _index, _list) {
			// @TODO Make less cryptic. :)
			var regularDay = row.classList.length == 1 && row.classList[0] == 'activeRow';
		
			function fillRow() {
				var inTimeInput = row.querySelector('[name$=\\[inTime\\]]'),
					outTimeInput = row.querySelector('[name$=\\[outTime\\]]'),
					breakDurationInput = row.querySelector('[name$=\\[breakDuration\\]]'),
					event = new MouseEvent('blur');
					empty = inTimeInput.value === '' && outTimeInput.value === '' && breakDurationInput.value === '';
			
				// Only empty rows, do not overwrite something special.
				if (empty) {
					// 8 hrs of work, ½ hr lunch break
					inTimeInput.value = '08:00';
					outTimeInput.value = '16:30';
					breakDurationInput.value = '00:30';

					// Must trigger a blur event, so the app counts the working hours for the day.
					breakDurationInput.dispatchEvent(event);
				}
			}

			// Only regular days, everything else is a special case.
			if (regularDay) {
				fillRow();
			}
		}
		
		rows.forEach(eachRow);
    }

    function init() {
		var saveButton = document.getElementById('topBtnSave'),
			formGroup = saveButton.parentNode,
			fillButton = document.createElement('input');

		function buttonClick(event) {
			event.preventDefault();
			fillTimeSheet();
		}

		fillButton.type = 'button';
		fillButton.value = 'Fill';
		fillButton.classList.add('btn', 'btn-sm', 'rh-grn');

		fillButton.addEventListener('click', buttonClick);
		
		formGroup.appendChild(fillButton);
    }

    init();
})();
