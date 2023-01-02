function toggleMode() {
  const html = document.documentElement

  html.classList.toggle('light')
  
  //get an img tag
  const img = document.querySelector('#profile img')
    
//change the src of the img tag
//replace the image
   if(html.classList.contains('light')) {
     //if you have light node, add image light
    img.setAttribute('src', './assets/images/Avatar-light.png')
    img.setAttribute('alt', 'Photo of Arthur Lacerda, wearing a black.')
  } else {
    // if it has no light mode, keep normal image
    img.setAttribute('src', './assets/images/Avatar.png')
    img.setAttribute('alt', 'Photo of Arthur Lacerda, wearing a blue shirt and a laptop in the background.')
  }
}