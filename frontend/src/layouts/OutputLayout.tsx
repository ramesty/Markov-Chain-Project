import CustomOutput from "../components/CustomOutput"

function OutputLayout(){
    return(
        <div className="h-full border border-white grid grid-rows-3 px-2">
            <CustomOutput title="Transition Probability Matrix"/>
            <CustomOutput title="Steady State Distribution"/>
            <CustomOutput title="Random Markov Walk"/>
        </div>
    )
}

export default OutputLayout