/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    const symbol = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let total = 0;

    for(let i=0; i<s.length; i++){
        let cur = s[i];
        let next = s[i+1];
        if(symbol[cur] < symbol[next]){
            total -= symbol[cur];
        } else {
            total += symbol[cur];
        }
    }
    return total;
}