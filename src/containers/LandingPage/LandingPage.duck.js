import { addMarketplaceEntities } from '../../ducks/marketplaceData.duck';
import { denormalisedResponseEntities, entityRefs } from '../../util/data';
import { storableError } from '../../util/errors';

// ================ Action types ================ //

export const SET_INITIAL_STATE = 'app/LandingPage/SET_INITIAL_STATE';

export const QUERY_PROMOTED_LISTINGS_REQUEST = 'app/LandingPage/QUERY_PROMOTED_LISTINGS_REQUEST';
export const QUERY_PROMOTED_LISTINGS_SUCCESS = 'app/LandingPage/QUERY_PROMOTED_LISTINGS_SUCCESS';
export const QUERY_PROMOTED_LISTINGS_ERROR = 'app/LandingPage/QUERY_PROMOTED_LISTINGS_ERROR';

// ================ Reducer ================ //

const initialState = {
  queryPromotedListingsError: null,
  promotedListingRefs: [],
};

export default function landingPageReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case SET_INITIAL_STATE:
      return { ...initialState };
    case QUERY_PROMOTED_LISTINGS_REQUEST:
      return {
        ...state,
        promotedListingRefs: state.promotedListingRefs,
        queryPromotedListingsError: null,
      };
    case QUERY_PROMOTED_LISTINGS_SUCCESS:
      return { ...state, promotedListingRefs: payload.listingRefs };
    case QUERY_PROMOTED_LISTINGS_ERROR:
      return { ...state, promotedListingRefs: [], queryPromotedListingsError: payload };
    default:
      return state;
  }
}

// ================ Action creators ================ //

export const setInitialState = () => ({
  type: SET_INITIAL_STATE,
});

export const queryPromotedListingsRequest = () => ({
  type: QUERY_PROMOTED_LISTINGS_REQUEST,
});

export const queryPromotedListingsSuccess = listingRefs => ({
  type: QUERY_PROMOTED_LISTINGS_SUCCESS,
  payload: { listingRefs },
});

export const queryPromotedListingsError = e => ({
  type: QUERY_PROMOTED_LISTINGS_ERROR,
  error: true,
  payload: e,
});

// ================ Thunks ================ //

export const queryPromotedListings = () => (dispatch, getState, sdk) => {
  dispatch(queryPromotedListingsRequest());
  return sdk.listings
    .query({
      meta_promoted: true,
      include: ['author', 'author.profileImage', 'images'],
      'fields.image': [
        'variants.landscape-crop',
        'variants.landscape-crop2x',

        // Avatars
        'variants.square-small',
        'variants.square-small2x',
      ],
    })
    .then(response => {
      const listingRefs = response.data.data.map(({ id, type }) => ({ id, type }));
      dispatch(addMarketplaceEntities(response));
      dispatch(queryPromotedListingsSuccess(listingRefs));

      return response;
    })
    .catch(e => dispatch(queryPromotedListingsError(storableError(e))));
};


export const loadData = () => (dispatch, getState, sdk) => {
  dispatch(setInitialState());

  return Promise.all([dispatch(queryPromotedListings())]);
};
