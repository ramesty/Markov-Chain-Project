import CustomDropdown from "../components/CustomDropdown"
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"
import { useData } from "../hooks/useData"

const periods = [
    {value: "", label: "Select a period"},
    { value: "5d", label: "5 Days" },
    { value: "1mo", label: "1 Month" },
    { value: "3mo", label: "3 Months" },
    { value: "6mo", label: "6 Months" },
    { value: "1y", label: "1 Year" },
    { value: "2y", label: "2 Years" },
    { value: "5y", label: "5 Years" },
];

const walks = [
    {value: "", label: "Select a # of walks"},
    {value: "1", label: "1 random walk"},
    {value: "5", label: "5 random walks"},
    {value: "10", label: "10 random walks"},
];


function SideBarLayout(){

    const { fetchData, updateInputTicker, updateInputPeriod, updateInputWalk } = useData()

    return(

        <div className="flex flex-col bg-blue-600 p-2 rounded-lg gap-2">
            <CustomInput onUpdate={updateInputTicker}/>
            <CustomDropdown title="Period" options={periods} onSelect={updateInputPeriod} />
            <CustomDropdown title="Markov Walks" options={walks} onSelect={updateInputWalk}/>
            <CustomButton fetchData={fetchData}/>
        </div>
    )

}

export default SideBarLayout