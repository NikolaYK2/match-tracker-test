"use client";
import { Accordion } from "@/app/_common/components/accordion";
import { Typography } from "@/app/_common/components/typography";
import { Error } from "@/app/_common/components/error";
import { useMatchesData } from "@/app/_features/fronttemp/lib";
import { MatchItem } from "@/app/_features/fronttemp/ui/teamMatch";
import { Loading } from "@/app/_common/components/loading";
import { RefreshButton } from "@/app/_common/components/refreshButton";

export default function Home() {
  const { data, error, loading, fetchData, setError } = useMatchesData();

  return (
    <section>
      {loading && <Loading />}
      <header className="flex justify-between items-center mt-[53px] flex-wrap">
        <Typography variant="tacticSans">Match Tracker</Typography>
        <Error className={"ml-auto"} message={error} setError={setError} />
        <RefreshButton onClick={fetchData} loading={loading} />
      </header>

      <Accordion type="single" collapsible>
        {data.matches?.map((match) => <MatchItem key={match.title} match={match} />)}
      </Accordion>
    </section>
  );
}
