let response:any="42"

let numericallength:number=(response as string ).length//we are force type the response to act as a string

type Book={
    name:string
}

let BookString=`{"name":"one more thing"}`
let BookJson=JSON.parse(BookString)as Book

console.log(BookJson)

//unknown and any

let value:any;
value="chai"
value=2
value=[1,2,3]
value.toUppercase()//wrong

let newvalue:unknown;
newvalue="chai"
newvalue=2
newvalue=[1,2,3]
// newvalue.toUppercase()//error 

//so now we will use guard to fix it

if(typeof newvalue==='string'){
    newvalue.toLowerCase()
}
//checking in the try catch block

try {
    
} catch (error) {//here we don't knoww if the error belongs to the ERROR class so we will use guard to check
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log(error)
}

