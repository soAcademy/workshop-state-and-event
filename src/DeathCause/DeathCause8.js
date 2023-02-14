import {
  useInitNSumByYearChart,
  useDatasDeathInYear,
  useSumDeathInYear,
  useByProvince,
} from "./hooks";
import {
  ByCause,
  SelectYear,
  ByProvince,
  TrendChart,
  GenderChart,
} from "./Components";

const DeathCause7 = () => {
  const {
    yearsList,
    yearSelected,
    setYearSelected,
    uniqCause,
    uniqProvince,
    sumTrendByYear,
  } = useInitNSumByYearChart();

  const { datasDeathInYear } = useDatasDeathInYear({ yearSelected });

  const { filCause, setFilCause, datasByYear, sumByYear } = useSumDeathInYear({
    uniqCause,
    datasDeathInYear,
  });

  const { datasByProveince, sumByProvince } = useByProvince({
    uniqProvince,
    filCause,
    datasDeathInYear,
  });

  //outside hook
  const yearFromTo = Math.min(...yearsList) + " - " + Math.max(...yearsList);

  return (
    <div className="flex flex-col gap-y-1 font-prompt p-4">
      <h1 className="text-2xl font-bold">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี {yearFromTo}
      </h1>

      <SelectYear
        yearSelected={yearSelected}
        setYearSelected={setYearSelected}
        yearsList={yearsList}
      />

      <div className="w-full flex flex-col md:flex-row gap-1 text-sm">
        <ByCause
          yearSelected={yearSelected}
          datasByYear={datasByYear}
          sumByYear={sumByYear}
          filCause={filCause}
          setFilCause={setFilCause}
        />
        <ByProvince
          yearSelected={yearSelected}
          datasByProveince={datasByProveince}
          sumByProvince={sumByProvince}
          filCause={filCause}
        />
        <div className="chartBlock w-full md:w-4/12 flex flex-col gap-y-1">
          <TrendChart sumTrendByYear={sumTrendByYear} />
          {sumByYear > 0 && (
            <GenderChart
              datasByYear={datasByYear}
              yearSelected={yearSelected}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DeathCause7;
