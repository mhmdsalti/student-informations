function rand(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum);
  }
  rand(18, 24);


  function Data (name , email , mobile ){
this.name=name;
this.email=email;
this.mobile=mobile;

this.age=rand(18,24);

  }


  function render (){

    const container = document.getElementById("tableContainer");
    const table =document.createElement("table");
    container.appendChild(table);










  }