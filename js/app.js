// from data.js
var tableData = data;

// Get references to the tbody element, input field and button
var $tbody = document.querySelector('tbody');
var $dateInput = document.querySelector('#date');
var $searchBtn = document.querySelector('#search');


// renderTable function renders the tableData to the tbody
function renderTable() {
  $tbody.innerHTML = '';
  for (var i = 0; i < tableData.length; i++) {
    // Get get the current report object and its fields
    var report = tableData[i];
    var fields = Object.keys(report);
    // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
    // For every field in the report object, create a new cell
    // This sets its inner text to be the current value at the current report's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = report[field];
    }
  }
}


function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDate = $dateInput.value.trim().toLowerCase();

  // Set tableData to an array of all addresses whose "state" matches the filter
    tableData = data.filter(function(report) {
      var dataDate = report.datetime;

      // If true, add the report to the tableData, otherwise don't add it to tableData
       return dataDate === filterDate;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click",handleSearchButtonClick);
