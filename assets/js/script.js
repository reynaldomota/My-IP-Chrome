
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-207688318-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'assets/js/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


const year = new Date().getFullYear()
const url = 'http://ip.codesoft.com.br/?format=json'

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


