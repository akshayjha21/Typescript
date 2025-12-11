// function getChai(kind: string | number)
// {
//     if(typeof kind === 'string')
//         {
//             return `Making ${kind} chai...`
//         }
//         return `chai order :&{kind}` 
// }

// function serveChai(msg?:string){
//     if(msg){
//         return `serving ${msg}`
//     }
//     return `serving default masala chai`
// }

// function orderChai(size:"small"|"medium"|"large"|number){
//     if(size==="small"){
//         return `small cutting chai...`
//     }
//     if(size==="medium"||size==="large"){
//         return `make extra chai`
//     }
//     return `chai order #${size}`
// }

// class KulhadChai{
//     serve()
//     {
//         return `serving kulhad chai`
//     }
// }
// class CuttingChai{
//     serve()
//     {
//         return `serving cutting chai`
//     }
// }

// function serve(chai:KulhadChai|CuttingChai){
//     if(chai instanceof KulhadChai){
//         return chai.serve()
//     }
// }

// type chaiorder={
//     type:string
//     sugar:number
// }

// function isChaiorder(obj:any):obj is chaiorder{
//     return(
//         typeof obj==="object"&&
//         obj !==null &&
//         typeof obj.type==='string'&&
//         typeof obj.typr==='number'
//     )
// }

// function serveorder(item:chaiorder|'string'){
//     if(isChaiorder(item)){
//         return `server ${item.type} chai with ${item.sugar} sugar`
//     }
//     return `serving custom chai:${item}`
// }

// type masalaChai={type:"masala";spiceLevel:number}
// type GingerChai={type:"ginger";amount:number}

// type Chai=masalaChai|GingerChai

// function MakeChai(order:Chai){
//     switch(order.type){
//         case "ginger":
//             return "masala chai"
//         case "masala":
//             return "masala chai"
//         default:
//             return "no chai available"
//     }
// }
