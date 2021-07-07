var domainlist = ["another.com","example.com","example.net","èxample.com","example.xyz","secure.example.com","domain.com","google.com","secureexample.com","examplecom.evil.com","example.co","example.com","example.com","example.evil.com","eample.com","example.com.evil.com","exɑmple.com","exampple.com","secure.example","secure.examplė.com","phisher.example","com.example","example.online","securityexample.com"]
var alloweddomains = ['example.com',"secure.example.com"]
var list = document.getElementById('spoofed')
for(var t = 0;t < domainlist.length;t++){
  var current = Math.round(Math.random() * (domainlist.length - 1))
  
  var line = document.createElement('p')
  const domain = document.createTextNode(domainlist[current])
  const checkbox = document.createElement('input')
  checkbox.type = "checkbox"
  checkbox.onclick = function(){
    var line = this.parentElement
    if(alloweddomains.includes(domain.textContent) === true){
      line.style.color = 'green'
    }
    else{
      line.style.color = 'red'
    }
  }
  line.appendChild(domain);
  line.appendChild(checkbox)
  list.appendChild(line)
}
