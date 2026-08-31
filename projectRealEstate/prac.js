function uploadFile(){
    return new Promise((resolve,reject) => {
        console.log(`Step 1: Uploading file`)
        setTimeout(() => {
            resolve()
        },1000)
    })
}

function processFile(){
    return new Promise((resolve,reject) => {
        console.log(`Step 2: Processing file`)
        setTimeout(() => {
            resolve()
        },1000)
    })
}

function notifyUser(){
    return new Promise((resolve,reject)=> {
        console.log(`Step 3: Notifying the User`)
        setTimeout(() => {
            resolve()
        },1000)
    })
}

async function main(){
    try{
       const result1 = await uploadFile()
       const result2 = await processFile()
       const result3 = await notifyUser()
       console.log(result1)
       console.log(result2)
       console.log(result3)
    }catch(error){
        console.log(error)
    }finally{
        console.log(`All steps completed.`)
    }
}

main()
