// graphql typescript definitions

declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: RootQueryTypeType;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    message: string;            // Required for all errors
    locations?: Array<IGraphQLResponseErrorLocation>;
    [propName: string]: any;    // 7.2.2 says 'GraphQL servers may provide additional entries to error'
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  /**
    description: null
  */
  interface RootQueryTypeType {
    __typename: string;
    /** Fetches an object given its Globally Unique ID */
    node: Node;
    status: StatusType;
    /** An Article */
    article: ArticleType;
    /** A list of Articles */
    articles: Array<ArticleType>;
    /** An Artwork */
    artwork: ArtworkType;
    /** A list of Artworks */
    artworks: Array<ArtworkType>;
    /** An Artist */
    artist: ArtistType;
    /** A list of Artists */
    artists: Array<ArtistType>;
    /** An External Partner not on the platform */
    external_partner: ExternalPartnerType;
    /** A Fair */
    fair: FairType;
    /** A list of Fairs */
    fairs: Array<FairType>;
    gene: GeneType;
    /** Home screen content */
    home_page: HomePageType;
    /** A Profile */
    profile: ProfileType;
    /** A collection of OrderedSets */
    ordered_sets: Array<OrderedSetType>;
    /** A Partner */
    partner: PartnerType;
    /** A list of Partners */
    partners: Array<PartnerType>;
    /** Partners Elastic Search results */
    filter_partners: FilterPartnersType;
    /** Artworks Elastic Search results */
    filter_artworks: FilterArtworksType;
    /** A PartnerCategory */
    partner_category: PartnerCategoryType;
    /** A list of PartnerCategories */
    partner_categories: Array<PartnerCategoryType>;
    /** A Partner Show */
    partner_show: PartnerShowType;
    /** A list of PartnerShows */
    partner_shows: Array<PartnerShowType>;
    /** A Sale */
    sale: SaleType;
    /** A list of Sales */
    sales: Array<SaleType>;
    /** A Sale Artwork */
    sale_artwork: SaleArtworkType;
    /** A Search */
    search: SearchType;
    /** A Show */
    show: ShowType;
    /** Trending artists */
    trending_artists: TrendingArtistsType;
    me: MeType;
    /** Creates, and authorizes, a JWT custom for Causality */
    causality_jwt: string;
  }

  /**
    description: An object with a Globally Unique ID
  */
  type Node = ArticleType | ArtworkType | PartnerType | PartnerShowType | ArtistType | ShowType | ArtworkContextPartnerShowType | HighlightedShowType | HighlightedArticleType | GeneType | HomePageArtworkModuleType | HomePageModuleContextGeneType | HomePageArtistModuleType | ArtistItemType | GeneItemType | ArtistSearchEntityType | ArtworkSearchEntityType | PartnerShowSearchEntityType;

  /**
    description: An object with a Globally Unique ID
  */
  interface NodeType {
    __typename: string;
    /** The ID of the object. */
    __id: string;
  }

  /**
    description: null
  */
  interface StatusType {
    __typename: string;
    gravity: StatusGravityType;
    /** Metaphysics ping */
    ping: boolean;
  }

  /**
    description: Gravity ping
  */
  interface StatusGravityType {
    __typename: string;
    ping: boolean;
  }

  /**
    description: null
  */
  interface ArticleType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    cached: number;
    title: string;
    published_at: string;
    updated_at: string;
    thumbnail_title: string;
    thumbnail_teaser: string;
    author: AuthorType;
    thumbnail_image: ImageType;
    slug: string;
    href: string;
  }

  /**
    description: null
  */
  interface AuthorType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    name: string;
    profile_handle: string;
    href: string;
  }

  /**
    description: null
  */
  interface ImageType {
    __typename: string;
    /** A type-specific ID. */
    id: string;
    href: string;
    title: string;
    width: number;
    height: number;
    orientation: string;
    aspect_ratio: number;
    versions: Array<string>;
    caption: string;
    is_default: boolean;
    position: number;
    url: string;
    cropped: CroppedImageUrlType;
    resized: ResizedImageUrlType;
    deep_zoom: DeepZoomType;
    is_zoomable: boolean;
    /** Value to use when `padding-bottom` for fluid image placeholders */
    placeholder: string;
  }

  /**
    description: null
  */
  interface CroppedImageUrlType {
    __typename: string;
    width: number;
    height: number;
    url: string;
  }

  /**
    description: null
  */
  interface ResizedImageUrlType {
    __typename: string;
    factor: number;
    width: number;
    height: number;
    url: string;
  }

  /**
    description: null
  */
  interface DeepZoomType {
    __typename: string;
    Image: DeepZoomImageType;
  }

  /**
    description: null
  */
  interface DeepZoomImageType {
    __typename: string;
    xmlns: string;
    Url: string;
    Format: string;
    TileSize: number;
    Overlap: number;
    Size: DeepZoomImageSizeType;
  }

  /**
    description: null
  */
  interface DeepZoomImageSizeType {
    __typename: string;
    Width: number;
    Height: number;
  }

  /**
    description: null
  */
  type ArticleSortsEnum = "PUBLISHED_AT_ASC" | "PUBLISHED_AT_DESC";

  /**
    description: null
  */
  interface ArtworkType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    to_s: string;
    href: string;
    title: string;
    category: string;
    medium: string;
    date: string;
    image_rights: string;
    website: string;
    collecting_institution: string;
    partner: PartnerType;
    /** Returns an HTML string representing the embedded content (video) */
    embed: string;
    can_share_image: boolean;
    is_embeddable_video: boolean;
    is_shareable: boolean;
    is_hangable: boolean;
    /** True for inquireable artworks that have an exact price. */
    is_purchasable: boolean;
    /** Do we want to encourage inquiries on this work? */
    is_inquireable: boolean;
    /** Are we able to display a contact form on artwork pages? */
    is_contactable: boolean;
    /** Is this artwork part of an auction? */
    is_in_auction: boolean;
    /** Is this artwork part of a current show */
    is_in_show: boolean;
    is_for_sale: boolean;
    /** Is this artwork part of an auction that is currently running? */
    is_biddable: boolean;
    is_unique: boolean;
    is_sold: boolean;
    is_ecommerce: boolean;
    /** Whether work can be purchased through e-commerce */
    is_acquireable: boolean;
    /** When in an auction, can the work be bought before any bids are placed */
    is_buy_nowable: boolean;
    is_comparable_with_auction_results: boolean;
    is_downloadable: boolean;
    is_price_hidden: boolean;
    is_price_range: boolean;
    availability: string;
    sale_message: string;
    artist: ArtistType;
    price: string;
    contact_label: string;
    cultural_maker: string;
    artists: Array<ArtistType>;
    artist_names: string;
    dimensions: dimensionsType;
    image: ImageType;
    images: Array<ImageType>;
    /** Returns the associated Fair/Sale/PartnerShow */
    context: ArtworkContextType;
    /** Returns the highlighted shows and articles */
    highlights: Array<HighlightedType>;
    articles: Array<ArticleType>;
    shows: Array<PartnerShowType>;
    show: PartnerShowType;
    sale_artwork: SaleArtworkType;
    sale: SaleType;
    fair: FairType;
    edition_of: string;
    edition_sets: Array<EditionSetType>;
    description: string;
    exhibition_history: string;
    provenance: string;
    signature: string;
    additional_information: string;
    literature: string;
    publisher: string;
    manufacturer: string;
    series: string;
    meta: ArtworkMetaType;
    related: Array<ArtworkType>;
    layer: ArtworkLayerType;
    layers: Array<ArtworkLayerType>;
  }

  /**
    description: null
  */
  interface PartnerType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    name: string;
    collecting_institution: string;
    is_default_profile_public: boolean;
    has_fair_partnership: boolean;
    type: string;
    href: string;
    is_linkable: boolean;
    is_pre_qualify: boolean;
    initials: string;
    default_profile_id: string;
    profile: ProfileType;
    shows: Array<PartnerShowType>;
    artworks: Array<ArtworkType>;
    locations: Array<LocationType>;
    contact_message: string;
    counts: PartnerCountsType;
  }

  /**
    description: null
  */
  interface ProfileType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    name: string;
    image: ImageType;
    initials: string;
    icon: ImageType;
    href: string;
    is_published: boolean;
    bio: string;
    counts: ProfileCountsType;
  }

  /**
    description: null
  */
  interface ProfileCountsType {
    __typename: string;
    follows: any;
  }

  /**
    description: null
  */
  type PartnerShowSortsEnum = "created_at_asc" | "created_at_desc" | "end_at_asc" | "end_at_desc" | "start_at_asc" | "start_at_desc" | "name_asc" | "name_desc" | "publish_at_asc" | "publish_at_desc";

  /**
    description: null
  */
  type EventStatusEnum = "current" | "running" | "closed" | "upcoming";

  /**
    description: null
  */
  interface NearType {
    lat: number;
    lng: number;
    max_distance?: number;
  }

  /**
    description: null
  */
  interface PartnerShowType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    href: string;
    kind: string;
    /** The exhibition title */
    name: string;
    description: string;
    type: string;
    displayable: boolean;
    /** Gravity doesn’t expose the `active` flag. Temporarily re-state its logic. */
    is_active: boolean;
    is_displayable: boolean;
    is_fair_booth: boolean;
    press_release: string;
    start_at: string;
    end_at: string;
    /** A formatted description of the start to end dates */
    exhibition_period: string;
    artists: Array<ArtistType>;
    partner: PartnerType;
    fair: FairType;
    location: LocationType;
    status: string;
    /** A formatted update on upcoming status changes */
    status_update: string;
    events: Array<PartnerShowEventTypeType>;
    counts: PartnerShowCountsType;
    artworks: Array<ArtworkType>;
    meta_image: ImageType;
    cover_image: ImageType;
    images: Array<ImageType>;
  }

  /**
    description: null
  */
  type FormatEnum = "HTML" | "PLAIN" | "markdown";

  /**
    description: null
  */
  interface ArtistType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    href: string;
    /** Use this attribute to sort by when sorting a collection of Artists */
    sortable_id: string;
    name: string;
    initials: string;
    gender: string;
    years: string;
    is_public: boolean;
    is_consignable: boolean;
    public: boolean;
    consignable: boolean;
    /** Only specific Artists should show a link to auction results. */
    is_display_auction_link: boolean;
    display_auction_link: boolean;
    has_metadata: boolean;
    hometown: string;
    location: string;
    nationality: string;
    birthday: string;
    deathday: string;
    /** A string of the form "Nationality, Birthday (or Birthday-Deathday)" */
    formatted_nationality_and_birthday: string;
    /** The Artist biography article written by Artsy */
    biography: ArticleType;
    alternate_names: Array<string>;
    meta: ArtistMetaType;
    blurb: string;
    biography_blurb: ArtistBlurbType;
    is_shareable: boolean;
    bio: string;
    counts: ArtistCountsType;
    artworks: Array<ArtworkType>;
    /** A string showing the total number of works and those for sale */
    formatted_artworks_count: string;
    image: ImageType;
    artists: Array<ArtistType>;
    contemporary: Array<ArtistType>;
    carousel: ArtistCarouselType;
    statuses: ArtistStatusesType;
    /** Custom-sorted list of shows for an artist, in order of significance. */
    exhibition_highlights: Array<ShowType>;
    partner_shows: Array<PartnerShowType>;
    shows: Array<ShowType>;
    partner_artists: Array<PartnerArtistType>;
    sales: Array<SaleType>;
    articles: Array<ArticleType>;
  }

  /**
    description: null
  */
  interface ArtistMetaType {
    __typename: string;
    title: string;
    description: string;
  }

  /**
    description: null
  */
  interface ArtistBlurbType {
    __typename: string;
    text: string;
    credit: string;
    /** The partner id of the partner who submitted the featured bio. */
    partner_id: string;
  }

  /**
    description: null
  */
  interface ArtistCountsType {
    __typename: string;
    artworks: any;
    follows: any;
    for_sale_artworks: any;
    partner_shows: any;
    related_artists: any;
    articles: any;
  }

  /**
    description: null
  */
  type ArtworkSortsEnum = "title_asc" | "title_desc" | "created_at_asc" | "created_at_desc" | "deleted_at_asc" | "deleted_at_desc" | "iconicity_desc" | "merchandisability_desc" | "published_at_asc" | "published_at_desc" | "partner_updated_at_desc" | "availability_desc";

  /**
    description: null
  */
  type ArtistArtworksFiltersEnum = "IS_FOR_SALE" | "IS_NOT_FOR_SALE";

  /**
    description: null
  */
  interface ArtistCarouselType {
    __typename: string;
    images: Array<ImageType>;
  }

  /**
    description: null
  */
  interface ArtistStatusesType {
    __typename: string;
    artworks: boolean;
    shows: boolean;
    cv: boolean;
    artists: boolean;
    contemporary: boolean;
    articles: boolean;
    auction_lots: boolean;
    biography: boolean;
  }

  /**
    description: null
  */
  interface ShowType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    href: string;
    kind: string;
    /** The exhibition title */
    name: string;
    description: string;
    type: string;
    displayable: boolean;
    /** Gravity doesn’t expose the `active` flag. Temporarily re-state its logic. */
    is_active: boolean;
    is_displayable: boolean;
    is_fair_booth: boolean;
    is_reference: boolean;
    press_release: string;
    start_at: string;
    end_at: string;
    /** A formatted description of the start to end dates */
    exhibition_period: string;
    artists: Array<ArtistType>;
    artists_without_artworks: Array<ArtistType>;
    partner: PartnerTypesType;
    fair: FairType;
    location: LocationType;
    city: string;
    status: string;
    /** A formatted update on upcoming status changes */
    status_update: string;
    events: Array<PartnerShowEventTypeType>;
    counts: ShowCountsType;
    artworks: Array<ArtworkType>;
    meta_image: ImageType;
    cover_image: ImageType;
    images: Array<ImageType>;
  }

  /**
    description: null
  */
  type PartnerTypes = PartnerType | ExternalPartnerType;

  /**
    description: null
  */
  interface PartnerTypesType {
    __typename: string;

  }

  /**
    description: null
  */
  interface ExternalPartnerType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    name: string;
    city: string;
  }

  /**
    description: null
  */
  interface FairType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    banner_size: string;
    profile: ProfileType;
    has_full_feature: boolean;
    has_homepage_section: boolean;
    has_listing: boolean;
    has_large_banner: boolean;
    href: string;
    image: ImageType;
    location: LocationType;
    /** Are we currently in the fair's active period? */
    is_active: boolean;
    start_at: string;
    end_at: string;
    name: string;
    tagline: string;
    published: boolean;
    is_published: boolean;
    organizer: organizerType;
  }

  /**
    description: null
  */
  interface LocationType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    cached: number;
    city: string;
    country: string;
    coordinates: coordinatesType;
    display: string;
    address: string;
    address_2: string;
    postal_code: string;
    state: string;
    phone: string;
    day_schedules: Array<DayScheduleType>;
  }

  /**
    description: null
  */
  interface coordinatesType {
    __typename: string;
    lat: number;
    lng: number;
  }

  /**
    description: null
  */
  interface DayScheduleType {
    __typename: string;
    start_time: number;
    end_time: number;
    day_of_week: string;
  }

  /**
    description: null
  */
  interface organizerType {
    __typename: string;
    profile_id: string;
  }

  /**
    description: null
  */
  interface PartnerShowEventTypeType {
    __typename: string;
    title: string;
    description: string;
    event_type: string;
    start_at: string;
    end_at: string;
  }

  /**
    description: null
  */
  interface ShowCountsType {
    __typename: string;
    artworks: number;
    eligible_artworks: any;
  }

  /**
    description: null
  */
  interface PartnerArtistType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    counts: PartnerArtistCountsType;
    is_display_on_partner_profile: boolean;
    is_represented_by: boolean;
    sortable_id: string;
    is_use_default_biography: boolean;
    biography: string;
    partner: PartnerType;
    artist: ArtistType;
  }

  /**
    description: null
  */
  interface PartnerArtistCountsType {
    __typename: string;
    artworks: any;
    for_sale_artworks: any;
  }

  /**
    description: null
  */
  type SaleSortsEnum = "_ID_ASC" | "_ID_DESC" | "NAME_ASC" | "NAME_DESC" | "CREATED_AT_ASC" | "CREATED_AT_DESC" | "END_AT_ASC" | "END_AT_DESC" | "START_AT_ASC" | "START_AT_DESC" | "ELIGIBLE_SALE_ARTWORKS_COUNT_ASC" | "ELIGIBLE_SALE_ARTWORKS_COUNT_DESC" | "TIMELY_AT_NAME_ASC" | "TIMELY_AT_NAME_DESC";

  /**
    description: null
  */
  interface SaleType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    name: string;
    href: string;
    description: string;
    sale_type: string;
    is_auction: boolean;
    is_auction_promo: boolean;
    is_preview: boolean;
    is_open: boolean;
    is_live_open: boolean;
    is_closed: boolean;
    is_with_buyers_premium: boolean;
    auction_state: string;
    status: string;
    registration_ends_at: string;
    start_at: string;
    end_at: string;
    live_start_at: string;
    event_start_at: string;
    event_end_at: string;
    currency: string;
    sale_artworks: Array<SaleArtworkType>;
    artworks: Array<ArtworkType>;
    cover_image: ImageType;
    sale_artwork: SaleArtworkType;
    profile: ProfileType;
    /** A bid increment policy that explains minimum bids in ranges. */
    bid_increments: Array<BidIncrementType>;
    /** Auction's buyer's premium policy. */
    buyers_premium: Array<BuyersPremiumType>;
  }

  /**
    description: null
  */
  interface SaleArtworkType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    sale_id: string;
    sale: SaleType;
    position: number;
    lot_number: string;
    /** Currency abbreviation (e.g. "USD") */
    currency: string;
    /** Currency symbol (e.g. "$") */
    symbol: string;
    reserve_status: string;
    is_with_reserve: boolean;
    is_bid_on: boolean;
    /** Can bids be placed on the artwork? */
    is_biddable: boolean;
    reserve_message: string;
    reserve: SaleArtworkReserveType;
    low_estimate: SaleArtworkLowEstimateType;
    high_estimate: SaleArtworkHighEstimateType;
    opening_bid: SaleArtworkOpeningBidType;
    minimum_next_bid: SaleArtworkMinimumNextBidType;
    current_bid: SaleArtworkCurrentBidType;
    highest_bid: SaleArtworkHighestBidType;
    artwork: ArtworkType;
    estimate: string;
    counts: SaleArtworkCountsType;
    low_estimate_cents: number;
    high_estimate_cents: number;
    opening_bid_cents: number;
    minimum_next_bid_cents: number;
    bidder_positions_count: number;
    bid_increments: Array<number>;
  }

  /**
    description: null
  */
  interface SaleArtworkReserveType {
    __typename: string;
    /** An amount of money expressed in cents. */
    cents: number;
    /** A pre-formatted price. */
    display: string;
    /** A formatted price with various currency formatting options. */
    amount: string;
  }

  /**
    description: null
  */
  interface SaleArtworkLowEstimateType {
    __typename: string;
    /** An amount of money expressed in cents. */
    cents: number;
    /** A pre-formatted price. */
    display: string;
    /** A formatted price with various currency formatting options. */
    amount: string;
  }

  /**
    description: null
  */
  interface SaleArtworkHighEstimateType {
    __typename: string;
    /** An amount of money expressed in cents. */
    cents: number;
    /** A pre-formatted price. */
    display: string;
    /** A formatted price with various currency formatting options. */
    amount: string;
  }

  /**
    description: null
  */
  interface SaleArtworkOpeningBidType {
    __typename: string;
    /** An amount of money expressed in cents. */
    cents: number;
    /** A pre-formatted price. */
    display: string;
    /** A formatted price with various currency formatting options. */
    amount: string;
  }

  /**
    description: null
  */
  interface SaleArtworkMinimumNextBidType {
    __typename: string;
    /** An amount of money expressed in cents. */
    cents: number;
    /** A pre-formatted price. */
    display: string;
    /** A formatted price with various currency formatting options. */
    amount: string;
  }

  /**
    description: null
  */
  interface SaleArtworkCurrentBidType {
    __typename: string;
    /** An amount of money expressed in cents. */
    cents: number;
    /** A pre-formatted price. */
    display: string;
    /** A formatted price with various currency formatting options. */
    amount: string;
  }

  /**
    description: null
  */
  interface SaleArtworkHighestBidType {
    __typename: string;
    id: string;
    created_at: string;
    is_cancelled: boolean;
    /** A formatted price with various currency formatting options. */
    amount: string;
    cents: number;
    display: string;
    amount_cents: number;
  }

  /**
    description: null
  */
  interface SaleArtworkCountsType {
    __typename: string;
    bidder_positions: any;
  }

  /**
    description: null
  */
  interface BidIncrementType {
    __typename: string;
    from: number;
    to: number;
    amount: number;
  }

  /**
    description: null
  */
  interface BuyersPremiumType {
    __typename: string;
    /** A formatted price with various currency formatting options. */
    amount: string;
    cents: number;
    percent: number;
  }

  /**
    description: null
  */
  interface PartnerShowCountsType {
    __typename: string;
    artworks: number;
    eligible_artworks: any;
  }

  /**
    description: null
  */
  interface PartnerCountsType {
    __typename: string;
    artworks: any;
    artists: any;
    partner_artists: any;
    eligible_artworks: any;
    published_for_sale_artworks: any;
    published_not_for_sale_artworks: any;
    shows: any;
    displayable_shows: any;
    current_displayable_shows: any;
    artist_documents: any;
    partner_show_documents: any;
  }

  /**
    description: null
  */
  interface dimensionsType {
    __typename: string;
    in: string;
    cm: string;
  }

  /**
    description: null
  */
  type ArtworkContext = ArtworkContextAuctionType | ArtworkContextSaleType | ArtworkContextFairType | ArtworkContextPartnerShowType;

  /**
    description: null
  */
  interface ArtworkContextType {
    __typename: string;

  }

  /**
    description: null
  */
  interface ArtworkContextAuctionType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    name: string;
    href: string;
    description: string;
    sale_type: string;
    is_auction: boolean;
    is_auction_promo: boolean;
    is_preview: boolean;
    is_open: boolean;
    is_live_open: boolean;
    is_closed: boolean;
    is_with_buyers_premium: boolean;
    auction_state: string;
    status: string;
    registration_ends_at: string;
    start_at: string;
    end_at: string;
    live_start_at: string;
    event_start_at: string;
    event_end_at: string;
    currency: string;
    sale_artworks: Array<SaleArtworkType>;
    artworks: Array<ArtworkType>;
    cover_image: ImageType;
    sale_artwork: SaleArtworkType;
    profile: ProfileType;
    /** A bid increment policy that explains minimum bids in ranges. */
    bid_increments: Array<BidIncrementType>;
    /** Auction's buyer's premium policy. */
    buyers_premium: Array<BuyersPremiumType>;
  }

  /**
    description: null
  */
  interface ArtworkContextSaleType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    name: string;
    href: string;
    description: string;
    sale_type: string;
    is_auction: boolean;
    is_auction_promo: boolean;
    is_preview: boolean;
    is_open: boolean;
    is_live_open: boolean;
    is_closed: boolean;
    is_with_buyers_premium: boolean;
    auction_state: string;
    status: string;
    registration_ends_at: string;
    start_at: string;
    end_at: string;
    live_start_at: string;
    event_start_at: string;
    event_end_at: string;
    currency: string;
    sale_artworks: Array<SaleArtworkType>;
    artworks: Array<ArtworkType>;
    cover_image: ImageType;
    sale_artwork: SaleArtworkType;
    profile: ProfileType;
    /** A bid increment policy that explains minimum bids in ranges. */
    bid_increments: Array<BidIncrementType>;
    /** Auction's buyer's premium policy. */
    buyers_premium: Array<BuyersPremiumType>;
  }

  /**
    description: null
  */
  interface ArtworkContextFairType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    banner_size: string;
    profile: ProfileType;
    has_full_feature: boolean;
    has_homepage_section: boolean;
    has_listing: boolean;
    has_large_banner: boolean;
    href: string;
    image: ImageType;
    location: LocationType;
    /** Are we currently in the fair's active period? */
    is_active: boolean;
    start_at: string;
    end_at: string;
    name: string;
    tagline: string;
    published: boolean;
    is_published: boolean;
    organizer: organizerType;
  }

  /**
    description: null
  */
  interface ArtworkContextPartnerShowType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    href: string;
    kind: string;
    /** The exhibition title */
    name: string;
    description: string;
    type: string;
    displayable: boolean;
    /** Gravity doesn’t expose the `active` flag. Temporarily re-state its logic. */
    is_active: boolean;
    is_displayable: boolean;
    is_fair_booth: boolean;
    press_release: string;
    start_at: string;
    end_at: string;
    /** A formatted description of the start to end dates */
    exhibition_period: string;
    artists: Array<ArtistType>;
    partner: PartnerType;
    fair: FairType;
    location: LocationType;
    status: string;
    /** A formatted update on upcoming status changes */
    status_update: string;
    events: Array<PartnerShowEventTypeType>;
    counts: PartnerShowCountsType;
    artworks: Array<ArtworkType>;
    meta_image: ImageType;
    cover_image: ImageType;
    images: Array<ImageType>;
  }

  /**
    description: null
  */
  type Highlighted = HighlightedShowType | HighlightedArticleType;

  /**
    description: null
  */
  interface HighlightedType {
    __typename: string;

  }

  /**
    description: null
  */
  interface HighlightedShowType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    href: string;
    kind: string;
    /** The exhibition title */
    name: string;
    description: string;
    type: string;
    displayable: boolean;
    /** Gravity doesn’t expose the `active` flag. Temporarily re-state its logic. */
    is_active: boolean;
    is_displayable: boolean;
    is_fair_booth: boolean;
    press_release: string;
    start_at: string;
    end_at: string;
    /** A formatted description of the start to end dates */
    exhibition_period: string;
    artists: Array<ArtistType>;
    partner: PartnerType;
    fair: FairType;
    location: LocationType;
    status: string;
    /** A formatted update on upcoming status changes */
    status_update: string;
    events: Array<PartnerShowEventTypeType>;
    counts: PartnerShowCountsType;
    artworks: Array<ArtworkType>;
    meta_image: ImageType;
    cover_image: ImageType;
    images: Array<ImageType>;
  }

  /**
    description: null
  */
  interface HighlightedArticleType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    cached: number;
    title: string;
    published_at: string;
    updated_at: string;
    thumbnail_title: string;
    thumbnail_teaser: string;
    author: AuthorType;
    thumbnail_image: ImageType;
    slug: string;
    href: string;
  }

  /**
    description: null
  */
  interface EditionSetType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    dimensions: dimensionsType;
    edition_of: string;
    is_acquireable: boolean;
    is_sold: boolean;
    is_for_sale: boolean;
    price: string;
  }

  /**
    description: null
  */
  interface ArtworkMetaType {
    __typename: string;
    title: string;
    description: string;
    image: string;
  }

  /**
    description: null
  */
  interface ArtworkLayerType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    type: string;
    name: string;
    href: string;
    description: string;
    artworks: Array<ArtworkType>;
  }

  /**
    description: null
  */
  type ArtistSortsEnum = "sortable_id_asc" | "sortable_id_desc" | "trending_desc";

  /**
    description: null
  */
  type FairSortsEnum = "CREATED_AT_ASC" | "CREATED_AT_DESC" | "START_AT_ASC" | "START_AT_DESC" | "NAME_ASC" | "NAME_DESC";

  /**
    description: null
  */
  interface GeneType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    /** Artworks Elastic Search results */
    filtered_artworks: FilterArtworksType;
    href: string;
    name: string;
    description: string;
    image: ImageType;
    artists: Array<ArtistType>;
    trending_artists: Array<ArtistType>;
  }

  /**
    description: null
  */
  type ArtworkAggregationEnum = "PRICE_RANGE" | "DIMENSION_RANGE" | "COLOR" | "PERIOD" | "MAJOR_PERIOD" | "PARTNER_CITY" | "MEDIUM" | "GALLERY" | "INSTITUTION" | "TOTAL" | "FOLLOWED_ARTISTS" | "MERCHANDISABLE_ARTISTS";

  /**
    description: null
  */
  interface FilterArtworksType {
    __typename: string;
    /** Artwork results. */
    hits: Array<ArtworkType>;
    total: number;
    followed_artists_total: number;
    /** Returns a list of merchandisable artists sorted by merch score. */
    merchandisable_artists: Array<ArtistType>;
    /** Returns aggregation counts for the given filter query. */
    aggregations: Array<ArtworksAggregationResultsType>;
  }

  /**
    description: The results for one of the requested aggregations
  */
  interface ArtworksAggregationResultsType {
    __typename: string;
    slice: ArtworkAggregationEnum;
    counts: Array<AggregationCountType>;
  }

  /**
    description: One item in an aggregation
  */
  interface AggregationCountType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    name: string;
    count: number;
  }

  /**
    description: null
  */
  interface HomePageType {
    __typename: string;
    /** Single artwork module to show on the home screen */
    artwork_module: HomePageArtworkModuleType;
    /** Artwork modules to show on the home screen */
    artwork_modules: Array<HomePageArtworkModuleType>;
    /** Single artist module to show on the home screen. */
    artist_module: HomePageArtistModuleType;
    /** Artist modules to show on the home screen */
    artist_modules: Array<HomePageArtistModuleType>;
    /** A list of enabled hero units to show on the requested platform */
    hero_units: Array<HomePageHeroUnitType>;
  }

  /**
    description: null
  */
  interface HomePageArtworkModuleType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    key: string;
    display: string;
    is_displayable: boolean;
    params: HomePageModulesParamsType;
    context: HomePageModuleContextType;
    title: string;
    results: Array<ArtworkType>;
  }

  /**
    description: null
  */
  interface HomePageModulesParamsType {
    __typename: string;
    gene_id: string;
    medium: string;
    price_range: string;
    id: string;
    followed_artist_id: string;
    related_artist_id: string;
  }

  /**
    description: null
  */
  type HomePageModuleContext = HomePageModuleContextFairType | HomePageModuleContextSaleType | HomePageModuleContextGeneType | HomePageModuleContextTrendingType | HomePageModuleContextFollowArtistsType | HomePageModuleContextRelatedArtistType;

  /**
    description: null
  */
  interface HomePageModuleContextType {
    __typename: string;

  }

  /**
    description: null
  */
  interface HomePageModuleContextFairType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    banner_size: string;
    profile: ProfileType;
    has_full_feature: boolean;
    has_homepage_section: boolean;
    has_listing: boolean;
    has_large_banner: boolean;
    href: string;
    image: ImageType;
    location: LocationType;
    /** Are we currently in the fair's active period? */
    is_active: boolean;
    start_at: string;
    end_at: string;
    name: string;
    tagline: string;
    published: boolean;
    is_published: boolean;
    organizer: organizerType;
  }

  /**
    description: null
  */
  interface HomePageModuleContextSaleType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    name: string;
    href: string;
    description: string;
    sale_type: string;
    is_auction: boolean;
    is_auction_promo: boolean;
    is_preview: boolean;
    is_open: boolean;
    is_live_open: boolean;
    is_closed: boolean;
    is_with_buyers_premium: boolean;
    auction_state: string;
    status: string;
    registration_ends_at: string;
    start_at: string;
    end_at: string;
    live_start_at: string;
    event_start_at: string;
    event_end_at: string;
    currency: string;
    sale_artworks: Array<SaleArtworkType>;
    artworks: Array<ArtworkType>;
    cover_image: ImageType;
    sale_artwork: SaleArtworkType;
    profile: ProfileType;
    /** A bid increment policy that explains minimum bids in ranges. */
    bid_increments: Array<BidIncrementType>;
    /** Auction's buyer's premium policy. */
    buyers_premium: Array<BuyersPremiumType>;
  }

  /**
    description: null
  */
  interface HomePageModuleContextGeneType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    /** Artworks Elastic Search results */
    filtered_artworks: FilterArtworksType;
    href: string;
    name: string;
    description: string;
    image: ImageType;
    artists: Array<ArtistType>;
    trending_artists: Array<ArtistType>;
  }

  /**
    description: null
  */
  interface HomePageModuleContextTrendingType {
    __typename: string;
    artists: Array<ArtistType>;
  }

  /**
    description: null
  */
  interface HomePageModuleContextFollowArtistsType {
    __typename: string;
    artists: Array<ArtistType>;
    counts: FollowArtistCountsType;
  }

  /**
    description: null
  */
  interface FollowArtistCountsType {
    __typename: string;
    artists: number;
  }

  /**
    description: null
  */
  interface HomePageModuleContextRelatedArtistType {
    __typename: string;
    artist: ArtistType;
    based_on: ArtistType;
  }

  /**
    description: null
  */
  type HomePageArtworkModuleTypesEnum = "ACTIVE_BIDS" | "FOLLOWED_ARTISTS" | "FOLLOWED_GALLERIES" | "SAVED_WORKS" | "RECOMMENDED_WORKS" | "LIVE_AUCTIONS" | "CURRENT_FAIRS" | "RELATED_ARTISTS" | "FOLLOWED_GENES" | "GENERIC_GENES";

  /**
    description: null
  */
  type HomePageArtistModuleTypesEnum = "SUGGESTED" | "TRENDING" | "POPULAR";

  /**
    description: null
  */
  interface HomePageArtistModuleType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** Module identifier. */
    key: string;
    results: Array<ArtistType>;
  }

  /**
    description: null
  */
  type HomePageHeroUnitPlatformEnum = "MOBILE" | "DESKTOP" | "MARTSY";

  /**
    description: null
  */
  interface HomePageHeroUnitType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    heading: string;
    href: string;
    title: string;
    /** The image to show, on desktop this defaults to the wide version. */
    background_image_url: string;
  }

  /**
    description: null
  */
  type HomePageHeroUnitImageVersionEnum = "WIDE" | "NARROW";

  /**
    description: null
  */
  interface OrderedSetType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    cached: number;
    key: string;
    name: string;
    description: string;
    item_type: string;
    items: Array<ItemType>;
  }

  /**
    description: null
  */
  type Item = ArtistItemType | FeaturedLinkItemType | GeneItemType;

  /**
    description: null
  */
  interface ItemType {
    __typename: string;

  }

  /**
    description: null
  */
  interface ArtistItemType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    href: string;
    /** Use this attribute to sort by when sorting a collection of Artists */
    sortable_id: string;
    name: string;
    initials: string;
    gender: string;
    years: string;
    is_public: boolean;
    is_consignable: boolean;
    public: boolean;
    consignable: boolean;
    /** Only specific Artists should show a link to auction results. */
    is_display_auction_link: boolean;
    display_auction_link: boolean;
    has_metadata: boolean;
    hometown: string;
    location: string;
    nationality: string;
    birthday: string;
    deathday: string;
    /** A string of the form "Nationality, Birthday (or Birthday-Deathday)" */
    formatted_nationality_and_birthday: string;
    /** The Artist biography article written by Artsy */
    biography: ArticleType;
    alternate_names: Array<string>;
    meta: ArtistMetaType;
    blurb: string;
    biography_blurb: ArtistBlurbType;
    is_shareable: boolean;
    bio: string;
    counts: ArtistCountsType;
    artworks: Array<ArtworkType>;
    /** A string showing the total number of works and those for sale */
    formatted_artworks_count: string;
    image: ImageType;
    artists: Array<ArtistType>;
    contemporary: Array<ArtistType>;
    carousel: ArtistCarouselType;
    statuses: ArtistStatusesType;
    /** Custom-sorted list of shows for an artist, in order of significance. */
    exhibition_highlights: Array<ShowType>;
    partner_shows: Array<PartnerShowType>;
    shows: Array<ShowType>;
    partner_artists: Array<PartnerArtistType>;
    sales: Array<SaleType>;
    articles: Array<ArticleType>;
  }

  /**
    description: null
  */
  interface FeaturedLinkItemType {
    __typename: string;
    /** Attempt to get the ID of the entity of the FeaturedLink */
    id: string;
    title: string;
    initials: string;
    subtitle: string;
    href: string;
    image: ImageType;
  }

  /**
    description: null
  */
  interface GeneItemType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    /** Artworks Elastic Search results */
    filtered_artworks: FilterArtworksType;
    href: string;
    name: string;
    description: string;
    image: ImageType;
    artists: Array<ArtistType>;
    trending_artists: Array<ArtistType>;
  }

  /**
    description: null
  */
  type PartnersSortTypeEnum = "CREATED_AT_ASC" | "CREATED_AT_DESC" | "SORTABLE_ID_ASC" | "SORTABLE_ID_DESC" | "RELATIVE_SIZE_ASC" | "RELATIVE_SIZE_DESC" | "PUBLISHED_AT_DESC" | "RANDOM_SCORE_DESC";

  /**
    description: null
  */
  type PartnerClassificationEnum = "AUCTION" | "DEMO" | "GALLERY" | "PRIVATE_COLLECTOR" | "PRIVATE_DEALER" | "INSTITUTION" | "INSTITUTIONAL_SELLER" | "BRAND";

  /**
    description: null
  */
  type PartnersAggregationEnum = "LOCATION" | "CATEGORY" | "TOTAL";

  /**
    description: null
  */
  interface FilterPartnersType {
    __typename: string;
    hits: Array<PartnerType>;
    total: number;
    aggregations: Array<PartnersAggregationResultsType>;
  }

  /**
    description: The results for one of the requested aggregations
  */
  interface PartnersAggregationResultsType {
    __typename: string;
    slice: PartnersAggregationEnum;
    counts: Array<AggregationCountType>;
  }

  /**
    description: null
  */
  interface PartnerCategoryType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    cached: number;
    name: string;
    category_type: CategoryTypeEnum;
    partners: Array<PartnerType>;
  }

  /**
    description: null
  */
  type CategoryTypeEnum = "GALLERY" | "INSTITUTION";

  /**
    description: null
  */
  interface SearchType {
    __typename: string;
    cached: number;
    total: number;
    results: Array<SearchResultType>;
  }

  /**
    description: null
  */
  interface SearchResultType {
    __typename: string;
    id: string;
    title: string;
    href: string;
    snippet: string;
    image: ImageType;
    type: string;
    entity: SearchEntityType;
  }

  /**
    description: null
  */
  type SearchEntity = ArtistSearchEntityType | ArtworkSearchEntityType | ProfileSearchEntityType | PartnerShowSearchEntityType;

  /**
    description: null
  */
  interface SearchEntityType {
    __typename: string;

  }

  /**
    description: null
  */
  interface ArtistSearchEntityType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    href: string;
    /** Use this attribute to sort by when sorting a collection of Artists */
    sortable_id: string;
    name: string;
    initials: string;
    gender: string;
    years: string;
    is_public: boolean;
    is_consignable: boolean;
    public: boolean;
    consignable: boolean;
    /** Only specific Artists should show a link to auction results. */
    is_display_auction_link: boolean;
    display_auction_link: boolean;
    has_metadata: boolean;
    hometown: string;
    location: string;
    nationality: string;
    birthday: string;
    deathday: string;
    /** A string of the form "Nationality, Birthday (or Birthday-Deathday)" */
    formatted_nationality_and_birthday: string;
    /** The Artist biography article written by Artsy */
    biography: ArticleType;
    alternate_names: Array<string>;
    meta: ArtistMetaType;
    blurb: string;
    biography_blurb: ArtistBlurbType;
    is_shareable: boolean;
    bio: string;
    counts: ArtistCountsType;
    artworks: Array<ArtworkType>;
    /** A string showing the total number of works and those for sale */
    formatted_artworks_count: string;
    image: ImageType;
    artists: Array<ArtistType>;
    contemporary: Array<ArtistType>;
    carousel: ArtistCarouselType;
    statuses: ArtistStatusesType;
    /** Custom-sorted list of shows for an artist, in order of significance. */
    exhibition_highlights: Array<ShowType>;
    partner_shows: Array<PartnerShowType>;
    shows: Array<ShowType>;
    partner_artists: Array<PartnerArtistType>;
    sales: Array<SaleType>;
    articles: Array<ArticleType>;
  }

  /**
    description: null
  */
  interface ArtworkSearchEntityType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    to_s: string;
    href: string;
    title: string;
    category: string;
    medium: string;
    date: string;
    image_rights: string;
    website: string;
    collecting_institution: string;
    partner: PartnerType;
    /** Returns an HTML string representing the embedded content (video) */
    embed: string;
    can_share_image: boolean;
    is_embeddable_video: boolean;
    is_shareable: boolean;
    is_hangable: boolean;
    /** True for inquireable artworks that have an exact price. */
    is_purchasable: boolean;
    /** Do we want to encourage inquiries on this work? */
    is_inquireable: boolean;
    /** Are we able to display a contact form on artwork pages? */
    is_contactable: boolean;
    /** Is this artwork part of an auction? */
    is_in_auction: boolean;
    /** Is this artwork part of a current show */
    is_in_show: boolean;
    is_for_sale: boolean;
    /** Is this artwork part of an auction that is currently running? */
    is_biddable: boolean;
    is_unique: boolean;
    is_sold: boolean;
    is_ecommerce: boolean;
    /** Whether work can be purchased through e-commerce */
    is_acquireable: boolean;
    /** When in an auction, can the work be bought before any bids are placed */
    is_buy_nowable: boolean;
    is_comparable_with_auction_results: boolean;
    is_downloadable: boolean;
    is_price_hidden: boolean;
    is_price_range: boolean;
    availability: string;
    sale_message: string;
    artist: ArtistType;
    price: string;
    contact_label: string;
    cultural_maker: string;
    artists: Array<ArtistType>;
    artist_names: string;
    dimensions: dimensionsType;
    image: ImageType;
    images: Array<ImageType>;
    /** Returns the associated Fair/Sale/PartnerShow */
    context: ArtworkContextType;
    /** Returns the highlighted shows and articles */
    highlights: Array<HighlightedType>;
    articles: Array<ArticleType>;
    shows: Array<PartnerShowType>;
    show: PartnerShowType;
    sale_artwork: SaleArtworkType;
    sale: SaleType;
    fair: FairType;
    edition_of: string;
    edition_sets: Array<EditionSetType>;
    description: string;
    exhibition_history: string;
    provenance: string;
    signature: string;
    additional_information: string;
    literature: string;
    publisher: string;
    manufacturer: string;
    series: string;
    meta: ArtworkMetaType;
    related: Array<ArtworkType>;
    layer: ArtworkLayerType;
    layers: Array<ArtworkLayerType>;
  }

  /**
    description: null
  */
  interface ProfileSearchEntityType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    name: string;
    image: ImageType;
    initials: string;
    icon: ImageType;
    href: string;
    is_published: boolean;
    bio: string;
    counts: ProfileCountsType;
  }

  /**
    description: null
  */
  interface PartnerShowSearchEntityType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    /** A type-specific Gravity Mongo Document ID. */
    _id: string;
    cached: number;
    href: string;
    kind: string;
    /** The exhibition title */
    name: string;
    description: string;
    type: string;
    displayable: boolean;
    /** Gravity doesn’t expose the `active` flag. Temporarily re-state its logic. */
    is_active: boolean;
    is_displayable: boolean;
    is_fair_booth: boolean;
    press_release: string;
    start_at: string;
    end_at: string;
    /** A formatted description of the start to end dates */
    exhibition_period: string;
    artists: Array<ArtistType>;
    partner: PartnerType;
    fair: FairType;
    location: LocationType;
    status: string;
    /** A formatted update on upcoming status changes */
    status_update: string;
    events: Array<PartnerShowEventTypeType>;
    counts: PartnerShowCountsType;
    artworks: Array<ArtworkType>;
    meta_image: ImageType;
    cover_image: ImageType;
    images: Array<ImageType>;
  }

  /**
    description: null
  */
  type TrendingMetricsEnum = "ARTIST_FOLLOW" | "ARTIST_INQUIRY" | "ARTIST_SEARCH" | "ARTIST_SAVE" | "ARTIST_FAIR" | "ARTIST_AUCTION_LOT";

  /**
    description: null
  */
  interface TrendingArtistsType {
    __typename: string;
    artists: Array<ArtistType>;
  }

  /**
    description: null
  */
  interface MeType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    type: string;
    created_at: string;
    email: string;
    name: string;
    paddle_number: string;
    /** A list of the current user’s bidder registrations */
    bidders: Array<BidderType>;
    /** The current user's status relating to bids on artworks */
    bidder_status: LotStandingType;
    /** A list of the current user's bidder positions */
    bidder_positions: Array<BidderPositionType>;
    /** The current user's status relating to bids on artworks */
    lot_standing: LotStandingType;
    /** A list of the current user's auction standings for given lots */
    lot_standings: Array<LotStandingType>;
    sale_registrations: Array<SaleRegistrationType>;
    /** A list of the current user’s artist follows */
    follow_artists: FollowArtistsType;
    /** A list of the current user’s suggested artists, based on a single artist */
    suggested_artists: Array<ArtistType>;
  }

  /**
    description: null
  */
  interface BidderType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    created_at: string;
    pin: string;
    sale: SaleType;
    qualified_for_bidding: boolean;
  }

  /**
    description: null
  */
  interface LotStandingType {
    __typename: string;
    bidder: BidderType;
    sale_artwork: SaleArtworkType;
    /** You are winning and reserve is met */
    is_highest_bidder: boolean;
    /** You are the leading bidder without regard to reserve */
    is_leading_bidder: boolean;
    /** Your bid if it is currently winning */
    active_bid: BidderPositionType;
    /** Your most recent bid—which is not necessarily winning (may be higher or lower) */
    most_recent_bid: BidderPositionType;
  }

  /**
    description: null
  */
  interface BidderPositionType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    created_at: string;
    updated_at: string;
    processed_at: string;
    is_active: boolean;
    is_retracted: boolean;
    is_with_bid_max: boolean;
    is_winning: boolean;
    max_bid: BidderPositionMaxBidType;
    suggested_next_bid: BidderPositionSuggestedNextBidType;
    sale_artwork: SaleArtworkType;
    highest_bid: HighestBidType;
    display_max_bid_amount_dollars: string;
    display_suggested_next_bid_dollars: string;
    max_bid_amount_cents: number;
    suggested_next_bid_cents: number;
  }

  /**
    description: null
  */
  interface BidderPositionMaxBidType {
    __typename: string;
    /** An amount of money expressed in cents. */
    cents: number;
    /** A pre-formatted price. */
    display: string;
    /** A formatted price with various currency formatting options. */
    amount: string;
  }

  /**
    description: null
  */
  interface BidderPositionSuggestedNextBidType {
    __typename: string;
    /** An amount of money expressed in cents. */
    cents: number;
    /** A pre-formatted price. */
    display: string;
    /** A formatted price with various currency formatting options. */
    amount: string;
  }

  /**
    description: null
  */
  interface HighestBidType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    /** A type-specific ID. */
    id: string;
    created_at: string;
    number: number;
    is_cancelled: boolean;
    /** A formatted price with various currency formatting options. */
    amount: string;
    cents: number;
    display: string;
    amount_cents: number;
    display_amount_dollars: string;
  }

  /**
    description: null
  */
  interface SaleRegistrationType {
    __typename: string;
    is_registered: boolean;
    bidder: BidderType;
    sale: SaleType;
  }

  /**
    description: null
  */
  interface FollowArtistsType {
    __typename: string;
    artists: Array<ArtistType>;
    counts: FollowArtistCountsType;
  }

  /**
    description: null
  */
  type RoleEnum = "PARTICIPANT" | "OPERATOR";
}

export default GQL;
