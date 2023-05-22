/*
 * Marketplace specific configuration.
 *
 * Every filter needs to have following keys:
 * - id:     Unique id of the filter.
 * - label:  The default label of the filter.
 * - type:   String that represents one of the existing filter components:
 *           BookingDateRangeFilter, KeywordFilter, PriceFilter,
 *           SelectSingleFilter, SelectMultipleFilter.
 * - group:  Is this 'primary' or 'secondary' filter?
 *           Primary filters are visible on desktop layout by default.
 *           Secondary filters are behind "More filters" button.
 *           Read more from src/containers/SearchPage/README.md
 * - queryParamNames: Describes parameters to be used with queries
 *                    (e.g. 'price' or 'pub_amenities'). Most of these are
 *                    the same between webapp URLs and API query params.
 *                    You can't change 'dates', 'price', or 'keywords'
 *                    since those filters are fixed to a specific attribute.
 * - config: Extra configuration that the filter component needs.
 *
 * Note 1: Labels could be tied to translation file
 *         by importing FormattedMessage:
 *         <FormattedMessage id="some.translation.key.here" />
 *
 * Note 2: If you need to add new custom filter components,
 *         you need to take those into use in:
 *         src/containers/SearchPage/FilterComponent.js
 *
 * Note 3: If you just want to create more enum filters
 *         (i.e. SelectSingleFilter, SelectMultipleFilter),
 *         you can just add more configurations with those filter types
 *         and tie them with correct extended data key
 *         (i.e. pub_<key> or meta_<key>).
 */

 export const category_filter = {
  id: 'category',
  label: 'Category',
  type: 'SelectSingleFilter',
  group: 'primary',
  queryParamNames: ['pub_category'],
  config: {
    // "key" is the option you see in Flex Console.
    // "label" is set here for the UI only.
    // Note: label is not added through the translation files
    // to make filter customizations a bit easier.
    options: [
        { key: 'maintenance_plans', label: 'Maintenance Plans' },
        { key: 'maintenance_and_repair_services', label: 'Maintenance & Repair Services' },
        { key: 'tire_plans', label: 'Tire Plans' },
        { key: 'tires', label: 'Tires' },
        { key: 'rims', label: 'Rims' },
        { key: 'tire_rim_services', label: 'Tire & Rim Services' },
        { key: 'body_shops', label: 'Body Shops' },
        { key: 'towing', label: 'Towing' },
        { key: 'car_wash_plans', label: 'Car Wash plans' },
        { key: 'detailing', label: 'Detailing' },
        
      ]
  },
}


//Service filters
export const maintenance_and_repair_services_filters = [
  {
    ...category_filter
  },
  {
    id: 'price',
    label: 'Price',
    type: 'PriceFilter',
    group: 'primary',
    // Note: PriceFilter is fixed filter,
    // you can't change "queryParamNames: ['price'],"
    queryParamNames: ['price'],
    // Price filter configuration
    // Note: unlike most prices this is not handled in subunits
    config: {
      min: 0,
      max: 100000,
      step: 500,
    },
  },
  {
    id: 'keyword',
    label: 'Keyword',
    type: 'KeywordFilter',
    group: 'primary',
    // Note: KeywordFilter is fixed filter,
    // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {},
  },
];

export const tires_filters = [
  {
    ...category_filter
  },
  {
    id: 'price',
    label: 'Price',
    type: 'PriceFilter',
    group: 'primary',
    // Note: PriceFilter is fixed filter,
    // you can't change "queryParamNames: ['price'],"
    queryParamNames: ['price'],
    // Price filter configuration
    // Note: unlike most prices this is not handled in subunits
    config: {
      min: 0,
      max: 100000,
      step: 500,
    },
  },
  {
    id: 'keyword',
    label: 'Keyword',
    type: 'KeywordFilter',
    group: 'primary',
    // Note: KeywordFilter is fixed filter,
    // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {},
  },
];

export const rims_filters = [
  {
    ...category_filter
  },
  {
    id: 'price',
    label: 'Price',
    type: 'PriceFilter',
    group: 'primary',
    // Note: PriceFilter is fixed filter,
    // you can't change "queryParamNames: ['price'],"
    queryParamNames: ['price'],
    // Price filter configuration
    // Note: unlike most prices this is not handled in subunits
    config: {
      min: 0,
      max: 100000,
      step: 500,
    },
  },
  {
    id: 'keyword',
    label: 'Keyword',
    type: 'KeywordFilter',
    group: 'primary',
    // Note: KeywordFilter is fixed filter,
    // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {},
  },
];

export const tire_rim_services_filters = [
  {
    ...category_filter
  },
  {
    id: 'price',
    label: 'Price',
    type: 'PriceFilter',
    group: 'primary',
    // Note: PriceFilter is fixed filter,
    // you can't change "queryParamNames: ['price'],"
    queryParamNames: ['price'],
    // Price filter configuration
    // Note: unlike most prices this is not handled in subunits
    config: {
      min: 0,
      max: 100000,
      step: 500,
    },
  },
  {
    id: 'keyword',
    label: 'Keyword',
    type: 'KeywordFilter',
    group: 'primary',
    // Note: KeywordFilter is fixed filter,
    // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {},
  },
];

export const detailing_filters = [
  {
    ...category_filter
  },
  {
    id: 'price',
    label: 'Price',
    type: 'PriceFilter',
    group: 'primary',
    // Note: PriceFilter is fixed filter,
    // you can't change "queryParamNames: ['price'],"
    queryParamNames: ['price'],
    // Price filter configuration
    // Note: unlike most prices this is not handled in subunits
    config: {
      min: 0,
      max: 100000,
      step: 500,
    },
  },
  {
    id: 'keyword',
    label: 'Keyword',
    type: 'KeywordFilter',
    group: 'primary',
    // Note: KeywordFilter is fixed filter,
    // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {},
  },
];



export const filters = [
  {
    ...category_filter
  },
  {
    id: 'keyword',
    label: 'Keyword',
    type: 'KeywordFilter',
    group: 'primary',
    // Note: KeywordFilter is fixed filter,
    // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {},
  },
];

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Note: queryParamName 'sort' is fixed,
  // you can't change it since Flex API expects it to be named as 'sort'
  queryParamName: 'sort',

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  // Keyword filter is sorting the results already by relevance.
  // If keyword filter is active, we need to disable sorting.
  conflictingFilters: ['keyword'],

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};

export const categories = [
  { key: '', label: 'None', hideFromFilters: true, hideFromListingInfo: true },
  {
    key: 'vehicle_maintenance',
    label: 'Vehicle Maintenance',
    subCategories: [
      {
        key: 'maintenance_and_repair_services',
        label: 'Auto Repair & Services',
        fields: []
      },
      {
        key: 'brakes',
        label: 'Brakes',
        fields: []
      },
      {
        key: 'battery',
        label: 'Battery',
        fields: []
      },
      {
        key: 'oil_change',
        label: 'Oil Change',
        fields: []
      },
      {
        key: 'diagnostics',
        label: 'Diagnostics',
        fields: []
      },
      {
        key: 'state_inspection',
        label: 'State Inspection',
        fields: []
      },
      {
        key: 'ac_compressor',
        label: 'A/C Compressor',
        fields: []
      },
      {
        key: 'radiator',
        label: 'Radiator',
        fields: []
      },
      {
        key: 'alternator',
        label: 'Alternator',
        fields: []
      },
      {
        key: 'tlc_maintenance_packages',
        label: 'TLC Maintenance Packages',
        fields: []
      },
      {
        key: 'other_auto_repair',
        label: 'Other Auto repair',
        fields: []
      },
    ]
  },
  {
    key: 'tires',
    label: 'Tires',
    subCategories: [
      {
        key: 'tire_rims',
        label: 'Tire & Rims',
        fields: []
      },
      {
        key: 'tires',
        label: 'Tires',
        fields: []
      },
      {
        key: 'rims',
        label: 'Rims',
        fields: []
      },
      {
        key: 'tire_rotation_alignment',
        label: 'Tire Rotation & Alignment',
        fields: []
      },
      {
        key: 'tire_rim_services',
        label: 'Tire & Wheel Repair',
        fields: []
      }
    ]
  },
  {
    key: 'body_shops',
    label: 'Body Shops',
    subCategories: [
      {
        key: 'body_shops',
        label: 'Body Shops',
        fields: []
      },
      {
        key: 'towing',
        label: 'Towing',
        fields: []
      },
    ]
  },
  {
    key: 'car_wash_and_detailing',
    label: 'Car Wash & Detailing',
    subCategories: [
      {
        key: 'car_wash_plans',
        label: 'Car Wash plans',
        fields: []
      },
      {
        key: 'detailing',
        label: 'Detailing',
        fields: []
      }
    ]
  },
];

export const HOURLY_LISTING_TYPES = [
];

export const SUBSCRIPTION_LISTING_TYPES = [
  'maintenance_plans',
  'car_wash_plans'
];

export const DAILY_LISTING_TYPES = [
  'maintenance_and_repair_services',
  'tires',
  'rims',
  'tire_rim_services',
  'detailing'
];

export const TIRE_LISTING_TYPE = [
  'tires',
]

export const NO_ACTION_LISTING_TYPES = [
  'body_shops',
  'towing'
]

export const SCHEDULING_LISTING_TYPES = [
  
]
