import CustomTitle from "./CustomTitle"

function CustomDropdown( {title} : {title:string} ){
    return(
        <div className="border border-white p-4">
            <CustomTitle title={title}/>
            <select className="w-full shadow-md rounded bg-white text-black dark:bg-gray-700 dark:text-white">
                <option value="">Select an option</option>
                <option value="one">Option One</option>
                <option value="two">Option Two</option>
            </select>
        </div>
    )
}
export default CustomDropdown