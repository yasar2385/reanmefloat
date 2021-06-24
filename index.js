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
      let obj = {
        Original_lab: lab,
        Original_Id: el.parentElement.id,
        Seq_No: split[1]
      };
      ArrLab.push(obj);
    }
  }
);
console.log(ArrLab);
ArrLab.sort(function(a, b) {
  return a.Seq_No - b.Seq_No;
});

Array.from(document.getElementsByClassName('caption')).forEach(
  (el, ind, arr) => {
    console.log(ArrLab[ind].Original_lab, el.getAttribute('label'));
    let label = el.getAttribute('label');
    if (ArrLab[ind].Original_lab != label) {
      ArrLab[ind].ReNumberdLabel = el.getAttribute('label');
      el.setAttribute('label', ArrLab[ind].Original_lab);
      Array.from(el.querySelectorAll('.p')).forEach(child => {
        if (child.classList.contains('p')) {
          let split = label.split(' ')[1];
          child.setAttribute('data-del-label', split);
        }
      });
    } else {
      ArrLab[ind].ReNumberdLabel = '';
    }
  }
);

Array.from(ArrLab).forEach((item, ind, arr) => {
  var DOM = document.createElement('insert');
  if (item.ReNumberdLabel.length != 0) {
    document
      .querySelectorAll(`[rid="${item.Original_Id}"]`)
      .forEach((elm, i, ar) => {
        DOM.setAttribute('del_label', item.Original_lab);
        DOM.textContent = item.ReNumberdLabel;
        elm.innerHTML = DOM.outerHTML;
      });
  }
});
console.log(ArrLab);
