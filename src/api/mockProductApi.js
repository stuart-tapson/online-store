import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const products = [
  {
    id: "PS4",
    name: "Playstation 4",
    manufacturer: "Sony",
    category: "gaming",
    subcategory: "console",
    image: "",
    additionalDetails: {

    }
  },
  {
    id: "XB1",
    name: "XBox One",
    manufacturer: "Microsoft",
    category: "gaming",
    subcategory: "console",
    image: "",
    additionalDetails: {

    }
  },
  {
    id: "FF15",
    name: "Final Fantasy XV",
    manufacturer: "Square",
    category: "gaming",
    subcategory: "game",
    image: "",
    additionalDetails: {
      availablePlatforms: ["PS4", "XB1"]
    }
  },
  {
    id: "DROI",
    name: "Destiny: Rise of Iron",
    manufacturer: "Bungie",
    category: "gaming",
    subcategory: "game",
    image: "",
    additionalDetails: {
      availablePlatforms: ["PS4", "XB1"]
    }
  },
  {
    id: "Overwatch",
    name: "Overwatch",
    manufacturer: "Blizzard",
    category: "gaming",
    subcategory: "game",
    image: "",
    additionalDetails: {
      availablePlatforms: ["PC", "PS4", "XB1"]
    }
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class ProductApi {
  static getAllProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], products));
      }, delay);
    });
  }
}

export default ProductApi;
