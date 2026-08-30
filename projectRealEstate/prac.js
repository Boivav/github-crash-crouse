const promise = new Promise((resolve,reject) => {
      const result = Math.random() > 0.5
      if(result){
        resolve(`Operation successfull`)
      }
      else{
        reject(`Operation unsuccessfull`)
      }
})

