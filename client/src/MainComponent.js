import axios from "axios";
import { useCallback } from "react";

const MainComponent = () => {
    //This component will have all the business logic for your App */
    const getAllNumbers = useCallback(() => {
        
    })

    return (
        <div>
           <button onClick={getAllNumbers}>Get All the Numbers</button> 
        </div>
    )


}

export default MainComponent;