import React from "react";



function Options(){

  const[option, setOptions] = useState([
    {name: "Cafe", type:"Mocha", price: 3 },
    {name: "Cafe", type:"Capuccino", price: 2 },
    {name: "Cafe", type:"Espresso", price: 1 },  
  ]);


  return(
    <div className="option" >
      {options.map(option => (
          <Options name={option.name} type= {option.type} price={option.price} />
      ))}

    </div>
  );
}

export default App;
