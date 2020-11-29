
function sessionCount() {
  if(sessionStorage.clickCount) {
    sessionStorage.clickCount = Number(sessionStorage.clickCount) + 1;
  }
  else {
    sessionStorage.clickCount = 1;
  }
  document.getElementById('res1').innerHTML = "You have clicked cookee " + sessionStorage.clickCount + " time(s);"
}
function localCount() {
  if(localStorage.clickCount) {
    localStorage.clickCount = Number(localStorage.clickCount) + 1;
  }
  else {
    localStorage.clickCount = 1;
  }
  document.getElementById('res2').innerHTML = "You have clicked cookee " + localStorage.clickCount + " time(s);"
}





function deleteItems1() {

  sessionStorage.clickCount = 0;
  document.getElementById('res1').innerHTML = ""
}
function deleteItems2() {

  localStorage.clickCount = 0;
  document.getElementById('res2').innerHTML = ""
}
