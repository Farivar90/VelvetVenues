import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import handleFavorites from '../../components/Favorites/HandleFavorites';
import { setListings } from '../../store/listingsReducer';
import axios from 'axios';
import FavoriteButton from '../Favorites/FavoriteButton';
import { Link } from 'react-router-dom';

function Favorites() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);
  const userFavorites = useSelector(state => state.favorites) || [];
  const state = useSelector(state => state.entities.listings);
  const [highlightedListing, setHighlightedListing] = useState(null);
  const [showFavorites, setShowFavorites] = useState(true);
  const userOwnedListings = Object.values(useSelector(state => state.entities.listings)).filter(listing => listing.userId === currentUser);
  const favoriteListings = Object.values(state).filter(listing => {
    const favoriteIds = userFavorites.map(favorite => favorite.listingId);
    return favoriteIds.includes(listing.id);
  });

  useEffect(() => {
    handleFavorites.getUserFavorites(dispatch)
      .catch(error => {
        console.error("Failed to fetch user's favorites:", error);
      });
  }, [dispatch]);

  useEffect(() => {
    async function fetchListings() {
      try {
        const response = await axios.get('/api/listings');
        dispatch(setListings(response.data));
      } catch (error) {
        console.error("Failed to fetch listings:", error);
      }
    }

    fetchListings();
  }, [dispatch]);

  // console.log(userOwnedListings, 'sf')

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  if (!state) {
    return <div className="loading"><img src="/resfiles/R.gif" alt="loading" /></div>;
  }

  return (
    <div className="listings-page">
      <div className="toggle-container">
      <button onClick={() => setShowFavorites(!showFavorites)}>
          {showFavorites ? "Your Listings" : "Your Favorites"}
        </button>
      </div>
      <div className="listings-container">
        {showFavorites ? (
          favoriteListings.map((listing) => {
            const imageUrl = (listing.photos && listing.photos.length > 0)
              ? listing.photos[0].imageUrl
              : '/resfiles/default-profile-image.png';

            return (
              <div className="listing-wrapper" key={listing.id}>
                <Link
                to={`/listings/${listing.id}`}
                className={`listing-card ${highlightedListing === listing.id ? 'highlighted' : ''}`}
                onMouseOver={() => setHighlightedListing(listing.id)}
                onMouseOut={() => setHighlightedListing(null)}
              >
                <img
                  src={imageUrl}
                  alt={`${listing.id}'s img`}
                  className="listing-image"
                />
                <h2>{listing.location}</h2>
                <p className="price">${listing.price.toLocaleString("en-US")}</p>
                <FavoriteButton
                  className="favorite-button"
                  listingId={listing.id}
                  defaultFavorite={true}
                />
              </Link>
              </div>
            );
          })
        ) : (
          userOwnedListings.length > 0 ? (
            userOwnedListings.map((listing) => {
              const imageUrl = (listing.photos && listing.photos.length > 0)
                ? listing.photos[0].imageUrl
                : '/resfiles/default-profile-image.png';

              return (
                <div className="listing-wrapper" key={listing.id}>
                  <Link
                to={`/listings/${listing.id}`}
                className={`listing-card ${highlightedListing === listing.id ? 'highlighted' : ''}`}
                onMouseOver={() => setHighlightedListing(listing.id)}
                onMouseOut={() => setHighlightedListing(null)}
              >
                <img
                  src={imageUrl}
                  alt={`${listing.id}'s img`}
                  className="listing-image"
                />
                <h2>{listing.location}</h2>
                <p className="price">${listing.price.toLocaleString("en-US")}</p>
                <FavoriteButton
                  className="favorite-button"
                  listingId={listing.id}
                  defaultFavorite={true}
                />
              </Link>
                </div>
              );
            })
          ) : (
            <p>You don't have any properties for sale.</p>
          )
        )}
      </div>
    </div>
  );
}

export default Favorites;














// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import handleFavorites from '../../components/Favorites/HandleFavorites';
// import { setListings } from '../../store/listingsReducer';
// import axios from 'axios';
// import FavoriteButton from '../Favorites/FavoriteButton';
// import { Link } from 'react-router-dom';

// function Favorites() {
//   const [showFavorites, setShowFavorites] = useState(true); // Toggle state
//   const dispatch = useDispatch();
//   const currentUser = useSelector(state => state.session.user);
//   const userFavorites = useSelector(state => state.favorites) || [];
//   const state = useSelector(state => state.entities.listings);
//   const [highlightedListing, setHighlightedListing] = useState(null);
  
//   const favoriteListings = Object.values(state).filter(listing => {
//     const favoriteIds = userFavorites.map(favorite => favorite.listingId);
//     return favoriteIds.includes(listing.id);
//   });
    
//   // console.log('userFavorites:', userFavorites);
//   // console.log('state:', state);
//   // console.log('favoriteListings:', favoriteListings);
  

//   useEffect(() => {
  
//     handleFavorites.getUserFavorites(dispatch)
//       .catch(error => {
//         console.error("Failed to fetch user's favorites:", error);
//       });
//   }, [dispatch]);

//   useEffect(() => {
//     async function fetchListings() {
//       try {
//         const response = await axios.get('/api/listings');
//         dispatch(setListings(response.data));
//       } catch (error) {
//         console.error("Failed to fetch listings:", error);
//       }
//     }

//     fetchListings();
//   }, [dispatch]);

//   if (!currentUser) {
//     return <Redirect to="/" />;
//   }

//   if (!state) {
//     return <div className="loading"><img src="/resfiles/R.gif" alt="loading" /></div>;
//   }
//   return (
//     <div className="listings-page">
//       <div className="toggle-container">
//         <button onClick={() => setShowFavorites(true)}>Your Favorites</button>
//         <button onClick={() => setShowFavorites(false)}>Your Listings</button>
//       </div>
//       <div className="listings-container">
//         {showFavorites ? (
//           favoriteListings.map((listing) => {
//           const imageUrl = (listing.photos && listing.photos.length > 0)
//             ? listing.photos[0].imageUrl
//             : '/resfiles/default-profile-image.png';

//           return (
//             <div className="listing-wrapper" key={listing.id}>
//               <Link
//                 to={`/listings/${listing.id}`}
//                 className={`listing-card ${highlightedListing === listing.id ? 'highlighted' : ''}`}
//                 onMouseOver={() => setHighlightedListing(listing.id)}
//                 onMouseOut={() => setHighlightedListing(null)}
//               >
//                 <img
//                   src={imageUrl}
//                   alt={`${listing.id}'s img`}
//                   className="listing-image"
//                 />
//                 <h2>{listing.location}</h2>
//                 <p className="price">${listing.price.toLocaleString("en-US")}</p>
//                 <FavoriteButton
//                   className="favorite-button"
//                   listingId={listing.id}
//                   defaultFavorite={true}
//                 />
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Favorites;
