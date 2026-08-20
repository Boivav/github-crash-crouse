function notifyUser(notificationFn){
   notificationFn()
}
const emailSent = () => console.log(`Email sent`)
const SMSSent = () => console.log(`SMS Sent.`)
notifyUser(emailSent)
notifyUser(SMSSent)


