const demo = document.getElementById('demo');
const getDay = () => {
    let day = new Date().getDay(); 
  if (day === 0) {
    return 'Sunday';
  }else if (day === 1) {
    return 'Monday';
  }else if (day === 2) {
    return 'Tuesday';
  }else if (day === 3) {
    return 'Wednesday';
  }else if (day === 4) {
    return 'Thursday';
  }else if (day === 5) {
    return 'Friday';
  }else if (day === 6) {
    return 'Saturday';
  }
}

// const today = getDay();
// demo.innerHTML = today;

const today = {
    day: 1,
    name: "Monday"
}

const anotherDay = {
    day: 5,
    name: "Friday"
}

new Date().getDay() === today.day 
? demo.innerHTML = `Today is ${today.name}`
: demo.innerHTML = `Today is not ${today.name}`;

new Date().getDay() === today.day
? demo.innerHTML = `Today is ${today.name}`
: new Date().getDay() === anotherDay.day
? demo.innerHTML = `Today is ${anotherDay.day}`
: demo.innerHTML = `Today is not ${today.name} or ${anotherDay.name}`;

const getDaySwitch = () => {
    switch (new Date().getDay()) {
        case 0:
            return 'Sunday';
            break;
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;
        case 5:
            return 'Friday';
            break;
        case 6:
            return 'Saturday';    
            break;
        default:
            return 'Not a day';
    }
}

// callbacks
const myNumbers = [4, 1, -20, -7, 5, 9 , -6];

// call removeNeg with a callback 
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// display the result
demo.innerHTML = posNumbers;

// remove negative numbers
function removeNeg(numbers, callback){
    const result = [];
    for (const x of numbers){
        if (callback(x)){
            result.push(x);
        }
    }
    return result;
}

// promises
let promise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        reject("I'm rejected");
    }, 3000);
});

const consumer = () => {
    promise.then(
        result => {
            demo.innerHTML = result;
        },
        error => {
            demo.innerHTML = error;
        }
    )
}
consumer();

const myDisplayer = (value) => {
    demo.innerHTML = value;
}

let promiseDisplayer = new Promise((resolve, reject) => {
    let x = 0;
    if (x == 0){
        resolve("OK");
    }else{
        reject("Error");
    }
});

promiseDisplayer.then(
    (value) => {
        myDisplayer(value);
    },
    (error) => {
        myDisplayer(error);
    }
)

// async await
const asyncFunction = async () => {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I love JavaScript");
        }, 3000);
    });

    myDisplayer(await myPromise);
}

asyncFunction();

// rest api
const baseUrl = "https://jsonplaceholder.typicode.com";
