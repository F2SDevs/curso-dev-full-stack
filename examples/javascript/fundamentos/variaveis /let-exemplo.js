function exemplo() {
    let numero = 5;
    console.log(numero); // Mostra 5
  
    {
      let numero = 10;
      console.log(numero); // Mostra 10
    }
  
    console.log(numero); // Mostra 5
  }
  
  exemplo();
  