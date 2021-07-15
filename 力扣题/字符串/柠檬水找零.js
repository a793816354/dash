/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const price = 5
    if(!bills.length===0) return true

    const storeBills = [bills[0]]
    for (let index = 1; index < bills.length; index++) {
        const bill = bills[index];

        if(bill===price){
            storeBills.push(bill)
        }else {
            // for (let index = 0; index < array.length; index++) {
            //     const element = array[index];
                
            // }
        }


        
    }
};