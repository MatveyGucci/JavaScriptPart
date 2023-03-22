function projectObject(sourceObj, prototypeObj) {
    let projectedObj = {};
    for (let key in prototypeObj) {
      if (key in sourceObj) {
        if (typeof sourceObj[key] === "object" && typeof prototypeObj[key] === "object") {
          projectedObj[key] = projectObject(sourceObj[key], prototypeObj[key]);
        } else {
          projectedObj[key] = sourceObj[key];
        }
      }
    }
    return projectedObj;
  }
  
  let sourceObj = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA"
    },
    phone: "555-1234"
  };
  
  let prototypeObj = {
    name: "",
    age: 0,
    address: {
      street: "",
      city: "",
      state: ""
    }
  };
  
  let projectedObj = projectObject(sourceObj, prototypeObj);
  console.log(JSON.stringify(projectedObj, null, 4));