var logBuffer = [], logOld, 
logger = function (msg) { logBuffer.push(msg); };

$(document).ready(function () {
	// Create a editors
	function loadTestbeds() {
		$(function () {
			$("#inputEditor1").igDateEditor({
				value: "10/10/2010",
				buttonType: "clear,spin",
				textAlign: "right",
				selectionOnFocus: "browserDefault",
				placeholder: "empty",
				dateInputFormat: "dateTime"
			});

			$("#dropdown").datepicker({
				
			});

			$("#inputEditor2").igDateEditor({
				value: "10/10/2010",
				validatorOptions: { required: true, notificationOptions: { mode: "popover" } }
			});

			$("#inputEditor3").igDateEditor({
				value: "10/10/2010",	 
				dateDisplayFormat: "dateTime"
			});

			logOld = console.log;
			console.log = logger;
			$("#inputEditor4").igDateEditor({
				value: '01/09/50',
				dateInputFormat: "dd/MM/yyyy",
				dateDisplayFormat: "dd/MM/yyyy"
			});
			console.log = logOld;

			$("#inputEditor7").igDateEditor({
				value: '1/9/90',
				dateInputFormat: "M/d/yy"
			});

			$("#inputEditor8").igDateEditor({
				dateInputFormat: "dd,MM,yyyy hh:m:ss ff tt"
			});

			$("#inputEditor8a").igDateEditor({
				dateInputFormat: "dd,MM,yyyy hh:m:ss fff tt"
			});

			$("#inputEditor9").igDateEditor({
				dateInputFormat: "yyyy/MM/dd",
				minValue: new Date(2015, 6, 1),
				maxValue: "2020/12/31"
			});

			$('#inputEditor10').igDateEditor({
				dateInputFormat: "HH:mm:ss"
			});

			$('#inputEditor11').igDateEditor({
				dateInputFormat: "H:m:s",
				dateDisplayFormat: "H:m:ss"
			});

			$("#inputEditor12").igDateEditor({
				value: '01/09/15',
				dateInputFormat: "dd/MM/yy"
			});
			$('#inputEditor13').igDateEditor({
				buttonType: "spin",
				dateInputFormat: "HH:mm:ss"
			});
			$("#validInEditModeEditor").igDateEditor({
				dateInputFormat: "yyyy/MM/dd"
			});
			$("#inputEditor15").igDateEditor({
				width: 300,
				value: new Date(2015, 11, 30, 23, 58, 58, 999),
				buttonType: "clear,spin",
				selectionOnFocus: "browserDefault",
				dateInputFormat: "dateTime"
			});
			$("#inputEditor16").igDateEditor({
				width: 300,
				buttonType: "spin",
				dateInputFormat: "HH:mm:ss:f",
				dateDisplayFormat: "HH:mm:ss:f",
				value: new Date(2015, 10, 11, 23, 5, 10)
			});
			$("#inputEditor17").igDateEditor({
				width: 300,
				buttonType: "spin",
				dateInputFormat: "HH:mm:ss:ff",
				dateDisplayFormat: "HH:mm:ss:ff",
				value: new Date(2015, 10, 11, 23, 5, 10)
			});
			$("#inputEditor18").igDateEditor({
				width: 300,
				buttonType: "spin",
				dateInputFormat: "HH:mm:ss:fff",
				dateDisplayFormat: "HH:mm:ss:fff",
				value: new Date(2015, 10, 11, 23, 5, 10)
			});
			$("#inputEditor19").igDateEditor({
				width: 300,
				buttonType: "spin",
				dateInputFormat: "yyyy/MM/dd HH:mm:ss:fff",
				dateDisplayFormat: "yyyy/MM/dd HH:mm:ss:fff",
				value: new Date(2015, 10, 11, 23, 5, 10)
			});

			$("#inputEditor20").igDateEditor({
				width: 300,
				buttonType: "spin",
				dateInputFormat: "yyyy/MM/dd HH:mm:ss:fff",
				dateDisplayFormat: "yyyy/MM/dd HH:mm:ss:fff",
				value: new Date(2015, 10, 30, 23, 59, 59)
			});

			$("#inputEditor21").igDateEditor({
				width: 300,
				buttonType: "spin",
				dateInputFormat: "yyyy/MM/dd HH:mm:ss:fff",
				dateDisplayFormat: "yyyy/MM/dd HH:mm:ss:fff",
				value: new Date(2015, 0, 1, 0, 1, 1)
			});
			$("#inputEditor22").igDateEditor({
				width: 300,
				buttonType: "spin",
				limitSpinToCurrentField: true,
				dateInputFormat: "yyyy/MM/dd HH:mm:ss:fff",
				dateDisplayFormat: "yyyy/MM/dd HH:mm:ss:fff",
				value: new Date(2015, 10, 30, 23, 59, 59)
			});

			$("#inputEditor23").igDateEditor({
				buttonType: "spin",
				width: 300,
				limitSpinToCurrentField: true,
				dateInputFormat: "yyyy/MM/dd HH:mm:ss:fff",
				dateDisplayFormat: "yyyy/MM/dd HH:mm:ss:fff",
				value: new Date(2015, 0, 1, 0, 0, 0)
			});

			$("#inputEditor24").igDateEditor({
				width: 300,
				buttonType: "spin",
				dateInputFormat: "dateTime",
				dateDisplayFormat: "dateTime"
			});

			$("#inputEditor25").igDateEditor({
				width: 300,
				buttonType: "spin",
				dateInputFormat: "dateTime",
				dateDisplayFormat: "dateTime"
			});  

			$("#inputEditor26").igDateEditor();  

			$("#inputEditor27").igDateEditor({
				width: 300,
				buttonType: "spin",
				dateInputFormat: "dateTime",
				dateDisplayFormat: "dateTime",
				value: new Date(2015, 2, 1, 0, 0, 0)
			});

			$("#inputEditor28").igDateEditor({
				value: "3/1/2015"
			});

			$("#inputEditor28").igValidator({
				date:true
			});

			$("#inputEditor29").igDateEditor();
			$("#inputEditor30").igDateEditor();
			$("#inputEditor31").igDateEditor();
			$("#inputEditor32").igDateEditor({
				allowNullValue: true,
				dateInputFormat: "HH:mm",
				tabIndex: 1,
				keydown: function (e, args) {
					if (e.keyCode === 38 || e.keyCode === 40) {
						e.preventDefault();
						return false;
					}
				}
			});
			$("#inputEditor33").igDateEditor();
			$("#inputEditor34").igDateEditor();
			$("#insertInput").igDateEditor();
			$("#spinHourMinutes").igDateEditor({
				dateInputFormat: "hh:mm",
				value: new Date(),
				dataMode: "date",
				buttonType: "spin",
				width: 100
			});
		});
	}
	initialized = false;
	module("igDateEditor ", {
		setup: function () {
			//pause testing until editors are initialized
			if (!initialized) {
				stop();
				loadTestbeds();
				setTimeout(function () { start(); }, 100);
				initialized = true;
			}
		},
		teardown: function () {
		}
	});

	var testId = 'Date Editor initialization.';
	test(testId, 5, function () {
		ok(typeof ($("#inputEditor1").igDateEditor) === 'function', "Editors Script is not loaded");
		ok($('#inputEditor1').data("igDateEditor") !== undefined, 'Error creating igDateEditor in an input');
		notStrictEqual($('#inputEditor1').igDateEditor("value"), new Date(2010, 9, 10), 'The initial value is not as expected');
		equal($('#inputEditor1').igDateEditor("displayValue"), "10/10/2010 12:00 AM", 'The initial value is not as expected');
		// Bug 208280: igDateEditor hidden/sent date values format review when dataMode is Date object
		equal($('#inputEditor1').data("igDateEditor")._valueInput.val(), toLocalISOString(new Date("10/10/2010")), 'The internal(submit) value is not in expected ISO format');
	});

	var testId = 'Date Editor methods.';
	test(testId, 0, function () {
		var editor = $('#inputEditor1');

		//editor.igDateEditor("setFocus");
		//editor.igDateEditor("spinUp");

		//editor.igDateEditor("spinUp", 5);
	});

	var testId = 'Validator with notifier popup';
	test(testId, 2, function () {
		var $dtEditor = $('#inputEditor2');
		$dtEditor.igDateEditor("option", "value", "");
		$dtEditor.trigger("blur");
		equal($('#inputEditor2').igValidator("notifier").popover.css("display"), "block", 'Popover is not shown');
		equal($('#inputEditor2').igValidator("notifier").popover.text(), "This field is required", "Required messige is missing");
		//close it
		$(".ui-ignotify-error .ui-igpopover-close-button").click();
	});

	var testId = 'Validator triggers though API';
	test(testId, 7, function () {
		// configured though validatorOptions
		var $dtEditor = $('#inputEditor2'), $dtEditor2 = $('#inputEditor28'), validated = false;


		$dtEditor.igDateEditor("option", "value", "10/10/2015");
		$dtEditor.igDateEditor("validator")._setOption("custom", function () {
			validated = true;
			return false;
		});

		strictEqual($dtEditor.igDateEditor("validate"), false, "validate method didn't return false");
		equal($dtEditor.igValidator("notifier").popover.css("display"), "block", 'Error popover is not shown through editor API');
		ok($dtEditor.igValidator("notifier").popover.hasClass("ui-ignotify-error"), 'Error popover not with proper styles');
		ok(validated, "Editor validate() API did not trigger igValidator");
		//close it
		$dtEditor.igValidator("notifier").hide();
		$dtEditor.igDateEditor("validator")._setOption("custom", null);
		strictEqual($dtEditor.igDateEditor("validate"), true, "validate method didn't return true");

		// externally created
		validated = false;
		$dtEditor2.igDateEditor("validator")._setOption("custom", function () {
			validated = true;
			return true;
		});
		strictEqual($dtEditor.igDateEditor("validate"), true, "validate method didn't return true");
		strictEqual(validated, false, "validate method triggered externally created igValidator (not though validatorOptions)");
		$dtEditor2.igDateEditor("validator")._setOption("custom", null);
	});

	var testId = 'Set options, Apply options test';
	test(testId, 10, function () {
		var $editor = $('#inputEditor3');

		// if prevValue is same as the newVal
		$editor.igDateEditor("value", "10/10/2010");			   

		// set minValue / maxValue:
		$editor.igDateEditor("option", "minValue", new Date(2010, 0, 10).toLocaleString());
		equal($editor.igDateEditor("option", "minValue").getTime(), new Date(2010, 0, 10).getTime(), "minValue not set correctly");
		$editor.igDateEditor("option", "minValue", new Date(2011, 0, 10));
		equal($editor.igDateEditor("value").getTime(), new Date(2011, 0, 10).getTime(), "Value not updated when setting minValue after that time.");
		equal($editor.igDateEditor("field").val(), "1/10/2011 12:00 AM", "Text not updated when setting minValue after that time.");

		$editor.igDateEditor("value", new Date(2014, 9, 10));	
		$editor.igDateEditor("option", "maxValue", new Date(2015, 0, 12).toLocaleString());
		equal($editor.igDateEditor("option", "maxValue").getTime(), new Date(2015, 0, 12).getTime(), "maxValue not set correctly");
		$editor.igDateEditor("option", "maxValue", new Date(2014, 0, 12));
		equal($editor.igDateEditor("value").getTime(), new Date(2014, 0, 12).getTime(), "Value not updated when setting maxValue before that time.");
		equal($editor.igDateEditor("field").val(), "1/12/2014 12:00 AM", "Text not updated when setting maxValue before that time.");

		//restore initial state:
		$editor.igDateEditor("option", "minValue", null);
		$editor.igDateEditor("option", "maxValue", null);
		equal($editor.igDateEditor("option", "minValue"), null, "minValue not set to null");
		equal($editor.igDateEditor("option", "maxValue"), null, "maxValue not set to null");

		// set invalid centuryThreshold. There is no longer setDefault functionality for invalid centuryThreshold 
		var $dtEditor = $('<input id="boundary"/>').appendTo("#testBedContainer"), 
			$editor = $('<input id="negativeBoundary"/>').appendTo("#testBedContainer");
	
		throws(function () {
			$dtEditor.igDateEditor({
				centuryThreshold: 100,
				value: '01/09/50',
				dateDisplayFormat: "dd/MM/yyyy"
			});
		},
		Error($.ig.Editor.locale.centuryThresholdValidValues),
		"Invalid centuryThreshold is set.");
		$dtEditor.remove();

		throws(function () {
			$editor.igDateEditor({
				centuryThreshold: -1,
				value: '01/09/50',
				dateDisplayFormat: "dd/MM/yyyy"
			});
		},
		Error($.ig.Editor.locale.centuryThresholdValidValues),
		"Invalid centuryThreshold is set.");
		$editor.remove();

	});

	var testId = 'Set dateDisplayFormat';
	test(testId, 8, function () {
		var $editor = $("<input />").appendTo("#testBedContainer")
			.igDateEditor({
				value: new Date(2017, 7, 30, 15, 45, 55)
			});
		
		$editor.igDateEditor("option", "dateDisplayFormat", "dateTime");
		equal($editor.val(), "8/30/2017 3:45 PM", "Runtime dateTime display format not applied");
		$editor.trigger("focus");
		$editor.trigger("blur");
		equal($editor.val(), "8/30/2017 3:45 PM", "Runtime dateTime display format not applied");
		$editor.focus();
		$editor.igDateEditor("option", "dateDisplayFormat", "dateLong");
		equal($editor.val(), "08/30/2017", "Edit text should not change when seeting display format");
		$editor.blur();
		equal($editor.val(), "Wednesday, August 30, 2017", "Runtime dateLong display format not applied after exiting edit mode");
		$editor.remove();

		// test with predefined formats and swap with masks
		$editor = $("<input />").appendTo("#testBedContainer")
			.igDateEditor({
				dateInputFormat: "timeLong",
				dateDisplayFormat: "time",
				value: new Date(2017, 3, 13, 10, 12, 43)
			});

		$editor.igDateEditor("option", "dateDisplayFormat", "dd MMM yy h:mm:ss tt");
		equal($editor.val(), "13 Apr 17 10:12:43 AM", "Runtime dateDisplayFormat display format not applied");
		$editor.focus();
		equal($editor.val(), "10:12:43 AM", "Edit text not correct");
		$editor.igDateEditor("option", "dateDisplayFormat", "time");
		equal($editor.val(), "10:12:43 AM", "Edit text should not change");
		$editor.blur();
		equal($editor.val(), "10:12 AM", "Runtime time display format not applied");
		$editor.remove();
	});

	var testId = 'Initialize minVal and maxVal with wrong values';
	test(testId, 2, function () {
		// init MinVal
		throws(function () {
			$("#inputEditor5").igDateEditor({			            
				minValue: "wrong value"
			});
		}, "Uncaught Error: minValue option is not valid date");

		// init MinVal
		throws(function () {
			$("#inputEditor6").igDateEditor({
				maxValue: "wrong value"
			});
		}, "Uncaught Error: maxValue option is not valid date");
	});
	// Bug 
	var testId = 'Date Editor initialization with short date format';
	test(testId, 4, function () {
		var currentValue = $('#inputEditor7').igDateEditor("value");
		var newDate = new Date(1990, 0, 9);

		equal(currentValue.getFullYear(), newDate.getFullYear(), 'The initial year is not as expected');
		equal(currentValue.getMonth(), newDate.getMonth(), 'The initial month is not as expected');
		equal(currentValue.getDate(), newDate.getDate(), 'The initial day is not as expected');
		equal($('#inputEditor7').igDateEditor("displayValue"), "1/9/90", 'The initial value is not as expected');
	});

	//Bug 207713
	var testId = 'Testing date format with milliseconds ';
	test(testId, 4, function () {
		var $dtEditor = $('#inputEditor8'), currValue, testValue;
	   
		typeInInput("30,10,2016 10:25:56 12 PM", $dtEditor.igDateEditor("field"));			   
		$dtEditor.trigger("blur");
	   
		currValue = $dtEditor.igDateEditor("value");
		testValue = new Date(2016, 9, 30, 22, 25, 56, 120);
		equal(currValue.getTime(), testValue.getTime(), 'The initial value is not as expected');
		equal($dtEditor.igDateEditor("displayValue"), "30,10,2016 10:25:56 12 PM", 'The initial value is not as expected');
						
		typeInInput("30,10,2016 13:25:56 12", $dtEditor.igDateEditor("field"));

		$dtEditor.trigger("blur");
		equal(new Date($dtEditor.igDateEditor("value")).getTime(), new Date(2016, 9, 30, 13, 25, 56, 120).getTime(), 'The initial value is not as expected');
		equal($dtEditor.igDateEditor("displayValue"), "30,10,2016 01:25:56 12 PM", 'The initial value is not as expected');
	});

	// The same as the previous, but format of the editor is with 'fff' instead of 'ff'.
	test(testId, 4, function () {
		var $dtEditor = $('#inputEditor8a'), currValue, testValue;

		typeInInput("30,10,2016 10:25:56 12", $dtEditor.igDateEditor("field"));

		$dtEditor.trigger("blur");
		equal(new Date($dtEditor.igDateEditor("value")).getTime(), new Date(2016, 9, 30, 10, 25, 56, 120).getTime(), 'The initial value is not as expected');
		equal($dtEditor.igDateEditor("displayValue"), "30,10,2016 10:25:56 120 AM", 'The initial value is not as expected');

		typeInInput("30,10,2016 10:25:56 112 PM", $dtEditor.igDateEditor("field"));
		$dtEditor.trigger("blur");

		currValue = $dtEditor.igDateEditor("value");
		testValue = new Date(2016, 9, 30, 22, 25, 56, 112);
		equal(currValue.getTime(), testValue.getTime(), 'The initial value is not as expected');
		// Bug #208887
		equal($dtEditor.igDateEditor("displayValue"), "30,10,2016 10:25:56 112 PM", '(Bug #208887) The initial display value is not as expected');
	});

	var testId = 'Test min and maxValues';
	test(testId, 6, function () {
		var $dtEditor = $('#inputEditor9');
		// Initial value is "" and the incorrect value should be returned to ""
		// Test maxValue			    
		$dtEditor.igDateEditor("value", "2021/12/31");
		$dtEditor.trigger("blur");
		equal($dtEditor.igDateEditor("value"), new Date("2020/12/31").toString(), 'The max value is not correctly applied');
		equal($dtEditor.igDateEditor("editorContainer").igNotifier("container").text(), "Entry exceeded the maximum value of 2020/12/31 and was set to the maximum value", 'The maximum value warning not correct');
		//$(".ui-ignotify-warn .ui-igpopover-close-button").click();

		// Set value different from ""			  
		$dtEditor.igDateEditor("value", "2016/12/31");
		$dtEditor.trigger("blur");

		equal(new Date($dtEditor.igDateEditor("value")).getTime(), new Date(2016, 11, 31).getTime(), 'The value is not set');
		equal($dtEditor.igDateEditor("displayValue"), "2016/12/31", 'The display value is not as expected');

		// Test minValue
		//var newDate = 
		$dtEditor.igDateEditor("value", "2015/05/01");
		$dtEditor.trigger("blur");
		equal($dtEditor.igDateEditor("value"), new Date(2015, 6, 1).toString(), 'The value is not set to min');
		equal($dtEditor.igDateEditor("editorContainer").igNotifier("container").text(), "Entry was less than the minimum value of 2015/07/01 and was set to the minimum value", 'The initial value is not as expected');

	});
	
	var testId = 'Test invalid day';
	test(testId, 2, function () {
		var $dtEditor = $('#inputEditor4');
		$dtEditor.igDateEditor("option", "value", "24/04/2015");
		$dtEditor.igDateEditor("setFocus");
		stop();
		setTimeout(function () {
			start();
			$dtEditor.data("igDateEditor")._setCursorPosition(0);
			typeInInput("32/04/2015", $dtEditor.igDateEditor("field"));
			$dtEditor.trigger("blur");
			equal(new Date($dtEditor.igDateEditor("value")).getTime(), new Date(2015, 03, 30).getTime(), 'The initial value is not as expected');
			equal($dtEditor.igDateEditor("displayValue"), "30/04/2015", 'The initial value is not as expected');
		}, 200);
	});

	var testId = 'Test invalid month';
	test(testId, 2, function () {
		var $dtEditor = $('#inputEditor3');
		$dtEditor.igDateEditor("value", "12/29/2015");
		$dtEditor.igDateEditor("setFocus");
		stop();
		setTimeout(function () {
			start();
			$dtEditor.data("igDateEditor")._setCursorPosition(0);
			typeInMaskedInput("15/29/2016", $dtEditor.igDateEditor("field"));
			$dtEditor.trigger("blur");
			equal($dtEditor.igDateEditor("value").getTime(), new Date(2017, 2, 29).getTime(), 'The initial value is not as expected');
			equal($dtEditor.igDateEditor("displayValue"), "3/29/2017 12:00 AM", 'The initial value is not as expected');
		}, 200);
	});

   var testId = 'Test invalid hour';
	test(testId, 2, function () {
		var $dtEditor = $('#inputEditor10');
		$dtEditor.igDateEditor("option", "value", "23:56:59");
		$dtEditor.igDateEditor("setFocus");
		stop();
		setTimeout(function () {
			start();
			$dtEditor.data("igDateEditor")._setCursorPosition(0);
			typeInMaskedInput("26:59:89", $dtEditor.igDateEditor("field"));
			$dtEditor.trigger("blur");
			value = $dtEditor.igDateEditor("value");
			value = new Date(value.getFullYear(), value.getMonth(), value.getDate(), value.getHours(), value.getMinutes(), value.getSeconds());
			expectedValue = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 3, 00, 29);
			// use setDate to add a day, otherwise date won't increase correctly
			expectedValue.setDate(expectedValue.getDate() + 1);
			equal(value.getTime(), expectedValue.getTime(), 'The initial value is not as expected');
			equal($dtEditor.igDateEditor("displayValue"), "03:00:29", 'The initial value is not as expected');
		}, 200);
	});

	var testId = 'Test seconds with one digit';
	test(testId, 2, function () {
		var $dtEditor = $('#inputEditor11'), expectedValue, value;
		$dtEditor.igDateEditor("setFocus");
		stop();
		setTimeout(function () {
			start();
			$dtEditor.data("igDateEditor")._setCursorPosition(0);
			typeInMaskedInput("20:59:9", $dtEditor.igDateEditor("field"));
			$dtEditor.trigger("blur");
			value = $dtEditor.igDateEditor("value");
			value = new Date(value.getFullYear(), value.getMonth(), value.getDate(), value.getHours(), value.getMinutes(), value.getSeconds());
			expectedValue = new Date(value.getFullYear(), value.getMonth(), value.getDate(), 20, 59, 9);
			equal(value.getTime(), expectedValue.getTime(), 'The initial value is not as expected');
			equal($dtEditor.igDateEditor("displayValue"), "20:59:09", 'The initial value is not as expected');
		}, 200);
	});

	var testId = 'Testing date format with two digits year';
	test(testId, 3, function () {

		var $dtEditor = $('#inputEditor12');
		$dtEditor.igDateEditor("setFocus");
		stop();
		setTimeout(function () {
			start();
			$dtEditor.data("igDateEditor")._setCursorPosition(0);
			typeInMaskedInput("29/11/16", $dtEditor.igDateEditor("field"));
			$dtEditor.trigger("blur");
			equal(new Date($dtEditor.igDateEditor("value")).getTime(), new Date(2016, 10, 29).getTime(), 'The initial value is not as expected');
			equal($dtEditor.igDateEditor("displayValue"), "29/11/16", 'The initial value is not as expected');
			ok($dtEditor.igDateEditor("isValid"), "Value is not valid or method isValid is not working");
		}, 200);
	});

	var testId = 'Testing time with spin buttons and cursor position at hours';
	test(testId, 2, function () {
		var $dtEditor = $('#inputEditor13'), today = new Date();
		$dtEditor.igDateEditor("value", new Date(today.getFullYear(), today.getMonth(), today.getDate(), 22, 01, 20));
		$dtEditor.igDateEditor("setFocus");
		stop();
		setTimeout(function () {
			start();
			$dtEditor.data("igDateEditor")._setCursorPosition(0);
			var spinUpButton = $dtEditor.igDateEditor("spinUpButton");
			clickElement(spinUpButton, false, false);
			stop();
			setTimeout(function () {
				start();
				clickElement(spinUpButton, false, false);
				$dtEditor.trigger("blur");
				value = $dtEditor.igDateEditor("value");
				value = new Date(value.getFullYear(), value.getMonth(), value.getDate(), value.getHours(), value.getMinutes(), value.getSeconds());
				expectedValue = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 1, 20);
				expectedValue = new Date(expectedValue.setDate(expectedValue.getDate() + 1));
				equal(value.getTime(), expectedValue.getTime(), 'The initial value is not as expected');
				equal($dtEditor.igDateEditor("displayValue"), "00:01:20", 'The initial value is not as expected');
			}, 300);
		}, 200);
	});

	var testId = 'Testing time with spin buttons and cursor position at minutes';
	test(testId, 2, function () {
		var $dtEditor = $('#inputEditor13'), today = new Date();
		$dtEditor.igDateEditor("value", new Date(today.getFullYear(), today.getMonth(), today.getDate(), 22, 01, 20));
		$dtEditor.igDateEditor("setFocus");
		stop();
		setTimeout(function () {
			start();
			$dtEditor.data("igDateEditor")._setCursorPosition(3);
			var spinUpButton = $dtEditor.igDateEditor("spinUpButton");
			clickElement(spinUpButton, false, false);
			stop();
			setTimeout(function () {
				start();
				clickElement(spinUpButton, false, false);
				$dtEditor.trigger("blur");
				value = $dtEditor.igDateEditor("value");
				value = new Date(value.getFullYear(), value.getMonth(), value.getDate(), value.getHours(), value.getMinutes(), value.getSeconds());
				expectedValue = new Date(value.getFullYear(), value.getMonth(), new Date().getDate(), 22, 3, 20);
				equal(value.getTime(), expectedValue.getTime(), 'The initial value is not as expected');
				equal($dtEditor.igDateEditor("displayValue"), "22:03:20", 'The initial value is not as expected');
			}, 300);
		}, 200);
	});

	var testId = 'Testing time with spin buttons and cursor position at seconds';
	test(testId, 2, function () {
		var $dtEditor = $('#inputEditor13'), today = new Date();
		$dtEditor.igDateEditor("value", new Date(today.getFullYear(), today.getMonth(), today.getDate(), 22, 01, 20));
		$dtEditor.igDateEditor("setFocus");
		stop();
		setTimeout(function () {
			start();
			$dtEditor.data("igDateEditor")._setCursorPosition(6);
			var spinUpButton = $dtEditor.igDateEditor("spinUpButton");
			clickElement(spinUpButton, false, false);
			stop();
			setTimeout(function () {
				start();
				clickElement(spinUpButton, false, false);
				$dtEditor.trigger("blur");
				value = $dtEditor.igDateEditor("value");
				value = new Date(value.getFullYear(), value.getMonth(), value.getDate(), value.getHours(), value.getMinutes(), value.getSeconds());
				expectedValue = new Date(value.getFullYear(), value.getMonth(), new Date().getDate(), 22, 1, 22);
				equal(value.getTime(), expectedValue.getTime(), 'The initial value is not as expected');
				equal($dtEditor.igDateEditor("displayValue"), "22:01:22", 'The initial value is not as expected');
			}, 300);
		}, 200);
	});

	testId = "isValid in edit mode"
	test(testId, 4, function () {
		$("#validInEditModeEditor").igDateEditor("field").focus();
		$("#validInEditModeEditor").data("igDateEditor")._enterEditMode();
		ok(!$("#validInEditModeEditor").igDateEditor("isValid"), "Not all required fields are filled");
		$("#validInEditModeEditor").igDateEditor("field").val("2012/__/__");
		ok($("#validInEditModeEditor").igDateEditor("isValid"), "Not all required fields are filled");
		$("#validInEditModeEditor").igDateEditor("field").val("____/__/__");
		ok(!$("#validInEditModeEditor").igDateEditor("isValid"), "All required fields are filled");
		$("#validInEditModeEditor").igDateEditor("field").val("2012/10/10").blur();
		$("#validInEditModeEditor").data("igDateEditor")._exitEditMode();
		ok($("#validInEditModeEditor").igDateEditor("isValid"), "All required fields are filled");
	});
	
	var testId = 'Testing spin hours to next day in edit mode';
	test(testId, 2, function () {
		var $dtEditor = $('#inputEditor15'), today = new Date();
		$dtEditor.igDateEditor("setFocus");
		stop();
		setTimeout(function () {
			start();
			$dtEditor.data("igDateEditor")._setCursorPosition(12);
			var spinUpButton = $dtEditor.igDateEditor("spinUpButton");
			clickElement(spinUpButton, false, false);
			stop();
			setTimeout(function () {
				start();
				clickElement(spinUpButton, false, false);
				$dtEditor.trigger("blur");
				value = $dtEditor.igDateEditor("value");
				expectedValue = new Date(2015, 11, 31, 1, 58, 58, 999);
				equal(value.getTime(), expectedValue.getTime(), 'The initial value is not as expected');
				equal($dtEditor.igDateEditor("displayValue"), "12/31/2015 1:58 AM", 'The initial value is not as expected');
			}, 200);
		}, 200);
	});

	var testId = 'Testing spin hours to next day in edit mode with big spin delta';
	test(testId, 20, function () {
		
		function testSpinHours(options, hoursPos, spins, textAfterSpinUp, hoursOnly) {
			var $dtEditor = $("<input/>").appendTo("#testBedContainer").igDateEditor(options),
				value = new Date(options.value), //clone
				textAfterSpinDown,
				defer = $.Deferred();
			
			$dtEditor.igDateEditor("setFocus");

			setTimeout(function () {
				start();
				textAfterSpinDown = $dtEditor.igDateEditor("field").val();

				$dtEditor[0].setSelectionRange(hoursPos, hoursPos);
				for (var i = 0; i < spins; i++) {
					$dtEditor.igDateEditor("spinUp");
					value.setHours(value.getHours() + options.spinDelta);
				} 

				equal($dtEditor.igDateEditor("field").val(), textAfterSpinUp, 'Display is not as expected after spin up');
				keyInteraction(13, $dtEditor.igDateEditor("field"));
				if (hoursOnly) {
					equal($dtEditor.igDateEditor("value").getHours(), value.getHours(), 'Hours not as expected after spin up');
				} else {
					equal($dtEditor.igDateEditor("value").getTime(), value.getTime(), 'Value is not as expected after spin up');
				}
				

				$dtEditor[0].setSelectionRange(hoursPos, hoursPos);
				for (var i = 0; i < spins; i++) {
					$dtEditor.igDateEditor("spinDown");
					value.setHours(value.getHours() - options.spinDelta);
				}
				
				equal($dtEditor.igDateEditor("field").val(), textAfterSpinDown, 'Display is not as expected after spin down');
				$dtEditor.trigger("blur");
				if (hoursOnly) {
					equal($dtEditor.igDateEditor("value").getHours(), value.getHours(), 'Hours not as expected after spin up');
				} else {
					equal($dtEditor.igDateEditor("value").getTime(), value.getTime(), 'Value is not as expected after spin up');
				}
				//$dtEditor.remove();
				stop();
				defer.resolve();
			}, 100);
			return defer;
		}

		stop();
		testSpinHours({
					width: 300,
					value: new Date(2015, 11, 30, 23, 58, 58, 999),
					buttonType: "clear,spin",
					selectionOnFocus: "browserDefault",
					dateInputFormat: "dateTime",
					spinDelta: 2
				}, 12, 2, "12/31/2015 03:58 AM")
		// .then(function() {
		// 	return testSpinHours({
		// 		dateInputFormat: "hh:mm tt",
		// 		value: new Date(2016, 1, 1, 1, 0),
		// 		dataMode: "date",
		// 		buttonType: "spin",
		// 		spinDelta: 15
		// 	}, 2, 5, "04:00 PM" /* 01 -> 04 -> 07 -> 10 in jumps of 3 in 12H format */);
		// })
		.then(function() {
			return testSpinHours({
				dateInputFormat: "hh:mm tt",
				value: new Date(2016, 1, 1, 1, 0),
				dataMode: "date",
				buttonType: "spin",
				spinDelta: 10
			}, 2, 2, "09:00 PM" /* 01AM -> 11AM -> 9PM  */);
		})
		.then(function() {
			return testSpinHours({
				dateInputFormat: "dd H:mm",
				value: new Date(2016, 1, 1, 23, 0),
				dataMode: "date",
				buttonType: "spin",
				spinDelta: 5
			}, 4, 3, "02 14:00");
		})
		.then(function() {
			return testSpinHours({
				dateInputFormat: "dd hh:mm tt",
				value: new Date(2016, 1, 1, 23, 0),
				dataMode: "date",
				buttonType: "spin",
				spinDelta: 5
			}, 5, 5, "03 12:00 AM");
		})
		.then(function() {
			return testSpinHours({
				dateInputFormat: "hh:mm",
				value: new Date(2016, 1, 1, 1, 0),
				dataMode: "date",
				buttonType: "spin",
				spinDelta: 15
			}, 2, 5, "04:00" /* 01 -> 04 -> 07-> 10 */, true);
		})				
		.then(start, start);
		
	});

	var testId = 'Testing spin milliseconds display mode with f mask';
	test(testId, 2, function () {
		var $dtEditor = $('#inputEditor16'), today = new Date();
		stop();
		setTimeout(function () {
			start();
			$dtEditor.data("igDateEditor")._setCursorPosition(10);
			var spinUpButton = $dtEditor.igDateEditor("spinUpButton");
			clickElement(spinUpButton, false, false);
			stop();
			setTimeout(function () {
				start();
				clickElement(spinUpButton, false, false);
				value = $dtEditor.igDateEditor("value");
				expectedValue = new Date(2015, 10, 11, 23, 5, 10, 200);
				equal(value.getTime(), expectedValue.getTime(), 'The initial value is not as expected');
				equal($dtEditor.igDateEditor("displayValue"), "23:05:10:2", 'The initial value is not as expected');
			}, 300);
		}, 200);
	});

	var testId = 'Testing spin milliseconds display mode with ff mask';
	test(testId, 2, function () {
		var $dtEditor = $('#inputEditor17'), today = new Date();
		stop();
		setTimeout(function () {
			start();
			$dtEditor.data("igDateEditor")._setCursorPosition(10);
			var spinUpButton = $dtEditor.igDateEditor("spinUpButton");
			clickElement(spinUpButton, false, false);
			stop();
			setTimeout(function () {
				start();
				clickElement(spinUpButton, false, false);
				value = $dtEditor.igDateEditor("value");
				expectedValue = new Date(2015, 10, 11, 23, 5, 10, 20);
				equal(value.getTime(), expectedValue.getTime(), 'The initial value is not as expected');
				equal($dtEditor.igDateEditor("displayValue"), "23:05:10:02", 'The initial value is not as expected');
			}, 300);
		}, 200);
	});

	var testId = 'Testing spin milliseconds display mode with fff mask';
	test(testId, 2, function () {
		var $dtEditor = $('#inputEditor18'), today = new Date();
		stop();
		setTimeout(function () {
			start();
			$dtEditor.data("igDateEditor")._setCursorPosition(10);
			var spinUpButton = $dtEditor.igDateEditor("spinUpButton");
			clickElement(spinUpButton, false, false);
			stop();
			setTimeout(function () {
				start();
				clickElement(spinUpButton, false, false);
				value = $dtEditor.igDateEditor("value");
				expectedValue = new Date(2015, 10, 11, 23, 5, 10, 2);
				equal(value.getTime(), expectedValue.getTime(), 'The initial value is not as expected');
				equal($dtEditor.igDateEditor("displayValue"), "23:05:10:002", 'The initial value is not as expected');
			}, 300);
		}, 200);
	});

	var testId = 'Spin seconds, munites, hours, days, months, years display mode';
	test(testId, 10, function () {
		var $editor, $spinButton, expectedValue;

		// spin seconds:
		$editor = $("<input />")
		.appendTo("#testBedContainer")
		.igDateEditor({
				buttonType: "spin",
				dateInputFormat: "MM HH:mm:ss",
				value: new Date(2015, 10, 11, 23, 5, 10)
			});
		$spinButton = $editor.igDateEditor("spinUpButton");
		clickElement($spinButton, false, false);
		expectedValue = new Date(2015, 10, 11, 23, 5, 11);
		equal($editor.igDateEditor("value").getTime(), expectedValue.getTime(), "Spin seconds did not increment value correctly");
		equal($editor.igDateEditor("displayValue"), "11 23:05:11", "Spin seconds did not increment display correctly");
		$editor.remove();

		// spin minutes:
		$editor = $("<input />")
		.appendTo("#testBedContainer")
		.igDateEditor({
				buttonType: "spin",
				dateInputFormat: "yyyy MM HH:mm",
				value: new Date(2015, 10, 11, 23, 5, 10)
			});
		$spinButton = $editor.igDateEditor("spinUpButton");
		clickElement($spinButton, false, false);
		expectedValue = new Date(2015, 10, 11, 23, 6, 10);
		equal($editor.igDateEditor("value").getTime(), expectedValue.getTime(), "Spin minutes did not increment value correctly");
		equal($editor.igDateEditor("displayValue"), "2015 11 23:06", "Spin minutes did not increment display correctly");
		$editor.remove();

		// spin hours:
		$editor = $("<input />")
		.appendTo("#testBedContainer")
		.igDateEditor({
				buttonType: "spin",
				dateInputFormat: "yyyy MM HH",
				value: new Date(2015, 10, 11, 23, 5, 10)
			});
		$spinButton = $editor.igDateEditor("spinDownButton");
		clickElement($spinButton, false, false);
		expectedValue = new Date(2015, 10, 11, 22, 5, 10);
		equal($editor.igDateEditor("value").getTime(), expectedValue.getTime(), "Spin hours did not decrement value correctly");
		equal($editor.igDateEditor("displayValue"), "2015 11 22", "Spin hours did not decrement display correctly");
		$editor.remove();

		// spin month:
		$editor = $("<input />")
		.appendTo("#testBedContainer")
		.igDateEditor({
				buttonType: "spin",
				dateInputFormat: "yyyy MM",
				value: new Date(2015, 10, 11, 23, 5, 10)
			});
		$spinButton = $editor.igDateEditor("spinDownButton");
		clickElement($spinButton, false, false);
		expectedValue = new Date(2015, 9, 11, 23, 5, 10);
		equal($editor.igDateEditor("value").getTime(), expectedValue.getTime(), "Spin month did not decrement value correctly");
		equal($editor.igDateEditor("displayValue"), "2015 10", "Spin month did not decrement display correctly");
		$editor.remove();

		// spin year:
		$editor = $("<input />")
		.appendTo("#testBedContainer")
		.igDateEditor({
				buttonType: "spin",
				dateInputFormat: "yyyy",
				value: new Date(2015, 10, 11, 23, 5, 10)
			});
		$spinButton = $editor.igDateEditor("spinUpButton");
		clickElement($spinButton, false, false);
		expectedValue = new Date(2016, 10, 11, 23, 5, 10);
		equal($editor.igDateEditor("value").getTime(), expectedValue.getTime(), "Spin year did not increment value correctly");
		equal($editor.igDateEditor("displayValue"), "2016", "Spin year did not increment display correctly");
		$editor.remove();
	});

	var testId = '(Issue #342) Testing spin munites, hours';
	test(testId, 1, function () {
		var $dtEditor = $('#spinHourMinutes');
		$dtEditor.igDateEditor("setFocus");
		$dtEditor.igDateEditor("field").val("00:00");
		//$dtEditor.data("igDateEditor")._setCursorPosition(18);
		var spinDownButton = $dtEditor.igDateEditor("spinDownButton");

		clickElement(spinDownButton, false, false);
		equal($dtEditor.igDateEditor("field").val(), "11:59", 'The initial value is not as expected');
	});

	var testId = '(Bug #209538) Testing spin seconds, munites, hours, days, months, years edit mode';
	test(testId, 16, function () {
		var $dtEditor = $('#inputEditor19'), today = new Date();
		$dtEditor.igDateEditor("setFocus");

		$dtEditor.data("igDateEditor")._setCursorPosition(18);
		var spinUpButton = $dtEditor.igDateEditor("spinUpButton"),
			spinDownButton = $dtEditor.igDateEditor("spinDownButton");

		clickElement(spinUpButton, false, false);
		clickElement(spinUpButton, false, false);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(15);
		clickElement(spinDownButton, false, false);
		clickElement(spinDownButton, false, false);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(12);
		clickElement(spinUpButton, false, false);
		clickElement(spinUpButton, false, false);
		clickElement(spinDownButton, false, false);

		$dtEditor.data("igDateEditor")._setCursorPosition(9);
		clickElement(spinUpButton, false, false);
		clickElement(spinUpButton, false, false);
		clickElement(spinDownButton, false, false);

		$dtEditor.data("igDateEditor")._setCursorPosition(6);
		clickElement(spinUpButton, false, false);
		clickElement(spinUpButton, false, false);
		clickElement(spinUpButton, false, false);
		clickElement(spinDownButton, false, false);
		clickElement(spinDownButton, false, false);

		$dtEditor.data("igDateEditor")._setCursorPosition(0);
		clickElement(spinUpButton, false, false);
		clickElement(spinUpButton, false, false);
		clickElement(spinUpButton, false, false);
		clickElement(spinDownButton, false, false);
		clickElement(spinDownButton, false, false);

		$dtEditor.trigger("blur");
		value = $dtEditor.igDateEditor("value");
		expectedValue = new Date(2016, 11, 13, 0, 4, 11, 0);
		equal(value.getTime(), expectedValue.getTime(), 'The initial value is not as expected');
		equal($dtEditor.igDateEditor("displayValue"), "2016/12/13 00:04:11:000", 'The initial value is not as expected');

		var $dtEditor = $('#inputEditor20');
		$dtEditor.igDateEditor("setFocus");

		$dtEditor.data("igDateEditor")._setCursorPosition(18);
		var spinUpButton = $dtEditor.igDateEditor("spinUpButton"),
			spinDownButton = $dtEditor.igDateEditor("spinDownButton");

		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(15);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(12);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(9);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(6);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(0);
		clickElement(spinUpButton, false, false);

		$dtEditor.trigger("blur");
		value = $dtEditor.igDateEditor("value");
		expectedValue = new Date(2017, 0, 2, 1, 1, 0, 0);
		equal(value.getTime(), expectedValue.getTime(), 'The initial value is not as expected');
		equal($dtEditor.igDateEditor("displayValue"), "2017/01/02 01:01:00:000", 'The initial value is not as expected');

		var $dtEditor = $('#inputEditor21');
		$dtEditor.igDateEditor("setFocus");

		$dtEditor.data("igDateEditor")._setCursorPosition(18);
		var spinUpButton = $dtEditor.igDateEditor("spinUpButton"),
			spinDownButton = $dtEditor.igDateEditor("spinDownButton");

		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(15);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(12);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(9);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(6);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(0);
		clickElement(spinDownButton, false, false);

		$dtEditor.trigger("blur");
		value = $dtEditor.igDateEditor("value");
		expectedValue = new Date(2013, 10, 30, 23, 0, 0, 0);
		equal(value.getTime(), expectedValue.getTime(), 'The initial value is not as expected');
		equal($dtEditor.igDateEditor("displayValue"), "2013/11/30 23:00:00:000", 'The initial value is not as expected');

		var $dtEditor = $('#inputEditor22');
		$dtEditor.igDateEditor("setFocus");

		$dtEditor.data("igDateEditor")._setCursorPosition(18);
		var spinUpButton = $dtEditor.igDateEditor("spinUpButton"),
			spinDownButton = $dtEditor.igDateEditor("spinDownButton");

		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(15);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(12);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(9);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(6);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(0);
		clickElement(spinUpButton, false, false);

		$dtEditor.trigger("blur");
		value = $dtEditor.igDateEditor("value");
		expectedValue = new Date(2016, 11, 30, 23, 59, 59);
		equal(value.getTime(), expectedValue.getTime(), 'The initial value is not as expected');
		equal($dtEditor.igDateEditor("displayValue"), "2016/12/30 23:59:59:000", 'The initial value is not as expected');

		$dtEditor = $('#inputEditor23');
		spinUpButton = $dtEditor.igDateEditor("spinUpButton"),
			spinDownButton = $dtEditor.igDateEditor("spinDownButton");
		$dtEditor.igDateEditor("setFocus");

		$dtEditor.data("igDateEditor")._setCursorPosition(18);

		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(15);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(12);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(9);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(6);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(0);
		clickElement(spinDownButton, false, false);

		$dtEditor.trigger("blur");
		value = $dtEditor.igDateEditor("value");
		expectedValue = new Date(2014, 0, 1, 0, 0, 0, 0);
		equal(value.getTime(), expectedValue.getTime(), 'The initial value is not as expected');
		equal($dtEditor.igDateEditor("displayValue"), "2014/01/01 00:00:00:000", 'The initial value is not as expected');

		var $dtEditor = $('#inputEditor19'), today = new Date();
		$dtEditor.igDateEditor("setFocus");

		$dtEditor.data("igDateEditor")._setCursorPosition(21);
		var spinUpButton = $dtEditor.igDateEditor("spinUpButton"),
			spinDownButton = $dtEditor.igDateEditor("spinDownButton");

		// SpinUp once and SpinDown once
		$dtEditor.igDateEditor("setFocus");
		$dtEditor.data("igDateEditor")._setCursorPosition(21);
		clickElement(spinUpButton, false, false);
		expectedValue = new Date(2016, 11, 13, 0, 4, 11, 1);
		$dtEditor.trigger("blur");
		value = $dtEditor.igDateEditor("value");
		equal(value.getTime(), expectedValue.getTime(), 'The initial value is not as expected');
		equal($dtEditor.igDateEditor("displayValue"), "2016/12/13 00:04:11:001", 'The initial value is not as expected');
		$dtEditor.igDateEditor("setFocus");
		$dtEditor.data("igDateEditor")._setCursorPosition(21);
		clickElement(spinDownButton, false, false);
		expectedValue = new Date(2016, 11, 13, 0, 4, 11, 0);
		$dtEditor.trigger("blur");
		value = $dtEditor.igDateEditor("value");
		equal(value.getTime(), expectedValue.getTime(), 'The initial value is not as expected');
		equal($dtEditor.igDateEditor("displayValue"), "2016/12/13 00:04:11:000", 'The initial value is not as expected');

		// SpinDown and the value should stay the same, cause limitSpinToCurrentField is true
		$dtEditor.igDateEditor("setFocus");
		$dtEditor.igDateEditor("option", "limitSpinToCurrentField", true);
		$dtEditor.data("igDateEditor")._setCursorPosition(21);
		clickElement(spinDownButton, false, false);
		expectedValue = new Date(2016, 11, 13, 0, 4, 11, 0);
		$dtEditor.trigger("blur");
		value = $dtEditor.igDateEditor("value");
		equal(value.getTime(), expectedValue.getTime(), 'The initial value is not as expected');
		equal($dtEditor.igDateEditor("displayValue"), "2016/12/13 00:04:11:000", 'The initial value is not as expected');

	});

	var testId = 'Testing spin and max and min values set as date object';
	test(testId, 66, function () {
		var $dtEditor, newDate, spinUpButton, spinDownButton;

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			maxValue: new Date(2016, 11, 5),
			minValue: new Date(2016, 11, 1),
			buttonType: "spin"
		});
		spinUpButton = $dtEditor.igDateEditor("spinUpButton");
		spinDownButton = $dtEditor.igDateEditor("spinDownButton");

		$dtEditor.igDateEditor("setFocus");
		typeInInput("12/12/2016", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		ok(spinUpButton.prop("disabled"), "The button should be disabled");
		equal(spinUpButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 5).getTime(), "New date is not correct");
		clickElement(spinDownButton, false, false);
		ok(!spinUpButton.prop("disabled"), "The button should be enabled");
		equal(spinUpButton.attr("disabled"), undefined, "The button should be enabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 4).getTime(), "New date is not correct");
		clickElement(spinUpButton, false, false);
		ok(spinUpButton.prop("disabled"), "The button should be disabled");
		equal(spinUpButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 5).getTime(), "New date is not correct");
		
		$dtEditor.igDateEditor("setFocus");
		typeInInput("11/11/2016", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		ok(!spinUpButton.prop("disabled"), "The button should be enabled");
		equal(spinUpButton.attr("disabled"), undefined, "The button should be enabled");
		ok(spinDownButton.prop("disabled"), "The button should be disabled");
		equal(spinDownButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 1).getTime(), "New date is not correct");
		clickElement(spinUpButton, false, false);
		ok(!spinDownButton.prop("disabled"), "The button should be enabled");
		equal(spinDownButton.attr("disabled"), undefined, "The button should be enabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 2).getTime(), "New date is not correct");
		clickElement(spinDownButton, false, false);
		ok(spinDownButton.prop("disabled"), "The button should be disabled");
		equal(spinDownButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 1).getTime(), "New date is not correct");

		$dtEditor.igDateEditor("setFocus");
		typeInInput("12/04/2016", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		clickElement(spinUpButton, false, false);
		ok(spinUpButton.prop("disabled"), "The button should be disabled");
		equal(spinUpButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 5).getTime(), "New date is not correct");

		$dtEditor.igDateEditor("setFocus");
		typeInInput("12/02/2016", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		clickElement(spinDownButton, false, false);
		ok(!spinUpButton.prop("disabled"), "The button should be enabled");
		equal(spinUpButton.attr("disabled"), undefined, "The button should be enabled");
		ok(spinDownButton.prop("disabled"), "The button should be disabled");
		equal(spinDownButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 1).getTime(), "New date is not correct");

		$dtEditor.igDateEditor("value", new Date(2016, 11, 12));
		ok(spinUpButton.prop("disabled"), "The button should be disabled");
		equal(spinUpButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 5).getTime(), "New date is not correct");

		$dtEditor.igDateEditor("value", new Date(2016, 10, 11));
		ok(!spinUpButton.prop("disabled"), "The button should be enabled");
		equal(spinUpButton.attr("disabled"), undefined, "The button should be enabled");
		ok(spinDownButton.prop("disabled"), "The button should be disabled");
		equal(spinDownButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 1).getTime(), "New date is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: new Date(2016, 11, 5),
			maxValue: new Date(2016, 11, 5),
			minValue: new Date(2016, 11, 1),
			buttonType: "spin"
		});
		spinUpButton = $dtEditor.igDateEditor("spinUpButton");
		spinDownButton = $dtEditor.igDateEditor("spinDownButton");
		ok(spinUpButton.prop("disabled"), "The button should be disabled");
		equal(spinUpButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 5).getTime(), "New date is not correct");
		clickElement(spinDownButton, false, false);
		ok(!spinUpButton.prop("disabled"), "The button should be enabled");
		equal(spinUpButton.attr("disabled"), undefined, "The button should be enabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 4).getTime(), "New date is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: new Date(2016, 11, 1),
			maxValue: new Date(2016, 11, 5),
			minValue: new Date(2016, 11, 1),
			buttonType: "spin"
		});
		spinUpButton = $dtEditor.igDateEditor("spinUpButton");
		spinDownButton = $dtEditor.igDateEditor("spinDownButton");
		ok(spinDownButton.prop("disabled"), "The button should be disabled");
		equal(spinDownButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 1).getTime(), "New date is not correct");
		clickElement(spinUpButton, false, false);
		ok(!spinDownButton.prop("disabled"), "The button should be enabled");
		equal(spinDownButton.attr("disabled"), undefined, "The button should be enabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 2).getTime(), "New date is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: new Date(2016, 11, 10),
			maxValue: new Date(2016, 11, 5),
			minValue: new Date(2016, 11, 1),
			buttonType: "spin"
		});
		spinUpButton = $dtEditor.igDateEditor("spinUpButton");
		spinDownButton = $dtEditor.igDateEditor("spinDownButton");
		ok(spinUpButton.prop("disabled"), "The button should be disabled");
		equal(spinUpButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 5).getTime(), "New date is not correct");
		ok($dtEditor.igDateEditor("editorContainer").igNotifier("container").is(":visible"), "Notification not shown");
		ok($dtEditor.igDateEditor("editorContainer").igNotifier("container").text().indexOf("Entry exceeded the maximum value of") > -1, "Notification text not correct");
		clickElement(spinDownButton, false, false);
		ok(!spinUpButton.prop("disabled"), "The button should be enabled");
		equal(spinUpButton.attr("disabled"), undefined, "The button should be enabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 4).getTime(), "New date is not correct");
		stop();
		setTimeout(function() {
			start();
			ok(!$dtEditor.igDateEditor("editorContainer").igNotifier("container").is(":visible"), "Notification not hidden");
			$dtEditor.remove();

			$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
				value: new Date(2016, 10, 30),
				maxValue: new Date(2016, 11, 5),
				minValue: new Date(2016, 11, 1),
				buttonType: "spin"
			});
			spinUpButton = $dtEditor.igDateEditor("spinUpButton");
			spinDownButton = $dtEditor.igDateEditor("spinDownButton");
			ok(spinDownButton.prop("disabled"), "The button should be disabled");
			equal(spinDownButton.attr("disabled"), "disabled", "The button should be disabled");
			equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 1).getTime(), "New date is not correct");
			ok($dtEditor.igDateEditor("editorContainer").igNotifier("container").is(":visible"), "Notification not shown");
			ok($dtEditor.igDateEditor("editorContainer").igNotifier("container").filter(":visible").text().indexOf("Entry was less than the minimum value of") > -1, "Notification text not correct");
			clickElement(spinUpButton, false, false);
			ok(!spinDownButton.prop("disabled"), "The button should be enabled");
			equal(spinDownButton.attr("disabled"), undefined, "The button should be enabled");
			equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 2).getTime(), "New date is not correct");
			stop();
			setTimeout(function() {
				start();
				ok(!$dtEditor.igDateEditor("editorContainer").igNotifier("container").is(":visible"), "Notification not hidden");
				$dtEditor.remove();
			}, 500);
		}, 500);
	});

	var testId = 'Testing spin and max and min values set as string';
	test(testId, 48, function () {
		var $dtEditor, newDate, spinUpButton, spinDownButton;

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "MM/dd/yyyy",
			maxValue: "12/05/2016",
			minValue: "12/01/2016",
			buttonType: "spin"
		});
		spinUpButton = $dtEditor.igDateEditor("spinUpButton");
		spinDownButton = $dtEditor.igDateEditor("spinDownButton");

		$dtEditor.igDateEditor("setFocus");
		typeInInput("12/12/2016", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		ok(spinUpButton.prop("disabled"), "The button should be disabled");
		equal(spinUpButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 5).getTime(), "New date is not correct");
		clickElement(spinDownButton, false, false);
		ok(!spinUpButton.prop("disabled"), "The button should be enabled");
		equal(spinUpButton.attr("disabled"), undefined, "The button should be enabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 4).getTime(), "New date is not correct");
		clickElement(spinUpButton, false, false);
		ok(spinUpButton.prop("disabled"), "The button should be disabled");
		equal(spinUpButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 5).getTime(), "New date is not correct");
		
		$dtEditor.igDateEditor("setFocus");
		typeInInput("11/11/2016", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		ok(!spinUpButton.prop("disabled"), "The button should be enabled");
		equal(spinUpButton.attr("disabled"), undefined, "The button should be enabled");
		ok(spinDownButton.prop("disabled"), "The button should be disabled");
		equal(spinDownButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 1).getTime(), "New date is not correct");
		clickElement(spinUpButton, false, false);
		ok(!spinDownButton.prop("disabled"), "The button should be enabled");
		equal(spinDownButton.attr("disabled"), undefined, "The button should be enabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 2).getTime(), "New date is not correct");
		clickElement(spinDownButton, false, false);
		ok(spinDownButton.prop("disabled"), "The button should be disabled");
		equal(spinDownButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 1).getTime(), "New date is not correct");

		$dtEditor.igDateEditor("setFocus");
		typeInInput("12/04/2016", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		clickElement(spinUpButton, false, false);
		ok(spinUpButton.prop("disabled"), "The button should be disabled");
		equal(spinUpButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 5).getTime(), "New date is not correct");

		$dtEditor.igDateEditor("setFocus");
		typeInInput("12/02/2016", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		clickElement(spinDownButton, false, false);
		ok(!spinUpButton.prop("disabled"), "The button should be enabled");
		equal(spinUpButton.attr("disabled"), undefined, "The button should be enabled");
		ok(spinDownButton.prop("disabled"), "The button should be disabled");
		equal(spinDownButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 1).getTime(), "New date is not correct");

		$dtEditor.igDateEditor("value", "12/12/2016");
		ok(spinUpButton.prop("disabled"), "The button should be disabled");
		equal(spinUpButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 5).getTime(), "New date is not correct");

		$dtEditor.igDateEditor("value", "11/11/2016");
		ok(!spinUpButton.prop("disabled"), "The button should be enabled");
		equal(spinUpButton.attr("disabled"), undefined, "The button should be enabled");
		ok(spinDownButton.prop("disabled"), "The button should be disabled");
		equal(spinDownButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 1).getTime(), "New date is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: "12/05/2016",
			dateInputFormat: "MM/dd/yyyy",
			maxValue: "12/05/2016",
			minValue: "12/01/2016",
			buttonType: "spin"
		});
		spinUpButton = $dtEditor.igDateEditor("spinUpButton");
		spinDownButton = $dtEditor.igDateEditor("spinDownButton");
		ok(spinUpButton.prop("disabled"), "The button should be disabled");
		equal(spinUpButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 5).getTime(), "New date is not correct");
		clickElement(spinDownButton, false, false);
		ok(!spinUpButton.prop("disabled"), "The button should be enabled");
		equal(spinUpButton.attr("disabled"), undefined, "The button should be enabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 4).getTime(), "New date is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: "12/01/2016",
			dateInputFormat: "MM/dd/yyyy",
			maxValue: "12/05/2016",
			minValue: "12/01/2016",
			buttonType: "spin"
		});
		spinUpButton = $dtEditor.igDateEditor("spinUpButton");
		spinDownButton = $dtEditor.igDateEditor("spinDownButton");
		ok(spinDownButton.prop("disabled"), "The button should be disabled");
		equal(spinDownButton.attr("disabled"), "disabled", "The button should be disabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 1).getTime(), "New date is not correct");
		clickElement(spinUpButton, false, false);
		ok(!spinDownButton.prop("disabled"), "The button should be enabled");
		equal(spinDownButton.attr("disabled"), undefined, "The button should be enabled");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 11, 2).getTime(), "New date is not correct");
		$dtEditor.remove();
	});

	var testId = 'Setting options on run time';
	test(testId, 1 , function(){

		throws(function () {
			$("#inputEditor26").igDateEditor("option","dateInputFormat","timeLong");
		},"This option cann't be set on run time, but the error doesn't appear.");
		
	});

	var testId = "Dropdown methods";
	test(testId, 6, function(){
		throws(function(){
			$("#inputEditor29").igDateEditor("dropDownButton");
		}, "The dropDownButton method didn't throws exception.");


		throws(function(){
			$("#inputEditor29").igDateEditor("dropDownContainer");
		}, "The dropDownContainer method didn't throws exception.");

		throws(function(){
			$("#inputEditor29").igDateEditor("dropDownVisible");
		}, "The dropDownVisible method didn't throws exception.");

		
		throws(function(){
			$("#inputEditor29").igDateEditor("findListItemIndex");
		}, "The findListItemIndex method didn't throws exception.");
		
		throws(function(){
			$("#inputEditor29").igDateEditor("getSelectedListItem");
		}, "The getSelectedListItem method didn't throws exception.");

		
		throws(function(){
			$("#inputEditor29").igDateEditor("selectedListIndex");
		}, "The selectedListIndex method didn't throws exception.");
	});

	var testId = 'Testing spin on empty editor';
	test(testId, 3, function () {
		var $dtEditor = $('#inputEditor24'), today = new Date();
		$dtEditor.igDateEditor("setFocus");

		$dtEditor.data("igDateEditor")._setCursorPosition(3);
		var spinUpButton = $dtEditor.igDateEditor("spinUpButton"),
			spinDownButton = $dtEditor.igDateEditor("spinDownButton");

		clickElement(spinUpButton, false, false);
		$dtEditor.trigger("blur");
		value = $dtEditor.igDateEditor("value");
		equal(value.getFullYear(), today.getFullYear(), 'The year is not correct');
		equal(value.getMonth(), today.getMonth(), 'The month is not correct');
		equal(value.getDate(), today.getDate(), 'The date is not correct');
	}); 

	var testId = "Getting value from text";
	test(testId, 3, function(){
		var value, newDate = new Date(2015, 2, 1, 0, 0, 0);
		stop();
		setTimeout(function(){
			start();
			//setting wrong value for the dataMode
			$("#inputEditor28").igDateEditor("option", "dataMode", "data");
			$("#inputEditor28").data("igDateEditor")._valueFromText("03/01/2015");
			$("#inputEditor28").blur();
			$("#inputEditor28").blur();			

			$("#inputEditor28").igDateEditor("option", "dataMode", "date");
			$("#inputEditor28").igDateEditor("setFocus");
			value = $("#inputEditor28").igDateEditor("value");
			equal(value.toString(), newDate.toString(), "The date mode didn't return the proper value formatting.");

			stop();
			setTimeout(function(){
				start();
				$("#inputEditor28").igDateEditor("option", "dataMode", "displayModeText");
				$("#inputEditor28").blur();
				$("#inputEditor28").blur();
				$("#inputEditor28").igDateEditor("setFocus");
				value = $("#inputEditor28").igDateEditor("value");
				equal(value.toString(), "3/1/2015", "The displayModeText mode didn't return the proper value formatting.");

				stop();
				setTimeout(function(){
					start();
					$("#inputEditor28").igDateEditor("option", "dataMode", "editModeText");
					$("#inputEditor28").blur();
					$("#inputEditor28").blur();

					$("#inputEditor28").igDateEditor("setFocus");
					value = $("#inputEditor28").igDateEditor("value");
					equal(value.toString(), "03/01/2015", "The editModeText mode didn't return the proper value formatting.");
				}, 200);
			}, 200);
		}, 200);
	});

	var testId = 'Trigger key down, key up';
	test(testId, 2, function(){
		var currentValue = $("#inputEditor27").igDateEditor("value"), changedValue,
		editorInput = $("#inputEditor27").igDateEditor("field");				
		stop();
		setTimeout(function() {
			start();				
			$("#inputEditor27").igDateEditor("setFocus");
			stop();
			setTimeout(function() {
				start();	
				keyInteraction(38, editorInput);

				$("#inputEditor27").blur();
				changedValue = $("#inputEditor27").igDateEditor("value");
				ok(currentValue.toString() !== changedValue.toString(),"The spinDownButton doen't change the date.");

				 $("#inputEditor27").igDateEditor("setFocus");
				stop();
				setTimeout(function() {
					start();
				 keyInteraction(40, editorInput);
				 $("#inputEditor27").blur();
				changedValue = $("#inputEditor27").igDateEditor("value");
				ok(currentValue.toString() === changedValue.toString(),"The spinDownButton doen't change the date.");
			},200);
			},200);
		}, 100);
	});

	var testId = 'Test backspace/delete while editing';
	test(testId, 17, function(){
		var $editor = $('<input />')
			.appendTo("#testBedContainer")
			.igDateEditor({
				value: new Date(),
				dateInputFormat: "M/d/yyyy tt"
			}),
			$field = $editor.igDateEditor("field");

		$field.focus();				
		stop();
		setTimeout(function() {
			start();
			//backspace delete:
			keyDownChar(8, $field);
			equal($field.val(), "__/__/____ __", "Backspace did not clear the editor input.");
			ok(($field[0].selectionStart === $field[0].selectionEnd)
				&& ($field[0].selectionStart === 0), "Cursor not at start after backspace.");
			
			$field.val("11/12/1112 AM");
			$field[0].setSelectionRange(5,5);
			keyDownChar(8, $field);
			equal($field.val(), "11/1_/1112 AM", "Backspace did not delete character.");
			keyDownChar(8, $field);
			equal($field.val(), "11/__/1112 AM", "Backspace did not delete character.");

			$field.val("11/12/1112 AM");
			$field[0].setSelectionRange(13,13);
			keyDownChar(8, $field);
			equal($field.val(), "11/12/1112 __", "Backspace after AM/PM did not delete the entire time period.");
			ok(($field[0].selectionStart === $field[0].selectionEnd)
				&& ($field[0].selectionStart === 11), "Cursor not positioned before time period after delete.");

			$field.val("11/12/2345 AM");
			$field[0].setSelectionRange(12,12);
			keyDownChar(8, $field);
			equal($field.val(), "11/12/2345 __", "Backspace on AM/PM did not delete the entire time period.");
			ok(($field[0].selectionStart === $field[0].selectionEnd)
				&& ($field[0].selectionStart === 11), "Cursor not positioned before time period after delete.");

			//delete :
			$field.val("10/10/1010 PM");
			$field[0].select();
			keyDownChar(46, $field);
			equal($field.val(), "__/__/____ __", "Delete did not clear the editor input.");
			ok(($field[0].selectionStart === $field[0].selectionEnd)
				&& ($field[0].selectionStart === 13), "Cursor not at end after delete.");

			$field.val("11/12/1112 AM");
			$field[0].setSelectionRange(3,3);
			keyDownChar(46, $field);
			equal($field.val(), "11/_2/1112 AM", "Delete did not delete character.");
			keyDownChar(46, $field);
			equal($field.val(), "11/__/1112 AM", "Delete did not delete character.");
			
			$field.val("11/12/1112 AM");
			$field[0].setSelectionRange(13,13);
			keyDownChar(46, $field);
			equal($field.val(), "11/12/1112 AM", "Delete should not result in action at the end of input.");
			
			$field[0].setSelectionRange(11,11);
			keyDownChar(46, $field);
			equal($field.val(), "11/12/1112 __", "Delete before AM/PM did not delete the entire time period.");
			ok(($field[0].selectionStart === $field[0].selectionEnd)
				&& ($field[0].selectionStart === 13), "Cursor not positioned after time period on delete.");
			
			$field.val("11/12/2345 AM");
			$field[0].setSelectionRange(12,12);
			keyDownChar(46, $field);
			equal($field.val(), "11/12/2345 __", "Delete on AM/PM did not delete the entire time period.");
			ok(($field[0].selectionStart === $field[0].selectionEnd)
				&& ($field[0].selectionStart === 13), "Cursor not positioned before time period after delete.");

			$editor.remove();
		}, 150);
	});

	var testId = 'Replacing displayed value';
	test(testId, 1, function(){
		var currentValue = $("#inputEditor27").igDateEditor("value"), changedValue;
		stop();
		setTimeout(function() {
			start();		
		$("#inputEditor27").igDateEditor("setFocus");
		$("#inputEditor27").igDateEditor("select", 2, 4);
		$("#inputEditor27").igDateEditor("insert", "05");					
			stop();
			setTimeout(function() {
				start();
				$("#inputEditor27").blur();
				changedValue = $("#inputEditor27").igDateEditor("value");
				ok(currentValue.toString() !== changedValue.toString(),"The new value was not inserted.");
			}, 200);
		}, 100);
	});

	// Bug #215134
	var testId = 'Testing empty mask';
	test(testId, 1, function () {
		var editor = $("#inputEditor30"),
			editorInput = editor.igDateEditor("field"),
			currentValue = editor.igDateEditor("value");

		stop();
		setTimeout(function () {
			start();
			editor.igDateEditor("setFocus");
			editor.igDateEditor("select", 3, 4);
			editor.igDateEditor("insert", "2");
			stop();

			setTimeout(function () {
				var field = $("#inputEditor30").igDateEditor("field")
				start();

				editor.igDateEditor("select", 3, 4);
				keyInteraction(38, field);
				newValue = field.val();
				var today = new Date();
				zero = (today.getMonth() + 1 > 9) ? "" : "0";
				checkValue = zero + (today.getMonth() + 1) + "/03/" +
					today.getFullYear();
				equal(newValue, checkValue, "Mask doesn't match");
			}, 300);
		}, 100);
	});

	// Bug #215134
	var testId = 'Testing empty mask';
	test(testId, 1, function () {
		var editor = $("#inputEditor31"),
			editorInput = editor.igDateEditor("field"),
			currentValue = editor.igDateEditor("value"), currentDay;

		stop();
		setTimeout(function () {
			start();
			editor.igDateEditor("setFocus");
			editor.igDateEditor("select", 0, 2);
			editor.igDateEditor("insert", "10");
			stop();

			setTimeout(function () {
				var field = $("#inputEditor31").igDateEditor("field")
				start();

				editor.igDateEditor("select", 0, 2);
				keyInteraction(40, field);
				newValue = field.val();
				var today = new Date();
				currentDay = today.getDate();
				if (currentDay < 10) {
					currentDay = "0" + currentDay;
				}
				checkValue = "09/" +
					currentDay + "/" + today.getFullYear();
				equal(newValue, checkValue, "Mask doesn't match");
			}, 200);
		}, 100);
	});

	// Bug #215523
	var testId = 'Testing canceling of the events.';
	test(testId, 1, function () {
		var editor = $("#inputEditor32"),
			editorInput = editor.igDateEditor("field"),
			currentValue = editor.igDateEditor("value");

		stop();
		setTimeout(function () {
			start();
			editor.igDateEditor("setFocus");
			keyInteraction(40, editorInput);
			newValue = editorInput.val();
			equal(newValue, "__:__", "Event is not canceled.");
		}, 100);
	});

	// Bug #216293
	var testId = 'Testing empty mask and year';
	test(testId, 1, function () {
		var editor = $("#inputEditor33"),
			editorInput = editor.igDateEditor("field"),
			currentValue = editor.igDateEditor("value");

		stop();
		setTimeout(function () {
			start();
			 editor.igDateEditor("setFocus");
			editor.igDateEditor("select", 7, 8);
			editor.igDateEditor("insert", "7");
			stop();

			setTimeout(function () {
				var field = $("#inputEditor33").igDateEditor("field")
				start();

				editor.igDateEditor("select", 7, 8);
				keyInteraction(38, field);
				newValue = field.val();
				var today = new Date();
				zero = (today.getMonth() + 1 > 9) ? "" : "0";
				zeroDay = (today.getDate() > 9) ? "" : "0";
				checkValue = zero + (today.getMonth() + 1) + "/" + zeroDay + today.getDate() +
					"/0008";
				equal(newValue, checkValue, "Mask doesn't match");
			}, 300);
		}, 100);
	});

	// Bug #216293
	var testId = 'Testing empty mask and year';
	test(testId, 1, function () {
		var editor = $("#inputEditor34"),
			editorInput = editor.igDateEditor("field"),
			currentValue = editor.igDateEditor("value");

		stop();
		setTimeout(function () {
			start();
			editor.igDateEditor("setFocus");
			editor.igDateEditor("select", 7, 10);
			editor.igDateEditor("insert", "100");
			stop();

			setTimeout(function () {
				var field = $("#inputEditor34").igDateEditor("field")
				start();

				editor.igDateEditor("select", 7, 8);
				keyInteraction(40, field);
				newValue = field.val();
				var today = new Date();
				zero = (today.getMonth() + 1 > 9) ? "" : "0";
				zeroDay = (today.getDate() > 9) ? "" : "0";
				checkValue = zero + (today.getMonth() + 1) + "/" + zeroDay + today.getDate() +
					"/0099";
				equal(newValue, checkValue, "Mask doesn't match");
			}, 300);
		}, 100);
	});

	// #287: Percent/Currency insert method not working with existing value outside edit mode
	var testId = 'Insert outside edit mode';
	test(testId, 4, function () {
		var editor = $("#insertInput"), checkValue,
			editorInput = editor.igDateEditor("field");

		checkValue = new Date("2/2/2020");
		editor.igDateEditor("insert", "02022020");
		equal(editor.igDateEditor("value").getTime(), checkValue.getTime(), "Value not correct after intial insert");
		equal(editorInput.val(), "2/2/2020", "Insert value not converted to display text");

		checkValue = new Date("05/11/2016");
		editor.igDateEditor("insert", "05/11/2016");
		equal(editor.igDateEditor("value").getTime(), checkValue.getTime(), "Value not correct after second insert");
		equal(editorInput.val(), "5/11/2016", "Insert value not converted to display text");
	});

	testId = 'Clear null value';
	test(testId, 4, function () {
		var $editor1 = $('<input id="clearEditor" />')
			.appendTo("#testBedContainer")
			.igDateEditor({
				allowNullValue: true,
				nullValue : new Date(2009, 7,8),
				value: "2010-10-10",
				buttonType: "clear"
			});

		var field = $editor1.igDateEditor("field"),
			clearButton = $editor1.igDateEditor("clearButton"),
			value = $editor1.igDateEditor("value");

		$editor1.igDateEditor("setFocus");
		stop();
		setTimeout(function () {
			start();
			clearButton.click();
			equal(field.val(), "08/08/2009", 'Text not set to null  value');
			equal($editor1.igDateEditor("value"), value, 'Value changed on clear while editing');
			field.blur();
			equal(field.val(), "8/8/2009", 'Cleared nullValue not set on blur.');
			$editor1.igDateEditor("value", new Date());
			clearButton.click();
			equal($editor1.igDateEditor("value").getTime(), $editor1.igDateEditor("option", "nullValue").getTime(), 'Clear null value not set without focus');
			$("#clearEditor").remove();
		}, 100);
	});

	var testId = 'Pasting/inserting not fully formatted dates';
	test(testId, 18, function () {
		var $dtEditor, checkValue, displayValue;

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateDisplayFormat: "M/d/yyyy h:m:s:fff",
			dateInputFormat: "MM/dd/yyyy hh:mm:ss:fff"
		 });
		$dtEditor.igDateEditor("setFocus");
		$dtEditor.igDateEditor("select", 0, 23);
		$dtEditor.igDateEditor("insert", "1/1/215 1:1:1:1");
		equal($dtEditor.igDateEditor("field").val(), "_1/_1/_215 _1:_1:_1:__1", "Mask is not correctly formatted after paste");
		$dtEditor.trigger("blur");
		equal($dtEditor.igDateEditor("displayValue"), "1/1/215 1:1:1:100", "Mask is not correctly formatted after paste");

		$dtEditor.igDateEditor("setFocus");
		keyInteraction(13, $dtEditor.igDateEditor("field"));
		$dtEditor.igDateEditor("select", 0, 23);
		$dtEditor.igDateEditor("insert", "10/1/2015 1:1:1:111");
		equal($dtEditor.igDateEditor("field").val(), "10/_1/2015 _1:_1:_1:111", "Mask is not correctly formatted after paste");
		$dtEditor.trigger("blur");
		equal($dtEditor.igDateEditor("displayValue"), "10/1/2015 1:1:1:111", "Mask is not correctly formatted after paste");

		$dtEditor.igDateEditor("setFocus");
		keyInteraction(13, $dtEditor.igDateEditor("field"));
		$dtEditor.igDateEditor("select", 0, 23);
		$dtEditor.igDateEditor("insert", "10/10/2015 11:1:1:111");
		equal($dtEditor.igDateEditor("field").val(), "10/10/2015 11:_1:_1:111", "Mask is not correctly formatted after paste");
		$dtEditor.trigger("blur");
		equal($dtEditor.igDateEditor("displayValue"), "10/10/2015 11:1:1:111", "Mask is not correctly formatted after paste");

		$dtEditor.igDateEditor("setFocus");
		$dtEditor.igDateEditor("select", 0, 23);
		$dtEditor.igDateEditor("insert", "1/1/215 1:1:1:1");
		equal($dtEditor.igDateEditor("field").val(), "_1/_1/_215 _1:_1:_1:__1", "Mask is not correctly formatted after paste");
		$dtEditor.trigger("blur");
		equal($dtEditor.igDateEditor("displayValue"), "1/1/215 1:1:1:100", "Mask is not correctly formatted after paste");
		
		$dtEditor.igDateEditor("setFocus");
		$dtEditor.igDateEditor("select", 0, 23);
		$dtEditor.igDateEditor("insert", "12/12/2015 12:12:12:111");
		equal($dtEditor.igDateEditor("field").val(), "12/12/2015 12:12:12:111", "Mask is not correctly formatted after paste");
		$dtEditor.trigger("blur");
		equal($dtEditor.igDateEditor("displayValue"), "12/12/2015 12:12:12:111", "Mask is not correctly formatted after paste");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateDisplayFormat: "M/d/yyyy h:m:s:fff",
			dateInputFormat: "MM/dd/yyyy hh:mm:ss:fff",
			unfilledCharsPrompt: "x"
		 });
		$dtEditor.igDateEditor("setFocus");
		$dtEditor.igDateEditor("select", 0, 23);
		$dtEditor.igDateEditor("insert", "1/1/215 1:1:1:1");
		equal($dtEditor.igDateEditor("field").val(), "x1/x1/x215 x1:x1:x1:xx1", "Mask is not correctly formatted after paste");
		$dtEditor.trigger("blur");
		equal($dtEditor.igDateEditor("displayValue"), "1/1/215 1:1:1:100", "Mask is not correctly formatted after paste");

		$dtEditor.igDateEditor("setFocus");
		keyInteraction(13, $dtEditor.igDateEditor("field"));
		$dtEditor.igDateEditor("select", 0, 23);
		$dtEditor.igDateEditor("insert", "10/1/2015 1:1:1:111");
		equal($dtEditor.igDateEditor("field").val(), "10/x1/2015 x1:x1:x1:111", "Mask is not correctly formatted after paste");
		$dtEditor.trigger("blur");
		equal($dtEditor.igDateEditor("displayValue"), "10/1/2015 1:1:1:111", "Mask is not correctly formatted after paste");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateDisplayFormat: "M/d/yy",
			dateInputFormat: "MM/dd/yy",
			unfilledCharsPrompt: "+" // It's a specical RegExp character
		 });
		$dtEditor.igDateEditor("setFocus");
		$dtEditor.igDateEditor("select", 0, 23);
		$dtEditor.igDateEditor("insert", "1/1/5");
		equal($dtEditor.igDateEditor("field").val(), "+1/+1/+5", "Mask is not correctly formatted after paste");
		$dtEditor.trigger("blur");
		equal($dtEditor.igDateEditor("displayValue"), "1/1/05", "Mask is not correctly formatted after paste");
		
		$dtEditor.igDateEditor("setFocus");
		$dtEditor.igDateEditor("select", 0, 23);
		$dtEditor.igDateEditor("insert", "12/1/65");
		equal($dtEditor.igDateEditor("field").val(), "12/+1/65", "Mask is not correctly formatted after paste");
		$dtEditor.trigger("blur");
		equal($dtEditor.igDateEditor("displayValue"), "12/1/65", "Mask is not correctly formatted after paste");
		$dtEditor.remove();
	});
	testId = "Test nullValue on initialization";
	test(testId, 9, function(){
		var $editor = $("<input id='editor'/>").
		appendTo("#testBedContainer").igDateEditor({ allowNullValue: false});
		//Get null Value
		equal($editor.igDateEditor("value"), "", "The value is not an empty string");
		//Set null Value
		$editor.igDateEditor("value", null);
		equal($editor.igDateEditor("value"), "", "The value is not an empty string");
		//CHange allowNullValue option
		$editor.igDateEditor("option", "allowNullValue", true);
		// Get Null value
		equal($editor.igDateEditor("value"), "", "The value is not an empty string");
		//Set Null value
		$editor.igDateEditor("value", null);
		//Get null value
		equal($editor.igDateEditor("value"), null, "The value is not an empty string");
		$editor.remove();

		// test invalid nullValue
		$editor = $("<input />").appendTo("#testBedContainer")
			.igDateEditor({ 
				buttonType: "clear", 
				nullValue: new Date("abc"),
				allowNullValue: true
			});

		equal($editor.val(), "", "Display did not initialize correctly");
		strictEqual($editor.igDateEditor("value"), "", "Null value should be ignored on init");
		//check clear also ignores the wrong nullValue:
		$editor.igDateEditor("value", new Date());
		$editor.igDateEditor("clearButton").trigger("click");
		strictEqual($editor.igDateEditor("value"), "", "Null value should be ignored on clear");
		$editor.igDateEditor("value", new Date(2017,5,4));
		$editor.igDateEditor("value", null);
		strictEqual($editor.igDateEditor("value"), "", "Null value should be ignored on set");
		//verify empty string is still accepted
		$editor.igDateEditor("value", "");
		strictEqual($editor.igDateEditor("value"), "", "Empty value should be accepted");
		$editor.remove();
	});

	// Handling different date formats
	var testId = 'Testing default date formats';
	test(testId, 20, function () {
		var $dtEditor, checkValue, displayValue;

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "dd/MM/yyyy HH:mm:ss"
		});
		displayValue = "30/10/2009 10:25:56";
		typeInInput(displayValue, $dtEditor.igDateEditor("field"));
		$dtEditor.trigger("blur");
		checkValue = new Date(2009, 09, 30, 10, 25, 56);
		equal($dtEditor.igDateEditor("value").getTime(), checkValue.getTime(), 'The value() method returns wrong value');
		equal($dtEditor.igDateEditor("getSelectedDate").getTime(), checkValue.getTime(), "The internal date object is not correct");
		equal($dtEditor.igDateEditor("displayValue"), displayValue, "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), toLocalISOString(checkValue), "The hidden value sent to server is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "dd/MM/yyyy HH:mm:ss",
			value: "2009-06-15T13:45:30.000Z"
		});
		hoursOffset = new Date("2009-06-15T13:45:30.000Z").getTimezoneOffset()/60;
		checkValue = new Date(2009, 5, 15, 13 - hoursOffset, 45, 30);
		equal($dtEditor.igDateEditor("value").getTime(), checkValue.getTime(), 'The value() method returns wrong value');
		equal($dtEditor.igDateEditor("getSelectedDate").getTime(), checkValue.getTime(), "The internal date object is not correct");
		equal($dtEditor.igDateEditor("displayValue"), "15/06/2009 " + (13 - hoursOffset) + ":45:30", 'The display value is not as expected');
		equal($dtEditor.data("igDateEditor")._valueInput.val(), toLocalISOString(checkValue), "The hidden value sent to server is not correct");
		typeInInput("15/06/2009 18:45:30", $dtEditor.igDateEditor("field"));
		$dtEditor.trigger("blur");
		checkValue = new Date(2009, 5, 15, 18, 45, 30);
		equal($dtEditor.igDateEditor("value").getTime(), checkValue.getTime(), 'The value() method returns wrong value');
		equal($dtEditor.igDateEditor("getSelectedDate").getTime(), checkValue.getTime(), "The internal date object is not correct");
		equal($dtEditor.igDateEditor("displayValue"), "15/06/2009 18:45:30", 'The display value is not as expected');
		equal($dtEditor.data("igDateEditor")._valueInput.val(), toLocalISOString(checkValue), "The hidden value sent to server is not correct");
		$dtEditor.remove();

		
		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "dd/MM/yyyy HH:mm:ss",
			value: new Date("2009-06-15T13:45:30.0000000Z")
		});
		hoursOffset = new Date("2009-06-15T13:45:30.000Z").getTimezoneOffset()/60;
		checkValue = new Date(2009, 5, 15, 13 - hoursOffset, 45, 30);
		equal($dtEditor.igDateEditor("value").getTime(), checkValue.getTime(), 'The value() method returns wrong value');
		equal($dtEditor.igDateEditor("getSelectedDate").getTime(), checkValue.getTime(), "The internal date object is not correct");
		equal($dtEditor.igDateEditor("displayValue"), "15/06/2009 " + (13 - hoursOffset) + ":45:30", 'The display value is not as expected');
		equal($dtEditor.data("igDateEditor")._valueInput.val(), toLocalISOString(checkValue), "The hidden value sent to server is not correct");
		typeInInput("15/06/2009 12:45:30", $dtEditor.igDateEditor("field"));
		$dtEditor.trigger("blur");
		checkValue = new Date(2009, 5, 15, 12, 45, 30);
		equal($dtEditor.igDateEditor("value").getTime(), checkValue.getTime(), 'The value() method returns wrong value');
		equal($dtEditor.igDateEditor("getSelectedDate").getTime(), checkValue.getTime(), "The internal date object is not correct");
		equal($dtEditor.igDateEditor("displayValue"), "15/06/2009 12:45:30", 'The display value is not as expected');
		equal($dtEditor.data("igDateEditor")._valueInput.val(), toLocalISOString(checkValue), "The hidden value sent to server is not correct");
		$dtEditor.remove();
	});

	var testId = 'Testing date formats with offset = 0 - UTC time';
	test(testId, 22, function () {
		var $dtEditor, utcDate;

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			displayTimeOffset: 0,
			dateInputFormat: "dd/MM/yyyy HH:mm:ss",
			allowNullValue: true
		});
		typeInInput("30/10/2009 10:25:56", $dtEditor.igDateEditor("field"));
		$dtEditor.trigger("blur");
		checkValue = new Date(2009, 09, 30, 10, 25, 56);
		offset = checkValue.getTimezoneOffset();
		checkValue.setMinutes(checkValue.getMinutes() - offset);
		equal($dtEditor.igDateEditor("value").getTime(), checkValue.getTime(), 'The value() method returns wrong value');
		equal($dtEditor.igDateEditor("displayValue"), "30/10/2009 10:25:56", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), toLocalISOString(checkValue), "The hidden value sent to server is not correct");
		$dtEditor.igDateEditor("value", null);
		equal($dtEditor.igDateEditor("displayValue"), "", 'The value is not empty string');
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: "2016-10-30T13:25:56.0000000Z",
			dateInputFormat: "dd/MM/yyyy HH:mm:ss",
			displayTimeOffset: 0
		});
		checkValue = new Date(2016, 09, 30, 13, 25, 56);
		offset = checkValue.getTimezoneOffset();
		checkValue.setMinutes(checkValue.getMinutes() - offset);
		equal($dtEditor.igDateEditor("value").getTime(), checkValue.getTime(), 'The value() method returns wrong value');
		equal($dtEditor.igDateEditor("displayValue"), "30/10/2016 13:25:56", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), toLocalISOString(checkValue), "The hidden value sent to server is not correct");
		utcDate = new Date(Date.UTC(2016, 09, 25, 12, 0, 0));
		$dtEditor.igDateEditor("value", utcDate);
		checkValue = new Date(2016, 09, 25, 12, 0, 0);
		equal($dtEditor.igDateEditor("value").getTime(), utcDate.getTime(), 'The value() method returns wrong value');
		equal($dtEditor.igDateEditor("displayValue"), "25/10/2016 12:00:00", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), toLocalISOString(utcDate), "The hidden value sent to server is not correct");
		$dtEditor.igDateEditor("value", new Date(2016, 09, 25, 12, 0, 0));
		offsetHours = new Date(2016, 09, 25, 12, 0, 0).getTimezoneOffset()/60;
		equal($dtEditor.igDateEditor("value").getTime(), checkValue.getTime(), 'The value() method returns wrong value');
		equal($dtEditor.igDateEditor("displayValue"), "25/10/2016 "+ pad(12 + offsetHours) + ":00:00", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), toLocalISOString(checkValue), "The hidden value sent to server is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: new Date("2016-10-30T13:25:56.0000000Z"),
			dateInputFormat: "dd/MM/yyyy HH:mm:ss",
			displayTimeOffset: 0,
			enableUTCDates: true
		});
		checkValue = new Date(2016, 09, 30, 13, 25, 56);
		offset = checkValue.getTimezoneOffset();
		checkValue.setMinutes(checkValue.getMinutes() - offset);
		equal($dtEditor.igDateEditor("value").getTime(), checkValue.getTime(), 'The value() method returns wrong value');
		equal($dtEditor.igDateEditor("displayValue"), "30/10/2016 13:25:56", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), checkValue.toISOString(), "The hidden value sent to server is not correct");
		utcDate = new Date(Date.UTC(2016, 09, 25, 12, 0, 0));
		$dtEditor.igDateEditor("value", utcDate);
		checkValue = new Date(2016, 09, 25, 12, 0, 0);
		equal($dtEditor.igDateEditor("value").getTime(), utcDate.getTime(), 'The value() method returns wrong value');
		equal($dtEditor.igDateEditor("displayValue"), "25/10/2016 12:00:00", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), utcDate.toISOString(), "The hidden value sent to server is not correct");
		$dtEditor.igDateEditor("value", new Date(2016, 09, 25, 12, 0, 0));
		offsetHours = new Date(2016, 09, 25, 12, 0, 0).getTimezoneOffset()/60;
		equal($dtEditor.igDateEditor("value").getTime(), checkValue.getTime(), 'The value() method returns wrong value');
		equal($dtEditor.igDateEditor("displayValue"), "25/10/2016 "+ pad(12 + offsetHours) + ":00:00", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), checkValue.toISOString(), "The hidden value sent to server is not correct");
		$dtEditor.remove();
	});

	var testId = 'Testing date formats with offset defined';
	test(testId, 24, function () {
		var $dtEditor;

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: "2016-10-30T13:25:56.0000000Z",
			dateInputFormat: "dd/MM/yyyy HH:mm:ss",
			displayTimeOffset: 420,
			enableUTCDates: true
		});
		hoursOffset = new Date("2016-10-30T13:25:56.000Z").getTimezoneOffset()/60;
		checkValue = new Date(2016, 09, 30, 20, 25, 56);
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 09, 30, 13 - hoursOffset, 25, 56).getTime(), 'The value() method returns wrong value');
		equal($dtEditor.igDateEditor("displayValue"), "30/10/2016 20:25:56", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "2016-10-30T13:25:56.000Z", "The hidden value sent to server is not correct");
		typeInInput("30/10/2016 22:25:56", $dtEditor.igDateEditor("field"));
		$dtEditor.trigger("blur");
		checkValue = new Date(2016, 09, 30, 22, 25, 56);
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 09, 30, 15 - hoursOffset, 25, 56).getTime(), 'The value() method returns wrong value');
		equal($dtEditor.igDateEditor("displayValue"), "30/10/2016 22:25:56", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "2016-10-30T15:25:56.000Z", "The hidden value sent to server is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: new Date("2016-10-30T13:25:56.0000000Z"),
			dateInputFormat: "dd/MM/yyyy HH:mm:ss",
			displayTimeOffset: 420,
			enableUTCDates: true
		});
		hoursOffset = new Date("2016-10-30T13:25:56.000Z").getTimezoneOffset()/60;
		checkValue = new Date(2016, 09, 30, 20, 25, 56);
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2016, 09, 30, 13 - hoursOffset, 25, 56).getTime(), 'The value() method returns wrong value');
		equal($dtEditor.igDateEditor("displayValue"), "30/10/2016 20:25:56", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "2016-10-30T13:25:56.000Z", "The hidden value sent to server is not correct");
		$dtEditor.remove();

		throws( function () {
			$('<input/>').igDateEditor({
				value: new Date("2016-10-30T13:25:56.0000000Z"),
				dateInputFormat: "dd/MM/yyyy HH:mm:ss",
				displayTimeOffset: 1860,
				enableUTCDates: true
			});
		},
		function (err) {
			return err.message === $.ig.Editor.locale.dateEditorOffsetRange;
		},
		'Wrong offset error not thrown');

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: new Date("2016-03-26T23:59:56.0000000Z"),
			dateInputFormat: "dd/MM/yyyy HH:mm:ss",
			displayTimeOffset: 300,
			enableUTCDates: true
		});
		equal($dtEditor.igDateEditor("displayValue"), "27/03/2016 04:59:56", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "2016-03-26T23:59:56.000Z", "The hidden value sent to server is not correct");
		$dtEditor.igDateEditor("value", "2016-10-29T23:59:56.0000000Z");
		$dtEditor.igDateEditor("option", "displayTimeOffset", 240);
		$dtEditor.trigger("blur"); // force re-parse
		equal($dtEditor.igDateEditor("displayValue"), "30/10/2016 03:59:56", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "2016-10-29T23:59:56.000Z", "The hidden value sent to server is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "yyyy/MM/dd",
			minValue: new Date(2015, 6, 1),
			maxValue: new Date(2020, 11, 31),
			displayTimeOffset: 240
		});
		$dtEditor.igDateEditor("value", new Date(2021, 11, 31));
		$dtEditor.trigger("blur");
		hoursOffset = new Date(2021, 11, 31).getTimezoneOffset()/60;
		equal($dtEditor.igDateEditor("displayValue"), "2020/12/31", 'The max value is not correctly applied');
		equal($dtEditor.igDateEditor("editorContainer").igNotifier("container").filter(":visible").text(), "Entry exceeded the maximum value of 2020/12/31 and was set to the maximum value", 'The maximum value warning not correct');
		$(".ui-ignotify-warn").hide();
		$dtEditor.igDateEditor("value", new Date(2021, 11, 31));
		$dtEditor.trigger("blur");
		equal($dtEditor.igDateEditor("displayValue"), "2020/12/31", 'The display value is not as expected');
		$dtEditor.igDateEditor("value", "2015/05/01");
		$dtEditor.trigger("blur");
		equal($dtEditor.igDateEditor("value").getTime(), new Date(2015, 6, 1).getTime(), 'The value is not set to min');
		equal($dtEditor.igDateEditor("editorContainer").igNotifier("container").filter(":visible").text(), "Entry was less than the minimum value of 2015/07/01 and was set to the minimum value", 'The initial value is not as expected');
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "dd/MM/yyyy HH:mm:ss",
			value : new Date("2009-09-07T21:00:00.000Z"),
			minValue: "2009-09-07T21:00:00.000Z",
			displayTimeOffset: 360,
			enableUTCDates: true
		});
		typeInInput("08/08/2009 03:00:00", $dtEditor.igDateEditor("field"));
		equal($dtEditor.igDateEditor("displayValue"), "08/09/2009 03:00:00", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "2009-09-07T21:00:00.000Z", "The hidden value sent to server is not correct");
		$dtEditor.trigger("blur");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "dd/MM/yyyy HH:mm:ss",
			value: new Date("2016-10-29T22:59:56.0000000Z"),
			displayTimeOffset: 240,
			buttonType: "spin"
		});
		$dtEditor.igDateEditor("setFocus");
		stop();
		setTimeout(function () {
			start();
			$dtEditor.data("igDateEditor")._setCursorPosition(15);
			var spinUpButton = $dtEditor.igDateEditor("spinUpButton");
			clickElement(spinUpButton, false, false);
			stop();
			setTimeout(function () {
				start();
				clickElement(spinUpButton, false, false);
				$dtEditor.trigger("blur");
				equal($dtEditor.igDateEditor("displayValue"), "30/10/2016 03:01:56", 'The initial value is not as expected');
				stop();
				setTimeout(function () {
					start();
					$dtEditor.igDateEditor("option", "displayTimeOffset", 180);
					equal($dtEditor.igDateEditor("displayValue"), "30/10/2016 02:01:56", 'The initial value is not as expected');
					$dtEditor.igDateEditor("setFocus");
					$dtEditor.igDateEditor("option", "displayTimeOffset", 240);
					equal($dtEditor.igDateEditor("displayValue"), "30/10/2016 03:01:56", 'The initial value is not as expected');
					$dtEditor.remove();
				}, 300);
			}, 300);
		}, 300);
	});

	var testId = 'Testing different dataMode formats';
	test(testId, 28, function () {
		var $dtEditor;

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dataMode: "date",
			dateInputFormat: "MM/dd/yyyy", // date
			value: new Date("2016-10-29T22:59:56.0000000Z"),
			displayTimeOffset: 360,
			enableUTCDates: true
		});
		equal($dtEditor.igDateEditor("displayValue"), "10/30/2016", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "2016-10-29T22:59:56.000Z", "The hidden value sent to server is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dataMode: "displayModeText",
			dateInputFormat: "MM/dd/yyyy", // date
			value: new Date("2016-10-29T22:59:56.0000000Z"),
			displayTimeOffset: 360,
			enableUTCDates: true
		});
		equal($dtEditor.igDateEditor("displayValue"), "10/30/2016", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "10/30/2016", "The hidden value sent to server is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dataMode: "date",
			dateInputFormat: "time", // time
			value: new Date("2016-10-29T22:59:56.0000000Z"),
			displayTimeOffset: 360,
			enableUTCDates: true
		});
		equal($dtEditor.igDateEditor("displayValue"), "4:59 AM", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "2016-10-29T22:59:56.000Z", "The hidden value sent to server is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dataMode: "displayModeText",
			dateInputFormat: "time", // time
			value: new Date("2016-10-29T22:59:56.0000000Z"),
			displayTimeOffset: 360,
			enableUTCDates: true
		});
		equal($dtEditor.igDateEditor("displayValue"), "4:59 AM", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "4:59 AM", "The hidden value sent to server is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dataMode: "date",
			dateInputFormat: "timeLong", // timeLong
			value: new Date("2016-10-29T22:59:56.0000000Z"),
			displayTimeOffset: 360,
			enableUTCDates: true
		});
		equal($dtEditor.igDateEditor("displayValue"), "4:59:56 AM", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "2016-10-29T22:59:56.000Z", "The hidden value sent to server is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dataMode: "displayModeText",
			dateInputFormat: "timeLong", // timeLong
			value: new Date("2016-10-29T22:59:56.0000000Z"),
			displayTimeOffset: 360,
			enableUTCDates: true
		});
		equal($dtEditor.igDateEditor("displayValue"), "4:59:56 AM", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "4:59:56 AM", "The hidden value sent to server is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dataMode: "date",
			dateDisplayFormat: "MM/dd/yyyy h:m", // dateTime
			value: new Date("2016-10-29T22:59:56.0000000Z"),
			displayTimeOffset: 360,
			enableUTCDates: true
		});
		equal($dtEditor.igDateEditor("displayValue"), "10/30/2016 4:59", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "2016-10-29T22:59:56.000Z", "The hidden value sent to server is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dataMode: "displayModeText",
			dateDisplayFormat: "MM/dd/yyyy h:m", // dateTime
			value: new Date("2016-10-29T22:59:56.0000000Z"),
			displayTimeOffset: 360,
			enableUTCDates: true
		});
		equal($dtEditor.igDateEditor("displayValue"), "10/30/2016 4:59", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "10/30/2016 4:59", "The hidden value sent to server is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dataMode: "date",
			dateInputFormat: "MM/dd",
			value: new Date("2016-10-29T22:59:56.0000000Z"),
			displayTimeOffset: 360,
			enableUTCDates: true
		});
		equal($dtEditor.igDateEditor("displayValue"), "10/30", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "2016-10-29T22:59:56.000Z", "The hidden value sent to server is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dataMode: "displayModeText",
			dateInputFormat: "MM/dd",
			value: new Date("2016-10-29T22:59:56.0000000Z"),
			displayTimeOffset: 360,
			enableUTCDates: true
		});
		equal($dtEditor.igDateEditor("displayValue"), "10/30", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "10/30", "The hidden value sent to server is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dataMode: "date",
			dateInputFormat: "H",
			value: new Date("2016-10-29T22:59:56.0000000Z"),
			displayTimeOffset: 360,
			enableUTCDates: true
		});
		equal($dtEditor.igDateEditor("displayValue"), "4", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "2016-10-29T22:59:56.000Z", "The hidden value sent to server is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dataMode: "displayModeText",
			dateInputFormat: "H",
			value: new Date("2016-10-29T22:59:56.0000000Z"),
			displayTimeOffset: 360,
			enableUTCDates: true
		});
		equal($dtEditor.igDateEditor("displayValue"), "4", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "4", "The hidden value sent to server is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dataMode: "date",
			dateInputFormat: "yyyy/MM/dd HH:mm:ss:fff",
			value: new Date("2016-10-29T22:59:56.599Z"),
			displayTimeOffset: 360,
			enableUTCDates: true
		});
		equal($dtEditor.igDateEditor("displayValue"), "2016/10/30 04:59:56:599", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "2016-10-29T22:59:56.599Z", "The hidden value sent to server is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dataMode: "displayModeText",
			dateInputFormat: "yyyy/MM/dd HH:mm:ss:fff",
			value: new Date("2016-10-29T22:59:56.599Z"),
			displayTimeOffset: 360,
			enableUTCDates: true
		});
		equal($dtEditor.igDateEditor("displayValue"), "2016/10/30 04:59:56:599", "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "2016/10/30 04:59:56:599", "The hidden value sent to server is not correct");
		$dtEditor.remove();
	});

	var testId = 'Testing date formats with dispaly and edit modes text defined';
	test(testId, 8, function () {
		var $dtEditor, dateString = "10/15/2016", date = new Date(dateString);
		
		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dataMode: "displayModeText",
			dateInputFormat: "dateTime",
			dateDisplayFormat: "date",
			value: dateString
		});
		equal($dtEditor.igDateEditor("value"), dateString, 'The value() method returns wrong value');
		equal($dtEditor.igDateEditor("getSelectedDate").getTime(), date.getTime(), "The internal date object is not correct");
		equal($dtEditor.igDateEditor("displayValue"), dateString, "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), dateString, "The hidden value sent to server is not correct");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dataMode: "editModeText",
			dateInputFormat: "dateTime",
			dateDisplayFormat: "date",
			value: dateString
		});
		equal($dtEditor.igDateEditor("value"), dateString + " 12:00 AM", 'The value() method returns wrong value');
		equal($dtEditor.igDateEditor("getSelectedDate").getTime(), date.getTime(), "The internal date object is not correct");
		equal($dtEditor.igDateEditor("displayValue"), dateString, "The display value is not correct");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), dateString + " 12:00 AM", "The hidden value sent to server is not correct");
		$dtEditor.remove();
	});

	var testId = 'Testing new Date with different dataMode formats';
	test(testId, 57, function () {
		var $dtEditor, newDate;

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "MM/dd/yyyy" // date
		});
		$dtEditor.igDateEditor("setFocus");
		typeInInput("06/15", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal(newDate.getHours() + newDate.getMinutes() + newDate.getSeconds() + newDate.getMilliseconds(), 0, "The new hour is not set to midnight");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "MM/dd/yyyy", // date
			value: new Date("2016-10-29T22:59:56.000Z"),
			enableUTCDates: true
		});
		$dtEditor.igDateEditor("setFocus");
		typeInInput("06/15", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = new Date(Date.UTC(2016,5,20,22,59,56));
		newDate.setDate(15);
		equal($dtEditor.data("igDateEditor")._valueInput.val(), newDate.toISOString(), "The date is not updated");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "time" // time
		});
		typeInInput("06:15", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal(newDate.getFullYear(), new Date().getFullYear(), "The year is not updated");
		equal(newDate.getHours(), 6, "The hours are not updated");
		equal(newDate.getMinutes(), 15, "The minutes are not updated");
		equal(newDate.getSeconds() + newDate.getMilliseconds(), 0, "The seconds and milliseconds are not 0");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "time", // time
			value: new Date("2016-10-29T22:59:56.000Z")
		});
		typeInInput("06:15", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal(newDate.getFullYear(), 2016, "The year is not updated");
		equal(newDate.getHours(), 6, "The hours are not updated");
		equal(newDate.getMinutes(), 15, "The minutes are not updated");
		equal(newDate.getSeconds(), 56, "The seconds are not updated");
		equal(newDate.getMilliseconds(), 0, "The milliseconds are not 0");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "timeLong" // timeLong
		});
		typeInInput("06:15", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal(newDate.getFullYear(), new Date().getFullYear(), "The year is not updated");
		equal(newDate.getHours(), 6, "The hours are not updated");
		equal(newDate.getMinutes(), 15, "The minutes are not updated");
		equal(newDate.getSeconds() + newDate.getMilliseconds(), 0, "The seconds and milliseconds are not 0");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "timeLong", // timeLong
			value: new Date("2016-10-29T22:59:56.000Z")
		});
		typeInInput("06:15", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal(newDate.getFullYear(), 2016, "The year is not updated");
		equal(newDate.getHours(), 6, "The hours are not updated");
		equal(newDate.getMinutes(), 15, "The minutes are not updated");
		equal(newDate.getSeconds(), 56, "The seconds are not updated");
		equal(newDate.getMilliseconds(), 0, "The milliseconds are not 0");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateDisplayFormat: "MM/dd/yyyy h:m" // dateTime
		});
		$dtEditor.igDateEditor("setFocus");
		typeInInput("06/15", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal(newDate.getHours() + newDate.getMinutes() + newDate.getSeconds() + newDate.getMilliseconds(), 0, "The new hour is not set to midnight");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateDisplayFormat: "MM/dd/yyyy h:m", // dateTime
			value: new Date("2016-10-29T22:59:56.000Z"),
			enableUTCDates: true
		});
		$dtEditor.igDateEditor("setFocus");
		typeInInput("06/15", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = new Date(Date.UTC(2016,5,20,22,59,56));
		newDate.setDate(15);
		equal($dtEditor.data("igDateEditor")._valueInput.val(), newDate.toISOString(), "The date is not updated");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "MM/dd"
		});
		$dtEditor.igDateEditor("setFocus");
		typeInInput("06", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal(newDate.getHours() + newDate.getMinutes() + newDate.getSeconds() + newDate.getMilliseconds(), 0, "The new hour is not set to midnight");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "MM/dd",
			value: new Date("2016-10-29T22:59:56.000Z"),
			enableUTCDates: true
		});
		$dtEditor.igDateEditor("setFocus");
		typeInInput("06", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "2016-06-29T22:59:56.000Z", "The date is not updated");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "H"
		});
		typeInInput("07", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal(newDate.getFullYear(), new Date().getFullYear(), "The year is not updated");
		equal(newDate.getHours(), 7, "The hours are not updated");
		equal(newDate.getMinutes() + newDate.getSeconds() + newDate.getMilliseconds(), 0, "The minutes, seconds and milliseconds are not 0");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "H",
			value: new Date("2016-10-29T22:59:56.000Z")
		});
		$dtEditor.igDateEditor("setFocus");
		typeInInput("07", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal(newDate.getHours(), 7, "The hours are not updated");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "hh:mm"
		});
		typeInInput("07", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal(newDate.getFullYear(), new Date().getFullYear(), "The year is not updated");
		equal(newDate.getHours(), 7, "The hours are not updated");
		equal(newDate.getMinutes() + newDate.getSeconds() + newDate.getMilliseconds(), 0, "The minutes, seconds and milliseconds are not 0");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "hh:mm",
			value: new Date("2016-10-29T22:59:56.000Z")
		});
		$dtEditor.igDateEditor("setFocus");
		typeInInput("07", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal(newDate.getHours(), 7, "The hours are not updated");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "yyyy/MM/dd HH:mm:ss:fff"
		});
		$dtEditor.igDateEditor("setFocus");
		typeInInput("2010", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal(newDate.getFullYear(), 2010, "The year is not updated");
		equal(newDate.getHours() + newDate.getMinutes() + newDate.getSeconds() + newDate.getMilliseconds(), 0, "The new hour is not set to midnight");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "yyyy/MM/dd HH:mm:ss:fff",
			value: new Date("2016-10-29T22:59:56.599Z"),
			enableUTCDates: true
		});
		$dtEditor.igDateEditor("setFocus");
		typeInInput("2010", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal($dtEditor.data("igDateEditor")._valueInput.val(), "2010-10-29T22:59:56.599Z", "The date is not updated");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "yyyy/MM/dd HH:mm:ss"
		});
		$dtEditor.igDateEditor("setFocus");
		typeInInput("____/06/__ 06:__:__", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal(newDate.getFullYear(), newDate.getFullYear(), "The year is not updated");
		equal(newDate.getMonth(), 5, "The hours are not updated");
		equal(newDate.getHours(), 6, "The hours are not updated");
		equal(newDate.getMinutes() + newDate.getSeconds() + newDate.getMilliseconds(), 0, "The minutes, seconds and milliseconds are not set to 0");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "yyyy/MM/dd HH:mm:ss",
			value: new Date("2016-10-29T22:59:56.599Z")
		});
		$dtEditor.igDateEditor("setFocus");
		typeInInput("____/06/__ 06:__:__", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal(newDate.getFullYear(), 2016, "The year is not updated");
		equal(newDate.getMonth(), 5, "The hours are not updated");
		equal(newDate.getHours(), 6, "The hours are not updated");
		equal(newDate.getMilliseconds(), 599, "The minutes, seconds and milliseconds are not set to 0");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "yyyy/MM/dd HH:mm"
		});
		$dtEditor.igDateEditor("setFocus");
		typeInInput("2016/__/__ 06:__", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal(newDate.getFullYear(), 2016, "The year is not updated");
		equal(newDate.getHours(), 6, "The hours are not updated");
		equal(newDate.getMinutes() + newDate.getSeconds() + newDate.getMilliseconds(), 0, "The minutes, seconds and milliseconds are not set to 0");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "yyyy/MM/dd HH:mm",
			value: new Date("2016-10-29T22:59:56.599Z")
		});
		$dtEditor.igDateEditor("setFocus");
		typeInInput("2010/__/__ 06:__", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal(newDate.getFullYear(), 2010, "The year is not updated");
		equal(newDate.getHours(), 6, "The hours are not updated");
		equal(newDate.getSeconds(), 56, "The hours are not updated");
		equal(newDate.getMilliseconds(), 599, "The minutes, seconds and milliseconds are not set to 0");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "yyyy/MM/dd HH"
		});
		$dtEditor.igDateEditor("setFocus");
		typeInInput("____/__/__ 06", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal(newDate.getFullYear(), newDate.getFullYear(), "The year is not updated");
		equal(newDate.getHours(), 6, "The hours are not updated");
		equal(newDate.getMinutes() + newDate.getSeconds() + newDate.getMilliseconds(), 0, "The minutes, seconds and milliseconds are not set to 0");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "yyyy/MM/dd HH",
			value: new Date("2016-10-29T22:59:56.599Z")
		});
		$dtEditor.igDateEditor("setFocus");
		typeInInput("____/__/__ 06", $dtEditor.igDateEditor("field"));
		 $dtEditor.trigger("blur");
		newDate = $dtEditor.igDateEditor("value");
		equal(newDate.getFullYear(), 2016, "The year is not updated");
		equal(newDate.getHours(), 6, "The hours are not updated");
		equal(newDate.getSeconds(), 56, "The hours are not updated");
		equal(newDate.getMilliseconds(), 599, "The minutes, seconds and milliseconds are not set to 0");
		$dtEditor.remove();
	});

	var testId = 'Clear button state';
	test(testId, 2, function () {
		var $editor;

		$editor = $('<input/>').appendTo("#testBedContainer").igDateEditor({ buttonType: "clear" });
		ok(!$editor.igDateEditor("clearButton").is(":visible"), "Clear button is not hidden");
		$editor.igDateEditor("value", new Date());
		ok($editor.igDateEditor("clearButton").is(":visible"), "Clear button is not visible");
		$editor.remove();
	});

	var testId = 'Spin delta';
	test(testId, 85, function () {
		var $editor, spinUpButton, spinDownButton, editorInput,
			testDate = new Date("2017-01-10T15:18:56.001Z"),
			eventBuffer = [],
			logger = function (msg) { eventBuffer.push(msg); };

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			spinDelta: 2,
			value: new Date("2017-01-10T15:18:56.001Z"),
			displayTimeOffset: 120,
			buttonType : "spin",
			dateInputFormat: "MM/dd/yyyy HH:mm:ss:fff",
			valueChanged: function(evt, ui) {
				logger("Triggered valueChanged");
			},
			textChanged: function(evt, ui) {
				logger("Triggered textChanged");
			}
		});
		spinUpButton = $dtEditor.igDateEditor("spinUpButton");
		spinDownButton = $dtEditor.igDateEditor("spinDownButton");

		// Spin display mode
		clickElement(spinUpButton, false, false);
		testDate.setDate(testDate.getDate() + 2);
		equal($dtEditor.igDateEditor("value").getTime(), testDate.getTime(), "Editor value is not updated after spin.");
		equal($dtEditor.igDateEditor("displayValue"), "01/12/2017 17:18:56:001");
		equal(eventBuffer.pop(), "Triggered textChanged", "Event should fire"); // This is fired after textChanged
		equal(eventBuffer.pop(), "Triggered valueChanged", "Event should fire"); // This is fired first
		clickElement(spinDownButton, false, false);
		testDate.setDate(testDate.getDate() - 2);
		equal($dtEditor.igDateEditor("value").getTime(), testDate.getTime(), "Editor value is not updated after spin.");
		equal($dtEditor.igDateEditor("displayValue"), "01/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), "Triggered textChanged", "Event should fire"); // This is fired after textChanged
		equal(eventBuffer.pop(), "Triggered valueChanged", "Event should fire"); // This is fired first

		$dtEditor.igDateEditor("spinUp");
		testDate.setDate(testDate.getDate() + 2);
		equal($dtEditor.igDateEditor("value").getTime(), testDate.getTime(), "Editor value is not updated after spin.");
		equal($dtEditor.igDateEditor("displayValue"), "01/12/2017 17:18:56:001");
		equal(eventBuffer.pop(), undefined, "Events should NOT fire"); // The logBuffer should be empty$dtEditor.igDateEditor("spinUp");
		$dtEditor.igDateEditor("spinDown");
		testDate.setDate(testDate.getDate() - 2);
		equal($dtEditor.igDateEditor("value").getTime(), testDate.getTime(), "Editor value is not updated after spin.");
		equal($dtEditor.igDateEditor("displayValue"), "01/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), undefined, "Events should NOT fire"); // The logBuffer should be empty

		$dtEditor.igDateEditor("spinUp", 0);
		equal($dtEditor.igDateEditor("value").getTime(), testDate.getTime(), "Editor value should not be updated after spin with 0.");
		equal($dtEditor.igDateEditor("displayValue"), "01/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), undefined, "Events should NOT fire"); // The logBuffer should be empty$dtEditor.igDateEditor("spinUp");
		$dtEditor.igDateEditor("spinDown", 0);
		equal($dtEditor.igDateEditor("value").getTime(), testDate.getTime(), "Editor value should not be updated after spin with 0.");
		equal($dtEditor.igDateEditor("displayValue"), "01/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), undefined, "Events should NOT fire"); // The logBuffer should be empty

		// Spin edit mode
		editorInput = $dtEditor.igDateEditor("field")
		$dtEditor.igDateEditor("setFocus");

		// User interaction month
		$dtEditor.data("igDateEditor")._setCursorPosition(0);
		clickElement(spinUpButton, false, false);
		equal(editorInput.val(), "03/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), "Triggered textChanged", "Event should fire");
		$dtEditor.data("igDateEditor")._setCursorPosition(0);
		clickElement(spinDownButton, false, false);
		testDate.setMonth(testDate.getMonth() - 2);
		equal(editorInput.val(), "01/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), "Triggered textChanged", "Event should fire");
		// API call month
		$dtEditor.data("igDateEditor")._setCursorPosition(0);
		$dtEditor.igDateEditor("spinUp");
		equal(editorInput.val(), "03/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), undefined, "Event should NOT fire");
		$dtEditor.data("igDateEditor")._setCursorPosition(0);
		$dtEditor.igDateEditor("spinDown");
		equal(editorInput.val(), "01/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), undefined, "Event should NOT fire");

		// User interaction date
		$dtEditor.data("igDateEditor")._setCursorPosition(3);
		clickElement(spinUpButton, false, false);
		equal(editorInput.val(), "01/12/2017 17:18:56:001");
		equal(eventBuffer.pop(), "Triggered textChanged", "Event should fire");
		$dtEditor.data("igDateEditor")._setCursorPosition(3);
		clickElement(spinDownButton, false, false);
		testDate.setMonth(testDate.getMonth() - 2);
		equal(editorInput.val(), "01/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), "Triggered textChanged", "Event should fire");
		// API call date
		$dtEditor.data("igDateEditor")._setCursorPosition(3);
		$dtEditor.igDateEditor("spinUp");
		equal(editorInput.val(), "01/12/2017 17:18:56:001");
		equal(eventBuffer.pop(), undefined, "Event should NOT fire");
		$dtEditor.data("igDateEditor")._setCursorPosition(3);
		$dtEditor.igDateEditor("spinDown");
		equal(editorInput.val(), "01/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), undefined, "Event should NOT fire");

		// User interaction year
		$dtEditor.data("igDateEditor")._setCursorPosition(8);
		clickElement(spinUpButton, false, false);
		equal(editorInput.val(), "01/10/2019 17:18:56:001");
		equal(eventBuffer.pop(), "Triggered textChanged", "Event should fire");
		$dtEditor.data("igDateEditor")._setCursorPosition(8);
		clickElement(spinDownButton, false, false);
		testDate.setMonth(testDate.getMonth() - 2);
		equal(editorInput.val(), "01/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), "Triggered textChanged", "Event should fire");
		// API call year
		$dtEditor.data("igDateEditor")._setCursorPosition(8);
		$dtEditor.igDateEditor("spinUp");
		equal(editorInput.val(), "01/10/2019 17:18:56:001");
		equal(eventBuffer.pop(), undefined, "Event should NOT fire");
		$dtEditor.data("igDateEditor")._setCursorPosition(8);
		$dtEditor.igDateEditor("spinDown");
		equal(editorInput.val(), "01/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), undefined, "Event should NOT fire");

		
		// User interaction hours
		$dtEditor.data("igDateEditor")._setCursorPosition(12);
		clickElement(spinUpButton, false, false);
		equal(editorInput.val(), "01/10/2017 19:18:56:001");
		equal(eventBuffer.pop(), "Triggered textChanged", "Event should fire");
		$dtEditor.data("igDateEditor")._setCursorPosition(12);
		clickElement(spinDownButton, false, false);
		testDate.setMonth(testDate.getMonth() - 2);
		equal(editorInput.val(), "01/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), "Triggered textChanged", "Event should fire");
		// API call hours
		$dtEditor.data("igDateEditor")._setCursorPosition(12);
		$dtEditor.igDateEditor("spinUp");
		equal(editorInput.val(), "01/10/2017 19:18:56:001");
		equal(eventBuffer.pop(), undefined, "Event should NOT fire");
		$dtEditor.data("igDateEditor")._setCursorPosition(12);
		$dtEditor.igDateEditor("spinDown");
		equal(editorInput.val(), "01/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), undefined, "Event should NOT fire");

		// User interaction minutes
		$dtEditor.data("igDateEditor")._setCursorPosition(15);
		clickElement(spinUpButton, false, false);
		equal(editorInput.val(), "01/10/2017 17:20:56:001");
		equal(eventBuffer.pop(), "Triggered textChanged", "Event should fire");
		$dtEditor.data("igDateEditor")._setCursorPosition(15);
		clickElement(spinDownButton, false, false);
		testDate.setMonth(testDate.getMonth() - 2);
		equal(editorInput.val(), "01/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), "Triggered textChanged", "Event should fire");
		// API call minutes
		$dtEditor.data("igDateEditor")._setCursorPosition(15);
		$dtEditor.igDateEditor("spinUp");
		equal(editorInput.val(), "01/10/2017 17:20:56:001");
		equal(eventBuffer.pop(), undefined, "Event should NOT fire");
		$dtEditor.data("igDateEditor")._setCursorPosition(15);
		$dtEditor.igDateEditor("spinDown");
		equal(editorInput.val(), "01/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), undefined, "Event should NOT fire");

		// User interaction seconds
		$dtEditor.data("igDateEditor")._setCursorPosition(18);
		clickElement(spinUpButton, false, false);
		equal(editorInput.val(), "01/10/2017 17:18:58:001");
		equal(eventBuffer.pop(), "Triggered textChanged", "Event should fire");
		$dtEditor.data("igDateEditor")._setCursorPosition(18);
		clickElement(spinDownButton, false, false);
		testDate.setMonth(testDate.getMonth() - 2);
		equal(editorInput.val(), "01/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), "Triggered textChanged", "Event should fire");
		// API call seconds
		$dtEditor.data("igDateEditor")._setCursorPosition(18);
		$dtEditor.igDateEditor("spinUp");
		equal(editorInput.val(), "01/10/2017 17:18:58:001");
		equal(eventBuffer.pop(), undefined, "Event should NOT fire");
		$dtEditor.data("igDateEditor")._setCursorPosition(18);
		$dtEditor.igDateEditor("spinDown");
		equal(editorInput.val(), "01/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), undefined, "Event should NOT fire");

		// User interaction milliseconds
		$dtEditor.data("igDateEditor")._setCursorPosition(21);
		clickElement(spinUpButton, false, false);
		equal(editorInput.val(), "01/10/2017 17:18:56:003");
		equal(eventBuffer.pop(), "Triggered textChanged", "Event should fire");
		$dtEditor.data("igDateEditor")._setCursorPosition(21);
		clickElement(spinDownButton, false, false);
		testDate.setMonth(testDate.getMonth() - 2);
		equal(editorInput.val(), "01/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), "Triggered textChanged", "Event should fire");
		// API call milliseconds
		$dtEditor.data("igDateEditor")._setCursorPosition(21);
		$dtEditor.igDateEditor("spinUp");
		equal(editorInput.val(), "01/10/2017 17:18:56:003");
		equal(eventBuffer.pop(), undefined, "Event should NOT fire");
		$dtEditor.data("igDateEditor")._setCursorPosition(21);
		$dtEditor.igDateEditor("spinDown");
		equal(editorInput.val(), "01/10/2017 17:18:56:001");
		equal(eventBuffer.pop(), undefined, "Event should NOT fire");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			spinDelta: 2,
			buttonType : "spin",
			dateInputFormat: "MM/dd/yyyy"
		});
		spinUpButton = $dtEditor.igDateEditor("spinUpButton");
		spinDownButton = $dtEditor.igDateEditor("spinDownButton");
		today = new Date();
		clickElement(spinUpButton, false, false);
		equal($dtEditor.igDateEditor("value").getFullYear(), today.getFullYear(), "Editor year is not updated after spin.");
		equal($dtEditor.igDateEditor("value").getMonth(), today.getMonth(), "Editor month is not updated after spin.");
		equal($dtEditor.igDateEditor("value").getDate(), today.getDate(), "Editor date is not updated after spin.");
		clickElement(spinUpButton, false, false);
		today.setDate(today.getDate() + 2);
		equal($dtEditor.igDateEditor("value").getFullYear(), today.getFullYear(), "Editor year is not updated after spin.");
		equal($dtEditor.igDateEditor("value").getMonth(), today.getMonth(), "Editor month is not updated after spin.");
		equal($dtEditor.igDateEditor("value").getDate(), today.getDate(), "Editor date is not updated after spin.");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer");
		try {
			$dtEditor.igDateEditor({
				spinDelta: "two",
				buttonType : "spin"
			});
		} catch(e) {
			equal(e.message, $.ig.Editor.locale.spinDeltaIsOfTypeNumberOrObject);
		}
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer");
		try {
			$dtEditor.igDateEditor({
				spinDelta: -5,
				buttonType : "spin"
			});
		} catch(e) {
			equal(e.message, $.ig.Editor.locale.spinDeltaCouldntBeNegative);
		}
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			spinDelta: 5.765,
			buttonType : "spin"
		});
		equal($dtEditor.igDateEditor("option", "spinDelta"), 5, "Spin delta should be converted to 1");
		$dtEditor.remove();
	});

	var testId = 'Spin delta as an object';
	test(testId, 36, function () {
		// Test when spinDelta is an object and has invalid values.
		var errorType = $.ig.Editor.locale.spinDeltaIsOfTypeNumberForPeriod,
			errorRange = $.ig.Editor.locale.spinDeltaShouldBeInRange;
		spinData = [ [ { year: -5 }, errorRange, "year", 10 ], [ { month: "two" }, errorType, "month", 12 ],
					[ { day: 31 }, errorRange, "day", 28 ], [ { hours: "five o'clock" }, errorType, "hours", 12 ],
					[ { minutes: 61 }, errorRange, "minutes", 60 ], [ { seconds: null }, errorType, "seconds", 60 ],
					[ { milliseconds: -100 }, errorRange, "milliseconds", 1000 ]];
		for (index = 0; index < spinData.length; index++) {
			$dtEditor = $('<input/>').appendTo("#testBedContainer");
			try {
				$dtEditor.igDateEditor({
					spinDelta: spinData[index][0],
					buttonType : "spin"
				});
			} catch(e) {
				equal(e.message, $.ig.util.stringFormat(spinData[index][1], spinData[index][2], 0, spinData[index][3]));
			}
			$dtEditor.remove();
		}

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			spinDelta: {
				year: 4,
				month: 3,
				day: 10,
				hours: 12,
				minutes: 15,
				seconds: 10,
				milliseconds: 100
			},
			value: new Date("2017-01-11T01:01:01.001Z"),
			displayTimeOffset: 120,
			buttonType : "spin",
			dateInputFormat: "MM/dd/yyyy HH:mm:ss:fff"
		});

		spinUpButton = $dtEditor.igDateEditor("spinUpButton");
		spinDownButton = $dtEditor.igDateEditor("spinDownButton");

		// Spin display mode
		var oldDate = $dtEditor.igDateEditor("value").getDate();
		clickElement(spinUpButton, false, false);
		var newDate = $dtEditor.igDateEditor("value").getDate();
		equal(oldDate + 10, newDate, "Day is updated with 10");
		clickElement(spinDownButton, false, false);
		newDate = $dtEditor.igDateEditor("value").getDate();
		equal(oldDate, newDate, "Day is updated with 10");
		clickElement(spinDownButton, false, false);
		var newDate = $dtEditor.igDateEditor("value").getDate();
		equal(oldDate - 10, newDate, "Day is updated with 10");
		clickElement(spinUpButton, false, false);
		var newDate = $dtEditor.igDateEditor("value").getDate();
		equal(oldDate, newDate, "Day is updated with 10");

		// Spin up edit mode
		$dtEditor.igDateEditor("setFocus");
		$dtEditor.data("igDateEditor")._setCursorPosition(0);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(3);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(6);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(12);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(15);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(18);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(21);
		clickElement(spinUpButton, false, false);
		$dtEditor.trigger("blur");

		expDate = new Date("2021-04-21T13:16:11.101Z"); //Expected date after spin // Date before spin of every period is new Date("2017-01-11T01:01:01.001Z");
		actDate = $dtEditor.igDateEditor("value"); //Actual date after spin
		ok(actDate.getTime() === expDate.getTime(), "Date is properly updated after spinining each period");

		// Spin down edit mode
		$dtEditor.igDateEditor("setFocus");
		$dtEditor.data("igDateEditor")._setCursorPosition(0);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(3);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(6);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(12);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(15);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(18);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(21);
		clickElement(spinDownButton, false, false);
		$dtEditor.trigger("blur");

		expDate = new Date("2017-01-11T01:01:01.001Z"); //Expected date after spin // Date before spin of every period is new Date("2017-01-11T01:01:01.001Z");
		actDate = $dtEditor.igDateEditor("value"); //Actual date after spin
		ok(actDate.getTime() === expDate.getTime(), "Date is properly updated after spinining each period");

		// Setting runtime spinDelta as object
		throws( function () {
			$dtEditor.igDateEditor("option", "spinDelta", { day: -3 });
		}, 'Wrong spinDelta value is not thrown');
		equal($dtEditor.igDateEditor("option", "spinDelta").day, 10, "Spin delta should be reverted.");
		equal($dtEditor.igDateEditor("option", "spinDelta").month, 3, "Spin delta should be reverted.");
		
		$dtEditor.igDateEditor("option", "spinDelta", { day: 3 });
		// Spin display mode
		var oldDate = $dtEditor.igDateEditor("value").getDate();
		clickElement(spinUpButton, false, false);
		var newDate = $dtEditor.igDateEditor("value").getDate();
		equal(oldDate + 3, newDate, "Day is updated with 3");
		clickElement(spinDownButton, false, false);
		newDate = $dtEditor.igDateEditor("value").getDate();
		equal(oldDate, newDate, "Day is updated with 3");
		clickElement(spinDownButton, false, false);
		var newDate = $dtEditor.igDateEditor("value").getDate();
		equal(oldDate - 3, newDate, "Day is updated with 3");
		clickElement(spinUpButton, false, false);
		var newDate = $dtEditor.igDateEditor("value").getDate();
		equal(oldDate, newDate, "Day is updated with 3");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			spinDelta: {
				minutes: 15
			},
			value: new Date("2017-01-11T01:01:01.001Z"),
			displayTimeOffset: 120,
			buttonType : "spin",
			dateInputFormat: "MM/dd/yyyy HH:mm:ss:fff"
		});
		spinUpButton = $dtEditor.igDateEditor("spinUpButton");
		spinDownButton = $dtEditor.igDateEditor("spinDownButton");
		
		// Spin up edit mode
		$dtEditor.igDateEditor("setFocus");
		$dtEditor.data("igDateEditor")._setCursorPosition(0);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(3);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(6);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(12);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(15);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(18);
		clickElement(spinUpButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(21);
		clickElement(spinUpButton, false, false);
		$dtEditor.trigger("blur");

		expDate = new Date("2018-02-12T02:16:02.002Z"); //Expected date after spin // Date before spin of every period is new Date("2017-01-11T01:01:01.001Z");
		actDate = $dtEditor.igDateEditor("value"); //Actual date after spin
		ok(actDate.getTime() === expDate.getTime(), "Date is properly updated after spinining each period");

		// Spin down edit mode
		$dtEditor.igDateEditor("setFocus");
		$dtEditor.data("igDateEditor")._setCursorPosition(0);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(3);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(6);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(12);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(15);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(18);
		clickElement(spinDownButton, false, false);
		$dtEditor.data("igDateEditor")._setCursorPosition(21);
		clickElement(spinDownButton, false, false);
		$dtEditor.trigger("blur");

		expDate = new Date("2017-01-11T01:01:01.001Z"); //Expected date after spin // Date before spin of every period is new Date("2017-01-11T01:01:01.001Z");
		actDate = $dtEditor.igDateEditor("value"); //Actual date after spin
		ok(actDate.getTime() === expDate.getTime(), "Date is properly updated after spinining each period");
		$dtEditor.remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: new Date(2017, 11, 8),
			dataMode: "date",
			dateInputFormat: "dateTime",
			spinDelta: {
				year: 4,
				month: 3,
				day: 10,
				hours: 12,
				minutes: 15,
				seconds: 10,
				milliseconds: 100
			},
			buttonType: "spin"
		});
		spinUpButton = $dtEditor.igDateEditor("spinUpButton");
		spinDownButton = $dtEditor.igDateEditor("spinDownButton");
		
		// Spin up edit mode with delta 12 hours
		$dtEditor.igDateEditor("setFocus");
		$dtEditor.data("igDateEditor")._setCursorPosition(12);
		clickElement(spinUpButton, false, false);
		equal($dtEditor.igDateEditor("field").val(), "12/08/2017 12:00 PM", "Display is properly updated after spinining");
		clickElement(spinDownButton, false, false);
		equal($dtEditor.igDateEditor("field").val(), "12/08/2017 12:00 AM", "Display is properly updated after spinining");
		$dtEditor.trigger("blur").remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: new Date(2017, 11, 8, 1),
			dataMode: "date",
			dateInputFormat: "dateTime",
			spinDelta: {
				year: 4,
				month: 3,
				day: 10,
				hours: 12,
				minutes: 15,
				seconds: 10,
				milliseconds: 100
			},
			buttonType: "spin"
		});
		spinUpButton = $dtEditor.igDateEditor("spinUpButton");
		spinDownButton = $dtEditor.igDateEditor("spinDownButton");
		
		// Spin up edit mode with delta 12 hours
		$dtEditor.igDateEditor("setFocus");
		$dtEditor.data("igDateEditor")._setCursorPosition(15);
		clickElement(spinDownButton, false, false);
		equal($dtEditor.igDateEditor("field").val(), "12/08/2017 12:45 AM", "Display is properly updated after spinining");
		clickElement(spinDownButton, false, false);
		clickElement(spinDownButton, false, false);
		clickElement(spinDownButton, false, false);
		clickElement(spinDownButton, false, false);
		equal($dtEditor.igDateEditor("field").val(), "12/07/2017 11:45 PM", "Display is properly updated after spinining");
		clickElement(spinDownButton, false, false);
		equal($dtEditor.igDateEditor("field").val(), "12/07/2017 11:30 PM", "Display is properly updated after spinining");
		clickElement(spinUpButton, false, false);
		clickElement(spinUpButton, false, false);
		equal($dtEditor.igDateEditor("field").val(), "12/08/2017 12:00 AM", "Display is properly updated after spinining");
		clickElement(spinUpButton, false, false);
		clickElement(spinUpButton, false, false);
		clickElement(spinUpButton, false, false);
		clickElement(spinUpButton, false, false);
		equal($dtEditor.igDateEditor("field").val(), "12/08/2017 01:00 AM", "Display is properly updated after spinining");
		$dtEditor.data("igDateEditor")._setCursorPosition(12);
		clickElement(spinDownButton, false, false);
		equal($dtEditor.igDateEditor("field").val(), "12/07/2017 01:00 PM", "Display is properly updated after spinining");
		clickElement(spinDownButton, false, false);
		equal($dtEditor.igDateEditor("field").val(), "12/07/2017 01:00 AM", "Display is properly updated after spinining");
		clickElement(spinUpButton, false, false);
		clickElement(spinUpButton, false, false);
		equal($dtEditor.igDateEditor("field").val(), "12/08/2017 01:00 AM", "Display is properly updated after spinining");
		$dtEditor.trigger("blur").remove();

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: new Date(2017, 11, 8, 1),
			dataMode: "date",
			dateInputFormat: "MM/dd/yyyy HH:mm:ss:fff",
			spinDelta: {
				year: 4,
				month: 3,
				day: 10,
				hours: 24,
				minutes: 15,
				seconds: 10,
				milliseconds: 100
			},
			buttonType: "spin"
		});
		spinUpButton = $dtEditor.igDateEditor("spinUpButton");
		spinDownButton = $dtEditor.igDateEditor("spinDownButton");
		
		// Spin up edit mode with delta 24 hours
		$dtEditor.igDateEditor("setFocus");
		$dtEditor.data("igDateEditor")._setCursorPosition(12);
		clickElement(spinDownButton, false, false);
		equal($dtEditor.igDateEditor("field").val(), "12/07/2017 01:00:00:000", "Display is properly updated after spinining");
		clickElement(spinUpButton, false, false);
		equal($dtEditor.igDateEditor("field").val(), "12/08/2017 01:00:00:000", "Display is properly updated after spinining");
		clickElement(spinUpButton, false, false);
		equal($dtEditor.igDateEditor("field").val(), "12/09/2017 01:00:00:000", "Display is properly updated after spinining");
		clickElement(spinDownButton, false, false);
		equal($dtEditor.igDateEditor("field").val(), "12/08/2017 01:00:00:000", "Display is properly updated after spinining");
		$dtEditor.trigger("blur").remove();
	});

	var testId = 'Spin delta as an object in edit mode with different masks';
	test(testId, 28, function () {
		var $dtEditor, testDate, ind, today;

		today = new Date();
		testData = [{
			config: {
				dateInputFormat: "fff",
				spinDelta: { milliseconds: 100 }
			},
			expRes: [{
				display: "101", value: 101
			}, {
				display: "001", value: 1
			}],
			method: "getMilliseconds"
		}, {
			config: {
				dateInputFormat: "ss",
				spinDelta: { seconds: 30 }
			},
			expRes: [{
				display: "31", value: 31
			}, {
				display: "01", value: 1
			}],
			method: "getSeconds"
		}, {
			config: {
				dateInputFormat: "mm",
				spinDelta: { minutes: 15 }
			},
			expRes: [{
				display: "16", value: 16
			}, {
				display: "01", value: 1
			}],
			method: "getMinutes"
		}, {
			config: {
				dateInputFormat: "dd",
				spinDelta: { day: 7 }
			},
			expRes: [{
				display: "18", value: 18
			}, {
				display: "11", value: 11
			}],
			method: "getDate"
		}, {
			config: {
				dateInputFormat: "MM",
				spinDelta: { month: 3 }
			},
			expRes: [{
				display: "04", value: 3
			}, {
				display: "01", value: 0
			}],
			method: "getMonth"
		}, {
			config: {
				dateInputFormat: "yy",
				spinDelta: { year: 4 }
			},
			expRes: [{
				display: "21", value: 2021
			}, {
				display: "17", value: 2017
			}],
			method: "getFullYear"
		}, {
			config: {
				dateInputFormat: "yyyy",
				spinDelta: { year: 4 }
			},
			expRes: [{
				display: "2021", value: 2021
			}, {
				display: "2017", value: 2017
			}],
			method: "getFullYear"
		}];

		for (ind = 0; ind < testData.length; ind++) {
			currConfig = { buttonType: "spin", value: new Date("2017-01-11T01:01:01.001Z") };
			currData = testData[ind];
			$.extend(currConfig, currData.config);
			$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor(currConfig);
			var spinUpButton = $dtEditor.igDateEditor("spinUpButton");
			var spinDownButton = $dtEditor.igDateEditor("spinDownButton");

			// Edit Mode
			$dtEditor.igDateEditor("setFocus");
			$dtEditor.data("igDateEditor")._setCursorPosition(0);
			clickElement(spinUpButton, false, false);
			equal($dtEditor.igDateEditor("field").val(), currData.expRes[0].display, 'The display is not as expected');
			$dtEditor.data("igDateEditor")._setCursorPosition(0);
			clickElement(spinDownButton, false, false);
			equal($dtEditor.igDateEditor("field").val(), currData.expRes[1].display, 'The display is not as expected');
			$dtEditor.trigger("blur")

			// Display Mode
			clickElement(spinUpButton, false, false);
			equal($dtEditor.igDateEditor("value")[currData.method](), parseInt(currData.expRes[0].value), 'The value is not as expected');
			clickElement(spinDownButton, false, false);
			equal($dtEditor.igDateEditor("value")[currData.method](), parseInt(currData.expRes[1].value), 'The value is not as expected');
			$dtEditor.remove();
		}
	});

	var testId = 'Edge case testing';
	test(testId, 21, function () {
		var $dtEditor;

		// Set the same time through the option - date object
		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: new Date("2017-01-10T15:18:56.001Z")
		});
		$dtEditor.igDateEditor("option", "value", new Date("2017-01-10T15:18:56.001Z"));
		equal($dtEditor.igDateEditor("value").getTime(), new Date("2017-01-10T15:18:56.001Z").getTime());
		$dtEditor.remove();

		// Set the same time through the option - string
		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "MM/dd/yyyy",
			value: "01/10/2017",
			dataMode: "displayModeText"
		});
		$dtEditor.igDateEditor("option", "value", "01/10/2017");
		equal($dtEditor.igDateEditor("option", "value"), "01/10/2017");
		$dtEditor.remove();

		// Set invalid date - initialization
		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: "day//month//year"
		});
		equal($dtEditor.igDateEditor("value"), "", "Value should be empty");
		equal($dtEditor.igDateEditor("displayValue"), "", "Display value should be empty");
		$dtEditor.remove();

		// Set invalid date - method
		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor();
		$dtEditor.igDateEditor("value", "month/day/year");
		equal($dtEditor.igDateEditor("displayValue"), "" , "Display value is not correct");
		equal($dtEditor.igDateEditor("value"), "" , "Display value is not correct");
		$dtEditor.remove();

		// Set null in value method, when value is empty
		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor();
		equal($dtEditor.igDateEditor("displayValue"), "" , "Display value is not correct");
		equal($dtEditor.igDateEditor("value"), "" , "Display value is not correct");
		$dtEditor.igDateEditor("value", null);
		equal($dtEditor.igDateEditor("displayValue"), "" , "Display value is not correct");
		equal($dtEditor.igDateEditor("value"), "" , "Display value is not correct");
		$dtEditor.igDateEditor("value", new Date());
		$dtEditor.igDateEditor("value", true);
		$dtEditor.remove();

		// Setting wrong dateMode
		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			revertIfNotValid: false,
			value: "3/1/2015"
		});
		$dtEditor.igDateEditor("option", "dataMode", "data");
		$dtEditor.blur();
		equal($dtEditor.igDateEditor("displayValue"), "" , "Display value is not correct");
		equal($dtEditor.igDateEditor("value"), "" , "Display value is not correct");
		$dtEditor.igDateEditor("value", null);
		equal($dtEditor.igDateEditor("displayValue"), "" , "Display value is not correct");
		equal($dtEditor.igDateEditor("value"), "" , "Display value is not correct");
		$dtEditor.remove();

		// Setting wrong not-allowed null value
		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			allowNullValue: false,
			value: null
		});
		equal($dtEditor.igDateEditor("displayValue"), "" , "Display value is not correct");
		equal($dtEditor.igDateEditor("value"), "" , "Display value is not correct");
		$dtEditor.remove();

		// Using some cool masks for input format
		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: new Date("2017-01-10T15:18:56.001Z"),
			dateInputFormat: "MMMM/dd/yyyy hh:mm:s:f t ddd(dddd)",
			displayTimeOffset: 0
		});
		equal($dtEditor.igDateEditor("displayValue"), "January/10/2017 03:18:56:0 P Tue(Tuesday)" , "Display value is not correct");
		$dtEditor.remove()
		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: new Date("2017-01-10T02:18:56.001Z"),
			dateInputFormat: "MMM/d/yy h:m:ss:ff t ddd(dddd)",
			displayTimeOffset: 0
		});
		equal($dtEditor.igDateEditor("displayValue"), "Jan/10/17 2:18:56:00 A Tue(Tuesday)" , "Display value is not correct");
		$dtEditor.remove();
		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			dateInputFormat: "",
			displayTimeOffset: 0
		});
		equal($dtEditor.igDateEditor("displayValue"), "" , "Display value is not correct");
		$dtEditor.remove();
		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: new Date("2017-10-10T15:18:56.001Z"),
			dateInputFormat: "99/00/99",
			displayTimeOffset: 0
		});
		equal($dtEditor.igDateEditor("displayValue"), "99/00/99" , "Display value is not correct");
		$dtEditor.remove();
		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: new Date("2017-10-10T05:18:56.001Z"),
			dateInputFormat: "M/M/MMM/MMM/d/d/ddd/ddd/yy/yy HH:HH:H:H:m:m:s:s:f:f:ff:ff:fff:fff tt tt MM/MM/dd/dd/yyyy/yyyy hh:hh:mm:mm:ss:ss:ff:ff t t tt tt ddd ddd(dddd dddd)",
			displayTimeOffset: 0
		});
		equal($dtEditor.igDateEditor("displayValue"), "10/10/Oct/Oct/10/10/Tue/Tue/17/17 05:05:5:5:18:18:56:56:0:0:00:00:001:001 AM AM 10/10/10/10/2017/2017 05:05:18:18:56:56:00:00 A A AM AM Tue Tue(Tuesday Tuesday)" , "Display value is not correct");
		$dtEditor.remove();
	});

	var testId = 'Year shift option';
	test(testId, 3, function () {
		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: new Date("2017-01-10T15:18:56.001Z"),
			dateInputFormat: "MM/dd/yyyy",
			yearShift: 33
		});
		equal($dtEditor.igDateEditor("displayValue"), "01/10/2050", "Display value is not correct");
		$dtEditor.igDateEditor("setFocus");
		typeInInput("01/10/2040", $dtEditor.igDateEditor("field"));
		$dtEditor.trigger("blur");
		equal($dtEditor.igDateEditor("displayValue"), "01/10/2040", "Display value is not correct");
		equal($dtEditor.igDateEditor("value").getTime(), new Date("2007-01-10T15:18:56.001Z").getTime(), "Value should be empty");
		$dtEditor.remove();
	});

	var testId = 'Testing milliseconds spin up';
	test(testId, 84, function () {
		var $dtEditor, testDate, ind, delta;

		testData = [{ // limitSpinToCurrentField: false. Testing spin up boundary value and then spin down to previous one.
			config: {
				dateInputFormat: "HH:mm:ss:f",
				value: new Date(2015, 10, 11, 23, 5, 10, 900)
			},
			expRes: [{ display: "23:05:11:0" /*spin up*/ }, { display: "23:05:10:9" /*spin down*/ }]
		}, {
			config: {
				dateInputFormat: "HH:mm:ss:ff",
				value: new Date(2015, 10, 11, 23, 5, 10, 990)
			},
			expRes: [{ display: "23:05:11:00" /*spin up*/ }, { display: "23:05:10:99" /*spin down*/ }]
		}, {
			config: {
				dateInputFormat: "HH:mm:ss:fff",
				value: new Date(2015, 10, 11, 23, 5, 10, 999)
			},
			expRes: [{ display: "23:05:11:000" /*spin up*/ }, { display: "23:05:10:999" /*spin down*/ }]
		}, { // limitSpinToCurrentField: true. Testing spin up boundary value (no action) and then spin down.
			config: {
				dateInputFormat: "HH:mm:ss:f",
				value: new Date(2015, 10, 11, 23, 5, 10, 900),
				limitSpinToCurrentField: true
			},
			expRes: [{ display: "23:05:10:9" /*spin up*/ }, { display: "23:05:10:8" /*spin down*/ }]
		}, {
			config: {
				dateInputFormat: "HH:mm:ss:ff",
				value: new Date(2015, 10, 11, 23, 5, 10, 990),
				limitSpinToCurrentField: true
			},
			expRes: [{ display: "23:05:10:99" /*spin up*/ } , { display: "23:05:10:98" /*spin down*/ }]
		}, {
			config: {
				dateInputFormat: "HH:mm:ss:fff",
				value: new Date(2015, 10, 11, 23, 5, 10, 999),
				limitSpinToCurrentField: true
			},
			expRes: [{ display: "23:05:10:999" /*spin up*/ }, { display: "23:05:10:998" /*spin down*/ }]
		}, { // limitSpinToCurrentField: false. Testing spin down boundary value and then spin up to previous one.
			config: {
				dateInputFormat: "HH:mm:ss:f",
				value: new Date(2015, 10, 11, 23, 5, 11, 0)
			},
			expRes: [{ display: "23:05:10:9" /*spin down*/ }, { display: "23:05:11:0" /*spin up*/ }],
			spinDown: true
		}, {
			config: {
				dateInputFormat: "HH:mm:ss:ff",
				value: new Date(2015, 10, 11, 23, 5, 11, 0)
			},
			expRes: [{ display: "23:05:10:99" /*spin down*/ }, { display: "23:05:11:00" /*spin up*/ }],
			spinDown: true
		}, {
			config: {
				dateInputFormat: "HH:mm:ss:fff",
				value: new Date(2015, 10, 11, 23, 5, 11, 0)
			},
			expRes: [{ display: "23:05:10:999" /*spin down*/ }, { display: "23:05:11:000" /*spin up*/ }],
			spinDown: true
		}, { // limitSpinToCurrentField: true. Testing spin down boundary value (no action) and then spin up.
			config: {
				dateInputFormat: "HH:mm:ss:f",
				value: new Date(2015, 10, 11, 23, 5, 11, 0),
				limitSpinToCurrentField: true
			},
			expRes: [{ display: "23:05:11:0" /*spin down*/ }, { display: "23:05:11:1" /*spin up*/ }],
			spinDown: true
		}, {
			config: {
				dateInputFormat: "HH:mm:ss:ff",
				value: new Date(2015, 10, 11, 23, 5, 11, 0),
				limitSpinToCurrentField: true
			},
			expRes: [{ display: "23:05:11:00" /*spin down*/ }, { display: "23:05:11:01" /*spin up*/ }],
			spinDown: true
		}, {
			config: {
				dateInputFormat: "HH:mm:ss:fff",
				value: new Date(2015, 10, 11, 23, 5, 11, 0),
				limitSpinToCurrentField: true
			},
			expRes: [{ display: "23:05:11:000" /*spin down*/ }, { display: "23:05:11:001" /*spin up*/ }],
			spinDown: true
		}];

		for (ind = 0; ind < testData.length; ind++) {
			currConfig = { buttonType: "spin" };
			currData = testData[ind];
			$.extend(currConfig, currData.config);
			$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor(currConfig);
			switch ($dtEditor.data("igDateEditor")._dateIndices.ffLength) {
				case 1: delta = 100; break;
				case 2: delta = 10; break;
				case 3: delta = 1; break;
			}
			var testDate = new Date($dtEditor.igDateEditor("value").getTime());
			var spinUpButton = $dtEditor.igDateEditor("spinUpButton");
			var spinDownButton = $dtEditor.igDateEditor("spinDownButton");
			
			// Test display mode
			currData.spinDown ? clickElement(spinDownButton, false, false) : clickElement(spinUpButton, false, false);
			if (!currConfig.limitSpinToCurrentField) {
				testDate.setMilliseconds(testDate.getMilliseconds() + (currData.spinDown ? -delta : delta));
			}
			equal($dtEditor.igDateEditor("value").getTime(), testDate.getTime(), 'The value is not as expected');
			equal($dtEditor.igDateEditor("displayValue"), currData.expRes[0].display, 'The display is not as expected');

			currData.spinDown ? clickElement(spinUpButton, false, false) : clickElement(spinDownButton, false, false);
			testDate.setMilliseconds(testDate.getMilliseconds() + (currData.spinDown ? delta : -delta));
			equal($dtEditor.igDateEditor("value").getTime(), testDate.getTime(), 'The value is not as expected');
			equal($dtEditor.igDateEditor("displayValue"), currData.expRes[1].display, 'The display is not as expected');

			if (currConfig.limitSpinToCurrentField) {
				currData.spinDown ? clickElement(spinDownButton, false, false) : clickElement(spinUpButton, false, false);
				testDate.setMilliseconds(testDate.getMilliseconds() + (currData.spinDown ? -delta : delta));
				equal($dtEditor.igDateEditor("value").getTime(), testDate.getTime(), 'The value is not as expected');
				equal($dtEditor.igDateEditor("displayValue"), currData.expRes[0].display, 'The display is not as expected');
			}

			// Test edit mode
			$dtEditor.igDateEditor("setFocus");
			$dtEditor.data("igDateEditor")._setCursorPosition(10);
			currData.spinDown ? clickElement(spinDownButton, false, false) : clickElement(spinUpButton, false, false);
			equal($dtEditor.igDateEditor("field").val(), currData.expRes[0].display, 'The display is not as expected');
			$dtEditor.data("igDateEditor")._setCursorPosition(10);
			currData.spinDown ? clickElement(spinUpButton, false, false) : clickElement(spinDownButton, false, false);
			equal($dtEditor.igDateEditor("field").val(), currData.expRes[1].display, 'The display is not as expected');
			$dtEditor.trigger("blur").remove();
		}
	});

	var testId = 'Testing spin up on empty mask';
	test(testId, 14, function () {
		var $dtEditor, testDate, ind;

		testData = [{
			config: {
				dateInputFormat: "HH:mm:ss:fff"
			},
			expRes: [{
				display: "00:00:00:000"
			}, {
				display: "23:59:59:999"
			}],
			cursorPostion: 10
		}, {
			config: {
				dateInputFormat: "HH:mm:ss:ff"
			},
			expRes: [{
				display: "00:00:00:00"
			}, {
				display: "23:59:59:99"
			}],
			cursorPostion: 10
		}, {
			config: {
				dateInputFormat: "HH:mm:ss:f"
			},
			expRes: [{
				display: "00:00:00:0"
			}, {
				display: "23:59:59:9"
			}],
			cursorPostion: 10
		}, {
			config: {
				dateInputFormat: "HH:mm:ss"
			},
			expRes: [{
				display: "00:00:00"
			}, {
				display: "23:59:59"
			}],
			cursorPostion: 7
		}, {
			config: {
				dateInputFormat: "HH:mm"
			},
			expRes: [{
				display: "00:00"
			}, {
				display: "23:59"
			}],
			cursorPostion: 4
		}, {
			config: {
				dateInputFormat: "HH"
			},
			expRes: [{
				display: "00"
			}, {
				display: "23"
			}],
			cursorPostion: 0
		}, {
			config: {
				dateInputFormat: "tt"
			},
			expRes: [{
				display: "AM"
			}, {
				display: "PM"
			}],
			cursorPostion: 0
		}];

		for (ind = 0; ind < testData.length; ind++) {
			currConfig = { buttonType: "spin" };
			currData = testData[ind];
			$.extend(currConfig, currData.config);
			$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor(currConfig);
			var spinUpButton = $dtEditor.igDateEditor("spinUpButton");
			var spinDownButton = $dtEditor.igDateEditor("spinDownButton");

			$dtEditor.igDateEditor("setFocus");
			$dtEditor.data("igDateEditor")._setCursorPosition(currData.cursorPostion);
			clickElement(spinUpButton, false, false);
			equal($dtEditor.igDateEditor("field").val(), currData.expRes[0].display, 'The display is not as expected');
			$dtEditor.data("igDateEditor")._setCursorPosition(currData.cursorPostion);
			clickElement(spinDownButton, false, false);
			equal($dtEditor.igDateEditor("field").val(), currData.expRes[1].display, 'The display is not as expected');
			$dtEditor.trigger("blur").remove();
		}
	});

	var testId = 'Test typing up - empty mask, initial value';
	test(testId, 28, function () {
		var dtEditor;

		$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({
			value: new Date("2017-01-10T15:18:56.001Z"),
			dateInputFormat: "MM/dd/yyyy HH:mm:ss:fff",
			displayTimeOffset: 0
		});
		equal($dtEditor.igDateEditor("displayValue"), "01/10/2017 15:18:56:001", "Display value is not correct");
		$dtEditor.igDateEditor("setFocus");
		$dtEditor.data("igDateEditor")._setCursorPosition(0);
		typeInMaskedInput("12/09/2006 14:25:44:112", $dtEditor.igDateEditor("field"));
		$dtEditor.trigger("blur");
		equal($dtEditor.igDateEditor("displayValue"), "12/09/2006 14:25:44:112", "Display value is not correct");
		equal($dtEditor.igDateEditor("value").getTime(), new Date("2006-12-09T14:25:44.112Z").getTime(), "Value should be empty");
		$dtEditor.igDateEditor("setFocus");
		$dtEditor.remove();

		testData = [{
			dateInputFormat: "HH",
			inputValues: ["9", "a", "12"],
			expRes: ["09", "09", "12"]
		}, {
			dateInputFormat: "hh",
			inputValues: ["9", "a", "01"],
			expRes: ["09", "09", "01"]
		}, {
			dateInputFormat: "tt",
			inputValues: ["1", "P", "A"],
			expRes: ["AM", "AM", "AM"]
		}, {
			dateInputFormat: "mm",
			inputValues: ["9", "a", "12"],
			expRes: ["09", "09", "12"]
		}, {
			dateInputFormat: "ss",
			inputValues: ["9", "a", "12"],
			expRes: ["09", "09", "12"]
		}, {
			dateInputFormat: "ff",
			inputValues: ["r", "9", "12"],
			expRes: ["", "90", "12"]
		}, {
			dateInputFormat: "MM/dd/yyyy",
			inputValues: ["999"],
			expRes: ["09/09/2009"]
		}, {
			dateInputFormat: "MM/dd/yyyy HH:mm:ss:fff",
			inputValues: ["999999999999"],
			expRes: ["09/09/9999 09:09:09:999"]
		}, {
			dateInputFormat: "dd,MM,yyyy hh:m:ss ff tt",
			inputValues: ["30,10,2016 10:25:56 12 PM", "30,10,2016 10:25:56 10"],
			expRes: ["30,10,2016 10:25:56 12 PM", "30,10,2016 10:25:56 10 PM"]
		}, {
			dateInputFormat: "dd,MM,yyyy hh:mm:ss fff tt",
			inputValues: ["30,10,2016 10:25:56 12", "30,10,2016 10:25:56 112 PM"],
			expRes: ["30,10,2016 10:25:56 120 AM", "30,10,2016 10:25:56 112 PM"]
		}, {
			dateInputFormat: "dd,MM,yyyy hh:mm:ss fff tt",
			inputValues: ["432016 17:17:17 999 S"],
			expRes: ["04,03,2016 05:17:17 999 PM"]
		}];

		for (ind = 0; ind < testData.length; ind++) {
			currData = testData[ind];
			values = currData.inputValues;
			results = currData.expRes;
			$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor({ dateInputFormat: currData.dateInputFormat });

			$dtEditor.igDateEditor("setFocus");
			for (indV = 0; indV < values.length; indV++) {
				$dtEditor.data("igDateEditor")._setCursorPosition(0);
				typeInMaskedInput(values[indV], $dtEditor.igDateEditor("field"));
				$dtEditor.trigger("blur");
				equal($dtEditor.igDateEditor("displayValue"), results[indV], "Display value is not correct");
			}
			$dtEditor.remove();
		}
	});

	var testId = 'Spin boundary values and update date object parts that are missing in the mask';
	test(testId, 16, function () {
		var $dtEditor, testDate, ind, today;

		today = new Date();
		testData = [{
			config: {
				dateInputFormat: "fff"
			},
			expRes: [{
				display: "000"
			}, {
				display: "999"
			}]
		}, {
			config: {
				dateInputFormat: "ss"
			},
			expRes: [{
				display: "00"
			}, {
				display: "59"
			}]
		}, {
			config: {
				dateInputFormat: "mm"
			},
			expRes: [{
				display: "00"
			}, {
				display: "59"
			}]
		}, {
			config: {
				dateInputFormat: "HH"
			},
			expRes: [{
				display: "00"
			}, {
				display: "23"
			}]
		}, {
			config: {
				dateInputFormat: "dd"
			},
			expRes: [{
				display: pad(new Date().getDate())
			}, {
				display: pad(new Date(new Date().setDate(new Date().getDate() - 1)).getDate())
			}]
		}, {
			config: {
				dateInputFormat: "MM"
			},
			expRes: [{
				display: pad(new Date().getMonth() + 1)
			}, {
				display: new Date().getMonth() === 0 ? "12" : pad(new Date().getMonth())
			}]
		}, {
			config: {
				dateInputFormat: "yy"
			},
			expRes: [{
				display: new Date().getFullYear().toString().replace("20", "")
			}, {
				display: (new Date().getFullYear() - 1).toString().replace("20", "")
			}]
		}, {
			config: {
				dateInputFormat: "yyyy"
			},
			expRes: [{
				display: new Date().getFullYear()
			}, {
				display: new Date().getFullYear() - 1
			}]
		}];

		for (ind = 0; ind < testData.length; ind++) {
			currConfig = { buttonType: "spin" };
			currData = testData[ind];
			$.extend(currConfig, currData.config);
			$dtEditor = $('<input/>').appendTo("#testBedContainer").igDateEditor(currConfig);
			var spinUpButton = $dtEditor.igDateEditor("spinUpButton");
			var spinDownButton = $dtEditor.igDateEditor("spinDownButton");

			$dtEditor.igDateEditor("setFocus");
			$dtEditor.data("igDateEditor")._setCursorPosition(currData.cursorPostion);
			clickElement(spinDownButton, false, false);
			equal($dtEditor.igDateEditor("field").val(), currData.expRes[0].display, 'The display is not as expected');
			$dtEditor.data("igDateEditor")._setCursorPosition(currData.cursorPostion);
			clickElement(spinDownButton, false, false);
			equal($dtEditor.igDateEditor("field").val(), currData.expRes[1].display, 'The display is not as expected');
			$dtEditor.trigger("blur").remove();
		}
	});

	var testId = 'Test invalid composition value';
	test(testId, 3, function () {
		var $editor =  $("<input/>").appendTo("#testBedContainer")
			.igDateEditor({
				value: new Date(2015, 04, 01)
			});
		$field = $editor.igDateEditor("field");

		$field.focus();
		$field[0].setSelectionRange(0,5);
		var composition = jQuery.Event("compositionstart");
		$field.trigger(composition);
		var compositionupdate = jQuery.Event("compositionupdate");
		$field.val("あいうえお");
		$field[0].setSelectionRange(5,5);
		$field.trigger(compositionupdate);
		var compositionend = jQuery.Event("compositionend");
		$field.trigger(compositionend);
		stop();
		setTimeout(function () {
			start();
			equal($field.val(), "05/01/2015", "Text should remain on invalid composition value.");
			ok($field[0].selectionStart === 0 && $field[0].selectionEnd === 10, "Entire value should be selected.");
			$field.blur();
			equal($editor.igDateEditor("value") && $editor.igDateEditor("value").getTime(), new Date(2015, 04, 01).getTime(), "value did not stay the same");
			$editor.remove();
		}, 0);
	});

	testId = 'Runtime changes for local and regional options';
	test(testId, 13, function () {
		var $editor = $("<input/>").appendTo("#testBedContainer").igDateEditor({ buttonType: "spin", dateInputFormat: "dateTime", value: new Date(2017, 7, 18, 18, 6) });

		equal($editor.igDateEditor("displayValue"), "8/18/2017 6:06 PM", "Format should be in English");
		equal($editor.igDateEditor("spinUpButton").attr("title"), $.ig.locale.en.Editor.spinUpperTitle, "Title of the button should be in English");
		$editor.igDateEditor("option", "language", "ja");
		equal($editor.igDateEditor("spinUpButton").attr("title"), $.ig.locale.ja.Editor.spinUpperTitle, "Title of the button should be in Japanese");
		$editor.igDateEditor("option", "regional", "ja");
		equal($editor.igDateEditor("displayValue"), "2017/08/18 18:06", "Display Format should be in German");
		$editor.igDateEditor("setFocus");
		equal($editor.igDateEditor("field").val(), "2017/08/18 18:06", "Display Format should be in German");
		$editor.igDateEditor("option", "regional", "en-US");
		equal($editor.igDateEditor("field").val(), "08/18/2017 06:06 PM", "Format should be in English");
		$editor.trigger("blur").remove();

		// Init dateeditor without dateInputFormat or dateDisplayFormat defined
		var $editor = $("<input/>").appendTo("#testBedContainer").igDateEditor({ value: new Date(2017, 7, 18, 18, 6) });
		equal($editor.igDateEditor("displayValue"), "8/18/2017", "Format should be in English");
		$editor.igDateEditor("option", "regional", "ja");
		equal($editor.igDateEditor("displayValue"), "2017/08/18", "Display Format should be in Japanese");
		$editor.igDateEditor("setFocus");
		equal($editor.igDateEditor("field").val(), "2017/08/18", "Input Format should be in Japanese");
		$editor.igDateEditor("option", "regional", "en-US");
		equal($editor.igDateEditor("field").val(), "08/18/2017", "Format should be in English");
		$editor.trigger("blur").remove();

		//regional with display format change in between:
		$editor = $("<input/>").appendTo("#testBedContainer")
			.igDateEditor({
				regional: "en-US",
				dateInputFormat: "dateTime",
				value: new Date(2017, 3, 13, 10, 12, 43)
			});
		$editor.igDateEditor("option", "dateDisplayFormat", "dd MMM yy h:mm:ss tt");
		$editor.igDateEditor("option", "regional", "ja");
		equal($editor.val(), "13 4月 17 10:12:43 午前", "Runtime display format not applied after region change");
		$editor.focus();
		equal($editor.val(), "2017/04/13 10:12", "Edit text not correct");
		$editor.igDateEditor("option", "dateDisplayFormat", "dateLong");
		$editor.igDateEditor("option", "regional", "de");
		$editor.blur();
		equal($editor.val(), "Donnerstag, 13. April 2017", "Runtime time display format not applied");
		$editor.remove();
	});

	var testId = 'Testing spin minutes in 12 hours format';
	test(testId, 4, function () {
		var $dtEditor = $("<input/>").appendTo("#testBedContainer").igDateEditor({
			value: new Date(2017, 11, 8, 12, 45),
			dataMode: "date",
			dateInputFormat: "dateTime",
			buttonType: "spin",
			spinDelta: {
				year: 4,
				month: 3,
				day: 10,
				hours: 12,
				minutes: 15,
				seconds: 10,
				milliseconds: 100
			} 
		});
		$dtEditor.igDateEditor("setFocus");
		$dtEditor.data("igDateEditor")._setCursorPosition(15);

		var spinUpButton = $dtEditor.igDateEditor("spinUpButton");
		var spinDownButton = $dtEditor.igDateEditor("spinDownButton");
		clickElement(spinUpButton, false, false);
		$dtEditor.trigger("blur");
		stop();
		setTimeout(function () {
			start();
			value = $dtEditor.igDateEditor("value");
			expectedValue = new Date(2017, 11, 8, 13);
			equal(value.getTime(), expectedValue.getTime(), 'The initial value is not as expected');
			equal($dtEditor.igDateEditor("displayValue"), "12/8/2017 1:00 PM", 'The initial value is not as expected');
			
			$dtEditor.igDateEditor("setFocus");
			$dtEditor.data("igDateEditor")._setCursorPosition(15);
			clickElement(spinDownButton, false, false);
			$dtEditor.data("igDateEditor")._setCursorPosition(12);
			clickElement(spinUpButton, false, false);
			$dtEditor.trigger("blur");
			expectedValue = new Date(2017, 11, 9, 0, 45);
			value = $dtEditor.igDateEditor("value");
			equal(value.getTime(), expectedValue.getTime(), 'The initial value is not as expected');
			equal($dtEditor.igDateEditor("displayValue"), "12/9/2017 12:45 AM", 'The initial value is not as expected');
			$dtEditor.remove();
		}, 300);
	});
});

// function emulateKeyBoard(key, ctrl, shift, alt, element) {
//     var keyDown = jQuery.Event("keydown"),
//               keyUp = jQuery.Event("keyup");

//     keyDown.ctrlKey = keyUp.ctrlKey = ctrl;
//     keyDown.altKey = keyUp.altKey = alt;
//     keyDown.shiftKey = keyUp.shiftKey = shift;

//     switch (key) {
//         case "up": keyDown.keyCode = keyUp.keyCode = $.ui.keyCode.UP; break;
//         case "left": keyDown.keyCode = keyUp.keyCode = $.ui.keyCode.LEFT; break;
//         case "right": keyDown.keyCode = keyUp.keyCode = $.ui.keyCode.RIGHT; break;
//         case "down": keyDown.keyCode = keyUp.keyCode = $.ui.keyCode.DOWN; break;
//         default: keyDown.keyCode = keyUp.keyCode = key; break;
//     }

//     element.trigger(keyDown);
//     element.trigger(keyUp);
// }
function toLocalISOString(date) {
	var tzo = -date.getTimezoneOffset(),
		dif = tzo >= 0 ? "+" : "-",
		pad = function(num) {
			var norm = Math.abs(Math.floor(num));
			return (norm < 10 ? "0" : "") + norm;
		};
	return date.getFullYear() +
		"-" + pad(date.getMonth() + 1) +
		"-" + pad(date.getDate()) +
		"T" + pad(date.getHours()) +
		":" + pad(date.getMinutes()) +
		":" + pad(date.getSeconds()) +
		dif + pad(tzo / 60) +
		":" + pad(tzo % 60);
}
function pad(n) {
	return (n < 10) ? ("0" + n) : n.toString();
}

function keyInteraction(key, target, special) {
	keyDownChar(key, target, special);
	keyPressChar(key, target, special);
	keyUpChar(key, target, special);
}
function keyDownChar(key, target, special) {
	var evt = $.Event("keydown");
	evt.keyCode = key;
	evt.charCode = key;
	if (special) {
		evt[special] = true;
	}
	target.trigger(evt);
}
function keyPressChar(key, target, special) {
	var evt = $.Event("keypress");
	evt.keyCode = key;
	evt.charCode = key;
	if (special) {
		evt[special] = true;
	}
	target.trigger(evt);
}
function keyUpChar(key, target, special) {
	var evt = $.Event("keyup");
	evt.keyCode = key;
	evt.charCode = key;
	if (special) {
		evt[special] = true;
	}
	target.trigger(evt);
}
function typeInInput(characters, element) {
	var keyDown = jQuery.Event("keydown"),
	   keyPress = jQuery.Event("keypress"),
	   keyUp = jQuery.Event("keyup"),
	   value = "";

	characters.split('').forEach(function (ch) {
		keyDown.keyCode = keyUp.keyCode = keyPress.keyCode = ch.charCodeAt(0);
		keyDown.charCode = keyUp.charCode = keyPress.charCode = ch.charCodeAt(0);
		element.trigger(keyDown);
		element.trigger(keyPress);
		value = value + ch;
		element.val(value);
		element.trigger(keyUp);
	});
}
function typeInMaskedInput(characters, element) {
	var keyDown = jQuery.Event("keydown"),
		   keyPress = jQuery.Event("keypress"),
		   keyUp = jQuery.Event("keyup"),
		value = element.val(), selectionStart = 0;

	characters.split('').forEach(function (ch) {
		keyDown.keyCode = keyUp.keyCode = keyPress.keyCode = ch.charCodeAt(0);
		keyDown.charCode = keyUp.charCode = keyPress.charCode = ch.charCodeAt(0);
		element.trigger(keyDown);
		element.trigger(keyPress);
		// refresh selection EACH time, mask editor moves over literals:
		selectionStart = element[0].selectionStart;
		value = value.replaceAt(selectionStart++, ch);
		element.val(value);
		element[0].selectionStart = selectionStart;
		element.trigger(keyUp);
	});
}


String.prototype.replaceAt = function (index, character) {
	return this.substr(0, index) + character + this.substr(index + character.length);
}
function clickElement(element, ctrl, shift) {
	var mouseDown = jQuery.Event("mousedown"), mouseUp = jQuery.Event("mouseup");
	ctrl = (typeof ctrl === 'undefined') ? false : ctrl;
	shift = (typeof shift === 'undefined') ? false : shift;
	mousedown(element[0], ctrl, shift);
	mouseup(element[0], ctrl, shift);
}
function mouseup(element, ctrl, shift) {
	// create a mouse click event
	var event = document.createEvent('MouseEvents');
	event.initMouseEvent('mouseup', true, true, window, 1, 0, 0, null, null, ctrl, false, shift, false, 0, null);
	// send click to element
	element.dispatchEvent(event);
}
function mousedown(element, ctrl, shift) {
	// create a mouse click event
	var event = document.createEvent('MouseEvents');
	event.initMouseEvent('mousedown', true, true, window, 1, 0, 0, null, null, ctrl, false, shift, false, 0, null);
	// send click to element
	element.dispatchEvent(event);
}
function keyPressChar(key, target, special) {
	var evt = $.Event("keypress");
	evt.keyCode = key;
	evt.charCode = key;
	if (special) {
		evt[special] = true;
	}
	target.trigger(evt);
}
