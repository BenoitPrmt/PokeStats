import {Search} from "lucide-react";
import {useEffect, useState} from "react";
import {useDebounce} from "@uidotdev/usehooks";
import {useQueryState} from "nuqs";
import {getCorrespondingPokemons} from "../../utils/pokemon.js";
import {getAllPokemons} from "../../api/pokemons.js";

const SearchPokemonList = () => {
    const [localSearch, setLocalSearch] = useQueryState("pokemon", {defaultValue: ""});
    const debouncedSearchTerm = useDebounce(localSearch, 1000);
    const [isSearching, setIsSearching] = useState(false);
    const [pokemons, setPokemons] = useState([]);

    const handleChange = (e) => {
        setLocalSearch(e.target.value);
    };

    useEffect(() => {
        const searchHN = async () => {
            setIsSearching(true);
            if (debouncedSearchTerm) {
                const pokemons = await getAllPokemons();
                const searchResults = await getCorrespondingPokemons(debouncedSearchTerm, pokemons);
                setPokemons(searchResults);
            }

            setIsSearching(false);
        };

        searchHN();
    }, [debouncedSearchTerm]);

    return (
        <div className="flex flex-col items-center gap-4 relative">
            <div
                className="min-w-sm bg-white rounded-xl flex items-center justify-center gap-2 px-2 py-2 border border-slate-200">
                <input
                    type="text"
                    placeholder="Rechercher un Pokémon"
                    className="focus:outline-none px-2 w-full"
                    onChange={handleChange}
                    value={localSearch}
                    name="search"
                />
                <button disabled={isSearching}>
                    <Search className="opacity-50 flex-shrink-0"/>
                </button>
            </div>
            {isSearching && <p>Recherche en cours...</p>}
            {pokemons.length > 0 && (
                <ul className="bg-white rounded-xl border border-slate-200 w-full">
                    {pokemons.map((pokemon) => (
                        <li key={pokemon.id} className="border-b border-slate-200 text-black">
                            <p>{pokemon.name.fr}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchPokemonList;
