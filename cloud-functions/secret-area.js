// * to let netlify run the lamda

// exports.handler = function (event, context, callback) {
//   let body;
//   const secret = `<h3>Welcome to Secret Area</h3>`;
//   if (event.body) {
//     body = JSON.parse(event.body);
//   } else {
//     body = {};
//   }
//   if (body.password == "javascript") {
//     callback(null, {
//       statusCode: 200,
//       body: secret,
//     });
//   } else {
//     callback(null, {
//       statusCode: 401,
//     });
//   }
// };
