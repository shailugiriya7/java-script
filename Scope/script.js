// clouser

function MakeFun(){
    let name="firefox";
  function Fungame(){
       console.log(name);
  }
Fungame()
}
MakeFun();

// lexical
function MakeFun(){
    let name="firefox";
  function Fungame(){
       console.log(name);
  }
  return Fungame;  //refrence retruns
}
const funtoo=MakeFun();
funtoo();
