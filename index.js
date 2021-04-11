function getjson(){
    var country = document.getElementById("country").value;
    var dateOne = document.getElementById("d1").value;
    var dateTwo = document.getElementById("d2").value;
    var request = new XMLHttpRequest();
request.open('GET', `https://api.covid19api.com/country/${country}?from=${dateOne}T00:00:00Z&to=${dateTwo}T00:00:00Z`, true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
      
    data.forEach((object) => {
            myFunction(object.Active,object.Deaths,object.Recovered);
    })
  } else {
    console.log('error')
  }
  }

request.send();

}
function myFunction(confirm, death, active) {
    var parent = document.getElementsByClassName("result");
    var para = document.createElement("div");
    para.classList.add("result");
    para.innerHTML = "Confirmed cases : " + confirm + " " +
        "<br>Active Cases : " + active + " " +
        "<br>Death Cases : " + death;
    document.body.appendChild(para);

}