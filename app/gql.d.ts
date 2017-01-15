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
    node: Node | null;
    status: StatusType | null;
    /** An Article */
    article: ArticleType | null;
    /** A list of Articles */
    articles: Array<ArticleType> | null;
    /** An Artwork */
    artwork: ArtworkType | null;
    /** A list of Artworks */
    artworks: Array<ArtworkType> | null;
    /** An Artist */
    artist: ArtistType | null;
    /** A list of Artists */
    artists: Array<ArtistType> | null;
    /** An External Partner not on the platform */
    external_partner: ExternalPartnerType | null;
    /** A Fair */
    fair: FairType | null;
    /** A list of Fairs */
    fairs: Array<FairType> | null;
    gene: GeneType | null;
    /** Home screen content */
    home_page: HomePageType | null;
    /** A Profile */
    profile: ProfileType | null;
    /** A collection of OrderedSets */
    ordered_sets: Array<OrderedSetType> | null;
    /** A Partner */
    partner: PartnerType | null;
    /** A list of Partners */
    partners: Array<PartnerType> | null;
    /** Partners Elastic Search results */
    filter_partners: FilterPartnersType | null;
    /** Artworks Elastic Search results */
    filter_artworks: FilterArtworksType | null;
    /** A PartnerCategory */
    partner_category: PartnerCategoryType | null;
    /** A list of PartnerCategories */
    partner_categories: Array<PartnerCategoryType> | null;
    /** A Partner Show */
    partner_show: PartnerShowType | null;
    /** A list of PartnerShows */
    partner_shows: Array<PartnerShowType> | null;
    /** A Sale */
    sale: SaleType | null;
    /** A list of Sales */
    sales: Array<SaleType> | null;
    /** A Sale Artwork */
    sale_artwork: SaleArtworkType | null;
    /** A Search */
    search: SearchType | null;
    /** A Show */
    show: ShowType | null;
    /** Trending artists */
    trending_artists: TrendingArtistsType | null;
    me: MeType | null;
    /** Creates, and authorizes, a JWT custom for Causality */
    causality_jwt: string | null;
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
    gravity: StatusGravityType | null;
    /** Metaphysics ping */
    ping: boolean | null;
  }

  /**
    description: Gravity ping
  */
  interface StatusGravityType {
    __typename: string;
    ping: boolean | null;
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
    cached: number | null;
    title: string | null;
    published_at: string | null;
    updated_at: string | null;
    thumbnail_title: string | null;
    thumbnail_teaser: string | null;
    author: AuthorType | null;
    thumbnail_image: ImageType | null;
    slug: string | null;
    href: string | null;
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
    name: string | null;
    profile_handle: string | null;
    href: string | null;
  }

  /**
    description: null
  */
  interface ImageType {
    __typename: string;
    /** A type-specific ID. */
    id: string | null;
    href: string | null;
    title: string | null;
    width: number | null;
    height: number | null;
    orientation: string | null;
    aspect_ratio: number | null;
    versions: Array<string> | null;
    caption: string | null;
    is_default: boolean | null;
    position: number | null;
    url: string | null;
    cropped: CroppedImageUrlType | null;
    resized: ResizedImageUrlType | null;
    deep_zoom: DeepZoomType | null;
    is_zoomable: boolean | null;
    /** Value to use when `padding-bottom` for fluid image placeholders */
    placeholder: string | null;
  }

  /**
    description: null
  */
  interface CroppedImageUrlType {
    __typename: string;
    width: number | null;
    height: number | null;
    url: string | null;
  }

  /**
    description: null
  */
  interface ResizedImageUrlType {
    __typename: string;
    factor: number | null;
    width: number | null;
    height: number | null;
    url: string | null;
  }

  /**
    description: null
  */
  interface DeepZoomType {
    __typename: string;
    Image: DeepZoomImageType | null;
  }

  /**
    description: null
  */
  interface DeepZoomImageType {
    __typename: string;
    xmlns: string | null;
    Url: string | null;
    Format: string | null;
    TileSize: number | null;
    Overlap: number | null;
    Size: DeepZoomImageSizeType | null;
  }

  /**
    description: null
  */
  interface DeepZoomImageSizeType {
    __typename: string;
    Width: number | null;
    Height: number | null;
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
    cached: number | null;
    to_s: string | null;
    href: string | null;
    title: string | null;
    category: string | null;
    medium: string | null;
    date: string | null;
    image_rights: string | null;
    website: string | null;
    collecting_institution: string | null;
    partner: PartnerType | null;
    /** Returns an HTML string representing the embedded content (video) */
    embed: string | null;
    can_share_image: boolean | null;
    is_embeddable_video: boolean | null;
    is_shareable: boolean | null;
    is_hangable: boolean | null;
    /** True for inquireable artworks that have an exact price. */
    is_purchasable: boolean | null;
    /** Do we want to encourage inquiries on this work? */
    is_inquireable: boolean | null;
    /** Are we able to display a contact form on artwork pages? */
    is_contactable: boolean | null;
    /** Is this artwork part of an auction? */
    is_in_auction: boolean | null;
    /** Is this artwork part of a current show */
    is_in_show: boolean | null;
    is_for_sale: boolean | null;
    /** Is this artwork part of an auction that is currently running? */
    is_biddable: boolean | null;
    is_unique: boolean | null;
    is_sold: boolean | null;
    is_ecommerce: boolean | null;
    /** Whether work can be purchased through e-commerce */
    is_acquireable: boolean | null;
    /** When in an auction, can the work be bought before any bids are placed */
    is_buy_nowable: boolean | null;
    is_comparable_with_auction_results: boolean | null;
    is_downloadable: boolean | null;
    is_price_hidden: boolean | null;
    is_price_range: boolean | null;
    availability: string | null;
    sale_message: string | null;
    artist: ArtistType | null;
    price: string | null;
    contact_label: string | null;
    cultural_maker: string | null;
    artists: Array<ArtistType> | null;
    artist_names: string | null;
    dimensions: dimensionsType | null;
    image: ImageType | null;
    images: Array<ImageType> | null;
    /** Returns the associated Fair/Sale/PartnerShow */
    context: ArtworkContextType | null;
    /** Returns the highlighted shows and articles */
    highlights: Array<HighlightedType> | null;
    articles: Array<ArticleType> | null;
    shows: Array<PartnerShowType> | null;
    show: PartnerShowType | null;
    sale_artwork: SaleArtworkType | null;
    sale: SaleType | null;
    fair: FairType | null;
    edition_of: string | null;
    edition_sets: Array<EditionSetType> | null;
    description: string | null;
    exhibition_history: string | null;
    provenance: string | null;
    signature: string | null;
    additional_information: string | null;
    literature: string | null;
    publisher: string | null;
    manufacturer: string | null;
    series: string | null;
    meta: ArtworkMetaType | null;
    related: Array<ArtworkType> | null;
    layer: ArtworkLayerType | null;
    layers: Array<ArtworkLayerType> | null;
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
    cached: number | null;
    name: string | null;
    collecting_institution: string | null;
    is_default_profile_public: boolean | null;
    has_fair_partnership: boolean | null;
    type: string | null;
    href: string | null;
    is_linkable: boolean | null;
    is_pre_qualify: boolean | null;
    initials: string | null;
    default_profile_id: string | null;
    profile: ProfileType | null;
    shows: Array<PartnerShowType> | null;
    artworks: Array<ArtworkType> | null;
    locations: Array<LocationType> | null;
    contact_message: string | null;
    counts: PartnerCountsType | null;
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
    cached: number | null;
    name: string | null;
    image: ImageType | null;
    initials: string | null;
    icon: ImageType | null;
    href: string | null;
    is_published: boolean | null;
    bio: string | null;
    counts: ProfileCountsType | null;
  }

  /**
    description: null
  */
  interface ProfileCountsType {
    __typename: string;
    follows: any | null;
  }

  /**
    description: null
  */
  type PartnerShowSortsEnum = "created_at_asc" | "created_at_desc" | "end_at_asc" | "end_at_desc" | "start_at_asc" | "start_at_desc" | "name_asc" | "name_desc" | "publish_at_asc" | "publish_at_desc" | "CREATED_AT_ASC" | "CREATED_AT_DESC" | "END_AT_ASC" | "END_AT_DESC" | "START_AT_ASC" | "START_AT_DESC" | "NAME_ASC" | "NAME_DESC" | "PUBLISH_AT_ASC" | "PUBLISH_AT_DESC";

  /**
    description: null
  */
  type EventStatusEnum = "current" | "running" | "closed" | "upcoming" | "CURRENT" | "RUNNING" | "CLOSED" | "UPCOMING";

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
    cached: number | null;
    href: string | null;
    kind: string | null;
    /** The exhibition title */
    name: string | null;
    description: string | null;
    type: string | null;
    displayable: boolean | null;
    /** Gravity doesn’t expose the `active` flag. Temporarily re-state its logic. */
    is_active: boolean | null;
    is_displayable: boolean | null;
    is_fair_booth: boolean | null;
    press_release: string | null;
    start_at: string | null;
    end_at: string | null;
    /** A formatted description of the start to end dates */
    exhibition_period: string | null;
    artists: Array<ArtistType> | null;
    partner: PartnerType | null;
    fair: FairType | null;
    location: LocationType | null;
    status: string | null;
    /** A formatted update on upcoming status changes */
    status_update: string | null;
    events: Array<PartnerShowEventTypeType> | null;
    counts: PartnerShowCountsType | null;
    artworks: Array<ArtworkType> | null;
    meta_image: ImageType | null;
    cover_image: ImageType | null;
    images: Array<ImageType> | null;
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
    cached: number | null;
    href: string | null;
    /** Use this attribute to sort by when sorting a collection of Artists */
    sortable_id: string | null;
    name: string | null;
    initials: string | null;
    gender: string | null;
    years: string | null;
    is_public: boolean | null;
    is_consignable: boolean | null;
    public: boolean | null;
    consignable: boolean | null;
    /** Only specific Artists should show a link to auction results. */
    is_display_auction_link: boolean | null;
    display_auction_link: boolean | null;
    has_metadata: boolean | null;
    hometown: string | null;
    location: string | null;
    nationality: string | null;
    birthday: string | null;
    deathday: string | null;
    /** A string of the form "Nationality, Birthday (or Birthday-Deathday)" */
    formatted_nationality_and_birthday: string | null;
    /** The Artist biography article written by Artsy */
    biography: ArticleType | null;
    alternate_names: Array<string> | null;
    meta: ArtistMetaType | null;
    blurb: string | null;
    biography_blurb: ArtistBlurbType | null;
    is_shareable: boolean | null;
    bio: string | null;
    counts: ArtistCountsType | null;
    artworks: Array<ArtworkType> | null;
    /** A string showing the total number of works and those for sale */
    formatted_artworks_count: string | null;
    image: ImageType | null;
    artists: Array<ArtistType> | null;
    contemporary: Array<ArtistType> | null;
    carousel: ArtistCarouselType | null;
    statuses: ArtistStatusesType | null;
    /** Custom-sorted list of shows for an artist, in order of significance. */
    exhibition_highlights: Array<ShowType> | null;
    partner_shows: Array<PartnerShowType> | null;
    shows: Array<ShowType> | null;
    partner_artists: Array<PartnerArtistType> | null;
    sales: Array<SaleType> | null;
    articles: Array<ArticleType> | null;
  }

  /**
    description: null
  */
  interface ArtistMetaType {
    __typename: string;
    title: string | null;
    description: string | null;
  }

  /**
    description: null
  */
  interface ArtistBlurbType {
    __typename: string;
    text: string | null;
    credit: string | null;
    /** The partner id of the partner who submitted the featured bio. */
    partner_id: string | null;
  }

  /**
    description: null
  */
  interface ArtistCountsType {
    __typename: string;
    artworks: any | null;
    follows: any | null;
    for_sale_artworks: any | null;
    partner_shows: any | null;
    related_artists: any | null;
    articles: any | null;
  }

  /**
    description: null
  */
  type ArtworkSortsEnum = "title_asc" | "title_desc" | "created_at_asc" | "created_at_desc" | "deleted_at_asc" | "deleted_at_desc" | "iconicity_desc" | "merchandisability_desc" | "published_at_asc" | "published_at_desc" | "partner_updated_at_desc" | "availability_desc" | "TITLE_ASC" | "TITLE_DESC" | "CREATED_AT_ASC" | "CREATED_AT_DESC" | "DELETED_AT_ASC" | "DELETED_AT_DESC" | "ICONICITY_DESC" | "MERCHANDISABILITY_DESC" | "PUBLISHED_AT_ASC" | "PUBLISHED_AT_DESC" | "PARTNER_UPDATED_AT_DESC" | "AVAILABILITY_DESC";

  /**
    description: null
  */
  type ArtistArtworksFiltersEnum = "IS_FOR_SALE" | "IS_NOT_FOR_SALE";

  /**
    description: null
  */
  interface ArtistCarouselType {
    __typename: string;
    images: Array<ImageType> | null;
  }

  /**
    description: null
  */
  interface ArtistStatusesType {
    __typename: string;
    artworks: boolean | null;
    shows: boolean | null;
    cv: boolean | null;
    artists: boolean | null;
    contemporary: boolean | null;
    articles: boolean | null;
    auction_lots: boolean | null;
    biography: boolean | null;
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
    cached: number | null;
    href: string | null;
    kind: string | null;
    /** The exhibition title */
    name: string | null;
    description: string | null;
    type: string | null;
    displayable: boolean | null;
    /** Gravity doesn’t expose the `active` flag. Temporarily re-state its logic. */
    is_active: boolean | null;
    is_displayable: boolean | null;
    is_fair_booth: boolean | null;
    is_reference: boolean | null;
    press_release: string | null;
    start_at: string | null;
    end_at: string | null;
    /** A formatted description of the start to end dates */
    exhibition_period: string | null;
    artists: Array<ArtistType> | null;
    artists_without_artworks: Array<ArtistType> | null;
    partner: PartnerTypesType | null;
    fair: FairType | null;
    location: LocationType | null;
    city: string | null;
    status: string | null;
    /** A formatted update on upcoming status changes */
    status_update: string | null;
    events: Array<PartnerShowEventTypeType> | null;
    counts: ShowCountsType | null;
    artworks: Array<ArtworkType> | null;
    meta_image: ImageType | null;
    cover_image: ImageType | null;
    images: Array<ImageType> | null;
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
    name: string | null;
    city: string | null;
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
    cached: number | null;
    banner_size: string | null;
    profile: ProfileType | null;
    has_full_feature: boolean | null;
    has_homepage_section: boolean | null;
    has_listing: boolean | null;
    has_large_banner: boolean | null;
    href: string | null;
    image: ImageType | null;
    location: LocationType | null;
    /** Are we currently in the fair's active period? */
    is_active: boolean | null;
    start_at: string | null;
    end_at: string | null;
    name: string | null;
    tagline: string | null;
    published: boolean | null;
    is_published: boolean | null;
    organizer: organizerType | null;
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
    cached: number | null;
    city: string | null;
    country: string | null;
    coordinates: coordinatesType | null;
    display: string | null;
    address: string | null;
    address_2: string | null;
    postal_code: string | null;
    state: string | null;
    phone: string | null;
    day_schedules: Array<DayScheduleType> | null;
  }

  /**
    description: null
  */
  interface coordinatesType {
    __typename: string;
    lat: number | null;
    lng: number | null;
  }

  /**
    description: null
  */
  interface DayScheduleType {
    __typename: string;
    start_time: number | null;
    end_time: number | null;
    day_of_week: string | null;
  }

  /**
    description: null
  */
  interface organizerType {
    __typename: string;
    profile_id: string | null;
  }

  /**
    description: null
  */
  interface PartnerShowEventTypeType {
    __typename: string;
    title: string | null;
    description: string | null;
    event_type: string | null;
    start_at: string | null;
    end_at: string | null;
  }

  /**
    description: null
  */
  interface ShowCountsType {
    __typename: string;
    artworks: number | null;
    eligible_artworks: any | null;
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
    counts: PartnerArtistCountsType | null;
    is_display_on_partner_profile: boolean | null;
    is_represented_by: boolean | null;
    sortable_id: string | null;
    is_use_default_biography: boolean | null;
    biography: string | null;
    partner: PartnerType | null;
    artist: ArtistType | null;
  }

  /**
    description: null
  */
  interface PartnerArtistCountsType {
    __typename: string;
    artworks: any | null;
    for_sale_artworks: any | null;
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
    cached: number | null;
    name: string | null;
    href: string | null;
    description: string | null;
    sale_type: string | null;
    is_auction: boolean | null;
    is_auction_promo: boolean | null;
    is_preview: boolean | null;
    is_open: boolean | null;
    is_live_open: boolean | null;
    is_closed: boolean | null;
    is_with_buyers_premium: boolean | null;
    auction_state: string | null;
    status: string | null;
    registration_ends_at: string | null;
    start_at: string | null;
    end_at: string | null;
    live_start_at: string | null;
    event_start_at: string | null;
    event_end_at: string | null;
    currency: string | null;
    sale_artworks: Array<SaleArtworkType> | null;
    artworks: Array<ArtworkType> | null;
    cover_image: ImageType | null;
    sale_artwork: SaleArtworkType | null;
    profile: ProfileType | null;
    /** A bid increment policy that explains minimum bids in ranges. */
    bid_increments: Array<BidIncrementType> | null;
    /** Auction's buyer's premium policy. */
    buyers_premium: Array<BuyersPremiumType> | null;
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
    cached: number | null;
    sale_id: string | null;
    sale: SaleType | null;
    position: number | null;
    lot_number: string | null;
    /** Currency abbreviation (e.g. "USD") */
    currency: string | null;
    /** Currency symbol (e.g. "$") */
    symbol: string | null;
    reserve_status: string | null;
    is_with_reserve: boolean | null;
    is_bid_on: boolean | null;
    /** Can bids be placed on the artwork? */
    is_biddable: boolean | null;
    reserve_message: string | null;
    reserve: SaleArtworkReserveType | null;
    low_estimate: SaleArtworkLowEstimateType | null;
    high_estimate: SaleArtworkHighEstimateType | null;
    opening_bid: SaleArtworkOpeningBidType | null;
    minimum_next_bid: SaleArtworkMinimumNextBidType | null;
    current_bid: SaleArtworkCurrentBidType | null;
    highest_bid: SaleArtworkHighestBidType | null;
    artwork: ArtworkType | null;
    estimate: string | null;
    counts: SaleArtworkCountsType | null;
    /** Singular estimate field, if specified */
    estimate_cents: number | null;
    low_estimate_cents: number | null;
    high_estimate_cents: number | null;
    opening_bid_cents: number | null;
    minimum_next_bid_cents: number | null;
    bidder_positions_count: number | null;
    bid_increments: Array<number> | null;
  }

  /**
    description: null
  */
  interface SaleArtworkReserveType {
    __typename: string;
    /** An amount of money expressed in cents. */
    cents: number | null;
    /** A pre-formatted price. */
    display: string | null;
    /** A formatted price with various currency formatting options. */
    amount: string | null;
  }

  /**
    description: null
  */
  interface SaleArtworkLowEstimateType {
    __typename: string;
    /** An amount of money expressed in cents. */
    cents: number | null;
    /** A pre-formatted price. */
    display: string | null;
    /** A formatted price with various currency formatting options. */
    amount: string | null;
  }

  /**
    description: null
  */
  interface SaleArtworkHighEstimateType {
    __typename: string;
    /** An amount of money expressed in cents. */
    cents: number | null;
    /** A pre-formatted price. */
    display: string | null;
    /** A formatted price with various currency formatting options. */
    amount: string | null;
  }

  /**
    description: null
  */
  interface SaleArtworkOpeningBidType {
    __typename: string;
    /** An amount of money expressed in cents. */
    cents: number | null;
    /** A pre-formatted price. */
    display: string | null;
    /** A formatted price with various currency formatting options. */
    amount: string | null;
  }

  /**
    description: null
  */
  interface SaleArtworkMinimumNextBidType {
    __typename: string;
    /** An amount of money expressed in cents. */
    cents: number | null;
    /** A pre-formatted price. */
    display: string | null;
    /** A formatted price with various currency formatting options. */
    amount: string | null;
  }

  /**
    description: null
  */
  interface SaleArtworkCurrentBidType {
    __typename: string;
    /** An amount of money expressed in cents. */
    cents: number | null;
    /** A pre-formatted price. */
    display: string | null;
    /** A formatted price with various currency formatting options. */
    amount: string | null;
  }

  /**
    description: null
  */
  interface SaleArtworkHighestBidType {
    __typename: string;
    id: string | null;
    created_at: string | null;
    is_cancelled: boolean | null;
    /** A formatted price with various currency formatting options. */
    amount: string | null;
    cents: number | null;
    display: string | null;
    amount_cents: number | null;
  }

  /**
    description: null
  */
  interface SaleArtworkCountsType {
    __typename: string;
    bidder_positions: any | null;
  }

  /**
    description: null
  */
  interface BidIncrementType {
    __typename: string;
    from: number | null;
    to: number | null;
    amount: number | null;
  }

  /**
    description: null
  */
  interface BuyersPremiumType {
    __typename: string;
    /** A formatted price with various currency formatting options. */
    amount: string | null;
    cents: number | null;
    percent: number | null;
  }

  /**
    description: null
  */
  interface PartnerShowCountsType {
    __typename: string;
    artworks: number | null;
    eligible_artworks: any | null;
  }

  /**
    description: null
  */
  interface PartnerCountsType {
    __typename: string;
    artworks: any | null;
    artists: any | null;
    partner_artists: any | null;
    eligible_artworks: any | null;
    published_for_sale_artworks: any | null;
    published_not_for_sale_artworks: any | null;
    shows: any | null;
    displayable_shows: any | null;
    current_displayable_shows: any | null;
    artist_documents: any | null;
    partner_show_documents: any | null;
  }

  /**
    description: null
  */
  interface dimensionsType {
    __typename: string;
    in: string | null;
    cm: string | null;
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
    cached: number | null;
    name: string | null;
    href: string | null;
    description: string | null;
    sale_type: string | null;
    is_auction: boolean | null;
    is_auction_promo: boolean | null;
    is_preview: boolean | null;
    is_open: boolean | null;
    is_live_open: boolean | null;
    is_closed: boolean | null;
    is_with_buyers_premium: boolean | null;
    auction_state: string | null;
    status: string | null;
    registration_ends_at: string | null;
    start_at: string | null;
    end_at: string | null;
    live_start_at: string | null;
    event_start_at: string | null;
    event_end_at: string | null;
    currency: string | null;
    sale_artworks: Array<SaleArtworkType> | null;
    artworks: Array<ArtworkType> | null;
    cover_image: ImageType | null;
    sale_artwork: SaleArtworkType | null;
    profile: ProfileType | null;
    /** A bid increment policy that explains minimum bids in ranges. */
    bid_increments: Array<BidIncrementType> | null;
    /** Auction's buyer's premium policy. */
    buyers_premium: Array<BuyersPremiumType> | null;
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
    cached: number | null;
    name: string | null;
    href: string | null;
    description: string | null;
    sale_type: string | null;
    is_auction: boolean | null;
    is_auction_promo: boolean | null;
    is_preview: boolean | null;
    is_open: boolean | null;
    is_live_open: boolean | null;
    is_closed: boolean | null;
    is_with_buyers_premium: boolean | null;
    auction_state: string | null;
    status: string | null;
    registration_ends_at: string | null;
    start_at: string | null;
    end_at: string | null;
    live_start_at: string | null;
    event_start_at: string | null;
    event_end_at: string | null;
    currency: string | null;
    sale_artworks: Array<SaleArtworkType> | null;
    artworks: Array<ArtworkType> | null;
    cover_image: ImageType | null;
    sale_artwork: SaleArtworkType | null;
    profile: ProfileType | null;
    /** A bid increment policy that explains minimum bids in ranges. */
    bid_increments: Array<BidIncrementType> | null;
    /** Auction's buyer's premium policy. */
    buyers_premium: Array<BuyersPremiumType> | null;
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
    cached: number | null;
    banner_size: string | null;
    profile: ProfileType | null;
    has_full_feature: boolean | null;
    has_homepage_section: boolean | null;
    has_listing: boolean | null;
    has_large_banner: boolean | null;
    href: string | null;
    image: ImageType | null;
    location: LocationType | null;
    /** Are we currently in the fair's active period? */
    is_active: boolean | null;
    start_at: string | null;
    end_at: string | null;
    name: string | null;
    tagline: string | null;
    published: boolean | null;
    is_published: boolean | null;
    organizer: organizerType | null;
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
    cached: number | null;
    href: string | null;
    kind: string | null;
    /** The exhibition title */
    name: string | null;
    description: string | null;
    type: string | null;
    displayable: boolean | null;
    /** Gravity doesn’t expose the `active` flag. Temporarily re-state its logic. */
    is_active: boolean | null;
    is_displayable: boolean | null;
    is_fair_booth: boolean | null;
    press_release: string | null;
    start_at: string | null;
    end_at: string | null;
    /** A formatted description of the start to end dates */
    exhibition_period: string | null;
    artists: Array<ArtistType> | null;
    partner: PartnerType | null;
    fair: FairType | null;
    location: LocationType | null;
    status: string | null;
    /** A formatted update on upcoming status changes */
    status_update: string | null;
    events: Array<PartnerShowEventTypeType> | null;
    counts: PartnerShowCountsType | null;
    artworks: Array<ArtworkType> | null;
    meta_image: ImageType | null;
    cover_image: ImageType | null;
    images: Array<ImageType> | null;
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
    cached: number | null;
    href: string | null;
    kind: string | null;
    /** The exhibition title */
    name: string | null;
    description: string | null;
    type: string | null;
    displayable: boolean | null;
    /** Gravity doesn’t expose the `active` flag. Temporarily re-state its logic. */
    is_active: boolean | null;
    is_displayable: boolean | null;
    is_fair_booth: boolean | null;
    press_release: string | null;
    start_at: string | null;
    end_at: string | null;
    /** A formatted description of the start to end dates */
    exhibition_period: string | null;
    artists: Array<ArtistType> | null;
    partner: PartnerType | null;
    fair: FairType | null;
    location: LocationType | null;
    status: string | null;
    /** A formatted update on upcoming status changes */
    status_update: string | null;
    events: Array<PartnerShowEventTypeType> | null;
    counts: PartnerShowCountsType | null;
    artworks: Array<ArtworkType> | null;
    meta_image: ImageType | null;
    cover_image: ImageType | null;
    images: Array<ImageType> | null;
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
    cached: number | null;
    title: string | null;
    published_at: string | null;
    updated_at: string | null;
    thumbnail_title: string | null;
    thumbnail_teaser: string | null;
    author: AuthorType | null;
    thumbnail_image: ImageType | null;
    slug: string | null;
    href: string | null;
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
    dimensions: dimensionsType | null;
    edition_of: string | null;
    is_acquireable: boolean | null;
    is_sold: boolean | null;
    is_for_sale: boolean | null;
    price: string | null;
  }

  /**
    description: null
  */
  interface ArtworkMetaType {
    __typename: string;
    title: string | null;
    description: string | null;
    image: string | null;
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
    type: string | null;
    name: string | null;
    href: string | null;
    description: string | null;
    artworks: Array<ArtworkType> | null;
  }

  /**
    description: null
  */
  type ArtistSortsEnum = "sortable_id_asc" | "sortable_id_desc" | "trending_desc" | "SORTABLE_ID_ASC" | "SORTABLE_ID_DESC" | "TRENDING_DESC";

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
    cached: number | null;
    /** Artworks Elastic Search results */
    filtered_artworks: FilterArtworksType | null;
    href: string | null;
    name: string | null;
    description: string | null;
    image: ImageType | null;
    artists: Array<ArtistType> | null;
    trending_artists: Array<ArtistType> | null;
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
    hits: Array<ArtworkType> | null;
    total: number | null;
    followed_artists_total: number | null;
    counts: FilterArtworksCountsType | null;
    /** Returns a list of merchandisable artists sorted by merch score. */
    merchandisable_artists: Array<ArtistType> | null;
    /** Returns aggregation counts for the given filter query. */
    aggregations: Array<ArtworksAggregationResultsType> | null;
  }

  /**
    description: null
  */
  interface FilterArtworksCountsType {
    __typename: string;
    total: any | null;
    followed_artists: any | null;
  }

  /**
    description: The results for one of the requested aggregations
  */
  interface ArtworksAggregationResultsType {
    __typename: string;
    slice: ArtworkAggregationEnum | null;
    counts: Array<AggregationCountType> | null;
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
    name: string | null;
    count: number | null;
  }

  /**
    description: null
  */
  interface HomePageType {
    __typename: string;
    /** Single artwork module to show on the home screen */
    artwork_module: HomePageArtworkModuleType | null;
    /** Artwork modules to show on the home screen */
    artwork_modules: Array<HomePageArtworkModuleType> | null;
    /** Single artist module to show on the home screen. */
    artist_module: HomePageArtistModuleType | null;
    /** Artist modules to show on the home screen */
    artist_modules: Array<HomePageArtistModuleType> | null;
    /** A list of enabled hero units to show on the requested platform */
    hero_units: Array<HomePageHeroUnitType> | null;
  }

  /**
    description: null
  */
  interface HomePageArtworkModuleType {
    __typename: string;
    /** A globally unique ID. */
    __id: string;
    key: string | null;
    display: string | null;
    is_displayable: boolean | null;
    params: HomePageModulesParamsType | null;
    context: HomePageModuleContextType | null;
    title: string | null;
    results: Array<ArtworkType> | null;
  }

  /**
    description: null
  */
  interface HomePageModulesParamsType {
    __typename: string;
    gene_id: string | null;
    medium: string | null;
    price_range: string | null;
    id: string | null;
    followed_artist_id: string | null;
    related_artist_id: string | null;
  }

  /**
    description: null
  */
  type HomePageModuleContext = HomePageModuleContextFairType | HomePageModuleContextSaleType | HomePageModuleContextGeneType | HomePageModuleContextTrendingType | HomePageModuleContextFollowArtistsType | HomePageModuleContextRelatedArtistType | HomePageModuleContextFollowedArtistType;

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
    cached: number | null;
    banner_size: string | null;
    profile: ProfileType | null;
    has_full_feature: boolean | null;
    has_homepage_section: boolean | null;
    has_listing: boolean | null;
    has_large_banner: boolean | null;
    href: string | null;
    image: ImageType | null;
    location: LocationType | null;
    /** Are we currently in the fair's active period? */
    is_active: boolean | null;
    start_at: string | null;
    end_at: string | null;
    name: string | null;
    tagline: string | null;
    published: boolean | null;
    is_published: boolean | null;
    organizer: organizerType | null;
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
    cached: number | null;
    name: string | null;
    href: string | null;
    description: string | null;
    sale_type: string | null;
    is_auction: boolean | null;
    is_auction_promo: boolean | null;
    is_preview: boolean | null;
    is_open: boolean | null;
    is_live_open: boolean | null;
    is_closed: boolean | null;
    is_with_buyers_premium: boolean | null;
    auction_state: string | null;
    status: string | null;
    registration_ends_at: string | null;
    start_at: string | null;
    end_at: string | null;
    live_start_at: string | null;
    event_start_at: string | null;
    event_end_at: string | null;
    currency: string | null;
    sale_artworks: Array<SaleArtworkType> | null;
    artworks: Array<ArtworkType> | null;
    cover_image: ImageType | null;
    sale_artwork: SaleArtworkType | null;
    profile: ProfileType | null;
    /** A bid increment policy that explains minimum bids in ranges. */
    bid_increments: Array<BidIncrementType> | null;
    /** Auction's buyer's premium policy. */
    buyers_premium: Array<BuyersPremiumType> | null;
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
    cached: number | null;
    /** Artworks Elastic Search results */
    filtered_artworks: FilterArtworksType | null;
    href: string | null;
    name: string | null;
    description: string | null;
    image: ImageType | null;
    artists: Array<ArtistType> | null;
    trending_artists: Array<ArtistType> | null;
  }

  /**
    description: null
  */
  interface HomePageModuleContextTrendingType {
    __typename: string;
    artists: Array<ArtistType> | null;
  }

  /**
    description: null
  */
  interface HomePageModuleContextFollowArtistsType {
    __typename: string;
    artists: Array<ArtistType> | null;
    counts: FollowArtistCountsType | null;
  }

  /**
    description: null
  */
  interface FollowArtistCountsType {
    __typename: string;
    artists: number | null;
  }

  /**
    description: null
  */
  interface HomePageModuleContextRelatedArtistType {
    __typename: string;
    artist: ArtistType | null;
    based_on: ArtistType | null;
  }

  /**
    description: null
  */
  interface HomePageModuleContextFollowedArtistType {
    __typename: string;
    artist: ArtistType | null;
  }

  /**
    description: null
  */
  type HomePageArtworkModuleTypesEnum = "ACTIVE_BIDS" | "FOLLOWED_ARTISTS" | "FOLLOWED_GALLERIES" | "SAVED_WORKS" | "RECOMMENDED_WORKS" | "LIVE_AUCTIONS" | "CURRENT_FAIRS" | "FOLLOWED_ARTIST" | "RELATED_ARTISTS" | "FOLLOWED_GENES" | "GENERIC_GENES";

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
    key: string | null;
    results: Array<ArtistType> | null;
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
    cached: number | null;
    heading: string | null;
    href: string | null;
    title: string | null;
    /** The image to show, on desktop this defaults to the wide version. */
    background_image_url: string | null;
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
    cached: number | null;
    key: string | null;
    name: string | null;
    description: string | null;
    item_type: string | null;
    items: Array<ItemType> | null;
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
    cached: number | null;
    href: string | null;
    /** Use this attribute to sort by when sorting a collection of Artists */
    sortable_id: string | null;
    name: string | null;
    initials: string | null;
    gender: string | null;
    years: string | null;
    is_public: boolean | null;
    is_consignable: boolean | null;
    public: boolean | null;
    consignable: boolean | null;
    /** Only specific Artists should show a link to auction results. */
    is_display_auction_link: boolean | null;
    display_auction_link: boolean | null;
    has_metadata: boolean | null;
    hometown: string | null;
    location: string | null;
    nationality: string | null;
    birthday: string | null;
    deathday: string | null;
    /** A string of the form "Nationality, Birthday (or Birthday-Deathday)" */
    formatted_nationality_and_birthday: string | null;
    /** The Artist biography article written by Artsy */
    biography: ArticleType | null;
    alternate_names: Array<string> | null;
    meta: ArtistMetaType | null;
    blurb: string | null;
    biography_blurb: ArtistBlurbType | null;
    is_shareable: boolean | null;
    bio: string | null;
    counts: ArtistCountsType | null;
    artworks: Array<ArtworkType> | null;
    /** A string showing the total number of works and those for sale */
    formatted_artworks_count: string | null;
    image: ImageType | null;
    artists: Array<ArtistType> | null;
    contemporary: Array<ArtistType> | null;
    carousel: ArtistCarouselType | null;
    statuses: ArtistStatusesType | null;
    /** Custom-sorted list of shows for an artist, in order of significance. */
    exhibition_highlights: Array<ShowType> | null;
    partner_shows: Array<PartnerShowType> | null;
    shows: Array<ShowType> | null;
    partner_artists: Array<PartnerArtistType> | null;
    sales: Array<SaleType> | null;
    articles: Array<ArticleType> | null;
  }

  /**
    description: null
  */
  interface FeaturedLinkItemType {
    __typename: string;
    /** Attempt to get the ID of the entity of the FeaturedLink */
    id: string | null;
    title: string | null;
    initials: string | null;
    subtitle: string | null;
    href: string | null;
    image: ImageType | null;
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
    cached: number | null;
    /** Artworks Elastic Search results */
    filtered_artworks: FilterArtworksType | null;
    href: string | null;
    name: string | null;
    description: string | null;
    image: ImageType | null;
    artists: Array<ArtistType> | null;
    trending_artists: Array<ArtistType> | null;
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
    hits: Array<PartnerType> | null;
    total: number | null;
    aggregations: Array<PartnersAggregationResultsType> | null;
  }

  /**
    description: The results for one of the requested aggregations
  */
  interface PartnersAggregationResultsType {
    __typename: string;
    slice: PartnersAggregationEnum | null;
    counts: Array<AggregationCountType> | null;
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
    cached: number | null;
    name: string | null;
    category_type: CategoryTypeEnum | null;
    partners: Array<PartnerType> | null;
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
    cached: number | null;
    total: number | null;
    results: Array<SearchResultType> | null;
  }

  /**
    description: null
  */
  interface SearchResultType {
    __typename: string;
    id: string | null;
    title: string | null;
    href: string | null;
    snippet: string | null;
    image: ImageType | null;
    type: string | null;
    entity: SearchEntityType | null;
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
    cached: number | null;
    href: string | null;
    /** Use this attribute to sort by when sorting a collection of Artists */
    sortable_id: string | null;
    name: string | null;
    initials: string | null;
    gender: string | null;
    years: string | null;
    is_public: boolean | null;
    is_consignable: boolean | null;
    public: boolean | null;
    consignable: boolean | null;
    /** Only specific Artists should show a link to auction results. */
    is_display_auction_link: boolean | null;
    display_auction_link: boolean | null;
    has_metadata: boolean | null;
    hometown: string | null;
    location: string | null;
    nationality: string | null;
    birthday: string | null;
    deathday: string | null;
    /** A string of the form "Nationality, Birthday (or Birthday-Deathday)" */
    formatted_nationality_and_birthday: string | null;
    /** The Artist biography article written by Artsy */
    biography: ArticleType | null;
    alternate_names: Array<string> | null;
    meta: ArtistMetaType | null;
    blurb: string | null;
    biography_blurb: ArtistBlurbType | null;
    is_shareable: boolean | null;
    bio: string | null;
    counts: ArtistCountsType | null;
    artworks: Array<ArtworkType> | null;
    /** A string showing the total number of works and those for sale */
    formatted_artworks_count: string | null;
    image: ImageType | null;
    artists: Array<ArtistType> | null;
    contemporary: Array<ArtistType> | null;
    carousel: ArtistCarouselType | null;
    statuses: ArtistStatusesType | null;
    /** Custom-sorted list of shows for an artist, in order of significance. */
    exhibition_highlights: Array<ShowType> | null;
    partner_shows: Array<PartnerShowType> | null;
    shows: Array<ShowType> | null;
    partner_artists: Array<PartnerArtistType> | null;
    sales: Array<SaleType> | null;
    articles: Array<ArticleType> | null;
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
    cached: number | null;
    to_s: string | null;
    href: string | null;
    title: string | null;
    category: string | null;
    medium: string | null;
    date: string | null;
    image_rights: string | null;
    website: string | null;
    collecting_institution: string | null;
    partner: PartnerType | null;
    /** Returns an HTML string representing the embedded content (video) */
    embed: string | null;
    can_share_image: boolean | null;
    is_embeddable_video: boolean | null;
    is_shareable: boolean | null;
    is_hangable: boolean | null;
    /** True for inquireable artworks that have an exact price. */
    is_purchasable: boolean | null;
    /** Do we want to encourage inquiries on this work? */
    is_inquireable: boolean | null;
    /** Are we able to display a contact form on artwork pages? */
    is_contactable: boolean | null;
    /** Is this artwork part of an auction? */
    is_in_auction: boolean | null;
    /** Is this artwork part of a current show */
    is_in_show: boolean | null;
    is_for_sale: boolean | null;
    /** Is this artwork part of an auction that is currently running? */
    is_biddable: boolean | null;
    is_unique: boolean | null;
    is_sold: boolean | null;
    is_ecommerce: boolean | null;
    /** Whether work can be purchased through e-commerce */
    is_acquireable: boolean | null;
    /** When in an auction, can the work be bought before any bids are placed */
    is_buy_nowable: boolean | null;
    is_comparable_with_auction_results: boolean | null;
    is_downloadable: boolean | null;
    is_price_hidden: boolean | null;
    is_price_range: boolean | null;
    availability: string | null;
    sale_message: string | null;
    artist: ArtistType | null;
    price: string | null;
    contact_label: string | null;
    cultural_maker: string | null;
    artists: Array<ArtistType> | null;
    artist_names: string | null;
    dimensions: dimensionsType | null;
    image: ImageType | null;
    images: Array<ImageType> | null;
    /** Returns the associated Fair/Sale/PartnerShow */
    context: ArtworkContextType | null;
    /** Returns the highlighted shows and articles */
    highlights: Array<HighlightedType> | null;
    articles: Array<ArticleType> | null;
    shows: Array<PartnerShowType> | null;
    show: PartnerShowType | null;
    sale_artwork: SaleArtworkType | null;
    sale: SaleType | null;
    fair: FairType | null;
    edition_of: string | null;
    edition_sets: Array<EditionSetType> | null;
    description: string | null;
    exhibition_history: string | null;
    provenance: string | null;
    signature: string | null;
    additional_information: string | null;
    literature: string | null;
    publisher: string | null;
    manufacturer: string | null;
    series: string | null;
    meta: ArtworkMetaType | null;
    related: Array<ArtworkType> | null;
    layer: ArtworkLayerType | null;
    layers: Array<ArtworkLayerType> | null;
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
    cached: number | null;
    name: string | null;
    image: ImageType | null;
    initials: string | null;
    icon: ImageType | null;
    href: string | null;
    is_published: boolean | null;
    bio: string | null;
    counts: ProfileCountsType | null;
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
    cached: number | null;
    href: string | null;
    kind: string | null;
    /** The exhibition title */
    name: string | null;
    description: string | null;
    type: string | null;
    displayable: boolean | null;
    /** Gravity doesn’t expose the `active` flag. Temporarily re-state its logic. */
    is_active: boolean | null;
    is_displayable: boolean | null;
    is_fair_booth: boolean | null;
    press_release: string | null;
    start_at: string | null;
    end_at: string | null;
    /** A formatted description of the start to end dates */
    exhibition_period: string | null;
    artists: Array<ArtistType> | null;
    partner: PartnerType | null;
    fair: FairType | null;
    location: LocationType | null;
    status: string | null;
    /** A formatted update on upcoming status changes */
    status_update: string | null;
    events: Array<PartnerShowEventTypeType> | null;
    counts: PartnerShowCountsType | null;
    artworks: Array<ArtworkType> | null;
    meta_image: ImageType | null;
    cover_image: ImageType | null;
    images: Array<ImageType> | null;
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
    artists: Array<ArtistType> | null;
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
    type: string | null;
    created_at: string | null;
    email: string | null;
    name: string | null;
    paddle_number: string | null;
    /** A list of the current user’s bidder registrations */
    bidders: Array<BidderType> | null;
    /** The current user's status relating to bids on artworks */
    bidder_status: LotStandingType | null;
    /** A list of the current user's bidder positions */
    bidder_positions: Array<BidderPositionType> | null;
    /** The current user's status relating to bids on artworks */
    lot_standing: LotStandingType | null;
    /** A list of the current user's auction standings for given lots */
    lot_standings: Array<LotStandingType> | null;
    sale_registrations: Array<SaleRegistrationType> | null;
    /** A list of the current user’s artist follows */
    follow_artists: FollowArtistsType | null;
    /** A list of the current user’s suggested artists, based on a single artist */
    suggested_artists: Array<ArtistType> | null;
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
    created_at: string | null;
    pin: string | null;
    sale: SaleType | null;
    qualified_for_bidding: boolean | null;
  }

  /**
    description: null
  */
  interface LotStandingType {
    __typename: string;
    bidder: BidderType | null;
    sale_artwork: SaleArtworkType | null;
    /** You are winning and reserve is met */
    is_highest_bidder: boolean | null;
    /** You are the leading bidder without regard to reserve */
    is_leading_bidder: boolean | null;
    /** Your bid if it is currently winning */
    active_bid: BidderPositionType | null;
    /** Your most recent bid—which is not necessarily winning (may be higher or lower) */
    most_recent_bid: BidderPositionType | null;
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
    created_at: string | null;
    updated_at: string | null;
    processed_at: string | null;
    is_active: boolean | null;
    is_retracted: boolean | null;
    is_with_bid_max: boolean | null;
    is_winning: boolean | null;
    max_bid: BidderPositionMaxBidType | null;
    suggested_next_bid: BidderPositionSuggestedNextBidType | null;
    sale_artwork: SaleArtworkType | null;
    highest_bid: HighestBidType | null;
    display_max_bid_amount_dollars: string | null;
    display_suggested_next_bid_dollars: string | null;
    max_bid_amount_cents: number | null;
    suggested_next_bid_cents: number | null;
  }

  /**
    description: null
  */
  interface BidderPositionMaxBidType {
    __typename: string;
    /** An amount of money expressed in cents. */
    cents: number | null;
    /** A pre-formatted price. */
    display: string | null;
    /** A formatted price with various currency formatting options. */
    amount: string | null;
  }

  /**
    description: null
  */
  interface BidderPositionSuggestedNextBidType {
    __typename: string;
    /** An amount of money expressed in cents. */
    cents: number | null;
    /** A pre-formatted price. */
    display: string | null;
    /** A formatted price with various currency formatting options. */
    amount: string | null;
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
    created_at: string | null;
    number: number | null;
    is_cancelled: boolean | null;
    /** A formatted price with various currency formatting options. */
    amount: string | null;
    cents: number | null;
    display: string | null;
    amount_cents: number | null;
    display_amount_dollars: string | null;
  }

  /**
    description: null
  */
  interface SaleRegistrationType {
    __typename: string;
    is_registered: boolean | null;
    bidder: BidderType | null;
    sale: SaleType | null;
  }

  /**
    description: null
  */
  interface FollowArtistsType {
    __typename: string;
    artists: Array<ArtistType> | null;
    counts: FollowArtistCountsType | null;
  }

  /**
    description: null
  */
  type RoleEnum = "PARTICIPANT" | "OPERATOR";
}
