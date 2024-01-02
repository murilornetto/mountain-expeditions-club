function clickMenu(){
  if(itens.style.display == 'block'){
      itens.style.display = 'none';  
      document.getElementById("burguer-icon").src = "img/menu-hamburguer.svg";
  }else{
      itens.style.display = 'block';
      document.getElementById("burguer-icon").src = "img/close-menu-hamburguer.svg";
  }
  
}