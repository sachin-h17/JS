//buttons and counter text
const counter = document.querySelector('#counter')
const btns = document.querySelectorAll('.btn')


//initialize the count variable
let count = 0

btns.forEach((btn)=> {
  btn.addEventListener('click', (e) => {
  const styles = e.currentTarget.classList

  if(styles.contains('Increment')) {
    count++
  } else if(styles.contains('Decrement')) {
    count--
  } else{
    count = 0
  }
  if (count < 0){
    document.getElementById('error').style.display="inline-block";

  }
  else if(count > 0){
    document.getElementById('error').style.display="none";


  }
  counter.textContent = count
})
})
