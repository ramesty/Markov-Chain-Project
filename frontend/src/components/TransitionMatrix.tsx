import { useData } from "../hooks/useData";

function TransitionMatrix(){

    const { data } = useData();

    return(
        <>
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

        </>
    )

}

export default TransitionMatrix