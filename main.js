

//========== Ex1 ==========

// const checkNumb = (number) => {
// 	if(number % 3 === 0 && number % 5 === 0) return console.log('FizzBuzz')
// 	else if(number % 3 === 0 ) return console.log('Fizz')
// 	else if(number % 5 === 0 ) return console.log('Buzz')
// 	else return console.log('nu se imparte nici la 3 nici la 5 ')
// }

// checkNumb(7)



//========== Ex2 ==========


//------ example 1 

// const findDubled = (list, k) => list.some(listItem => listItem === k)

//-------example 2

// const findDubled = (list, k) => list.includes(k)

//-------example 3

// const findDubled = (list, k) => Boolean(list.find(listItem => listItem === k))

// console.log(findDubled([1,2,3,4,5], 8))



//========== Ex3 ==========

//------- example 1 ---------

// const findDubled = (list, k) => list.includes(k)

// const filtredList = (list) => {
// 	return list.reduce((acc, curr) => {
// 		if(!findDubled(acc, curr)) acc.push(curr)

// 			return acc
// 	}, [])
// }

// console.log(filtredList([1,1,2,1,2,3,1,2,3,5,4,4,5,]))

//------- example 2 ---------

// const arr = [1,2,3,3,3,4,4,5,6,7]

// const result = arr.filter((item, index) => {
// 	if(index === 0) return true

// 	for(let i = 0; i < index; i++) {
// 		if(arr[i] === item) return false
// 	}
// 	return true
// })

// console.log(result)


//------- example 3 ---------

// const arr = [1,2,3,3,3,4,4,5,6,7]

// const unArr = arr.filter((value, index) => arr.indexOf(value) === index)

// console.log(unArr)


//------- example 4 ---------

// const arr = [1,2,3,3,3,4,4,5,6,7]

// const result = new Set(arr)

// console.log(Array.from(result))



//========== Ex4 ==========

//------- example 1 ---------

// const result = (list) => {
// 	return list.some((listItem, index) => {
// 		return list.some((secondItem, secondIndex) => {
// 			return listItem === secondItem && index !== secondIndex
// 		})
// 	})
// }



//------- example 2 ---------

// const result = (list) => {
// 	const uniqList = Array.from(new Set(list))

// 	return list.length === uniqList.length
// }

// console.log(result([1,2,3]))


//========== Ex5 ==========

// const countVocale = (str) => {
// 	let count = 0
// 	let vocale = ['a', 'e', 'i', 'o', 'u']
	
// 	for(let i = 0; i < str.length; i++) {
// 		if(vocale.includes(str[i].toLowerCase())) count++
// 	}
// 	return count
// }

// console.log(countVocale('Hello world'))


//========== Ex6 ==========

// const listStr = ['Vasile', 'Ion', 'Artiom', 'Cristina', 'Igor']

// const result = listStr.sort((a, b) => a.length - b.length)

// console.log(result)
