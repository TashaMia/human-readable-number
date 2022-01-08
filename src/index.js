module.exports = function toReadable (number) {
    let arr=[];
    let newarr=[];
      let str = String(number);
      arr=str.split('');
      arr.reverse();
    
      if ( arr[1]==1){
        switch (arr[0]){
    case '1': newarr.unshift("eleven"); break;
    case '2': newarr.unshift("twelwe"); break;
    case '3': newarr.unshift("thirteen");break;
    case '4': newarr.unshift("fourteen");break;
    case '5': newarr.unshift("fifteen");break;
    case '6': newarr.unshift("sixteen");break;
    case '7': newarr.unshift("seventeen");break;
    case '8': newarr.unshift("eighteen");break;
    case '9': newarr.unshift("nineteen");break;
    case '0': newarr.unshift("ten");break;
    }
      }
    switch (arr[0]) {
    case '1': newarr.unshift("one");break;
    case '2': newarr.unshift("two");break;
    case '3': newarr.unshift("three");break;
    case '4': newarr.unshift("four");break;
    case '5': newarr.unshift("five");break;
    case '6': newarr.unshift("six");break;
    case '7': newarr.unshift("seven");break;
    case '8': newarr.unshift("eight");break;
    case '9': newarr.unshift("nine");break;
    }
    switch (arr[1]) {
     case '2': newarr.unshift("twenty");break;
    case '3': newarr.unshift("thirty");break;
    case '4': newarr.unshift("forty");break;
    case '5': newarr.unshift("fifty");break;
    case '6': newarr.unshift("sixty");break;
    case '7': newarr.unshift("seventy"); break;
    case '8': newarr.unshift("eighty");break;
    case '9': newarr.unshift("ninety");break;
    }
    switch (arr[2]) {
    case '1': newarr.unshift("one");break;
    case '2': newarr.unshift("two");break;
    case '3': newarr.unshift("three");break;
    case '4': newarr.unshift("four");break;
    case '5': newarr.unshift("five");break;
    case '6': newarr.unshift("six");break;
    case '7': newarr.unshift("seven");break;
    case '8': newarr.unshift("eight");break;
    case '9': newarr.unshift("nine");break;
    }
    if( arr[1]==1 && arr[0]!=0){
     newarr.shift(); 
    }
    if (arr.length>=3){
    newarr.splice(1,0, 'hundred');
    } return newarr.join(' ');
     }
   

