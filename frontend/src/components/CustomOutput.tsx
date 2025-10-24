import CustomTitle from "./CustomTitle";

type Trend = "flat" | "down" | "strong down" | "up" | "strong up";

const trends: Trend[] = ["flat", "down", "strong down", "up", "strong up"];

function CustomOutput({ title, data }: { title: string; data: Record<Trend, Record<Trend, number>> }) {
  return (
    <div className="grid grid-rows-5 border border-white pb-4 px-2">

        <div className="row-span-1">
            <CustomTitle title={title} />
        </div>


        <div className="grid grid-cols-6 grid-rows-6 gap-2">

            first row
            <div className="col-start-1">
                {trends.map((outerTrend) =>
                    <p >{outerTrend}</p>
                )
            }
            </div>
            
            <div className="grid grid-cols-5 gap-2">
                {trends.map((outerTrend) =>
                    <p >{outerTrend}</p>
                )
            }
            </div>
        
            <div className="col-start-2 col-span-5 row-start-2 row-span-5 gap-2">
            {trends.map((outerTrend) =>
                trends.map((innerTrend) => (
                <p key={`${outerTrend}-${innerTrend}`}>{data[outerTrend][innerTrend]}</p>
                ))
            )}
            </div>
        </div>

    </div>
  );
}

export default CustomOutput;
