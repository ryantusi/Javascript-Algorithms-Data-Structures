function checkCashRegister(price, cash, cid) {
    let cost = parseFloat(cash - price).toFixed(2);
    let arr = [];
    let penny = 0.00 , nickel = 0, dime = 0, quarter = 0, dollar = 0, five = 0, ten = 0, twenty = 0, hundred = 0;
    let flag = true;
    let obj = {
      
    };
    while(cost>0) {
      //console.log(cost);
      if(cost >=100 && cid[8][2] >= 100) {
        cost -= 100;
        cost = cost.toFixed(2);
        hundred += 100;
        cid[8][1] -= 100;
      } else if(cost >= 20 && cid[7][1] >= 20) {
        cost -= 20;
        cost = cost.toFixed(2);
        twenty += 20;
        cid[7][1] -= 20;
      } else if(cost >= 10 && cid[6][1] >= 10) {
        cost -=10;
        cost = cost.toFixed(2);
        ten += 10;
        cid[6][1] -= 10;
      } else if(cost >= 5 && cid[5][1] >= 5) {
        cost -= 5;
        cost = cost.toFixed(2);
        five += 5;
        cid[5][1] -= 5;
      } else if(cost >=1 && cid[4][1] >= 1) {
        cost -= 1;
        cost = cost.toFixed(2);
        dollar += 1;
        cid[4][1] -= 1;
      } else if(cost >= 0.5 && cid[3][1] >= 0.5) {
        cost -= 0.5;
        cost = cost.toFixed(2);
        quarter += 0.5;
        cid[3][1] -= 0.5;
      } else if(cost >= 0.1 && cid[2][1] >= 0.1) {
        cost -= 0.1;
        cost = cost.toFixed(2);
        dime += 0.1;
        cid[2][1] -= 0.1;
      } else if(cost >= 0.05 && cid[1][1] >= 0.05) {
        cost -= 0.05;
        cost = cost.toFixed(2);
        nickel += 0.05;
        cid[1][1] -= 0.05;
      } else if(cost >= 0.01 && cid[0][1] > 0.00) {
        cost -= 0.01; 
        cost = cost.toFixed(2);
        penny += 0.01;
        cid[0][1] -= 0.01;
      } else{
        penny = 0 , nickel = 0, dime = 0, quarter = 0, dollar = 0, five = 0, ten = 0, twenty = 0, hundred = 0;
        flag = false;
        break;
      }
    }

    if(hundred > 0) {
      arr.push(["ONE HUNDRED", hundred]);
    }
    if(twenty > 0) {
      arr.push(["TWENTY", twenty]);
    }
    if(ten > 0) {
      arr.push(["TEN", ten]);
    }
    if(five > 0) {
      arr.push(["FIVE", five]);
    }
    if(dollar > 0) {
      arr.push(["ONE", dollar]);
    }
    if(quarter > 0) {
      arr.push(["QUARTER", quarter]);
    }
    if(dime > 0) {
      arr.push(["DIME", dime]);
    }
    if(nickel > 0) {
      arr.push(["NICKEL", nickel]);
    }
    if(penny > 0) {
      arr.push(["PENNY", penny]);
    }

    let flag2 = true;
    if(flag == false) {
      obj.status = "INSUFFICIENT_FUNDS";
      obj.change = arr;
    } else{
      for(let i = 0; i < cid.length; i++) {
        if(cid[i][1] > 0) {
          flag2 = false;
          break;
        }
      }
      if(flag2 == true) {
        cid[0][1] = 0.5;
        obj.status = "CLOSED";
        obj.change = cid;
      } else{
        obj.status = "OPEN";
        obj.change = arr;
      }
    }
    return obj;
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));