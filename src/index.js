const axios = require('axios');

var pageBase = 'https://mikaelbang.github.io/';

var links = document.getElementsByTagName('li');

for ( var i = 0 ; i < links.length ; i++ ){
  let li = links[i];
  //console.log(li);

  li.addEventListener('click', () => {
    link(li.id);
  });
}

var link = (pageName) => {
  console.log(pageName);
  let page = pageName === 'home' ? pageBase : pageBase+pageName;
  axios.get(page)
  .then(function (response) {
    // handle success
    //console.log(response.data);
    document.title = pageName;
    window.history.pushState({"pageTitle":pageName},"", pageName);
    route(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}


var route = (page) =>{
  let el = document.createElement('html');
  el.innerHTML = page;
  let content = el.getElementsByTagName('main')[0].innerHTML;

  document.getElementById('content').innerHTML = content;
};