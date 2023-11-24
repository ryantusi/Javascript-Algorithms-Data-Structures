# Cash Register Check Algorithm

This JavaScript code implements an algorithm that calculates the change to be given back to a customer from a cash register, considering different denominations of currency available in the register.

## Function: `checkCashRegister(price, cash, cid)`

This function takes three parameters:
- `price`: The price of the item.
- `cash`: The amount of cash provided by the customer.
- `cid`: An array representing the cash in the drawer (`cid` stands for "cash in drawer").

### Code Explanation:

The code has the following sections:

1. **Initialization**: Variables are declared to store the amounts of different currency denominations available in the drawer.

2. **Change Calculation Loop**: The code uses a while loop to calculate the change to be given back to the customer. It iterates through different currency denominations, deducting from the cash provided until the exact change is computed or it's not possible to provide further change.

3. **Change Allocation**: The calculated change is stored in an array, `arr`, containing the currency denominations and their respective amounts.

4. **Final Determination of Cash Register Status**: 
   - If sufficient change cannot be provided (`flag == false`), it denotes "INSUFFICIENT_FUNDS".
   - If all the cash in the drawer is used (`flag2 == true`), it denotes "CLOSED".
   - Otherwise, it indicates "OPEN" status.

### Example Usage:
```javascript
console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]));
