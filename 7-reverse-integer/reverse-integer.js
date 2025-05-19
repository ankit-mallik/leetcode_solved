/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = Math.sign(x);
    let result = 0;
    while(x!==0){
        result = result*10 + x%10;
        x = sign>0? Math.floor(x/10) : Math.ceil(x/10);
    }

    const limit = Math.pow(2,31);
    if(result <= -limit || result>limit) return 0;

    return result;
};