import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import React from "react";
// import{useState} from "react"
// import './App.css';
import Check from "./Check"
import db from "../config"

function Table() {
  const query = db.collection('products')
  const [values, loading, error] = useCollectionOnce(query);
  const option = {
    idField: "id",
   
  };

    console.log(values)
 

  return (
    <div className="App">
        <div>
      <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {values && (
          <span>
            Collection:{' '}
            //if values .doc exist...
            {values.docs.map((doc) => (
              <React.Fragment key={doc.id}>
                {JSON.stringify(doc.data())},{' '}
              </React.Fragment>
            ))}
          </span>
        )}
      </p>
    </div>

      <header className="cloud-cafe"> Cloud Cafe </header>
      <div className = "cafes">
      <h2>Cafes</h2>
      <ul>
        <li></li>
      </ul>
      {/* <p>Mocha</p>
      <button>add</button>
      <p>Capuccino</p>
      <button>add</button>
      <p>espresso</p>
      <button>add</button> */}
      </div>

    <div className = "tes">
      <h2>Tes</h2>
      <p>Red</p>
      <button>add</button>
      <p>Green</p>
      <button>add</button>
    </div>

    <div className = "bites">
      <h2>Bites</h2>
      <p>Cinnamon roll</p>
      <button>add</button>
      <p>Muffin</p>
      <button>add</button>
      <p>Sandwich</p>
      <button>add</button>
    </div>

      <Check />

      <div className="send-kitchen">send-kitchen</div>
    </div>
  );
}

export default Table;