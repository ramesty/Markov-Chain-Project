import { useData } from "../hooks/useData";

function SteadyStateVector(){

    const { data } = useData();

    return(
        <>
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
        </>
    )
}

export default SteadyStateVector