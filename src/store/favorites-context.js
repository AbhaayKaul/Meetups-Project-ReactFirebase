import React, { createContext } from 'react'

const FavoritesContext = createContext({
    favorites :[],
    totalFavorites:0,
});

// function FavoritesContextProvider(props) {
//     const[userFavorites,setUserFaorites]=useState([]);

//     function addFavoriteHandler(favorites) {
        
//     }
// }
