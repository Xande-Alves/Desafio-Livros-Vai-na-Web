import { createContext, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Importa o hook useLocation

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const location = useLocation(); // Obtém a URL atual

  // Limpa o termo de pesquisa ao sair da rota "/Pesquisa"
  useEffect(() => {
    if (location.pathname !== "/Pesquisa") {
      setTermoPesquisa(""); 
    }
  }, [location.pathname]);

  return (
    <SearchContext.Provider value={{ termoPesquisa, setTermoPesquisa }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
