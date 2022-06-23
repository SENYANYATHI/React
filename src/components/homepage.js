
import Additem  from "./Additem";
import { DisplayTransaction } from "./displayTransaction";


function Home (props) {
    return(
        <div>
<DisplayTransaction list={props.list}/>
   <Additem add={props.add} />
   
        </div>
    );
}

export default Home;