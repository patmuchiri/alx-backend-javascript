function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
      // Simulate success by resolving the promise
      resolve("Data fetched successfully!");
    }, 2000); // 2-second delay
  });
}

export default getResponseFromAPI;
