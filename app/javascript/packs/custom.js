// import moment from 'moment';

// /**
//     * [constructor of the mdDateTimePicker]
//     *
//     * @method constructor
//     *
//     * @param  {String}   type = 'date' or 'time                           [type of dialog]
//     * @param  {moment}   init                                             [initial value for the dialog date or time, defaults to today] [@default = today]
//     * @param  {moment}   past                                             [the past moment till which the calendar shall render] [@default = exactly 21 Years ago from init]
//     * @param  {moment}   future                                           [the future moment till which the calendar shall render] [@default = init]
//     * @param  {Boolean}  mode                                             [this value tells whether the time dialog will have the 24 hour mode (true) or 12 hour mode (false)] [@default = false]
//     * @param  {String}   orientation = 'LANDSCAPE' or 'PORTRAIT'          [force the orientation of the picker @default = 'LANDSCAPE']
//     * @param  {element}  trigger                                          [element on which all the events will be dispatched e.g var foo = document.getElementById('bar'), here element = foo]
//     * @param  {String}  ok = 'ok'                                         [ok button's text]
//     * @param  {String}  cancel = 'cancel'                                 [cancel button's text]
//     * @param  {Boolean} colon = true                                      [add an option to enable quote in 24 hour mode]
//     * @param  {Boolean} autoClose = false                                 [close dialog on date/time selection]
//     * @param  {Boolean} inner24 = false                                   [if 24-hour mode and (true), the PM hours shows in an inner dial]
//     * @param  {String} prevHandle = <div class="mddtp-prev-handle"></div> [The HTML content of the handle to go to previous month]
//     * @param  {String} nextHandle = <div class="mddtp-next-handle"></div> [The HTML content of the handle to go to next month]
//     *
//     * @return {Object}                                                    [mdDateTimePicker]

const datePickerDialog = new mdDateTimePicker({
    type: 'date',
    // init: moment(),
    // future: moment().add(10, 'day')
});

const timePickerDialog = new mdDateTimePicker({
    type: 'time'
});

const handleClickPicker = (event, dialog) => {
    const element = event.target.previousElementSibling

    dialog.toggle();
    dialog.trigger = element;
    element.addEventListener('onOk', () => {
        element.value = dialog.time.format(dialog._type === 'date' ? 'DD/MM/YYYY' : 'hh:mm a');
    })
}

$('.datepicker').on('click', () => handleClickPicker(event, datePickerDialog));
$('.timepicker').on('click', () => handleClickPicker(event, timePickerDialog));