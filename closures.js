

 function makeCounter(initial){
    var counter=initial;
        return function count(){
        counter++;
        return counter;
    }
}

var counter1 = makeCounter(5)
var counter2 = makeCounter(5)

function pow(exponent) {
     return function (number) {
          return number**exponent
          }
     }
var square = pow(2)
var cube = pow(3)
var power4 = pow(4)



function zipWith(func,array1,array2){
	var result = []
	if(array1.length<array2.length){
		var shortArray = array1.length 
	}else{
		var shortArray = array2.length 
	}
	for ( var i = 0 ; i < shortArray ; i++){
	result.push(func(array1[i],array2[i]))
	}
	return result 

}



