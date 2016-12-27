// graphql typescript definitions
type GraphQLResponseRoot = {
  data?: RootQueryType;
  errors?: Array<GraphQLResponseError>;
}

type GraphQLResponseError = {
  message: string;            // Required for all errors
  locations?: Array<GraphQLResponseErrorLocation>;
  [propName: string]: any;    // 7.2.2 says 'GraphQL servers may provide additional entries to error'
}

type GraphQLResponseErrorLocation = {
  line: number;
  column: number;
}

null
type RootQueryType = {
  __typename: string;
  node?: Node;
  status?: Status;
  article?: Article;
  articles?: Array<Article>;
  artwork?: Artwork;
  artworks?: Array<Artwork>;
  artist?: Artist;
  artists?: Array<Artist>;
  external_partner?: ExternalPartner;
  fair?: Fair;
  fairs?: Array<Fair>;
  gene?: Gene;
  home_page?: HomePage;
  profile?: Profile;
  ordered_sets?: Array<OrderedSet>;
  partner?: Partner;
  partners?: Array<Partner>;
  filter_partners?: FilterPartners;
  filter_artworks?: FilterArtworks;
  partner_category?: PartnerCategory;
  partner_categories?: Array<PartnerCategory>;
  partner_show?: PartnerShow;
  partner_shows?: Array<PartnerShow>;
  sale?: Sale;
  sales?: Array<Sale>;
  sale_artwork?: SaleArtwork;
  search?: Search;
  show?: Show;
  trending_artists?: TrendingArtists;
  me?: Me;
  causality_jwt?: string;
}

/*
  description: An object with a Globally Unique ID
*/
type Node = Article | Artwork | Partner | PartnerShow | Artist | Show | ArtworkContextPartnerShow | HighlightedShow | HighlightedArticle | Gene | HomePageArtworkModule | HomePageModuleContextGene | HomePageArtistModule | ArtistItem | GeneItem | ArtistSearchEntity | ArtworkSearchEntity | PartnerShowSearchEntity;

null
type Status = {
  __typename: string;
  gravity?: StatusGravity;
  ping?: boolean;
}

/*
  description: Gravity ping
*/
type StatusGravity = {
  __typename: string;
  ping?: boolean;
}

null
type Article = {
  __typename: string;
  __id: string;
  id: string;
  cached?: number;
  title?: string;
  published_at?: string;
  updated_at?: string;
  thumbnail_title?: string;
  thumbnail_teaser?: string;
  author?: Author;
  thumbnail_image?: Image;
  slug?: string;
  href?: string;
}

null
type Author = {
  __typename: string;
  __id: string;
  id: string;
  name?: string;
  profile_handle?: string;
  href?: string;
}

null
type Image = {
  __typename: string;
  id?: string;
  href?: string;
  title?: string;
  width?: number;
  height?: number;
  orientation?: string;
  aspect_ratio?: number;
  versions?: Array<string>;
  caption?: string;
  is_default?: boolean;
  position?: number;
  url?: string;
  cropped?: CroppedImageUrl;
  resized?: ResizedImageUrl;
  deep_zoom?: DeepZoom;
  is_zoomable?: boolean;
  placeholder?: string;
}

null
type CroppedImageUrl = {
  __typename: string;
  width?: number;
  height?: number;
  url?: string;
}

null
type ResizedImageUrl = {
  __typename: string;
  factor?: number;
  width?: number;
  height?: number;
  url?: string;
}

null
type DeepZoom = {
  __typename: string;
  Image?: DeepZoomImage;
}

null
type DeepZoomImage = {
  __typename: string;
  xmlns?: string;
  Url?: string;
  Format?: string;
  TileSize?: number;
  Overlap?: number;
  Size?: DeepZoomImageSize;
}

null
type DeepZoomImageSize = {
  __typename: string;
  Width?: number;
  Height?: number;
}

null
type ArticleSortsEnum = "PUBLISHED_AT_ASC" | "PUBLISHED_AT_DESC";

null
type Artwork = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  to_s?: string;
  href?: string;
  title?: string;
  category?: string;
  medium?: string;
  date?: string;
  image_rights?: string;
  website?: string;
  collecting_institution?: string;
  partner?: Partner;
  embed?: string;
  can_share_image?: boolean;
  is_embeddable_video?: boolean;
  is_shareable?: boolean;
  is_hangable?: boolean;
  is_purchasable?: boolean;
  is_inquireable?: boolean;
  is_contactable?: boolean;
  is_in_auction?: boolean;
  is_in_show?: boolean;
  is_for_sale?: boolean;
  is_biddable?: boolean;
  is_unique?: boolean;
  is_sold?: boolean;
  is_ecommerce?: boolean;
  is_acquireable?: boolean;
  is_buy_nowable?: boolean;
  is_comparable_with_auction_results?: boolean;
  is_downloadable?: boolean;
  is_price_hidden?: boolean;
  is_price_range?: boolean;
  availability?: string;
  sale_message?: string;
  artist?: Artist;
  price?: string;
  contact_label?: string;
  cultural_maker?: string;
  artists?: Array<Artist>;
  artist_names?: string;
  dimensions?: dimensions;
  image?: Image;
  images?: Array<Image>;
  context?: ArtworkContext;
  highlights?: Array<Highlighted>;
  articles?: Array<Article>;
  shows?: Array<PartnerShow>;
  show?: PartnerShow;
  sale_artwork?: SaleArtwork;
  sale?: Sale;
  fair?: Fair;
  edition_of?: string;
  edition_sets?: Array<EditionSet>;
  description?: string;
  exhibition_history?: string;
  provenance?: string;
  signature?: string;
  additional_information?: string;
  literature?: string;
  publisher?: string;
  manufacturer?: string;
  series?: string;
  meta?: ArtworkMeta;
  related?: Array<Artwork>;
  layer?: ArtworkLayer;
  layers?: Array<ArtworkLayer>;
}

null
type Partner = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  name?: string;
  collecting_institution?: string;
  is_default_profile_public?: boolean;
  has_fair_partnership?: boolean;
  type?: string;
  href?: string;
  is_linkable?: boolean;
  is_pre_qualify?: boolean;
  initials?: string;
  default_profile_id?: string;
  profile?: Profile;
  shows?: Array<PartnerShow>;
  artworks?: Array<Artwork>;
  locations?: Array<Location>;
  contact_message?: string;
  counts?: PartnerCounts;
}

null
type Profile = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  name?: string;
  image?: Image;
  initials?: string;
  icon?: Image;
  href?: string;
  is_published?: boolean;
  bio?: string;
  counts?: ProfileCounts;
}

null
type ProfileCounts = {
  __typename: string;
  follows?: any;
}

null
type PartnerShowSortsEnum = "created_at_asc" | "created_at_desc" | "end_at_asc" | "end_at_desc" | "start_at_asc" | "start_at_desc" | "name_asc" | "name_desc" | "publish_at_asc" | "publish_at_desc";

null
type EventStatusEnum = "current" | "running" | "closed" | "upcoming";

null
type Near = {
    lat: number;
  lng: number;
  max_distance?: number;
}

null
type PartnerShow = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  href?: string;
  kind?: string;
  name?: string;
  description?: string;
  type?: string;
  displayable?: boolean;
  is_active?: boolean;
  is_displayable?: boolean;
  is_fair_booth?: boolean;
  press_release?: string;
  start_at?: string;
  end_at?: string;
  exhibition_period?: string;
  artists?: Array<Artist>;
  partner?: Partner;
  fair?: Fair;
  location?: Location;
  status?: string;
  status_update?: string;
  events?: Array<PartnerShowEventType>;
  counts?: PartnerShowCounts;
  artworks?: Array<Artwork>;
  meta_image?: Image;
  cover_image?: Image;
  images?: Array<Image>;
}

null
type FormatEnum = "HTML" | "PLAIN" | "markdown";

null
type Artist = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  href?: string;
  sortable_id?: string;
  name?: string;
  initials?: string;
  gender?: string;
  years?: string;
  is_public?: boolean;
  is_consignable?: boolean;
  public?: boolean;
  consignable?: boolean;
  is_display_auction_link?: boolean;
  display_auction_link?: boolean;
  has_metadata?: boolean;
  hometown?: string;
  location?: string;
  nationality?: string;
  birthday?: string;
  deathday?: string;
  formatted_nationality_and_birthday?: string;
  biography?: Article;
  alternate_names?: Array<string>;
  meta?: ArtistMeta;
  blurb?: string;
  biography_blurb?: ArtistBlurb;
  is_shareable?: boolean;
  bio?: string;
  counts?: ArtistCounts;
  artworks?: Array<Artwork>;
  formatted_artworks_count?: string;
  image?: Image;
  artists?: Array<Artist>;
  contemporary?: Array<Artist>;
  carousel?: ArtistCarousel;
  statuses?: ArtistStatuses;
  exhibition_highlights?: Array<Show>;
  partner_shows?: Array<PartnerShow>;
  shows?: Array<Show>;
  partner_artists?: Array<PartnerArtist>;
  sales?: Array<Sale>;
  articles?: Array<Article>;
}

null
type ArtistMeta = {
  __typename: string;
  title?: string;
  description?: string;
}

null
type ArtistBlurb = {
  __typename: string;
  text?: string;
  credit?: string;
  partner_id?: string;
}

null
type ArtistCounts = {
  __typename: string;
  artworks?: any;
  follows?: any;
  for_sale_artworks?: any;
  partner_shows?: any;
  related_artists?: any;
  articles?: any;
}

null
type ArtworkSortsEnum = "title_asc" | "title_desc" | "created_at_asc" | "created_at_desc" | "deleted_at_asc" | "deleted_at_desc" | "iconicity_desc" | "merchandisability_desc" | "published_at_asc" | "published_at_desc" | "partner_updated_at_desc" | "availability_desc";

null
type ArtistArtworksFiltersEnum = "IS_FOR_SALE" | "IS_NOT_FOR_SALE";

null
type ArtistCarousel = {
  __typename: string;
  images?: Array<Image>;
}

null
type ArtistStatuses = {
  __typename: string;
  artworks?: boolean;
  shows?: boolean;
  cv?: boolean;
  artists?: boolean;
  contemporary?: boolean;
  articles?: boolean;
  auction_lots?: boolean;
  biography?: boolean;
}

null
type Show = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  href?: string;
  kind?: string;
  name?: string;
  description?: string;
  type?: string;
  displayable?: boolean;
  is_active?: boolean;
  is_displayable?: boolean;
  is_fair_booth?: boolean;
  is_reference?: boolean;
  press_release?: string;
  start_at?: string;
  end_at?: string;
  exhibition_period?: string;
  artists?: Array<Artist>;
  artists_without_artworks?: Array<Artist>;
  partner?: PartnerTypes;
  fair?: Fair;
  location?: Location;
  city?: string;
  status?: string;
  status_update?: string;
  events?: Array<PartnerShowEventType>;
  counts?: ShowCounts;
  artworks?: Array<Artwork>;
  meta_image?: Image;
  cover_image?: Image;
  images?: Array<Image>;
}

null
type PartnerTypes = Partner | ExternalPartner;

null
type ExternalPartner = {
  __typename: string;
  __id: string;
  id: string;
  name?: string;
  city?: string;
}

null
type Fair = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  banner_size?: string;
  profile?: Profile;
  has_full_feature?: boolean;
  has_homepage_section?: boolean;
  has_listing?: boolean;
  has_large_banner?: boolean;
  href?: string;
  image?: Image;
  location?: Location;
  is_active?: boolean;
  start_at?: string;
  end_at?: string;
  name?: string;
  tagline?: string;
  published?: boolean;
  is_published?: boolean;
  organizer?: organizer;
}

null
type Location = {
  __typename: string;
  __id: string;
  id: string;
  cached?: number;
  city?: string;
  country?: string;
  coordinates?: coordinates;
  display?: string;
  address?: string;
  address_2?: string;
  postal_code?: string;
  state?: string;
  phone?: string;
  day_schedules?: Array<DaySchedule>;
}

null
type coordinates = {
  __typename: string;
  lat?: number;
  lng?: number;
}

null
type DaySchedule = {
  __typename: string;
  start_time?: number;
  end_time?: number;
  day_of_week?: string;
}

null
type organizer = {
  __typename: string;
  profile_id?: string;
}

null
type PartnerShowEventType = {
  __typename: string;
  title?: string;
  description?: string;
  event_type?: string;
  start_at?: string;
  end_at?: string;
}

null
type ShowCounts = {
  __typename: string;
  artworks?: number;
  eligible_artworks?: any;
}

null
type PartnerArtist = {
  __typename: string;
  __id: string;
  id: string;
  counts?: PartnerArtistCounts;
  is_display_on_partner_profile?: boolean;
  is_represented_by?: boolean;
  sortable_id?: string;
  is_use_default_biography?: boolean;
  biography?: string;
  partner?: Partner;
  artist?: Artist;
}

null
type PartnerArtistCounts = {
  __typename: string;
  artworks?: any;
  for_sale_artworks?: any;
}

null
type SaleSortsEnum = "_ID_ASC" | "_ID_DESC" | "NAME_ASC" | "NAME_DESC" | "CREATED_AT_ASC" | "CREATED_AT_DESC" | "END_AT_ASC" | "END_AT_DESC" | "START_AT_ASC" | "START_AT_DESC" | "ELIGIBLE_SALE_ARTWORKS_COUNT_ASC" | "ELIGIBLE_SALE_ARTWORKS_COUNT_DESC" | "TIMELY_AT_NAME_ASC" | "TIMELY_AT_NAME_DESC";

null
type Sale = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  name?: string;
  href?: string;
  description?: string;
  sale_type?: string;
  is_auction?: boolean;
  is_auction_promo?: boolean;
  is_preview?: boolean;
  is_open?: boolean;
  is_live_open?: boolean;
  is_closed?: boolean;
  is_with_buyers_premium?: boolean;
  auction_state?: string;
  status?: string;
  registration_ends_at?: string;
  start_at?: string;
  end_at?: string;
  live_start_at?: string;
  event_start_at?: string;
  event_end_at?: string;
  currency?: string;
  sale_artworks?: Array<SaleArtwork>;
  artworks?: Array<Artwork>;
  cover_image?: Image;
  sale_artwork?: SaleArtwork;
  profile?: Profile;
  bid_increments?: Array<BidIncrement>;
  buyers_premium?: Array<BuyersPremium>;
}

null
type SaleArtwork = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  sale_id?: string;
  sale?: Sale;
  position?: number;
  lot_number?: string;
  currency?: string;
  symbol?: string;
  reserve_status?: string;
  is_with_reserve?: boolean;
  is_bid_on?: boolean;
  is_biddable?: boolean;
  reserve_message?: string;
  reserve?: SaleArtworkReserve;
  low_estimate?: SaleArtworkLowEstimate;
  high_estimate?: SaleArtworkHighEstimate;
  opening_bid?: SaleArtworkOpeningBid;
  minimum_next_bid?: SaleArtworkMinimumNextBid;
  current_bid?: SaleArtworkCurrentBid;
  highest_bid?: SaleArtworkHighestBid;
  artwork?: Artwork;
  estimate?: string;
  counts?: SaleArtworkCounts;
  low_estimate_cents?: number;
  high_estimate_cents?: number;
  opening_bid_cents?: number;
  minimum_next_bid_cents?: number;
  bidder_positions_count?: number;
  bid_increments?: Array<number>;
}

null
type SaleArtworkReserve = {
  __typename: string;
  cents?: number;
  display?: string;
  amount?: string;
}

null
type SaleArtworkLowEstimate = {
  __typename: string;
  cents?: number;
  display?: string;
  amount?: string;
}

null
type SaleArtworkHighEstimate = {
  __typename: string;
  cents?: number;
  display?: string;
  amount?: string;
}

null
type SaleArtworkOpeningBid = {
  __typename: string;
  cents?: number;
  display?: string;
  amount?: string;
}

null
type SaleArtworkMinimumNextBid = {
  __typename: string;
  cents?: number;
  display?: string;
  amount?: string;
}

null
type SaleArtworkCurrentBid = {
  __typename: string;
  cents?: number;
  display?: string;
  amount?: string;
}

null
type SaleArtworkHighestBid = {
  __typename: string;
  id?: string;
  created_at?: string;
  is_cancelled?: boolean;
  amount?: string;
  cents?: number;
  display?: string;
  amount_cents?: number;
}

null
type SaleArtworkCounts = {
  __typename: string;
  bidder_positions?: any;
}

null
type BidIncrement = {
  __typename: string;
  from?: number;
  to?: number;
  amount?: number;
}

null
type BuyersPremium = {
  __typename: string;
  amount?: string;
  cents?: number;
  percent?: number;
}

null
type PartnerShowCounts = {
  __typename: string;
  artworks?: number;
  eligible_artworks?: any;
}

null
type PartnerCounts = {
  __typename: string;
  artworks?: any;
  artists?: any;
  partner_artists?: any;
  eligible_artworks?: any;
  published_for_sale_artworks?: any;
  published_not_for_sale_artworks?: any;
  shows?: any;
  displayable_shows?: any;
  current_displayable_shows?: any;
  artist_documents?: any;
  partner_show_documents?: any;
}

null
type dimensions = {
  __typename: string;
  in?: string;
  cm?: string;
}

null
type ArtworkContext = ArtworkContextAuction | ArtworkContextSale | ArtworkContextFair | ArtworkContextPartnerShow;

null
type ArtworkContextAuction = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  name?: string;
  href?: string;
  description?: string;
  sale_type?: string;
  is_auction?: boolean;
  is_auction_promo?: boolean;
  is_preview?: boolean;
  is_open?: boolean;
  is_live_open?: boolean;
  is_closed?: boolean;
  is_with_buyers_premium?: boolean;
  auction_state?: string;
  status?: string;
  registration_ends_at?: string;
  start_at?: string;
  end_at?: string;
  live_start_at?: string;
  event_start_at?: string;
  event_end_at?: string;
  currency?: string;
  sale_artworks?: Array<SaleArtwork>;
  artworks?: Array<Artwork>;
  cover_image?: Image;
  sale_artwork?: SaleArtwork;
  profile?: Profile;
  bid_increments?: Array<BidIncrement>;
  buyers_premium?: Array<BuyersPremium>;
}

null
type ArtworkContextSale = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  name?: string;
  href?: string;
  description?: string;
  sale_type?: string;
  is_auction?: boolean;
  is_auction_promo?: boolean;
  is_preview?: boolean;
  is_open?: boolean;
  is_live_open?: boolean;
  is_closed?: boolean;
  is_with_buyers_premium?: boolean;
  auction_state?: string;
  status?: string;
  registration_ends_at?: string;
  start_at?: string;
  end_at?: string;
  live_start_at?: string;
  event_start_at?: string;
  event_end_at?: string;
  currency?: string;
  sale_artworks?: Array<SaleArtwork>;
  artworks?: Array<Artwork>;
  cover_image?: Image;
  sale_artwork?: SaleArtwork;
  profile?: Profile;
  bid_increments?: Array<BidIncrement>;
  buyers_premium?: Array<BuyersPremium>;
}

null
type ArtworkContextFair = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  banner_size?: string;
  profile?: Profile;
  has_full_feature?: boolean;
  has_homepage_section?: boolean;
  has_listing?: boolean;
  has_large_banner?: boolean;
  href?: string;
  image?: Image;
  location?: Location;
  is_active?: boolean;
  start_at?: string;
  end_at?: string;
  name?: string;
  tagline?: string;
  published?: boolean;
  is_published?: boolean;
  organizer?: organizer;
}

null
type ArtworkContextPartnerShow = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  href?: string;
  kind?: string;
  name?: string;
  description?: string;
  type?: string;
  displayable?: boolean;
  is_active?: boolean;
  is_displayable?: boolean;
  is_fair_booth?: boolean;
  press_release?: string;
  start_at?: string;
  end_at?: string;
  exhibition_period?: string;
  artists?: Array<Artist>;
  partner?: Partner;
  fair?: Fair;
  location?: Location;
  status?: string;
  status_update?: string;
  events?: Array<PartnerShowEventType>;
  counts?: PartnerShowCounts;
  artworks?: Array<Artwork>;
  meta_image?: Image;
  cover_image?: Image;
  images?: Array<Image>;
}

null
type Highlighted = HighlightedShow | HighlightedArticle;

null
type HighlightedShow = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  href?: string;
  kind?: string;
  name?: string;
  description?: string;
  type?: string;
  displayable?: boolean;
  is_active?: boolean;
  is_displayable?: boolean;
  is_fair_booth?: boolean;
  press_release?: string;
  start_at?: string;
  end_at?: string;
  exhibition_period?: string;
  artists?: Array<Artist>;
  partner?: Partner;
  fair?: Fair;
  location?: Location;
  status?: string;
  status_update?: string;
  events?: Array<PartnerShowEventType>;
  counts?: PartnerShowCounts;
  artworks?: Array<Artwork>;
  meta_image?: Image;
  cover_image?: Image;
  images?: Array<Image>;
}

null
type HighlightedArticle = {
  __typename: string;
  __id: string;
  id: string;
  cached?: number;
  title?: string;
  published_at?: string;
  updated_at?: string;
  thumbnail_title?: string;
  thumbnail_teaser?: string;
  author?: Author;
  thumbnail_image?: Image;
  slug?: string;
  href?: string;
}

null
type EditionSet = {
  __typename: string;
  __id: string;
  id: string;
  dimensions?: dimensions;
  edition_of?: string;
  is_acquireable?: boolean;
  is_sold?: boolean;
  is_for_sale?: boolean;
  price?: string;
}

null
type ArtworkMeta = {
  __typename: string;
  title?: string;
  description?: string;
  image?: string;
}

null
type ArtworkLayer = {
  __typename: string;
  __id: string;
  id: string;
  type?: string;
  name?: string;
  href?: string;
  description?: string;
  artworks?: Array<Artwork>;
}

null
type ArtistSortsEnum = "sortable_id_asc" | "sortable_id_desc" | "trending_desc";

null
type FairSortsEnum = "CREATED_AT_ASC" | "CREATED_AT_DESC" | "START_AT_ASC" | "START_AT_DESC" | "NAME_ASC" | "NAME_DESC";

null
type Gene = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  filtered_artworks?: FilterArtworks;
  href?: string;
  name?: string;
  description?: string;
  image?: Image;
  artists?: Array<Artist>;
  trending_artists?: Array<Artist>;
}

null
type ArtworkAggregationEnum = "PRICE_RANGE" | "DIMENSION_RANGE" | "COLOR" | "PERIOD" | "MAJOR_PERIOD" | "PARTNER_CITY" | "MEDIUM" | "GALLERY" | "INSTITUTION" | "TOTAL" | "FOLLOWED_ARTISTS" | "MERCHANDISABLE_ARTISTS";

null
type FilterArtworks = {
  __typename: string;
  hits?: Array<Artwork>;
  total?: number;
  followed_artists_total?: number;
  merchandisable_artists?: Array<Artist>;
  aggregations?: Array<ArtworksAggregationResults>;
}

/*
  description: The results for one of the requested aggregations
*/
type ArtworksAggregationResults = {
  __typename: string;
  slice?: ArtworkAggregationEnum;
  counts?: Array<AggregationCount>;
}

/*
  description: One item in an aggregation
*/
type AggregationCount = {
  __typename: string;
  __id: string;
  id: string;
  name?: string;
  count?: number;
}

null
type HomePage = {
  __typename: string;
  artwork_module?: HomePageArtworkModule;
  artwork_modules?: Array<HomePageArtworkModule>;
  artist_module?: HomePageArtistModule;
  artist_modules?: Array<HomePageArtistModule>;
  hero_units?: Array<HomePageHeroUnit>;
}

null
type HomePageArtworkModule = {
  __typename: string;
  __id: string;
  key?: string;
  display?: string;
  is_displayable?: boolean;
  params?: HomePageModulesParams;
  context?: HomePageModuleContext;
  title?: string;
  results?: Array<Artwork>;
}

null
type HomePageModulesParams = {
  __typename: string;
  gene_id?: string;
  medium?: string;
  price_range?: string;
  id?: string;
  followed_artist_id?: string;
  related_artist_id?: string;
}

null
type HomePageModuleContext = HomePageModuleContextFair | HomePageModuleContextSale | HomePageModuleContextGene | HomePageModuleContextTrending | HomePageModuleContextFollowArtists | HomePageModuleContextRelatedArtist;

null
type HomePageModuleContextFair = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  banner_size?: string;
  profile?: Profile;
  has_full_feature?: boolean;
  has_homepage_section?: boolean;
  has_listing?: boolean;
  has_large_banner?: boolean;
  href?: string;
  image?: Image;
  location?: Location;
  is_active?: boolean;
  start_at?: string;
  end_at?: string;
  name?: string;
  tagline?: string;
  published?: boolean;
  is_published?: boolean;
  organizer?: organizer;
}

null
type HomePageModuleContextSale = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  name?: string;
  href?: string;
  description?: string;
  sale_type?: string;
  is_auction?: boolean;
  is_auction_promo?: boolean;
  is_preview?: boolean;
  is_open?: boolean;
  is_live_open?: boolean;
  is_closed?: boolean;
  is_with_buyers_premium?: boolean;
  auction_state?: string;
  status?: string;
  registration_ends_at?: string;
  start_at?: string;
  end_at?: string;
  live_start_at?: string;
  event_start_at?: string;
  event_end_at?: string;
  currency?: string;
  sale_artworks?: Array<SaleArtwork>;
  artworks?: Array<Artwork>;
  cover_image?: Image;
  sale_artwork?: SaleArtwork;
  profile?: Profile;
  bid_increments?: Array<BidIncrement>;
  buyers_premium?: Array<BuyersPremium>;
}

null
type HomePageModuleContextGene = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  filtered_artworks?: FilterArtworks;
  href?: string;
  name?: string;
  description?: string;
  image?: Image;
  artists?: Array<Artist>;
  trending_artists?: Array<Artist>;
}

null
type HomePageModuleContextTrending = {
  __typename: string;
  artists?: Array<Artist>;
}

null
type HomePageModuleContextFollowArtists = {
  __typename: string;
  artists?: Array<Artist>;
  counts?: FollowArtistCounts;
}

null
type FollowArtistCounts = {
  __typename: string;
  artists?: number;
}

null
type HomePageModuleContextRelatedArtist = {
  __typename: string;
  artist?: Artist;
  based_on?: Artist;
}

null
type HomePageArtworkModuleTypesEnum = "ACTIVE_BIDS" | "FOLLOWED_ARTISTS" | "FOLLOWED_GALLERIES" | "SAVED_WORKS" | "RECOMMENDED_WORKS" | "LIVE_AUCTIONS" | "CURRENT_FAIRS" | "RELATED_ARTISTS" | "FOLLOWED_GENES" | "GENERIC_GENES";

null
type HomePageArtistModuleTypesEnum = "SUGGESTED" | "TRENDING" | "POPULAR";

null
type HomePageArtistModule = {
  __typename: string;
  __id: string;
  key?: string;
  results?: Array<Artist>;
}

null
type HomePageHeroUnitPlatformEnum = "MOBILE" | "DESKTOP" | "MARTSY";

null
type HomePageHeroUnit = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  heading?: string;
  href?: string;
  title?: string;
  background_image_url?: string;
}

null
type HomePageHeroUnitImageVersionEnum = "WIDE" | "NARROW";

null
type OrderedSet = {
  __typename: string;
  __id: string;
  id: string;
  cached?: number;
  key?: string;
  name?: string;
  description?: string;
  item_type?: string;
  items?: Array<Item>;
}

null
type Item = ArtistItem | FeaturedLinkItem | GeneItem;

null
type ArtistItem = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  href?: string;
  sortable_id?: string;
  name?: string;
  initials?: string;
  gender?: string;
  years?: string;
  is_public?: boolean;
  is_consignable?: boolean;
  public?: boolean;
  consignable?: boolean;
  is_display_auction_link?: boolean;
  display_auction_link?: boolean;
  has_metadata?: boolean;
  hometown?: string;
  location?: string;
  nationality?: string;
  birthday?: string;
  deathday?: string;
  formatted_nationality_and_birthday?: string;
  biography?: Article;
  alternate_names?: Array<string>;
  meta?: ArtistMeta;
  blurb?: string;
  biography_blurb?: ArtistBlurb;
  is_shareable?: boolean;
  bio?: string;
  counts?: ArtistCounts;
  artworks?: Array<Artwork>;
  formatted_artworks_count?: string;
  image?: Image;
  artists?: Array<Artist>;
  contemporary?: Array<Artist>;
  carousel?: ArtistCarousel;
  statuses?: ArtistStatuses;
  exhibition_highlights?: Array<Show>;
  partner_shows?: Array<PartnerShow>;
  shows?: Array<Show>;
  partner_artists?: Array<PartnerArtist>;
  sales?: Array<Sale>;
  articles?: Array<Article>;
}

null
type FeaturedLinkItem = {
  __typename: string;
  id?: string;
  title?: string;
  initials?: string;
  subtitle?: string;
  href?: string;
  image?: Image;
}

null
type GeneItem = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  filtered_artworks?: FilterArtworks;
  href?: string;
  name?: string;
  description?: string;
  image?: Image;
  artists?: Array<Artist>;
  trending_artists?: Array<Artist>;
}

null
type PartnersSortTypeEnum = "CREATED_AT_ASC" | "CREATED_AT_DESC" | "SORTABLE_ID_ASC" | "SORTABLE_ID_DESC" | "RELATIVE_SIZE_ASC" | "RELATIVE_SIZE_DESC" | "PUBLISHED_AT_DESC" | "RANDOM_SCORE_DESC";

null
type PartnerClassificationEnum = "AUCTION" | "DEMO" | "GALLERY" | "PRIVATE_COLLECTOR" | "PRIVATE_DEALER" | "INSTITUTION" | "INSTITUTIONAL_SELLER" | "BRAND";

null
type PartnersAggregationEnum = "LOCATION" | "CATEGORY" | "TOTAL";

null
type FilterPartners = {
  __typename: string;
  hits?: Array<Partner>;
  total?: number;
  aggregations?: Array<PartnersAggregationResults>;
}

/*
  description: The results for one of the requested aggregations
*/
type PartnersAggregationResults = {
  __typename: string;
  slice?: PartnersAggregationEnum;
  counts?: Array<AggregationCount>;
}

null
type PartnerCategory = {
  __typename: string;
  __id: string;
  id: string;
  cached?: number;
  name?: string;
  category_type?: CategoryTypeEnum;
  partners?: Array<Partner>;
}

null
type CategoryTypeEnum = "GALLERY" | "INSTITUTION";

null
type Search = {
  __typename: string;
  cached?: number;
  total?: number;
  results?: Array<SearchResult>;
}

null
type SearchResult = {
  __typename: string;
  id?: string;
  title?: string;
  href?: string;
  snippet?: string;
  image?: Image;
  type?: string;
  entity?: SearchEntity;
}

null
type SearchEntity = ArtistSearchEntity | ArtworkSearchEntity | ProfileSearchEntity | PartnerShowSearchEntity;

null
type ArtistSearchEntity = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  href?: string;
  sortable_id?: string;
  name?: string;
  initials?: string;
  gender?: string;
  years?: string;
  is_public?: boolean;
  is_consignable?: boolean;
  public?: boolean;
  consignable?: boolean;
  is_display_auction_link?: boolean;
  display_auction_link?: boolean;
  has_metadata?: boolean;
  hometown?: string;
  location?: string;
  nationality?: string;
  birthday?: string;
  deathday?: string;
  formatted_nationality_and_birthday?: string;
  biography?: Article;
  alternate_names?: Array<string>;
  meta?: ArtistMeta;
  blurb?: string;
  biography_blurb?: ArtistBlurb;
  is_shareable?: boolean;
  bio?: string;
  counts?: ArtistCounts;
  artworks?: Array<Artwork>;
  formatted_artworks_count?: string;
  image?: Image;
  artists?: Array<Artist>;
  contemporary?: Array<Artist>;
  carousel?: ArtistCarousel;
  statuses?: ArtistStatuses;
  exhibition_highlights?: Array<Show>;
  partner_shows?: Array<PartnerShow>;
  shows?: Array<Show>;
  partner_artists?: Array<PartnerArtist>;
  sales?: Array<Sale>;
  articles?: Array<Article>;
}

null
type ArtworkSearchEntity = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  to_s?: string;
  href?: string;
  title?: string;
  category?: string;
  medium?: string;
  date?: string;
  image_rights?: string;
  website?: string;
  collecting_institution?: string;
  partner?: Partner;
  embed?: string;
  can_share_image?: boolean;
  is_embeddable_video?: boolean;
  is_shareable?: boolean;
  is_hangable?: boolean;
  is_purchasable?: boolean;
  is_inquireable?: boolean;
  is_contactable?: boolean;
  is_in_auction?: boolean;
  is_in_show?: boolean;
  is_for_sale?: boolean;
  is_biddable?: boolean;
  is_unique?: boolean;
  is_sold?: boolean;
  is_ecommerce?: boolean;
  is_acquireable?: boolean;
  is_buy_nowable?: boolean;
  is_comparable_with_auction_results?: boolean;
  is_downloadable?: boolean;
  is_price_hidden?: boolean;
  is_price_range?: boolean;
  availability?: string;
  sale_message?: string;
  artist?: Artist;
  price?: string;
  contact_label?: string;
  cultural_maker?: string;
  artists?: Array<Artist>;
  artist_names?: string;
  dimensions?: dimensions;
  image?: Image;
  images?: Array<Image>;
  context?: ArtworkContext;
  highlights?: Array<Highlighted>;
  articles?: Array<Article>;
  shows?: Array<PartnerShow>;
  show?: PartnerShow;
  sale_artwork?: SaleArtwork;
  sale?: Sale;
  fair?: Fair;
  edition_of?: string;
  edition_sets?: Array<EditionSet>;
  description?: string;
  exhibition_history?: string;
  provenance?: string;
  signature?: string;
  additional_information?: string;
  literature?: string;
  publisher?: string;
  manufacturer?: string;
  series?: string;
  meta?: ArtworkMeta;
  related?: Array<Artwork>;
  layer?: ArtworkLayer;
  layers?: Array<ArtworkLayer>;
}

null
type ProfileSearchEntity = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  name?: string;
  image?: Image;
  initials?: string;
  icon?: Image;
  href?: string;
  is_published?: boolean;
  bio?: string;
  counts?: ProfileCounts;
}

null
type PartnerShowSearchEntity = {
  __typename: string;
  __id: string;
  id: string;
  _id: string;
  cached?: number;
  href?: string;
  kind?: string;
  name?: string;
  description?: string;
  type?: string;
  displayable?: boolean;
  is_active?: boolean;
  is_displayable?: boolean;
  is_fair_booth?: boolean;
  press_release?: string;
  start_at?: string;
  end_at?: string;
  exhibition_period?: string;
  artists?: Array<Artist>;
  partner?: Partner;
  fair?: Fair;
  location?: Location;
  status?: string;
  status_update?: string;
  events?: Array<PartnerShowEventType>;
  counts?: PartnerShowCounts;
  artworks?: Array<Artwork>;
  meta_image?: Image;
  cover_image?: Image;
  images?: Array<Image>;
}

null
type TrendingMetricsEnum = "ARTIST_FOLLOW" | "ARTIST_INQUIRY" | "ARTIST_SEARCH" | "ARTIST_SAVE" | "ARTIST_FAIR" | "ARTIST_AUCTION_LOT";

null
type TrendingArtists = {
  __typename: string;
  artists?: Array<Artist>;
}

null
type Me = {
  __typename: string;
  __id: string;
  id: string;
  type?: string;
  created_at?: string;
  email?: string;
  name?: string;
  paddle_number?: string;
  bidders?: Array<Bidder>;
  bidder_status?: LotStanding;
  bidder_positions?: Array<BidderPosition>;
  lot_standing?: LotStanding;
  lot_standings?: Array<LotStanding>;
  sale_registrations?: Array<SaleRegistration>;
  follow_artists?: FollowArtists;
  suggested_artists?: Array<Artist>;
}

null
type Bidder = {
  __typename: string;
  __id: string;
  id: string;
  created_at?: string;
  pin?: string;
  sale?: Sale;
  qualified_for_bidding?: boolean;
}

null
type LotStanding = {
  __typename: string;
  bidder?: Bidder;
  sale_artwork?: SaleArtwork;
  is_highest_bidder?: boolean;
  is_leading_bidder?: boolean;
  active_bid?: BidderPosition;
  most_recent_bid?: BidderPosition;
}

null
type BidderPosition = {
  __typename: string;
  __id: string;
  id: string;
  created_at?: string;
  updated_at?: string;
  processed_at?: string;
  is_active?: boolean;
  is_retracted?: boolean;
  is_with_bid_max?: boolean;
  is_winning?: boolean;
  max_bid?: BidderPositionMaxBid;
  suggested_next_bid?: BidderPositionSuggestedNextBid;
  sale_artwork?: SaleArtwork;
  highest_bid?: HighestBid;
  display_max_bid_amount_dollars?: string;
  display_suggested_next_bid_dollars?: string;
  max_bid_amount_cents?: number;
  suggested_next_bid_cents?: number;
}

null
type BidderPositionMaxBid = {
  __typename: string;
  cents?: number;
  display?: string;
  amount?: string;
}

null
type BidderPositionSuggestedNextBid = {
  __typename: string;
  cents?: number;
  display?: string;
  amount?: string;
}

null
type HighestBid = {
  __typename: string;
  __id: string;
  id: string;
  created_at?: string;
  number?: number;
  is_cancelled?: boolean;
  amount?: string;
  cents?: number;
  display?: string;
  amount_cents?: number;
  display_amount_dollars?: string;
}

null
type SaleRegistration = {
  __typename: string;
  is_registered?: boolean;
  bidder?: Bidder;
  sale?: Sale;
}

null
type FollowArtists = {
  __typename: string;
  artists?: Array<Artist>;
  counts?: FollowArtistCounts;
}

null
type RoleEnum = "PARTICIPANT" | "OPERATOR";
