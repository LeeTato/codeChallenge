function maskify(cc){
    let mask =''
    let last4 = ''
    
    if(cc.length< 4){
        return cc
    }else{
      
        for(let i = cc.length -4; i<cc.length; i++){
            last4 +=cc[i]
        }
    }
   
    for (let j =0; j<cc.length-4 ;j++){
        mask += '#'
    }
    return mask +last4
}

console.log(maskify(45789056777))