// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
var ArrLab = [];
Array.from(document.getElementsByClassName('caption')).forEach(
  (el, ind, arr) => {
    if (el.hasAttribute('label')) {
      let lab = el.getAttribute('label'),
        split = lab.split(' ');
      let obj = { label: lab, id: el.parentElement.id, no: split[1] };
      ArrLab.push(obj);
    }
  }
);
console.log(ArrLab);
ArrLab.sort(function(a, b) {
  return a.no - b.no;
});

Array.from(document.getElementsByClassName('caption')).forEach(
  (el, ind, arr) => {
    console.log(ArrLab[ind].label, el.getAttribute('label'));
    let oldlable = el.getAttribute('label');
    if (ArrLab[ind].label != oldlable) {
      ArrLab[ind].oldLabel = el.getAttribute('label');
      el.setAttribute('label', ArrLab[ind].label);
      Array.from(el.querySelectorAll('.p')).forEach(child => {
        console.log(child.id);
        if (child.classList.contains('p')) {
          let split = oldlable.split(' ')[1];
          child.setAttribute('data-del-label', split);
        }
      });
    }
  }
);

console.log(ArrLab);
