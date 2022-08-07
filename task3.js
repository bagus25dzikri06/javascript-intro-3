//Promise menggunakan then-catch
const isString = (currentValue) => typeof currentValue === 'string' === true
const cariNama = (query, dataNama) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof query === 'string' === false) reject(new Error('Input query cari nama harus berupa string'))
      if (typeof dataNama === 'object' === false) reject(new Error('Input data nama harus berupa array'))
      if (dataNama.every(isString) === false) reject(new Error('Input data tidak valid'))

      let hasilCariNama = []
      for (let i = 0; i < dataNama.length; i++) {
        if (dataNama[i].toLowerCase().includes(query) === true) {
          hasilCariNama.push(dataNama[i])
        }
      }

      if(hasilCariNama.length > 0) {
        resolve(hasilCariNama)
      } else {
        reject(new Error('Data nama tidak ditemukan'))
      }
    }, 3000)
  })
}

const nameFilter = (query, dataNama) => {
  cariNama(query, dataNama).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err.message)
  })
}

nameFilter('an', [
  'Abigail', 'Alexandra', 'Alison', 'Amanda', 
  'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn',
  'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 
  'Olivia', 'Penelope'
])
nameFilter('leg', [
  'Abigail', 'Alexandra', 'Alison', 'Amanda', 
  'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn',
  'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 
  'Olivia', 'Penelope'
])
nameFilter(3, [
  'Abigail', 'Alexandra', 'Alison', 'Amanda', 
  'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn',
  'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 
  'Olivia', 'Penelope'
])

//Promise menggunakan try-catch
const isNumber = (currentValue) => typeof currentValue === 'number' === true
const multipleSelection = (divider, numArr, arrSort) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof divider === 'number' === false) reject(new Error('Input pembagi nama harus berupa string'))
      if (typeof numArr === 'object' === false) reject(new Error('Input data angka harus berupa array'))
      if (numArr.every(isNumber) === false) reject(new Error('Input data tidak valid'))

      let resultArr = []
      for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % divider === 0) {
          resultArr.push(numArr[i])
        }
      }

      if (resultArr.length > 0) {
        resolve(arrSort(resultArr))
      } else {
        reject(new Error('Data angka tidak ditemukan'))
      }
    }, 4000)
  })
}

const arrSort = (arr) => {
  return arr.sort((a, b) => {
    return a - b
  })
}

const seleksiKelipatan = async (pembagi, arr, arrSort) => {
  try {
    const data = await multipleSelection(pembagi, arr, arrSort)
    console.log(data)
  } catch (err) {
    console.log(err.message)
  }
}

seleksiKelipatan(5, [2, 25, 4, 14, 17, 30, 8], arrSort)
seleksiKelipatan('lima', [2, 25, 4, 14, 17, 30, 8], arrSort)
seleksiKelipatan(20, [2, 25, 4, 14, 17, 30, 8], arrSort)