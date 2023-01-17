import { MoviesGrid } from "../Components/MoviesGrid";
import { Search } from "../Components/Search";
import { useQuery } from "../hooks/useQuery";

export function LandingPage() {
  const query = useQuery();
  const search = query.get("search");
    return (
    <div>
        <Search/>
        <MoviesGrid key={search} />
    </div>
    );
}