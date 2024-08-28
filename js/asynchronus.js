function fetchData(callback) {//-
  // callback();//-
  setTimeout(() => {//-
    console.log('Data fetched!');//-
  }, 2000); // Simulate a 2-second delay//-
}
//-
// /**//+
//  * Processes data fetched from an asynchronous source.//+
//  *//+
//  * This function simulates processing data fetched from an asynchronous source.//+
//  * It logs a message to the console indicating that the data is being processed.//+
//  *//+
//  * @returns {void} This function does not return any value.//+
//  *///+
function processData() {
  console.log('Processing data...');
}//-
fetchData(processData);//-
processData();//-
//+
