function fakeAPICall(resolve, reject) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Han',
        occupation: 'Front-end developer',
        hobby: {
          music: ['hard rock', 'blues'],
          mma: ['bjj', 'boxing', 'kick-boxing']
        }
      })
      // reject(new Error('This is error from fakeAPICall'));
    }, 1000);
  })

  myPromise.then((value) => {
    console.log('inner promise');
    resolve(value);
  })
  return myPromise;
}

function myPromise() {
  const promiseChain = [];

  this.onResolve = function() {

  };

  this.onReject = function() {

  }
}



function main() {
  const promise = new Promise(fakeAPICall);
  promise
    .then((response) => {
      return response.name
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log('this is finally');
    })
}

main();
