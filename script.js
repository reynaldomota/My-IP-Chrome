

const year = new Date().getFullYear()
const url = 'https://api.ipify.org/?format=json'

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    ip = data.ip
     document.getElementById('root').innerHTML = ip
     document.getElementById('year').innerHTML = `${year}`
})
.catch(function(err) {
    console.log(err);
});