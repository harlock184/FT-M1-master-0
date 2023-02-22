'use strict';

function BinarioADecimal(num) {

   var decimal = 0
   for(var i = 0; i<num.length; i++){
      decimal = decimal + num[i] * 2**(num.length-1-i)
   }
   return decimal
}

function DecimalABinario(num) {

  var binario=  num.toString(2);
  return binario
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
