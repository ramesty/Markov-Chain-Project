
type CustomButtonProps = {
  fetchData: () => Promise<void>;
};

function CustomButton({fetchData} : CustomButtonProps){
    return(
        <div className="flex items-center justify-center bg-blue-500 rounded-sm p-2">
            <button onClick={fetchData} className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </div>
    )
}
export default CustomButton