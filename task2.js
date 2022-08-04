const getMonth = (callback) => {
  setTimeout(() => {
    let error = false,
    month = [
      'January', 'February', 'March', 'April', 
      'May', 'June', 'July', 'August', 
      'September', 'October', 'November', 'December'
    ]

    if (!error) {
      callback(null, month)
    } else {
      callback(new Error('Sorry, data not found'), [])
    }
  }, 4000)
}

const monthMap = async (err, arr) => {
  try {
    if (err !== null) throw 'Sorry, data not found'
    const data = await arr.map((item) => {
      return item
    }).join('\n')
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

getMonth(monthMap)