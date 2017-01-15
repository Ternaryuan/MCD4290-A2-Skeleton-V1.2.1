// Code for the View Run page.

// The following is sample code to demonstrate navigation.
// You need not use it for final app.

var runIndex = localStorage.getItem(APP_PREFIX + "-selectedRun"); 
if (runIndex !== null)
{
    // If a run index was specified, show name in header bar title. This
    // is just to demonstrate navigation.  You should set the page header bar
    // title to an appropriate description of the run being displayed.
    var runNames = [ "Run A", "Run B" ];
    document.getElementById("headerBarTitle").textContent = runNames[runIndex];
}

document.getElementById("last_run").innerHTML="last run: "+localStorage.getItem(last_run)

function delete_run() {
    localStorage.removeItem(APP_PREFIX)
    window.location.href = "index.html" 
}

function retry_run() {
    window.location.href = "newRun.html"
}
