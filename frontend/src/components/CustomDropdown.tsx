import CustomTitle from "./CustomTitle"

function CustomDropdown( {title} : {title:string} ){
    return(
        <div>
            <CustomTitle title={title}/>
            <select className="shadow-md rounded px-3 py-2 bg-white text-black dark:bg-gray-700 dark:text-white">
                <option value="">Select an option</option>
                <option value="one">Option One</option>
                <option value="two">Option Two</option>
            </select>
        </div>
    )
}
export default CustomDropdown