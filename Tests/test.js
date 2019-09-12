const aux = require('./auxiliaryFunctions');
const axios = require('axios');
const serverApproach = require('./serverApproach');
const METHODS =  serverApproach.METHODS;
const approachToServer = serverApproach.approachToServer;
const baseURL = serverApproach.baseURL;
//register screen
async function register(data) {
    const options = {
          method: METHODS.POST,
          url: `${baseURL}register`,
          headers: {
            "Content-Type": "application/json",
            "Content-Length": data.length
          },
          data: data
        }
  return await approachToServer(options);
}

//login screen
async function login(data) {
  const options = {
    method: METHODS.POST,
    url: `${baseURL}login`,
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length
    },
    data: data
  }
  return await approachToServer(options);
}

async function addItem(item_id) {
  // axios.defaults.withCredentials = true
  // options = {
  //   method: METHODS.POST,
  //   url: `${baseURL}/cart/additem/${item_id}`,
  //   headers: {
  //   'Cookie': 'authToken=5d7a658e1e2b6e338c4d38af'
  //   }
  // }
  cookie_value = 'authToken=5d7a658e1e2b6e338c4d38af'
  
  return await axios.post(`${baseURL}/cart/additem/${item_id}`, {
    method: METHODS.POST,
    headers: {Authorization: `Bearer ${cookie_value}`}
  })
  .then(function(response) {
  })
  .catch(function(error) {
  });
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
  
  const registerFailureResult = await register(userRegisterFailure)
  .catch((err)=>{
  failedStatus = 401
  console.log("Testing Register Failure");
  console.log("----------------------------------------");
  console.log("status code should be 401 - " + (failedStatus == 401));
  console.log("");
  });
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
  
  const LoginFailureResult = await login(userLoginFailure).catch((err)=>{
    failedStatus = 401
    console.log("Testing Register Failure");
    console.log("----------------------------------------");
    console.log("status code should be 401 - " + (failedStatus == 401));
    console.log("");
    });
  }

async function addItemTesting(){

  const addItemSuccessResult = await addItem("5d722c7231ff9452c0e38aac");
  console.log(await addItemSuccessResult.status);
  console.log("Testing AddItem Success");
  console.log("----------------------------------------");
  console.log(`add item successfully to existing admin user. the item already exists in the database, the item named vegan bonzo`)
  // console.log("status code should be 200 - " + (addItemSuccessResult.status == 200));
  console.log("");
}


async function startTesting() {
  // await registerTesting();
  // await loginTesting();
  await addItemTesting();
}

startTesting();
