function nestedTarget(){
  const target = document.getElementById('nested').querySelector('div.target');
  return target;
}

function getFirstSelector(selector){
  const sel = document.querySelector(selector);
  return sel;
}

function deepestChild(){
  const sel = document.getElementById('grand-node').querySelector('div div div div div');
  return sel;
}

function increaseRankBy(n){
  var sel = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < sel.length; i++){
    var num = 0;
    num = parseInt(sel[i].innerHTML+n);
    sel[i].innerHTML = parseInt(sel[i])+num;
  }

  //num++;
  //return num;
}
