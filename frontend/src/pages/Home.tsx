import HomeLayout from '../layouts/HomeLayout'

import { useData } from "../hooks/useData";
import CustomButton from '../components/CustomButton';



function Home() {

    const { data, loading, error, fetchData, updateInputPeriod, updateInputTicker } = useData();

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>;
 
    return (
      <div>
        <input className="border" type="text" onChange={(e) => updateInputPeriod(e.target.value)}/>
        <input className="border" type="text" onChange={(e) => updateInputTicker(e.target.value)}/>
        {/* <pre>{JSON.stringify(data?.transition_matrix, null, 2)}</pre>
        <pre>{JSON.stringify(data?.steady_state_vector, null, 2)}</pre>
        <pre>{JSON.stringify(data?.random_walk, null, 2)}</pre> */}
        <button onClick={() => fetchData("http://localhost:8000/stocks/AAPL/12mo")}>
          Fetch Data
        </button>

      </div>
    );

  // return (
    

    // <HomeLayout></HomeLayout>

  // )
}

export default Home
