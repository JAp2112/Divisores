function divisores()
{
  let a = document.getElementById("a");
  let b = document.getElementById("b");
  let resultado = document.getElementById("resultado");
  
  let va = parseInt(a.value);
  let vb = parseInt(b.value);
  let x = [];
  let j = 0;
  if(va < vb) {
    for(let i = 1; i <= vb; i++) 
        if ((va % i) == 0 && (vb % i) == 0)
            x[j++] = i;
    resultado.textContent = "Divisores são " + x;
  }
  if(vb < va) {
    for(let i = 1; i <= va; i++)
      if((va % i) == 0 && (vb % i) == 0) x[j++] = i;
    resultado.textContent = "Divisores são " + x;
  }
}