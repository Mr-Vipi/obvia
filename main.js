var flowerCM = window.flowerCM || {};
//TextInput
rjs.define("./components/Text.js", "TextInput");
rjs.define("./lib/dependencies/scripts/jquery.inputmask.bundle.min.js", "InputMaskBundle");
//Form
rjs.define("./components/Form.js", "Form");
//Button
rjs.define("./components/Button.js", "Button");
//Label
rjs.define("./components/Label.js", "Label");
//Repeater
rjs.define("./components/Repeater.js", "Repeater");
//List
rjs.define("./components/List.js", "List");
//CheckBox
rjs.define("./components/CheckBox.js", "CheckBox")
//CheckBoxGroup
rjs.define("./components/CheckBoxGroup.js", "CheckBoxGroup");
//RadioButton
rjs.define("./components/RadioButton.js", "RadioButton");
//RadioGroup
rjs.define("./components/RadioGroup.js", "RadioGroup");
//Amount
rjs.define("./components/Amount.js", "Amount");
//TextArea
rjs.define("./components/TextArea.js", "TextArea");
//TextEditor
rjs.define("./components/TextEditor.js", "TextEditor");
rjs.define("lib/dependencies/summernote/summernote.css", "SummerNoteCSS");
rjs.define("lib/dependencies/summernote/summernote.min.js", "SummerNoteScript");
//Select
rjs.define("./components/Select.js", "Select");
//DateTime
rjs.define("./components/DateTime.js", "DateTime");
rjs.define("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/bootstrap-datepicker.min.js", "DatePickerScript");
rjs.define("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/css/bootstrap-datepicker.min.css", "DatePickerCSS");
//DateTimeCb
rjs.define("./components/DateTimeCb.js", "DateTimeCb");
//Modal
rjs.define("./components/Modal.js", "Modal");
//AutoComplete
rjs.define("https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/select2.min.js", "Select2Script");
rjs.define("https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css", "Select2CSS");
rjs.define("./components/AutoComplete.js", "AutoComplete");
//ComboBox
rjs.define("lib/dependencies/styles/bootstrap.multiselect.css", "ComboCSS");
rjs.define("lib/dependencies/scripts/bootstrap.multiselect.js", "ComboScript");
rjs.define("./components/ComboBox.js", "ComboBox");
//Map
rjs.define("https://maps.googleapis.com/maps/api/js?key=AIzaSyD04Q93F3BcHhGl483rfMC_MD1Y8y7K0lo", "GoogleMapScript");
rjs.define("./components/Map.js", "GoogleMap");
//Toggle
rjs.define("lib/dependencies/styles/bootstrap-toggle.min.css", "ToggleCSS");
rjs.define("lib/dependencies/scripts/bootstrap-toggle.js", "ToggleScript");
rjs.define("./components/Toggle.js", "Toggle");
//TrippleSwitch
rjs.define("./components/TrippleSwitch.js", "TrippleSwitch");
//MultiSwitch
rjs.define("./components/MultiSwitch.js", "MultiSwitch");
//Upload
rjs.define("lib/dependencies/scripts/jquery.slimscroll.js", "SlimScroll");
rjs.define("lib/dependencies/styles/kx-upload.css", "KxUploadCSS");
rjs.define("lib/dependencies/scripts/resumable.js", "Resumable");
rjs.define("./components/Upload.js", "Upload");
rjs.define("./components/FormUpload.js", "FormUpload");

//Loader
var loader = new Loader({ id: 'loader' });
$('#root').append(loader.render());
loader.show();

rjs.require([
    "DOMContentLoaded",
    "Form",
    "Repeater",
    "List",
    "Amount",
    "Label",
    "TextInput", 
    "InputMaskBundle",
    "TextArea",
    "Select",
    "TextEditor",
    "DateTime",
    "DatePickerScript",
    "DatePickerCSS",
    "CheckBox",
    "CheckBoxGroup",
    "RadioButton",
    "RadioGroup",
    "DateTimeCb",
    "AutoComplete",
    "Select2Script",
    "Select2CSS",
    "Modal",
    "ComboBox",
    "ComboScript",
    "ComboCSS",
    "GoogleMapScript",
    "GoogleMap",
    "ToggleCSS",
    "ToggleScript",
    "Toggle",
    "TrippleSwitch",
    "MultiSwitch",
    "Resumable",
    "KxUploadCSS",
    "Upload",
    "SlimScroll",
    "FormUpload"
], function () {

    // rjs.define("./examples/CheckBox/example.js", "CheckBoxExample");
    // rjs.define("./examples/RadioButton/example.js", "RadioButtonExample");
    // rjs.define("./examples/CheckBoxGroup/example.js", "CheckBoxGroupExample");
    // rjs.define("./examples/RadioGroup/example.js", "RadioGroupExample");
    // rjs.define("./examples/Upload/example.js", "UploadExample");
    // rjs.define("./examples/Form/example.js", "FormExample");
    rjs.define("./examples/Form/ajaxExample.js", "FormExample");

}, flowerCM);