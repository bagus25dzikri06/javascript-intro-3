const multiply = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num <= 16) {
        resolve(num * num)
      } else {
        reject(new Error('Number is more than 16'))
      }
    }, 2000)
  })
}

const kuadrat = (num) => {
  multiply(num).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err.message)
  })
}

const square = async (num) => {
  try {
    const data = await multiply(num)
    console.log(data)
  } catch (err) {
    console.log(err.message)
  }
}

kuadrat(8) //64
kuadrat(kuadrat(4)) /* 
16
Number is more than 16
*/
kuadrat(34) //Number is more than 16

square(10) //100
square(square(square(5))) /* 
25
Number is more than 16
Number is more than 16
*/
square(24) //Number is more than 16