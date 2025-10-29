import TransitionMatrix from "../components/TransitionMatrix";
import SteadyStateVector from "../components/SteadyStateVector";

function OutputLayout(){

    return(
        <div className="h-full border border-white p-4"> 
            <div className="flex flex-col text-center px-4 gap-8"> 
                <TransitionMatrix/>
                <SteadyStateVector/>
            </div>
        </div>
        
    )
}

export default OutputLayout
