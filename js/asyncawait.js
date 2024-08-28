async function fetchData() {
  try {
    const response = await new Promise((resolve, reject) => {
      const success = true;
      setTimeout(() => {
        if (success) {
          resolve('Data fetched successfully!');
        } else {
          reject('Error fetching data.');
        }
      }, 2000);
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
fetchData();
