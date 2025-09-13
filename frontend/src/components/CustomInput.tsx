import CustomTitle from "./CustomTitle"

function CustomInput(){
    return(
        <div>
            <CustomTitle title="Ticker"/>
            <input type="text" className="shadow-md rounded px-3 py-2 bg-white text-black dark:bg-gray-700 dark:text-white"/>
        </div>

    )
}
export default CustomInput