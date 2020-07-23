let dropdown = document.querySelector('.dropdown-holder')

dropdown.addEventListener('mouseenter', (e) => {
  if (dropdown.classList.contains('closed')) {
    dropdown.classList.remove('closed')
  }
})

dropdown.addEventListener('mouseleave', (e) => {
  if (!dropdown.classList.contains('closed')) {
    dropdown.classList.add('closed')  
  } 
})