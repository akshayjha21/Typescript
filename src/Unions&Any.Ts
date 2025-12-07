let subs: number|string='1M'

let apiRequestStatus:'pending'|'success'|'error'="pending"

// | is used for union

let airlineSeat:'aisle'|'window'|'middle'

let currentorders: string|undefined;
 
let orders=['12','23','34','20']

for(let order of  orders){
    if (order =='20')
        currentorders=order
    break
}
console.log(currentorders)