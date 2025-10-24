import CustomOutput from "../components/CustomOutput"
import { useData } from "../hooks/useData";


function OutputLayout(){

    const { data } = useData();

    return(
        // <div className="h-full border border-white grid grid-rows-3 px-2">
        <div className="h-full border border-white p-4">   

            {data && (
                <div className="flex flex-col text-center px-4 gap-8"> 
                    
                    <div className="p-2 bg-blue-600 rounded-sm">

                        <h1 className="font-bold p-4">Transition Matrix</h1>

                        <div className="grid grid-cols-6 grid-rows-6 text-center gap-1">
                            {/* Top-left empty cell */}
                            <div className="bg-blue-500 rounded-sm font-bold" ></div>

                            {/* Column headers (top row) */}
                            {Object.keys(data.transition_matrix).map((state) => (
                                <div key={`col-${state}`} className="bg-blue-500 rounded-sm font-bold">
                                {state}
                                </div>
                            ))}

                            {/* Rows with row headers + matrix values */}
                            {Object.entries(data.transition_matrix).map(([rowState, transitions]) => (
                                <>
                                {/* Row header (left column) */}
                                <div key={`row-${rowState}`} className="bg-blue-500 rounded-sm font-bold">
                                    {rowState}
                                </div>

                                {/* Row values */}
                                {Object.keys(data.transition_matrix).map((colState) => (
                                    <div key={`${rowState}-${colState}`} className="bg-blue-500 rounded-sm">
                                    {transitions[colState]}
                                    </div>
                                ))}
                                </>
                            ))}
                        </div>
                    </div>


                    <div className="p-2 px-16 bg-blue-600 rounded-sm">
                        <h1 className="font-bold p-4">Steady State Vector</h1>
                        <div className="grid grid-cols-2 grid-rows-6 gap-2 text-center">
                            {Object.entries(data.steady_state_vector).map(([rowState, probability]) => (
                                <>
                                    <div className="bg-blue-500 rounded-sm font-bold">
                                    {rowState}
                                    </div>
                                    <div className="bg-blue-500 rounded-sm font-bold">
                                    {probability}
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>

                </div>
            )}



            {/* <CustomOutput title="Transition Probability Matrix" data={data.transition_matrix} />
            <CustomOutput title="Steady State Distribution" data={JSON.stringify(data?.steady_state_vector, null, 2)}/>
            <CustomOutput title="Random Markov Walk" data={JSON.stringify(data?.random_walk, null, 2)}/> */}
        </div>
    )
}

export default OutputLayout
