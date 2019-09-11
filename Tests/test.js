const aux = require('./auxiliaryFunctions');
const serverApproach = require('./serverApproach');
const METHODS =  serverApproach.METHODS;
const approachToServer = serverApproach.approachToServer;
const baseURL = serverApproach.baseURL;
//register screen
async function register(data) {
    const options = {
        method : METHODS.POST,
        headers: {
          "Content-Type": "application/json",
          "Content-Length": data.length
        },
        body: data
      }
      
  return await approachToServer(`${baseURL}register`, options );
}
//login screen
async function login(data) {
  const options = {
    method : METHODS.POST,
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length
    },
    body: data
  }

  return await approachToServer(`${baseURL}login`, options);
}

//admin screen
async function getAllUsers() {
  return await approachToServer(`${baseURL}getallusers`, METHODS.GET);
}

async function getAllItems() {
  return await approachToServer(`${baseURL}admin/getallitems`, METHODS.GET);
}

async function addItem() {
  return await approachToServer(`${baseURL}admin/additem{num}`, METHODS.POST);
}

async function deleteUser(objectID) {
  return await approachToServer(
    `${baseURL}admin/deleteuser/${objectID}`,
    METHODS.DELETE
  );
}

async function filterByNameAndLastName(name, lastname) {
  return await approachToServer(
    `${baseURL}admin/bynameandlastname/${name}/${lastname}`,
    METHODS.GET
  );
}

async function filterByObjectId(objectid) {
  return await approachToServer(
    `${baseURL}admin/filter/byobjectid/${objectid}`,
    METHODS.GET
  );
}

// cart + checkout screen
async function getUserCart() {
  return await approachToServer(`${baseURL}cart/getusercart`, METHODS.GET);
}

async function addItem(item_id) {
  return await approachToServer(
    `${baseURL}cart/additem/${item_id}`,
    METHODS.POST
  );
}

async function deleteItem(item_id) {
  return await approachToServer(
    `${baseURL}cart/deleteitem/${item_id}`,
    METHODS.DELETE
  );
}

async function deleteAllItems() {
  return await approachToServer(
    `${baseURL}cart/deleteallitems`,
    METHODS.DELETE
  );
}

//store screen

async function search(searchedText) {
  return await approachToServer(
    `${baseURL}store/search/${searchedText}`,
    METHODS.GET
  );
}

async function addpurchase(item_id) {
  return await approachToServer(
    `${baseURL}store/search/${item_id}`,
    METHODS.POST
  );
}

async function setstatusbyid(status) {
  return await approachToServer(
    `${baseURL}setstatusbyid/${status}`,
    METHODS.POST
  );
}
async function registerTesting(){
 //register success
 const userRegisterSuccess = JSON.stringify({
  ID: "test",
  Password: "qwerty"
});

const registerSuccessResult = await register(userRegisterSuccess);
console.log("Testing Register Success");
console.log("----------------------------------------");
console.log("status code should be 200 - " + (registerSuccessResult.status == 200));
console.log("");

  //register failure (registering without password, which is mandatory)
  const userRegisterFailure = JSON.stringify({
    Password: "test"
  });
  
  const registerFailureResult = await register(userRegisterFailure);
  console.log("Testing Register Failure");
  console.log("----------------------------------------");
  console.log("status code should be 401 - " + (registerFailureResult.status == 401));
  console.log("");
}


async function loginTesting(){  
    //login success
  const userLoginSuccess = JSON.stringify({
    ID: "admin",
    Password: "admin"
  });

  const LoginSuccessResult = await login(userLoginSuccess);
  console.log("Testing Login Success");
  console.log("----------------------------------------");
  console.log("status code should be 200 - " + (LoginSuccessResult.status == 200));
  console.log("");

    //login failure
  const userLoginFailure = JSON.stringify({
    ID: "notExists",
    Password: "notExists"
  });
  
  const LoginFailureResult = await login(userLoginFailure);
  console.log("Testing Login Failure");
  console.log("----------------------------------------");
  console.log("status code should be 401 - " + (LoginFailureResult.status == 401));
  console.log("");
}


async function startTesting() {
  await registerTesting();
  await loginTesting();
}

startTesting();
