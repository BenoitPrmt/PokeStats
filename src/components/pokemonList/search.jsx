import {Search, X, Loader2} from "lucide-react";
import {useEffect, useState, useRef} from "react";
import {useDebounce} from "@uidotdev/usehooks";
import {useQueryState} from "nuqs";
import {getCorrespondingPokemons} from "../../utils/pokemon.js";
import {getAllPokemons} from "../../api/pokemons.js";
import CardPokemon from "../card-pokemon.jsx";

const SearchPokemonList = () => {
    const [localSearch, setLocalSearch] = useQueryState("pokemon", {defaultValue: ""});
    const debouncedSearchTerm = useDebounce(localSearch, 500);
    const [isSearching, setIsSearching] = useState(false);
    const [pokemons, setPokemons] = useState([]);
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setLocalSearch(e.target.value);
    };

    const clearSearch = () => {
        setLocalSearch("");
        setPokemons([]);
        inputRef.current?.focus();
    };

    useEffect(() => {
        const searchPokemons = async () => {
            setIsSearching(true);
            try {
                if (debouncedSearchTerm) {
                    const allPokemons = await getAllPokemons();
                    const searchResults = await getCorrespondingPokemons(debouncedSearchTerm, allPokemons);
                    setPokemons(searchResults);
                } else {
                    setPokemons([]);
                }
            } catch (error) {
                console.error("Erreur lors de la recherche:", error);
            } finally {
                setIsSearching(false);
            }
        };

        searchPokemons();
    }, [debouncedSearchTerm]);

    return (
        <div className="flex flex-col items-center w-full mx-auto relative">
            <div className="w-full relative">
                <div
                    className={`bg-white rounded-2xl flex items-center gap-2 px-4 py-3 border transition-all duration-300 w-full max-w-md mx-auto`}
                >
                    <Search className={`flex-shrink-0 ${isSearching ? "text-blue-500" : "text-gray-400"}`} size={20}/>
                    <input
                        type="text"
                        placeholder="Rechercher un Pokémon"
                        className="focus:outline-none w-full text-gray-700 placeholder-gray-400"
                        onChange={handleChange}
                        value={localSearch}
                        name="search"
                        aria-label="Rechercher un Pokémon"
                    />
                    {isSearching ? (
                        <Loader2 className="animate-spin text-blue-500 flex-shrink-0" size={20}/>
                    ) : localSearch ? (
                        <button
                            onClick={clearSearch}
                            className="flex-shrink-0 p-1 rounded-full hover:bg-gray-100"
                            aria-label="Effacer la recherche"
                        >
                            <X size={16} className="text-gray-500"/>
                        </button>
                    ) : null}
                </div>

                {isSearching && (
                    <div className="w-full flex justify-center mt-4">
                        <span className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded-full">
                            Recherche en cours...
                        </span>
                    </div>
                )}
            </div>

            {pokemons.length > 0 && (
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 px-8 lg:px-0 lg:grid-cols-4 gap-x-24 gap-y-48 py-52">
                        {pokemons.map((pokemon) => (
                            <CardPokemon key={pokemon.id} pokemon={pokemon}/>
                        ))}
                    </div>
                </div>
            )}

            {localSearch && !isSearching && pokemons.length === 0 && (
                <div className="mt-2 bg-white rounded-xl border border-slate-200 py-6 px-4 w-full text-center max-w-md mx-auto">
                    <p className="text-gray-500">Aucun Pokémon trouvé</p>
                    <p className="text-sm text-gray-400 mt-1">Essayez avec un autre terme</p>
                </div>
            )}
        </div>
    );
};

export default SearchPokemonList;