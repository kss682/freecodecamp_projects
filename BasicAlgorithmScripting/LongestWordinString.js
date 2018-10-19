function LongestWord(str){
	var newStr = str.split(" ");
	let big = 0;
	for(let i = 0; i < newStr.length; i++){
		let count = 0;
		count = newStr[i];
		if(count > big){
			big=count;
			}
		}
	
	return big;
	}


LongestWord("The word is long enough");
		
