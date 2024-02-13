function loggerFactory(type){
    function  logger(msg){
        console.log(`${type}- ${msg}`)
    }
    return logger
}
const errorlogger=loggerFactory("ERROR")
const inforlogger=loggerFactory("INFO")
errorlogger("logging failed")
inforlogger("informational load.....")


// arrow function
const loggerFactoryOne=(type)=>{
    return (msg)=>{
        console.log(`${type}- ${msg}`)
    }

}
const errorloggerOne=loggerFactoryOne("ERROR")
const inforloggerTwo=loggerFactoryOne("INFO")
errorloggerOne("logging failed second")
inforloggerTwo("informational load second.....")