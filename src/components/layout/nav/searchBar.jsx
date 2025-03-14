import {Search} from "lucide-react";
import {useState} from "react";

const SearchBar = () => {
    const [pokemonName, setPokemonName] = useState("");

    const redirectToPokemonList = () => {
        if (!pokemonName) return;
        window.location.href = `/pokemons?pokemon=${pokemonName}`;
    }

    return (
        <div
            className="min-w-sm bg-white rounded-xl flex items-center justify-center gap-2 px-2 py-2 border border-slate-200">
            <input
                type="text"
                placeholder="Rechercher un Pokémon"
                className="focus:outline-none px-2 w-full"
                onChange={(e) => setPokemonName(e.target.value)}
                value={pokemonName}
                name="search"
            />
            <button onClick={redirectToPokemonList}>
                <Search className="opacity-50 flex-shrink-0"/>
            </button>
        </div>
    );
};

export default SearchBar;
