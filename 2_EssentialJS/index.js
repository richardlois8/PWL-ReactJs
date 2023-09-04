const demo = document.getElementById("demo");
const testLet = () => {
  let num = 100;
  {
    let num = 200;
  }
  return num;
};

demo.innerHTML = testLet(); // 100

const testVar = () => {
  var num = 100;
  {
    var num = 200;
  }
  return num;
};
demo.innerHTML = testVar(); // 200

try {
  let PHI;
  demo.innerHTML = PHI;
} catch (e) {
  demo.innerHTML = e;
}

let person = {
  name: "John",
  age: 30,
};
console.log(person);

let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
selectedColors.push("yellow");
selectedColors.push(1);
console.log(selectedColors);

function greet(name) {
  console.log("Hello " + name);
}

// ES5
var car = {
  name: "Honda",
  products: ["jazz", "civic", "hrv"],
  showProduct: function () {
    this.products.map(
      function (product) {
        console.log(`${this.name} has launched ${product}`);
      }.bind(this)
    );
  },
};
car.showProduct();

// ES6
var car2 = {
  name: "Honda",
  products: ["Civic", "Accord", "CRV"],
  showProducts: function () {
    let counter = 0;
    this.products.map((product) => {
      console.log(++counter + " " + this.name + " has launched " + product);
    });
  },
};
car2.showProducts();

let text =
`
The quick brown fox
jumps over 
the lazy dog.
`
console.log(text);

// Shorthand Property
const formatMessage = (name, id, avatar) => {
    return {
        name,
        id,
        avatar,
        timestamp: Date.now(),
        save(){
            // save message
            return "Message saved"
        }
    };
}
const message = formatMessage("John", 1, "https://i.pravatar.cc/300");
demo.innerHTML = message.save()

let person2 = {
    firstName: "John",
    lastName: "Doe",
};
let {firstName, lastName} = person2;
demo.innerHTML = firstName + " " + lastName;


