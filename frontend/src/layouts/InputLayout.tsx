import CustomDropdown from "../components/CustomDropdown"
import CustomInput from "../components/CustomInput"

function InputLayout(){
    return(
        <div className="w-full h-full border border-white grid grid-rows-3 px-16">
            <div className="border border-white"><CustomInput/></div>
            <div className="border border-white"><CustomDropdown title="drop 1"/></div>
            <div className="border border-white"><CustomDropdown title="drop 2"/></div>
        </div>
    )

}

export default InputLayout