import CustomTitle from "./CustomTitle"

function CustomInput(){
    return(
        <div className="border border-white p-4">
            <div>
                <CustomTitle title="Ticker"/>
            </div>
            <input type="text" className="shadow-md rounded bg-white text-black dark:bg-gray-700 dark:text-white"/>
        </div>
    )
}
export default CustomInput