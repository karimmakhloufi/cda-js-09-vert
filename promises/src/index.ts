const getDataFromApi = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("here is the data");
    } else {
      reject("error while loading the data");
    }
  }, 300);
});

getDataFromApi
  .then((data) => {
    console.log("réussite", data);
  })
  .catch((err) => {
    console.log("echec", err);
  });

const fetchData = async () => {
  try {
    const result = await getDataFromApi;
    console.log("result", result);
  } catch (err) {
    console.log("there has been an error", err);
  }
};

fetchData();
