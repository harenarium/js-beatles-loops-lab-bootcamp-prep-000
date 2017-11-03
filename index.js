function theBeatlesPlay(arrayMusicians, arrayInstruments){
  var array = []
 for(var n =0; n<arrayMusicians.length; n++){
    array.push(`${arrayMusicians[n]} plays ${arrayInstruments[n]}`)
 }
  return array
}

function johnLennonFacts(array){
  var n =0
  while(n<array.length){
    array[n]=array[n]+"!!!"
  }
  return array
}
