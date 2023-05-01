console.log('person1: shows ticket')
console.log('person2: shows ticket')
const preMovie = async ()=>{
    const promisehebringtick= new Promise( (resolve, reject) => { //Making promise for getting ticket
        setTimeout( ()=>{resolve('ticket')},1000)
    })
    const getPopCorn= new Promise( (resolve, reject) => resolve(`Got popcorn`)) // Making promise for popcorn
    const getButter= new Promise( (resolve, reject) => resolve(`Got butter`)) // Making promise for butter
    const getColdDrinks= new Promise( (resolve, reject) => resolve(`Got Cold drinks`)) // Making promise for Cold Drinks
    
    let ticket= await promisehebringtick
    console.log("Father : Received the tickets")
    console.log("Father:Lets go in")
    console.log("Child :I am feeling hungry")
    let popCorn = await getPopCorn
    console.log("Father :Received the Popcorn")
    console.log("Father :Now Lets go in")
    console.log("Child: I want butter")
    let butter = await getButter
    console.log("Father: Received the Butter")
    console.log("Father :Now Lets go in")
    console.log("Child: I want cold drinks also")
    let coldDrink = await getColdDrinks
    console.log("Father: Received the Cold Drinks")
    console.log("Father :Now Lets go in")
    console.log("Child: Yes lets GO")

    return ticket

}
preMovie().then( (m)=> console.log(`person3: shows ${m}`))

//const getColdDrinks = new Promise( (resolve,reject)=>{
//    setTimeout( ()=>{
//        resolve('got cold drinks')
//    },2000)
//})

//getColdDrinks.then( (c)=>{
//    console.log(`person3: ${c}`)
//})
//console.log('person4: shows ticket')

