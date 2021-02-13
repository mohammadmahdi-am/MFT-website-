document.getElementById("ham-menu").addEventListener("click",function (param) {
    document.getElementById("header-bottom").classList.toggle("d-none")
    document.getElementById("header-bottom").classList.toggle("d-flex")
  })


document.getElementsByClassName("")


let is_small_logo_added = false
document.addEventListener("scroll",function (param) {
  let header_bottom = document.getElementById("header-bottom")

  if(header_bottom.getBoundingClientRect().top <= 0){
    header_bottom.style.position = 'fixed';
    header_bottom.style.top = '0px';
    header_bottom.style.right = '0px';
    header_bottom.style.width = '100%';
    
    if(is_small_logo_added === false){
       $(`<img src="/images/logo.png" alt="mftlogo" id="mft-logo-small" class="d-none d-lg-inline-block" />`).insertBefore("#empty-div-dont-delete");
       
    }
    is_small_logo_added = true;
   
  }
  if(window.scrollY < 130){
    
    header_bottom.style.position = 'relative';
    header_bottom.style.top = '0px';
    header_bottom.style.right = '0px';
    header_bottom.style.width = 'auto';
    if(document.querySelector('#mft-logo-small') != null){

   
    var mft_logo_small = document.querySelector('#mft-logo-small');
    mft_logo_small.parentNode.removeChild(mft_logo_small)
    is_small_logo_added = false
   }

  }
  })  

  if(document.querySelectorAll(".magazine-image-container img") != null){
    let magazine_images  = document.querySelectorAll(".magazine-image-container");
    
    magazine_images.forEach(element => {
      
      element.is_added = false
      element.onmouseover = function(){
        
        if(element.is_added != true){

        
        let magazine_title = element.getAttribute("data-title-magazine")
        let magazine_description = element.getAttribute("data-title-description")
        element.innerHTML += 
        `
        <div class="d-flex flex-column magazine-text">
        <p class="magazine-title">${magazine_title}</p>
        <p class="magazine-description">${magazine_description}</p>
        </div>
        `
        element.is_added = true
      }
      
      }

      
      
    }); 
  }