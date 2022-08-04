//Target the main element
const main = document.getElementById('main')

//Loading placeholder
main.innerHTML = '<p>Loading...</p>'

//Fetch all users from JSON Placeholder
const fetchPromise = fetch('https://jsonplaceholder.typicode.com/users')

fetchPromise.then((res) => {
  return res.json()
}).then((names) => {
  //Append all user names to main element
  main.innerHTML = listOfNames(names)
}).catch((err) => {
  main.innerHTML = err
})


//List all users from JSON Placeholder
const listOfNames = (data) => {
  const names = data.map((name) => {
    return `<li>${name.name}</li>`
  }).join('\n')

  return `<ul>${names}</ul>`
}