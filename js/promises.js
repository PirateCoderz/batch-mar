const fetchData = new Promise((resolve, reject) => {
  const success = true; // Simulate success or failure
  setTimeout(() => {
    if (success) {
      resolve('Data fetched successfully!');
    } else {
      reject('Error fetching data.');
    }
  }, 2000);
});

const resolved = (data) => {
  console.log(data); // Handle successful fetch
};

const rejected = (error) => {
  console.error(error); // Handle failed fetch
};

const jsonconverter = (data) => {
  try {
    const jsonData = JSON.parse(data);
    console.log(jsonData); // Convert JSON to JavaScript object
  } catch (error) {
    console.error('Error converting JSON:', error);
  }
};
fetchData
  .then(resolved)
  .then(jsonconverter) // Handle rejected promise
  .catch(rejected);
