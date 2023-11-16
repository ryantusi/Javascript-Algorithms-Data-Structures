function rot13(str) {
    let arr = [];
    for(let i = 0; i < str.length; i++) {
      arr.push(str.charCodeAt(i));
    }
    console.log(arr);
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] == 32 || arr[i] < 65) {
        arr[i] = String.fromCharCode(arr[i]);
      }else if(arr[i] >= 78) {
        arr[i] -= 13;
        arr[i] = String.fromCharCode(arr[i]);
      }else if(arr[i] < 78) {
        arr[i] += 13;
        arr[i] = String.fromCharCode(arr[i]);
      }
    }
    return arr.join("");
    console.log(arr);
    console.log("M".charCodeAt(0))
  }
  
  console.log(rot13("SERR CVMMN!"));