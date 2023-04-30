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

function updateLastUserActivityTime(){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=> {
            resolve()
            console.log(`User Last activity time=`,(new Date()).getTime())
        },1000)
    })
}

Promise.all([createPost({title:"Post2"}),updateLastUserActivityTime]).then( ()=>{
    posts.forEach((post) => {
    console.log(post.title)})
})