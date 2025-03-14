import {Search} from "lucide-react";
import {useState} from "react";

// eslint-disable-next-line react/prop-types
const SearchBar = ({isMobile}) => {
    const [pokemonName, setPokemonName] = useState("");

    const redirectToPokemonList = () => {
        if (!pokemonName) return;
        window.location.href = `/pokemons?pokemon=${pokemonName}`;
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            redirectToPokemonList();
        }
    };

    return (
        <div
            className="flex items-center gap-1 px-2 py-1 border border-slate-200 bg-white rounded-full shadow-sm hover:shadow transition-all duration-300 w-full sm:w-60 md:w-64 lg:w-72">
            <input
                type="text"
                placeholder={isMobile ? "Rechercher..." : "Rechercher un Pokémon..."}
                className="focus:outline-none px-1 w-full min-w-0 flex-1 text-gray-700 placeholder-gray-400 text-sm"
                onChange={(e) => setPokemonName(e.target.value)}
                onKeyDown={handleKeyDown}
                value={pokemonName}
                name="search"
            />
            <button
                onClick={redirectToPokemonList}
                className="bg-[#ff4000] text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#dc2e01] transition-colors duration-300"
                aria-label="Rechercher"
            >
                <Search className="size-4"/>
            </button>
        </div>
    );
};

export default SearchBar;