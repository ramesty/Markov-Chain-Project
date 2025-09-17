import CustomDropdown from "../components/CustomDropdown"
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"

function SideBarLayout(){
    return(

        <div className="border border-white px-2">
            <CustomInput />
            <CustomDropdown title="Period" />
            <CustomDropdown title="Markov Walks" />
            <CustomButton />
        </div>
    )

}

export default SideBarLayout