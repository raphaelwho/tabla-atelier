
// keep reference to original function
var _log = window.console.log;

// Override default console log function to incentivize log() use
window.console.log = function(text) {
    _log.apply(this, [`WARNING, log() useage prefered over console.log(): ` + text]);
}

// Custom Log Statement
// Ex: log("Custom Log")
// Will output the file location where the log is executed
// TODO: --> WARNING: NOT CURRENTLY USEABLE IN NODEJS FILES
window.log = function(text) {
    try { throw new Error; }
    catch(e) {

        // Parser to find execution file
        const filename = e.stack.split("\n")[2].split("/").slice(-1)[0].split("?")[0];
        _log(`Executing in ${filename}: `, text);
    }
}

