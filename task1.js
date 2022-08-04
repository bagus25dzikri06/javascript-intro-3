const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = [`Senin`, `Selasa`, `Rabu`, `Kamis`, `Jum'at`]
      let cek = dataDay.find((item) => {
        return item === day
      })
      if (cek) {
        resolve(cek)
      } else {
        reject(new Error(`Hari ini bukan hari kerja`))
      }
    }, 3000)
  })
}

//Menggunakan then-catch
const workdayCheck = async (day) => {
  await cekHariKerja(day).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err.message)
  })
}

//Menggunakan try-catch
const cekHari = async (day) => {
  try {
    const data = await cekHariKerja(day)
    console.log(data)
  } catch (err) {
    console.log(err.message)
  }
}

workdayCheck('Senin')
workdayCheck('Sabtu')

cekHari('Senin')
cekHari('Sabtu')