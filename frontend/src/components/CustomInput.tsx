import CustomTitle from "./CustomTitle"

type CustomInputProps = {
    onUpdate: (value: string) => void;
};

function CustomInput({onUpdate} : CustomInputProps){

    return(
        <div className="bg-blue-500 rounded-sm p-4">
            <div>
                <CustomTitle title="Ticker"/>
            </div>
            <input type="text" className="shadow-md p-1 w-full rounded bg-white text-black dark:bg-gray-700 dark:text-white"
            onChange={(e) => onUpdate(e.target.value)}/>
        </div>
    )
}
export default CustomInput