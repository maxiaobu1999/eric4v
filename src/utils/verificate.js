
//验证手机号
export function verifyPhone(rule, value, callback) {
	let reg = /^[1][3, 4, 5, 6, 7, 8, 9][0-9]{9}$/
	if(!reg.test(value)){
		return callback(new Error('请输入正确的手机号码'))
	}
	callback()
}

//车牌号码
export function verifyCars(rule, value, callback) {
	let reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/
	if(!reg.test(value)){
		return callback(new Error('请输入正确的车牌号码'))
	}
	callback()
}
// 判断是否符合 8-12位，数字、字母、特殊符号任意两种的组合
const  isValidCombination = (str)=> {  
    // 长度检查  
    if (str.length < 8 || str.length > 12) {  
        return false;  
    }  
  
    // 检查是否有数字  
    const hasDigit = /\d/.test(str);  
    // 检查是否有字母  
    const hasLetter = /[a-zA-Z]/.test(str);  
    // 检查是否有特殊符号  
    const hasSpecialChar = /[^a-zA-Z0-9]/.test(str);  
  
    // 确保至少有两种类型的字符  
    return (hasDigit && hasLetter) || (hasDigit && hasSpecialChar) || (hasLetter && hasSpecialChar);  
} 
export function verifyPassWord(rule, value, callback) {
	if (!isValidCombination(value)) {
		callback(new Error('8-12位，数字、字母、特殊符号任意两种的组合'));
	} else {
		callback();
	}
}
