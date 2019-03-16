
let jsonString = "{ borken json }";

try {
  let user = JSON.parse(jsonString);
  console.log(user.name);

} catch (err) {
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack)
}
