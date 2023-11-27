

import { Hero } from "@/components";
import CarCard from "@components/CarCard";
import CustomFilter from "@components/CustomFilter";
import SearchBar from "@components/SearchBar";
import ShowMore from "@components/ShowMore";
import { fuels, yearsOfProduction } from "@constants";
import { HomeProps } from "@types";
import { fetchCars } from "@utils";

export default async function Home({ searchParams }: HomeProps) {
  const Cars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  }); 
  const isDataEmpty = !Array.isArray(Cars) || Cars.length < 1 || !Cars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Choose from different viarities of cars</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {Cars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

           <ShowMore
           pageNumber={(searchParams.limit || 10) / 10}
           isNext={(searchParams.limit || 10) > Cars.length}
           />


          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{Cars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
