let palindrome = (str) => {
    return (str.split("").reverse().join("") == str.split("").join("")); 
}

console.log(palindrome("racecar"));

let palindromeLoop = (str) => {
    let min = 0;
    let max = str.length - 1;
    let isPalindrome = true;

    while (max > min) {
        if (str[min] != str[max]) {
            isPalindrome = false;
        }
        min++;
        max--;
    }

    return isPalindrome;
}

console.log(palindromeLoop("racecar"))

let anagram = (str1, str2) => {
    let str1Obj = str1.split("").reduce((obj, val) => {obj[val] = obj[val] + 1 || 1; return obj}, {});
    let str2Obj = str2.split("").reduce((obj, val) => {obj[val] = obj[val] + 1 || 1; return obj}, {});

    console.log(str1Obj);

    for (let key in str1Obj) {
        if (str1Obj[key] != str2Obj[key]) {
            return false;
        }
    }
    for (let key in str2Obj) {
        if (str2Obj[key] != str1Obj[key]) {
            return false;
        }
    }

    return true;
}

console.log(anagram("elbow", "below"));

let mods = (...args) => {
    let argList = [...args];
    console.log(argList);
}

console.log(mods(1, 2, 3, 3));