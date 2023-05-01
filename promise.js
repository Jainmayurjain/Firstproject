const posts=[{title:"Post0"},{title:"Post1"}]

function createPost(post){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=> {
            posts.push({title:post.title})
            resolve()
            console.log(`Before creating ${post.title} , userLastActivityTime=`,new Date())
            console.log(`After creating ${post.title}` )
            updateLastUserActivityTime()
        },1000)
    })
}

function createPost2(){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=> {
            posts.push({title:"Post 2"})
            resolve(`Before creating Current Post , userLastActivityTime=`,new Date(),
            `After creating Current Post`)
            //console.log(`Before creating ${Current} , userLastActivityTime=`,new Date())
            //console.log(`After creating ${Curent}` )
            updateLastUserActivityTime()
        },1000)
    })
}

function updateLastUserActivityTime(){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=> {
            resolve(`User Last activity time=`,(new Date()).getTime())
            //console.log(`User Last activity time=`,(new Date()).getTime())
        },1000)
    })
}

function deletePost(){
    return new Promise( (resolve,reject)=>{
        setTimeout(() => {
            const del=posts.pop()
            resolve(del)
        }, 1000);
    })
}

//deletePost().then((d)=>{
//    console.log(`Deleting ${d.title}`)
//})

//Promise.all([createPost({title:"Post2"}),updateLastUserActivityTime])
//.then( ()=>{ posts.forEach((post) => { console.log(post.title)})
//})

async function conclude(){
    const msg = await createPost2()
    console.log(msg,new Date() ) 
    const msg1 = await updateLastUserActivityTime()
    console.log(msg1,(new Date()).getTime())
    const msg2 = await deletePost()
    console.log(`Deleting ${msg2.title}`)
}
conclude()