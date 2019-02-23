function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -
  var len1 = str.length;
  var len2 = target.length;
  var flag = 1;
  for(var i=0;i<len2;i++){
    if(str[len1-len2+i] != target[i]){
      flag = 0;
      break;
    }
  }
  if(flag == 1){
    return true;
  }
  else {
    return false;
  }
}

confirmEnding("Bastian", "n");
