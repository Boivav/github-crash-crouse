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

