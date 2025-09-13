import CustomOutput from "../components/CustomOutput"

function OutputLayout(){
    return(
        <div className="w-full h-full border border-white grid grid-cols-3 gap-4 py-4">
            <div className="border border-white"><CustomOutput/></div>
            <div className="border border-white"><CustomOutput/></div>
            <div className="border border-white"><CustomOutput/></div>
        </div>
    )
}

export default OutputLayout