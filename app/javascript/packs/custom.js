import MaterialDateTimePicker from 'material-datetime-picker';
import moment from 'moment'



// const picker = new MaterialDateTimePicker()
//     .on('submit', (val) => {
//         input.value = val.format("DD/MM/YYYY");
//     });

const handleClickDatePicker = (event) => {
    const element = event.target
    const picker = new MaterialDateTimePicker()
        .on('submit', (val) => {
            element.value = val.format("DD/MM/YYYY");
        });
    picker.open()
}

const handleClickDateTimePicker = (event) => {
    const element = event.target
    const picker = new MaterialDateTimePicker()
        .on('submit', (val) => {
            element.value = val.format("DD/MM/YYYY, h:mm:ss a");
        });
    picker.open()
}

$('.datepicker').on('focus', () => handleClickDatePicker(event));
$('.datetimepicker').on('focus', () => handleClickDateTimePicker(event));