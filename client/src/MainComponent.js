import axios from "axios";
import { useCallback, useState, useEffect } from "react";
import './MainComponent.css';

const MainComponent = () => {
    //This component will have all the business logic for your App */
    const [values, setValues] = useState([]);
    const [value, setValue] = useState("");
    
    const getAllNumbers = useCallback( async () => {
        const values = await axios.get('/api/values/all');
        setValues();
        
    }, []);

    // we will use nginx to redirect it to the proper URL
    const saveNumber = useCallback(
        async event => {
          event.preventDefault();
    
          await axios.post("/api/values", {
            value
          });
    
          setValue("");
          getAllNumbers();
        },
        [value, getAllNumbers]
      );

      useEffect(() => {
        getAllNumbers();
      });
    
    return (
        <div>
           <button onClick={getAllNumbers}>Get All the Numbers</button><br/> 
           <span className="title">Values</span>
           <div className="values">
            {values.map((value => <div className="value">{value}</div>))}
        </div>
        <form className="form" onSubmit={saveNumber}>
        <label>Enter your value: </label>
        <input
          value={value}
          onChange={event => {
            setValue(event.target.value);
          }}
        />
        <button>Submit</button>
      </form>

        </div>
    )


}

export default MainComponent;