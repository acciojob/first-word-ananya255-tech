function firstWord(s) {
  // your code here
	let arr=s.split(" ")
	return arr[0]

	if(s==''){
		return ''
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
