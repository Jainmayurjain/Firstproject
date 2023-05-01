console.log('person1: shows ticket')
console.log('person2: shows ticket')
const promisehebringtick= new Promise( (resolve, reject) => {
    setTimeout( ()=>{
    resolve('Got ticket')
    },1000)
})

const getPopCorn= promisehebringtick.then( (t)=>{
    console.log("Father : Received the tickets")
    console.log("Father:Lets go in")
    console.log("Child :I am feeling hungry")
    return new Promise( (resolve,reject)=> resolve(`${t} with popcorn`))
})

const getButter = getPopCorn.then((t)=>{
    console.log("Father :Received the Popcorn")
    console.log("Father :Now Lets go in")
    console.log("Child: I want butter")
    return new Promise( (resolve,reject)=> resolve(`${t} with butter`))
})

const getColdDrinks = getButter.then( (t)=>{
    console.log("Father: Received the Butter")
    console.log("Father :Now Lets go in")
    console.log("Child: I want cold drinks also")
    return new Promise( (resolve,reject)=> resolve(`${t} with cold drinks`))
})

getColdDrinks.then( (t)=>{
    console.log(t)
})

