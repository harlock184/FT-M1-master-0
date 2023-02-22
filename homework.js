'use strict';

function BinarioADecimal(num) {

   var decimal = 0
   for(var i = 0; i<num.length; i++){
      decimal = decimal + num[i] * 2**(num.length-1-i)
   }
   return decimal.toExponential.
}

function DecimalABinario(num) {}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
