const checkPalindromeButton = () => {
    if(palindromeInput.value === ""){
        alert("Input a name ")
    }else{
    let reverseStr = palindromeInput.value.trim().toLowerCase()
    let newStr = reverseStr.split("").reverse().join("")
    console.log(newStr);
    
    palindromeInput.value = ""
    }
    
}


//  return (str === "") ? "" : reverseString(str.substr(1)) + str.charAt(0);