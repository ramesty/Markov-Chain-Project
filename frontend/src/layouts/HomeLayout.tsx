
import InputLayout from "./InputLayout"
import OutputLayout from "./OutputLayout"

function HomeLayout(){
    return(
        <div className="w-full h-full bg-white dark:bg-gray-800 border border-white grid grid-rows-5 px-8">
            <div className="row-span-2 border border-white"><InputLayout></InputLayout></div>
            <div className="row-span-2 border border-white"><OutputLayout></OutputLayout></div>
            <div className="row-span-1 border border-white"><p>cheese</p></div>
        </div>
    )
}

export default HomeLayout