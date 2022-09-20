let longest=0;
for(let i=0;i<S.length;i++){
    let bag="";
    for(j=i;j<S.length;j++){
        bag=bag+S[j];
    
    
   let rev="";
   for(let k=bag.length-1;k>=0;k--){
   rev=rev+bag[k];
    }
   if(bag==rev && bag.length>longest){
       longest=bag.length;
   }// console.log(bag);
}
}
console.log(longest);