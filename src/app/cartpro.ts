export const productid:string[]=[];

export function pushcart(pid:string){
    if(productid.indexOf(pid)==-1)
    productid.push(pid);

}



