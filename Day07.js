//objective is a non -premitive data type
// let user={
//     name:"S.P Acharya",
//     address:{
    
//          city:"gurugram",
//          states:"haryana",

// },
//         favcolor:["black","white","blue"],
//         demo:function(){
//             return "demo function"
//         },
// }
// console.log(user.fullname,user.favcolor[1],user.demo);

// console.log("my name is"+user.fullname+".my fav color is "+user.favcolor[0]);

// // string literal
// console.log('my name is ${user.name}my address is ${user.address.city}')


// //object methods

// console.log(Object.keys(user));

// console.log(Object.values(user));

// console.log(Object.entries(user));


const car ={
    make:"mahindra",
    model:"thar"
};
// Object.freeze(car); //we cant add a new key and value pair and we cant change or update the existing value

Object.seal (car) // we cant add a new key and value pair but we can chamge and update the existing value
 car.model="XUV700"
 car.model="Zblack";
 console.log(car);




 