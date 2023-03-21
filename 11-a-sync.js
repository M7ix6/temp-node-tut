const {readFile , writeFile} = require('fs')

console.log('start');
readFile('./cont/first.txt' , 'utf8' , (err , result)=>{
    if(err){
        console.log(err);
        return
    }

    const first = result
    readFile('./cont/secound.txt' , 'utf8' , (err , result)=>{
        console.log(err);
        return
    })

    const secound = result
    writeFile('./cont/resualt-async.txt' , `Here is the resualt :  ${first} , ${secound}`
    , (err , result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log('Done with the task');
    })
})