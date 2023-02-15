//My solution

const inputs = Array.from(document.querySelectorAll('input'));
var lastSelected = null;


function holdKey(e){
    let selected = inputs.findIndex(input => input === e.target);
    if(e.target.checked){
         if(e.shiftKey && lastSelected != null ){
            if(selected>lastSelected){
                for(var i = lastSelected;i<selected;i++){
                    inputs[i].checked = true;
                }
            }else{
                for(var i = lastSelected;i>selected;i--){
                    inputs[i].checked = true;
                }
            }
         }
         lastSelected = inputs.findIndex(input => input === e.target);
        }else{
            lastSelected = null;
        }
}   

inputs.forEach(input => input.addEventListener('click',holdKey));


//Tutorial Solution

/* const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck)); */
