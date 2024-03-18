export const productCart:{productid:string,pquan:number}[]=[];

export function pushcart(pid:string){
     for(let i of productCart){
        if(i.productid===pid){
            i.pquan++;
            return;
        }
     }
    const filteritem:{productid:string,pquan:number}={
        productid:pid,
        pquan:1
     }
     productCart.push(filteritem);
}




