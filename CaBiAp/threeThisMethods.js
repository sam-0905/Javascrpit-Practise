/*
In JavaScript, call, bind, and apply are special, built-in methods used to control the value of the this keyword inside a function.

To understand them easily, remember this core rule: In JavaScript, this normally refers to the object that owns the code running at that moment. By using call, bind, or apply, you can forcefully change what this points to, allowing one object to "borrow" a function belonging to another object.
*/ 


// Call method

// It runs the function immediately and allows you to pass in arguments one by one.It also known as the "function borrowing" method. 

const person1 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + " " + city + ", " +  country;
    }
}

const person2 = { 
    firstName: "Jane",
    lastName: "Smith"
}


const fullName = person1.fullName.call(person2 ,"Trichy" , "India" ); // "Jane Smith"

console.log(fullName);


// Apply method

// It is similar to call, but it takes arguments as an array instead of one by one.

const person3 = {
    firstName: "Alice",
    lastName: "Johnson",
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + " " + city + ", " + country
    }
}


const person4 = {
    firstName: "Bob",
    lastName: "Brown"
}


const fullName2 = person3.fullName.apply(person4, ["New York", "USA"]); // "Bob Brown New York, USA"

console.log(fullName2);


// Bind method

// It returns a new function, allowing you to pass in a this array and any number of arguments. It does not immediately execute the function like call and apply.

const person5 = {
    firstName: "Charlie",
    lastName: "Davis",  
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + " " + city + ", " + country;
    }
}

const person6 = {
    firstName: "Diana",
    lastName: "Evans"
}   

const boundFullName = person5.fullName.bind(person6, "Los Angeles", "USA");

console.log(boundFullName()); // "Diana Evans Los Angeles, USA" 