export default function getResponseFromAPI() {
  return new Promise(function(resolve, reject) {
    if (true) {
      resolve("Stuff worked!");
    }
    else {
      reject(Error("It broke"));
    }
  });
}
