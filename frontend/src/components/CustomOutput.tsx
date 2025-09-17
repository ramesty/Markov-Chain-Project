import CustomTitle from "./CustomTitle"

function CustomOutput({title} : {title:string}){
    return(
        <div className="grid grid-rows-5 border border-white pb-4 px-2">
            <div className="row-span-1">
                <CustomTitle title={title} />
            </div>
            <div className="row-span-4 border border-white">
                <p>cheese</p>
            </div>
        </div>
    )
}
export default CustomOutput