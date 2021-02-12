import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = {
  __typename?: 'Account';
  username: Scalars['ID'];
  created: Scalars['String'];
  lastModified: Scalars['String'];
  expired: Scalars['Boolean'];
  locked: Scalars['Boolean'];
  credentialsExpired: Scalars['Boolean'];
  emailConfirmed: Scalars['Boolean'];
  enabled: Scalars['Boolean'];
  status: AccountStatus;
  profile: Profile;
};

export type AccountConnection = {
  __typename?: 'AccountConnection';
  nodes: Array<Account>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type AccountFilterInput = {
  query?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  locked?: Maybe<Scalars['Boolean']>;
  credentialsExpired?: Maybe<Scalars['Boolean']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

export enum AccountStatus {
  Admin = 'Admin',
  Verified = 'Verified',
  Unverified = 'Unverified'
}

export type AccountStatusUpdateInput = {
  username: Scalars['ID'];
  status: AccountStatus;
};

export type AccountUpdateInput = {
  username: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  organization: Scalars['String'];
};

export type AddDescriptionInput = {
  catalogEntryId: Scalars['ID'];
  description: TranslationInput;
};

export type AddDescriptionPayload = {
  __typename?: 'AddDescriptionPayload';
  catalogEntry?: Maybe<SimpleRecord>;
};

export type AddNameInput = {
  catalogEntryId: Scalars['ID'];
  name: TranslationInput;
};

export type AddNamePayload = {
  __typename?: 'AddNamePayload';
  catalogEntry?: Maybe<SimpleRecord>;
};

export type AddTagInput = {
  catalogEntryId: Scalars['ID'];
  tagId: Scalars['ID'];
};

export type AddTagPayload = {
  __typename?: 'AddTagPayload';
  catalogEntry?: Maybe<SimpleRecord>;
  tag?: Maybe<Tag>;
};

export type CatalogEntryFilterInput = {
  catalogEntryType?: Maybe<CatalogEntryTypeFilterInput>;
  tags?: Maybe<TagFilterInput>;
};

/**  inputs */
export type CatalogEntryTypeFilterInput = {
  in?: Maybe<Array<CatalogRecordType>>;
};

export type CatalogItemStatistics = {
  __typename?: 'CatalogItemStatistics';
  id: Scalars['ID'];
  count: Scalars['Int'];
};

export enum CatalogRecordType {
  Activity = 'Activity',
  Actor = 'Actor',
  Bag = 'Bag',
  Classification = 'Classification',
  ExternalDocument = 'ExternalDocument',
  Measure = 'Measure',
  Nest = 'Nest',
  Property = 'Property',
  Subject = 'Subject',
  Unit = 'Unit',
  Value = 'Value',
  ActsUpon = 'ActsUpon',
  AssignsCollections = 'AssignsCollections',
  AssignsMeasures = 'AssignsMeasures',
  AssignsProperties = 'AssignsProperties',
  AssignsPropertyWithValues = 'AssignsPropertyWithValues',
  AssignsUnits = 'AssignsUnits',
  AssignsValues = 'AssignsValues',
  Associates = 'Associates',
  Collects = 'Collects',
  Composes = 'Composes',
  Documents = 'Documents',
  Groups = 'Groups',
  Sequences = 'Sequences',
  Specializes = 'Specializes'
}

export type CatalogStatistics = {
  __typename?: 'CatalogStatistics';
  items: Array<CatalogItemStatistics>;
};

export type Concept = {
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
};


export type ConceptNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type ConceptDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type CreateCatalogEntryInput = {
  catalogEntryType: SimpleRecordType;
  properties: PropertiesInput;
  tags?: Maybe<Array<Scalars['ID']>>;
};

export type CreateCatalogEntryPayload = {
  __typename?: 'CreateCatalogEntryPayload';
  catalogEntry?: Maybe<SimpleRecord>;
};

export type CreateRelationshipInput = {
  relationshipType: RelationshipRecordType;
  properties?: Maybe<PropertiesInput>;
  fromId: Scalars['ID'];
  toIds: Array<Scalars['ID']>;
};

export type CreateRelationshipPayload = {
  __typename?: 'CreateRelationshipPayload';
  relationship?: Maybe<RelationshipRecord>;
};

export type CreateTagInput = {
  tagId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
};

export type CreateTagPayload = {
  __typename?: 'CreateTagPayload';
  tag?: Maybe<Tag>;
};

export type DeleteCatalogEntryInput = {
  catalogEntryId: Scalars['ID'];
};

export type DeleteCatalogEntryPayload = {
  __typename?: 'DeleteCatalogEntryPayload';
  catalogEntry?: Maybe<SimpleRecord>;
};

export type DeleteDescriptionInput = {
  catalogEntryId: Scalars['ID'];
  descriptionId: Scalars['ID'];
};

export type DeleteDescriptionPayload = {
  __typename?: 'DeleteDescriptionPayload';
  catalogEntry?: Maybe<SimpleRecord>;
};

export type DeleteNameInput = {
  catalogEntryId: Scalars['ID'];
  nameId: Scalars['ID'];
};

export type DeleteNamePayload = {
  __typename?: 'DeleteNamePayload';
  catalogEntry?: Maybe<SimpleRecord>;
};

export type DeleteRelationshipInput = {
  relationshipId: Scalars['ID'];
};

export type DeleteRelationshipPayload = {
  __typename?: 'DeleteRelationshipPayload';
  relationship?: Maybe<RelationshipRecord>;
};

export type DeleteTagInput = {
  tagId: Scalars['ID'];
};

export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload';
  tag?: Maybe<Tag>;
};

export type FilterInput = {
  query?: Maybe<Scalars['String']>;
  idIn?: Maybe<Array<Scalars['ID']>>;
  idNotIn?: Maybe<Array<Scalars['ID']>>;
  tagged?: Maybe<Array<Scalars['ID']>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

export type HierarchyFilterInput = {
  rootNodeFilter: HierarchyRootNodeFilterInput;
};

export type HierarchyPayload = {
  __typename?: 'HierarchyPayload';
  nodes: Array<Concept>;
  paths: Array<Array<Scalars['ID']>>;
};

export type HierarchyRootNodeFilterInput = {
  catalogEntryTypeIn?: Maybe<Array<CatalogRecordType>>;
  catalogEntryTypeNotIn?: Maybe<Array<CatalogRecordType>>;
  idIn?: Maybe<Array<Scalars['ID']>>;
  idNotIn?: Maybe<Array<Scalars['ID']>>;
  tagged?: Maybe<Array<Scalars['ID']>>;
};

export type Language = {
  __typename?: 'Language';
  id: Scalars['String'];
  languageTag: Scalars['String'];
  displayCountry: Scalars['String'];
  displayLanguage: Scalars['String'];
};


export type LanguageDisplayCountryArgs = {
  input?: Maybe<LocaleInput>;
};


export type LanguageDisplayLanguageArgs = {
  input?: Maybe<LocaleInput>;
};

export type LanguageConnection = {
  __typename?: 'LanguageConnection';
  nodes: Array<Language>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

/**  Query type */
export type LanguageFilterInput = {
  query?: Maybe<Scalars['String']>;
  excludeLanguageTags?: Maybe<Array<Scalars['String']>>;
};

export type LocaleInput = {
  languageTag: Scalars['ID'];
};

export type LocalizationInput = {
  languageTags?: Maybe<Array<Scalars['String']>>;
};

export type LocalizedText = {
  __typename?: 'LocalizedText';
  language: Language;
  text: Scalars['String'];
};

export type LoginInput = {
  username: Scalars['ID'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  Creates a new catalog entry of the defined entry type. */
  createCatalogEntry?: Maybe<CreateCatalogEntryPayload>;
  /**  Deletes the entry from the catalog. */
  deleteCatalogEntry?: Maybe<DeleteCatalogEntryPayload>;
  /**
   * Creates a relationship originating from the given catalog entry.
   * The related entries must be added with subsequent requests.
   */
  createRelationship?: Maybe<CreateRelationshipPayload>;
  setRelatedEntries?: Maybe<SetRelatedEntriesPayload>;
  /**  Deletes a relationship between catalog entries. */
  deleteRelationship?: Maybe<DeleteRelationshipPayload>;
  /**
   * Sets a new version for the given catalog entry.
   * There is no policy in place dictating the versioning scheme as it is
   * regarded domain specific.
   */
  setVersion?: Maybe<SetVersionPayload>;
  /**  Adds a localized name to the given catalog entry. */
  addName?: Maybe<AddNamePayload>;
  /**  Updates the localized name of the given catalog entry. */
  updateName?: Maybe<UpdateNamePayload>;
  /**
   * Delete the localized name of the given catalog entry.
   * Throws an error if the entry would end up unnamed.
   */
  deleteName?: Maybe<DeleteNamePayload>;
  /**  Adds a localized description to the given catalog entry. */
  addDescription?: Maybe<AddDescriptionPayload>;
  /**  Updates a localized description of the given catalog entry. */
  updateDescription?: Maybe<UpdateDescriptionPayload>;
  /**  Deletes a localized description from the catalog entry. */
  deleteDescription?: Maybe<DeleteDescriptionPayload>;
  /**  Sets the tolerance component of a value entry. */
  setTolerance?: Maybe<SetTolerancePayload>;
  /**  Unsets the tolerance component of a value entry. */
  unsetTolerance?: Maybe<UnsetTolerancePayload>;
  /**  Sets the nominale value component of a value entry. */
  setNominalValue?: Maybe<UnsetNominalValuePayload>;
  /**  Unsets the nominal value component of a value entry. */
  unsetNominalValue?: Maybe<UnsetNominalValuePayload>;
  /**  Creates a new user defined tag. */
  createTag?: Maybe<CreateTagPayload>;
  /**  Updates an existing user defined tag. */
  updateTag?: Maybe<UpdateTagPayload>;
  /**  Deletes an existing user defined tag. */
  deleteTag?: Maybe<DeleteTagPayload>;
  /**  Tags a concept entity with the given user defined tag. */
  addTag?: Maybe<AddTagPayload>;
  /**  Removes a tag from an existing user defined tag. */
  removeTag?: Maybe<RemoveTagPayload>;
  signup?: Maybe<Scalars['Boolean']>;
  confirm?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Scalars['String']>;
  updateProfile: Profile;
  updateAccount?: Maybe<Account>;
  updateAccountStatus?: Maybe<Account>;
  lockAccount?: Maybe<Account>;
  unlockAccount?: Maybe<Account>;
  requestEmailConfirmation?: Maybe<Account>;
};


export type MutationCreateCatalogEntryArgs = {
  input: CreateCatalogEntryInput;
};


export type MutationDeleteCatalogEntryArgs = {
  input: DeleteCatalogEntryInput;
};


export type MutationCreateRelationshipArgs = {
  input: CreateRelationshipInput;
};


export type MutationSetRelatedEntriesArgs = {
  input: SetRelatedEntriesInput;
};


export type MutationDeleteRelationshipArgs = {
  input: DeleteRelationshipInput;
};


export type MutationSetVersionArgs = {
  input: SetVersionInput;
};


export type MutationAddNameArgs = {
  input: AddNameInput;
};


export type MutationUpdateNameArgs = {
  input: UpdateNameInput;
};


export type MutationDeleteNameArgs = {
  input: DeleteNameInput;
};


export type MutationAddDescriptionArgs = {
  input: AddDescriptionInput;
};


export type MutationUpdateDescriptionArgs = {
  input: UpdateDescriptionInput;
};


export type MutationDeleteDescriptionArgs = {
  input: DeleteDescriptionInput;
};


export type MutationSetToleranceArgs = {
  input: SetToleranceInput;
};


export type MutationUnsetToleranceArgs = {
  input: UnsetToleranceInput;
};


export type MutationSetNominalValueArgs = {
  input: SetNominalValueInput;
};


export type MutationUnsetNominalValueArgs = {
  input: UnsetNominalValueInput;
};


export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
};


export type MutationDeleteTagArgs = {
  input: DeleteTagInput;
};


export type MutationAddTagArgs = {
  input: AddTagInput;
};


export type MutationRemoveTagArgs = {
  input: RemoveTagInput;
};


export type MutationSignupArgs = {
  input: SignupInput;
};


export type MutationConfirmArgs = {
  token: Scalars['String'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationUpdateProfileArgs = {
  input: ProfileUpdateInput;
};


export type MutationUpdateAccountArgs = {
  input: AccountUpdateInput;
};


export type MutationUpdateAccountStatusArgs = {
  input: AccountStatusUpdateInput;
};


export type MutationLockAccountArgs = {
  username: Scalars['ID'];
};


export type MutationUnlockAccountArgs = {
  username: Scalars['ID'];
};


export type MutationRequestEmailConfirmationArgs = {
  username: Scalars['ID'];
};

export type NominalValueInput = {
  valueRole: ValueRole;
  valueType: ValueType;
  nominalValue?: Maybe<Scalars['String']>;
};

/**  Connections */
export type PageInfo = {
  __typename?: 'PageInfo';
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  pageElements: Scalars['Int'];
  totalPages: Scalars['Int'];
  hasNext: Scalars['Boolean'];
  hasPrevious: Scalars['Boolean'];
  isFirst: Scalars['Boolean'];
  isLast: Scalars['Boolean'];
};

export type Profile = {
  __typename?: 'Profile';
  username: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  organization: Scalars['String'];
};

export type ProfileUpdateInput = {
  username: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  organization: Scalars['String'];
};

export type PropertiesInput = {
  id?: Maybe<Scalars['ID']>;
  version?: Maybe<VersionInput>;
  names: Array<TranslationInput>;
  descriptions?: Maybe<Array<TranslationInput>>;
};

export type Query = {
  __typename?: 'Query';
  languages?: Maybe<LanguageConnection>;
  statistics: CatalogStatistics;
  node?: Maybe<Concept>;
  search: SearchResultConnection;
  hierarchy: HierarchyPayload;
  getTag: Tag;
  findTags: TagConnection;
  getExternalDocument?: Maybe<XtdExternalDocument>;
  findExternalDocuments: XtdExternalDocumentConnection;
  getActor?: Maybe<XtdActor>;
  findActors: XtdActorConnection;
  getActivity?: Maybe<XtdActivity>;
  findActivities: XtdActivityConnection;
  getClassification?: Maybe<XtdClassification>;
  findClassifications: XtdClassificationConnection;
  getMeasure?: Maybe<XtdMeasureWithUnit>;
  findMeasures: XtdMeasureWithUnitConnection;
  getProperty?: Maybe<XtdProperty>;
  findProperties: XtdPropertyConnection;
  getSubject?: Maybe<XtdSubject>;
  findSubjects: XtdSubjectConnection;
  getUnit?: Maybe<XtdUnit>;
  findUnits: XtdUnitConnection;
  getValue?: Maybe<XtdValue>;
  findValues: XtdValueConnection;
  getBag?: Maybe<XtdBag>;
  findBags: XtdBagConnection;
  getNest?: Maybe<XtdNest>;
  findNests: XtdNestConnection;
  getAssignsCollections?: Maybe<XtdRelAssignsCollections>;
  findAssignsCollections: XtdRelAssignsCollectionsConnection;
  getAssignsPropertyWithValues?: Maybe<XtdRelAssignsPropertyWithValues>;
  findAssignsPropertyWithValues: XtdRelAssignsPropertyWithValuesConnection;
  getDocuments?: Maybe<XtdRelDocuments>;
  findDocuments: XtdRelDocumentsConnection;
  getCollects?: Maybe<XtdRelCollects>;
  findCollects: XtdRelCollectsConnection;
  getAssociates?: Maybe<XtdRelAssociates>;
  findAssociates: XtdRelAssociatesConnection;
  getGroups?: Maybe<XtdRelGroups>;
  findGroups: XtdRelGroupsConnection;
  getSpecialies?: Maybe<XtdRelSpecializes>;
  findSpecializes: XtdRelSpecializesConnection;
  getComposes?: Maybe<XtdRelComposes>;
  findComposes: XtdRelComposesConnection;
  getActsUpon?: Maybe<XtdRelActsUpon>;
  findActsUpon: XtdRelActsUponConnection;
  getAssignsProperties?: Maybe<XtdRelAssignsProperties>;
  findAssignsProperties?: Maybe<XtdRelAssignsPropertiesConnection>;
  getAssignsUnits?: Maybe<XtdRelAssignsUnits>;
  findAssignsUnits?: Maybe<XtdRelAssignsUnitsConnection>;
  getAssignsValues?: Maybe<XtdRelAssignsValues>;
  findAssignsValues?: Maybe<XtdRelAssignsValuesConnection>;
  profile: Profile;
  account?: Maybe<Account>;
  accounts: AccountConnection;
};


export type QueryLanguagesArgs = {
  input?: Maybe<LanguageFilterInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QuerySearchArgs = {
  input?: Maybe<SearchInput>;
  pageSize?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
};


export type QueryHierarchyArgs = {
  input: HierarchyFilterInput;
};


export type QueryGetTagArgs = {
  id: Scalars['ID'];
};


export type QueryFindTagsArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetExternalDocumentArgs = {
  id: Scalars['ID'];
};


export type QueryFindExternalDocumentsArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetActorArgs = {
  id: Scalars['ID'];
};


export type QueryFindActorsArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetActivityArgs = {
  id: Scalars['ID'];
};


export type QueryFindActivitiesArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetClassificationArgs = {
  id: Scalars['ID'];
};


export type QueryFindClassificationsArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetMeasureArgs = {
  id: Scalars['ID'];
};


export type QueryFindMeasuresArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetPropertyArgs = {
  id: Scalars['ID'];
};


export type QueryFindPropertiesArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetSubjectArgs = {
  id: Scalars['ID'];
};


export type QueryFindSubjectsArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetUnitArgs = {
  id: Scalars['ID'];
};


export type QueryFindUnitsArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetValueArgs = {
  id: Scalars['ID'];
};


export type QueryFindValuesArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetBagArgs = {
  id: Scalars['ID'];
};


export type QueryFindBagsArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetNestArgs = {
  id: Scalars['ID'];
};


export type QueryFindNestsArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetAssignsCollectionsArgs = {
  id: Scalars['ID'];
};


export type QueryFindAssignsCollectionsArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetAssignsPropertyWithValuesArgs = {
  id: Scalars['ID'];
};


export type QueryFindAssignsPropertyWithValuesArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetDocumentsArgs = {
  id: Scalars['ID'];
};


export type QueryFindDocumentsArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetCollectsArgs = {
  id: Scalars['ID'];
};


export type QueryFindCollectsArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetAssociatesArgs = {
  id: Scalars['ID'];
};


export type QueryFindAssociatesArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetGroupsArgs = {
  id: Scalars['ID'];
};


export type QueryFindGroupsArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetSpecialiesArgs = {
  id: Scalars['ID'];
};


export type QueryFindSpecializesArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetComposesArgs = {
  id: Scalars['ID'];
};


export type QueryFindComposesArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetActsUponArgs = {
  id: Scalars['ID'];
};


export type QueryFindActsUponArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetAssignsPropertiesArgs = {
  id: Scalars['ID'];
};


export type QueryFindAssignsPropertiesArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetAssignsUnitsArgs = {
  id: Scalars['ID'];
};


export type QueryFindAssignsUnitsArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryGetAssignsValuesArgs = {
  id: Scalars['ID'];
};


export type QueryFindAssignsValuesArgs = {
  input?: Maybe<FilterInput>;
};


export type QueryAccountArgs = {
  username: Scalars['ID'];
};


export type QueryAccountsArgs = {
  input?: Maybe<AccountFilterInput>;
};

export type RelationshipRecord = XtdRelActsUpon | XtdRelAssignsCollections | XtdRelAssignsMeasures | XtdRelAssignsProperties | XtdRelAssignsPropertyWithValues | XtdRelAssignsUnits | XtdRelAssignsValues | XtdRelAssociates | XtdRelCollects | XtdRelComposes | XtdRelDocuments | XtdRelGroups | XtdRelSequences | XtdRelSpecializes;

export enum RelationshipRecordType {
  ActsUpon = 'ActsUpon',
  AssignsCollections = 'AssignsCollections',
  AssignsMeasures = 'AssignsMeasures',
  AssignsProperties = 'AssignsProperties',
  AssignsPropertyWithValues = 'AssignsPropertyWithValues',
  AssignsUnits = 'AssignsUnits',
  AssignsValues = 'AssignsValues',
  Associates = 'Associates',
  Collects = 'Collects',
  Composes = 'Composes',
  Documents = 'Documents',
  Groups = 'Groups',
  Sequences = 'Sequences',
  Specializes = 'Specializes'
}

export type RemoveTagInput = {
  catalogEntryId: Scalars['ID'];
  tagId: Scalars['ID'];
};

export type RemoveTagPayload = {
  __typename?: 'RemoveTagPayload';
  catalogEntry?: Maybe<SimpleRecord>;
  tag?: Maybe<Tag>;
};

export type SearchInput = {
  query?: Maybe<Scalars['String']>;
  filters?: Maybe<Array<CatalogEntryFilterInput>>;
  entityTypeIn?: Maybe<Array<CatalogRecordType>>;
  entityTypeNotIn?: Maybe<Array<CatalogRecordType>>;
  idIn?: Maybe<Array<Scalars['ID']>>;
  idNotIn?: Maybe<Array<Scalars['ID']>>;
  tagged?: Maybe<Array<Scalars['ID']>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

export type SearchResult = {
  __typename?: 'SearchResult';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  tags: Array<Tag>;
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
};


export type SearchResultNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type SearchResultDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type SearchResultConnection = {
  __typename?: 'SearchResultConnection';
  nodes: Array<SearchResult>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type SetNominalValueInput = {
  valueId: Scalars['ID'];
  nominalValue: NominalValueInput;
};

export type SetNominalValuePayload = {
  __typename?: 'SetNominalValuePayload';
  catalogEntry?: Maybe<XtdValue>;
};

export type SetRelatedEntriesInput = {
  relationshipId: Scalars['ID'];
  toIds: Array<Scalars['ID']>;
};

export type SetRelatedEntriesPayload = {
  __typename?: 'SetRelatedEntriesPayload';
  relationship?: Maybe<RelationshipRecord>;
};

export type SetToleranceInput = {
  valueId: Scalars['ID'];
  tolerance: ToleranceInput;
};

export type SetTolerancePayload = {
  __typename?: 'SetTolerancePayload';
  catalogEntry?: Maybe<XtdValue>;
};

export type SetVersionInput = {
  catalogEntryId: Scalars['ID'];
  version: VersionInput;
};

export type SetVersionPayload = {
  __typename?: 'SetVersionPayload';
  catalogEntry?: Maybe<SimpleRecord>;
};

export type SignupInput = {
  username: Scalars['ID'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  organization: Scalars['String'];
};

export type SimpleRecord = XtdActor | XtdActivity | XtdBag | XtdClassification | XtdExternalDocument | XtdMeasureWithUnit | XtdNest | XtdSubject | XtdProperty | XtdUnit | XtdValue;

export enum SimpleRecordType {
  Activity = 'Activity',
  Actor = 'Actor',
  Bag = 'Bag',
  Classification = 'Classification',
  ExternalDocument = 'ExternalDocument',
  Measure = 'Measure',
  Nest = 'Nest',
  Property = 'Property',
  Subject = 'Subject',
  Unit = 'Unit',
  Value = 'Value'
}

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  name: Scalars['String'];
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
};

export type TagConnection = {
  __typename?: 'TagConnection';
  nodes: Array<Tag>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type TagFilterInput = {
  in?: Maybe<Array<Scalars['ID']>>;
};

export type ToleranceInput = {
  toleranceType: ToleranceType;
  lowerTolerance?: Maybe<Scalars['String']>;
  upperTolerance?: Maybe<Scalars['String']>;
};

export enum ToleranceType {
  Realvalue = 'Realvalue',
  Percentage = 'Percentage'
}

export type Translation = {
  __typename?: 'Translation';
  id: Scalars['ID'];
  value: Scalars['String'];
  language: Language;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
};

export type TranslationInput = {
  id?: Maybe<Scalars['ID']>;
  languageTag: Scalars['ID'];
  value: Scalars['String'];
};

export type TranslationUpdateInput = {
  translationId: Scalars['ID'];
  value: Scalars['String'];
};

export type UnsetNominalValueInput = {
  valueId: Scalars['ID'];
};

export type UnsetNominalValuePayload = {
  __typename?: 'UnsetNominalValuePayload';
  catalogEntry?: Maybe<XtdValue>;
};

export type UnsetToleranceInput = {
  valueId: Scalars['ID'];
};

export type UnsetTolerancePayload = {
  __typename?: 'UnsetTolerancePayload';
  catalogEntry?: Maybe<XtdValue>;
};

export type UpdateDescriptionInput = {
  catalogEntryId: Scalars['ID'];
  description: TranslationUpdateInput;
};

export type UpdateDescriptionPayload = {
  __typename?: 'UpdateDescriptionPayload';
  catalogEntry?: Maybe<SimpleRecord>;
};

export type UpdateNameInput = {
  catalogEntryId: Scalars['ID'];
  name: TranslationUpdateInput;
};

export type UpdateNamePayload = {
  __typename?: 'UpdateNamePayload';
  catalogEntry?: Maybe<SimpleRecord>;
};

export type UpdateTagInput = {
  tagId: Scalars['ID'];
  name: Scalars['String'];
};

export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  tag?: Maybe<Tag>;
};

export enum ValueRole {
  Nominal = 'Nominal',
  Maximum = 'Maximum',
  Minimum = 'Minimum'
}

export enum ValueType {
  String = 'String',
  Number = 'Number',
  Integer = 'Integer',
  Real = 'Real',
  Boolean = 'Boolean',
  Logical = 'Logical'
}

export type VersionInput = {
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
};

export type XtdActivity = Concept & XtdRoot & XtdObject & {
  __typename?: 'XtdActivity';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  actedUponBy: XtdRelActsUponConnection;
  actsUpon: XtdRelActsUponConnection;
  associatedBy: XtdRelAssociatesConnection;
  associates: XtdRelAssociatesConnection;
  collectedBy: XtdRelCollectsConnection;
  composedBy: XtdRelComposesConnection;
  composes: XtdRelComposesConnection;
  documentedBy: XtdRelDocumentsConnection;
  groupedBy: XtdRelGroupsConnection;
  groups: XtdRelGroupsConnection;
  specializedBy: XtdRelSpecializesConnection;
  specializes: XtdRelSpecializesConnection;
  assignedCollections: XtdRelAssignsCollectionsConnection;
  assignedProperties: XtdRelAssignsPropertiesConnection;
  assignedPropertiesWithValues: XtdRelAssignsPropertyWithValuesConnection;
};


export type XtdActivityNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdActivityDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdActivityConnection = {
  __typename?: 'XtdActivityConnection';
  nodes: Array<XtdActivity>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdActor = Concept & XtdRoot & XtdObject & {
  __typename?: 'XtdActor';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  actedUponBy: XtdRelActsUponConnection;
  actsUpon: XtdRelActsUponConnection;
  associatedBy: XtdRelAssociatesConnection;
  associates: XtdRelAssociatesConnection;
  collectedBy: XtdRelCollectsConnection;
  composedBy: XtdRelComposesConnection;
  composes: XtdRelComposesConnection;
  documentedBy: XtdRelDocumentsConnection;
  groupedBy: XtdRelGroupsConnection;
  groups: XtdRelGroupsConnection;
  specializedBy: XtdRelSpecializesConnection;
  specializes: XtdRelSpecializesConnection;
  assignedCollections: XtdRelAssignsCollectionsConnection;
  assignedProperties: XtdRelAssignsPropertiesConnection;
  assignedPropertiesWithValues: XtdRelAssignsPropertyWithValuesConnection;
};


export type XtdActorNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdActorDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdActorConnection = {
  __typename?: 'XtdActorConnection';
  nodes: Array<XtdActor>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdBag = Concept & XtdRoot & XtdCollection & {
  __typename?: 'XtdBag';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  actedUponBy: XtdRelActsUponConnection;
  actsUpon: XtdRelActsUponConnection;
  associatedBy: XtdRelAssociatesConnection;
  associates: XtdRelAssociatesConnection;
  collectedBy: XtdRelCollectsConnection;
  collects: XtdRelCollectsConnection;
  composedBy: XtdRelComposesConnection;
  composes: XtdRelComposesConnection;
  documentedBy: XtdRelDocumentsConnection;
  groupedBy: XtdRelGroupsConnection;
  groups: XtdRelGroupsConnection;
  specializedBy: XtdRelSpecializesConnection;
  specializes: XtdRelSpecializesConnection;
  assignedTo: XtdRelAssignsCollectionsConnection;
};


export type XtdBagNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdBagDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdBagConnection = {
  __typename?: 'XtdBagConnection';
  nodes: Array<XtdBag>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdClassification = Concept & XtdRoot & XtdObject & {
  __typename?: 'XtdClassification';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  actedUponBy: XtdRelActsUponConnection;
  actsUpon: XtdRelActsUponConnection;
  associatedBy: XtdRelAssociatesConnection;
  associates: XtdRelAssociatesConnection;
  collectedBy: XtdRelCollectsConnection;
  composedBy: XtdRelComposesConnection;
  composes: XtdRelComposesConnection;
  documentedBy: XtdRelDocumentsConnection;
  groupedBy: XtdRelGroupsConnection;
  groups: XtdRelGroupsConnection;
  specializedBy: XtdRelSpecializesConnection;
  specializes: XtdRelSpecializesConnection;
  assignedCollections: XtdRelAssignsCollectionsConnection;
  assignedProperties: XtdRelAssignsPropertiesConnection;
  assignedPropertiesWithValues: XtdRelAssignsPropertyWithValuesConnection;
};


export type XtdClassificationNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdClassificationDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdClassificationConnection = {
  __typename?: 'XtdClassificationConnection';
  nodes: Array<XtdClassification>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdCollection = {
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  actedUponBy: XtdRelActsUponConnection;
  actsUpon: XtdRelActsUponConnection;
  associatedBy: XtdRelAssociatesConnection;
  associates: XtdRelAssociatesConnection;
  collectedBy: XtdRelCollectsConnection;
  collects: XtdRelCollectsConnection;
  composedBy: XtdRelComposesConnection;
  composes: XtdRelComposesConnection;
  documentedBy: XtdRelDocumentsConnection;
  groupedBy: XtdRelGroupsConnection;
  groups: XtdRelGroupsConnection;
  specializedBy: XtdRelSpecializesConnection;
  specializes: XtdRelSpecializesConnection;
  assignedTo: XtdRelAssignsCollectionsConnection;
};


export type XtdCollectionNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdCollectionDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdCollectionConnection = {
  __typename?: 'XtdCollectionConnection';
  nodes: Array<XtdCollection>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdExternalDocument = Concept & {
  __typename?: 'XtdExternalDocument';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  documents: XtdRelDocumentsConnection;
};


export type XtdExternalDocumentNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdExternalDocumentDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdExternalDocumentConnection = {
  __typename?: 'XtdExternalDocumentConnection';
  nodes: Array<XtdExternalDocument>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdMeasureWithUnit = Concept & XtdRoot & XtdObject & {
  __typename?: 'XtdMeasureWithUnit';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  /**     methodOfInterpretation: [Translation!]! */
  assignedTo: XtdRelAssignsMeasuresConnection;
  actedUponBy: XtdRelActsUponConnection;
  actsUpon: XtdRelActsUponConnection;
  associatedBy: XtdRelAssociatesConnection;
  associates: XtdRelAssociatesConnection;
  collectedBy: XtdRelCollectsConnection;
  composedBy: XtdRelComposesConnection;
  composes: XtdRelComposesConnection;
  documentedBy: XtdRelDocumentsConnection;
  groupedBy: XtdRelGroupsConnection;
  groups: XtdRelGroupsConnection;
  specializedBy: XtdRelSpecializesConnection;
  specializes: XtdRelSpecializesConnection;
  assignedCollections: XtdRelAssignsCollectionsConnection;
  assignedProperties: XtdRelAssignsPropertiesConnection;
  assignedPropertiesWithValues: XtdRelAssignsPropertyWithValuesConnection;
  assignedUnits: XtdRelAssignsUnitsConnection;
  assignedValues: XtdRelAssignsValuesConnection;
};


export type XtdMeasureWithUnitNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdMeasureWithUnitDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdMeasureWithUnitConnection = {
  __typename?: 'XtdMeasureWithUnitConnection';
  nodes: Array<XtdMeasureWithUnit>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdNest = Concept & XtdRoot & XtdCollection & {
  __typename?: 'XtdNest';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  actedUponBy: XtdRelActsUponConnection;
  actsUpon: XtdRelActsUponConnection;
  associatedBy: XtdRelAssociatesConnection;
  associates: XtdRelAssociatesConnection;
  collectedBy: XtdRelCollectsConnection;
  collects: XtdRelCollectsConnection;
  composedBy: XtdRelComposesConnection;
  composes: XtdRelComposesConnection;
  documentedBy: XtdRelDocumentsConnection;
  groupedBy: XtdRelGroupsConnection;
  groups: XtdRelGroupsConnection;
  specializedBy: XtdRelSpecializesConnection;
  specializes: XtdRelSpecializesConnection;
  assignedTo: XtdRelAssignsCollectionsConnection;
};


export type XtdNestNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdNestDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdNestConnection = {
  __typename?: 'XtdNestConnection';
  nodes: Array<XtdNest>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdObject = {
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  actedUponBy: XtdRelActsUponConnection;
  actsUpon: XtdRelActsUponConnection;
  associatedBy: XtdRelAssociatesConnection;
  associates: XtdRelAssociatesConnection;
  collectedBy: XtdRelCollectsConnection;
  composedBy: XtdRelComposesConnection;
  composes: XtdRelComposesConnection;
  documentedBy: XtdRelDocumentsConnection;
  groupedBy: XtdRelGroupsConnection;
  groups: XtdRelGroupsConnection;
  specializedBy: XtdRelSpecializesConnection;
  specializes: XtdRelSpecializesConnection;
  assignedCollections: XtdRelAssignsCollectionsConnection;
  assignedProperties: XtdRelAssignsPropertiesConnection;
  assignedPropertiesWithValues: XtdRelAssignsPropertyWithValuesConnection;
};


export type XtdObjectNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdObjectDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdObjectConnection = {
  __typename?: 'XtdObjectConnection';
  nodes: Array<XtdObject>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdProperty = Concept & XtdRoot & XtdObject & {
  __typename?: 'XtdProperty';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  assignedMeasures: XtdRelAssignsMeasuresConnection;
  actedUponBy: XtdRelActsUponConnection;
  actsUpon: XtdRelActsUponConnection;
  associatedBy: XtdRelAssociatesConnection;
  associates: XtdRelAssociatesConnection;
  collectedBy: XtdRelCollectsConnection;
  composedBy: XtdRelComposesConnection;
  composes: XtdRelComposesConnection;
  documentedBy: XtdRelDocumentsConnection;
  groupedBy: XtdRelGroupsConnection;
  groups: XtdRelGroupsConnection;
  specializedBy: XtdRelSpecializesConnection;
  specializes: XtdRelSpecializesConnection;
  assignedCollections: XtdRelAssignsCollectionsConnection;
  assignedProperties: XtdRelAssignsPropertiesConnection;
  assignedTo: XtdRelAssignsPropertiesConnection;
  assignedPropertiesWithValues: XtdRelAssignsPropertyWithValuesConnection;
};


export type XtdPropertyNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdPropertyDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdPropertyConnection = {
  __typename?: 'XtdPropertyConnection';
  nodes: Array<XtdProperty>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdRelActsUpon = Concept & XtdRelationship & {
  __typename?: 'XtdRelActsUpon';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  relatingThing: XtdRoot;
  relatedThings: XtdRootConnection;
};


export type XtdRelActsUponNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdRelActsUponDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdRelActsUponConnection = {
  __typename?: 'XtdRelActsUponConnection';
  nodes: Array<XtdRelActsUpon>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdRelAssignsCollections = Concept & XtdRelationship & {
  __typename?: 'XtdRelAssignsCollections';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  relatingObject: XtdObject;
  relatedCollections: Array<XtdCollection>;
};


export type XtdRelAssignsCollectionsNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdRelAssignsCollectionsDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdRelAssignsCollectionsConnection = {
  __typename?: 'XtdRelAssignsCollectionsConnection';
  nodes: Array<XtdRelAssignsCollections>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdRelAssignsMeasures = Concept & XtdRelationship & {
  __typename?: 'XtdRelAssignsMeasures';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  relatingProperty: XtdProperty;
  relatedMeasures: Array<XtdMeasureWithUnit>;
};


export type XtdRelAssignsMeasuresNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdRelAssignsMeasuresDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdRelAssignsMeasuresConnection = {
  __typename?: 'XtdRelAssignsMeasuresConnection';
  nodes: Array<XtdRelAssignsMeasures>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdRelAssignsProperties = Concept & XtdRelationship & {
  __typename?: 'XtdRelAssignsProperties';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  relatingObject: XtdObject;
  relatedProperties: Array<XtdProperty>;
};


export type XtdRelAssignsPropertiesNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdRelAssignsPropertiesDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdRelAssignsPropertiesConnection = {
  __typename?: 'XtdRelAssignsPropertiesConnection';
  nodes: Array<XtdRelAssignsProperties>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdRelAssignsPropertyWithValues = Concept & XtdRelationship & {
  __typename?: 'XtdRelAssignsPropertyWithValues';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  relatingObject: XtdObject;
  relatedProperty: XtdProperty;
  relatedValues: Array<XtdValue>;
};


export type XtdRelAssignsPropertyWithValuesNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdRelAssignsPropertyWithValuesDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdRelAssignsPropertyWithValuesConnection = {
  __typename?: 'XtdRelAssignsPropertyWithValuesConnection';
  nodes: Array<XtdRelAssignsPropertyWithValues>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdRelAssignsUnits = Concept & XtdRelationship & {
  __typename?: 'XtdRelAssignsUnits';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  relatingMeasure: XtdMeasureWithUnit;
  relatedUnits: Array<XtdUnit>;
};


export type XtdRelAssignsUnitsNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdRelAssignsUnitsDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdRelAssignsUnitsConnection = {
  __typename?: 'XtdRelAssignsUnitsConnection';
  nodes: Array<XtdRelAssignsUnits>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdRelAssignsValues = Concept & XtdRelationship & {
  __typename?: 'XtdRelAssignsValues';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  relatingMeasure: XtdMeasureWithUnit;
  relatedValues: Array<XtdValue>;
};


export type XtdRelAssignsValuesNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdRelAssignsValuesDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdRelAssignsValuesConnection = {
  __typename?: 'XtdRelAssignsValuesConnection';
  nodes: Array<XtdRelAssignsValues>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdRelAssociates = Concept & XtdRelationship & {
  __typename?: 'XtdRelAssociates';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  relatingThing: XtdObject;
  relatedThings: XtdObjectConnection;
};


export type XtdRelAssociatesNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdRelAssociatesDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdRelAssociatesConnection = {
  __typename?: 'XtdRelAssociatesConnection';
  nodes: Array<XtdRelAssociates>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdRelCollects = Concept & XtdRelationship & {
  __typename?: 'XtdRelCollects';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  relatingCollection: XtdCollection;
  relatedThings: Array<XtdRoot>;
};


export type XtdRelCollectsNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdRelCollectsDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdRelCollectsConnection = {
  __typename?: 'XtdRelCollectsConnection';
  nodes: Array<XtdRelCollects>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdRelComposes = Concept & XtdRelationship & {
  __typename?: 'XtdRelComposes';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  relatingThing: XtdRoot;
  relatedThings: XtdRootConnection;
};


export type XtdRelComposesNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdRelComposesDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdRelComposesConnection = {
  __typename?: 'XtdRelComposesConnection';
  nodes: Array<XtdRelComposes>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdRelDocuments = Concept & XtdRelationship & {
  __typename?: 'XtdRelDocuments';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  relatingDocument: XtdExternalDocument;
  relatedThings: Array<XtdRoot>;
};


export type XtdRelDocumentsNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdRelDocumentsDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdRelDocumentsConnection = {
  __typename?: 'XtdRelDocumentsConnection';
  nodes: Array<XtdRelDocuments>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdRelGroups = Concept & XtdRelationship & {
  __typename?: 'XtdRelGroups';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  relatingThing: XtdRoot;
  relatedThings: XtdRootConnection;
};


export type XtdRelGroupsNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdRelGroupsDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdRelGroupsConnection = {
  __typename?: 'XtdRelGroupsConnection';
  nodes: Array<XtdRelGroups>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdRelSequences = Concept & XtdRelationship & {
  __typename?: 'XtdRelSequences';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  relatingActivity: XtdActivity;
  relatedActivity: XtdActivity;
};


export type XtdRelSequencesNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdRelSequencesDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdRelSequencesConnection = {
  __typename?: 'XtdRelSequencesConnection';
  nodes: Array<XtdRelSequences>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdRelSpecializes = Concept & XtdRelationship & {
  __typename?: 'XtdRelSpecializes';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  relatingThing: XtdRoot;
  relatedThings: XtdRootConnection;
};


export type XtdRelSpecializesNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdRelSpecializesDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdRelSpecializesConnection = {
  __typename?: 'XtdRelSpecializesConnection';
  nodes: Array<XtdRelSpecializes>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdRelationship = {
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
};


export type XtdRelationshipNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdRelationshipDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdRelationshipConnection = {
  __typename?: 'XtdRelationshipConnection';
  nodes: Array<XtdRelationship>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdRoot = {
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  actedUponBy: XtdRelActsUponConnection;
  actsUpon: XtdRelActsUponConnection;
  associatedBy: XtdRelAssociatesConnection;
  associates: XtdRelAssociatesConnection;
  collectedBy: XtdRelCollectsConnection;
  composedBy: XtdRelComposesConnection;
  composes: XtdRelComposesConnection;
  documentedBy: XtdRelDocumentsConnection;
  groupedBy: XtdRelGroupsConnection;
  groups: XtdRelGroupsConnection;
  specializedBy: XtdRelSpecializesConnection;
  specializes: XtdRelSpecializesConnection;
};


export type XtdRootNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdRootDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdRootConnection = {
  __typename?: 'XtdRootConnection';
  nodes: Array<XtdRoot>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdSubject = Concept & XtdRoot & XtdObject & {
  __typename?: 'XtdSubject';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  groupOfProperties: Array<XtdNest>;
  properties: Array<XtdProperty>;
  actedUponBy: XtdRelActsUponConnection;
  actsUpon: XtdRelActsUponConnection;
  associatedBy: XtdRelAssociatesConnection;
  associates: XtdRelAssociatesConnection;
  collectedBy: XtdRelCollectsConnection;
  composedBy: XtdRelComposesConnection;
  composes: XtdRelComposesConnection;
  documentedBy: XtdRelDocumentsConnection;
  groupedBy: XtdRelGroupsConnection;
  groups: XtdRelGroupsConnection;
  specializedBy: XtdRelSpecializesConnection;
  specializes: XtdRelSpecializesConnection;
  assignedCollections: XtdRelAssignsCollectionsConnection;
  assignedProperties: XtdRelAssignsPropertiesConnection;
  assignedPropertiesWithValues: XtdRelAssignsPropertyWithValuesConnection;
};


export type XtdSubjectNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdSubjectDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdSubjectConnection = {
  __typename?: 'XtdSubjectConnection';
  nodes: Array<XtdSubject>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdUnit = Concept & XtdRoot & XtdObject & {
  __typename?: 'XtdUnit';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  assignedTo: XtdRelAssignsUnitsConnection;
  actedUponBy: XtdRelActsUponConnection;
  actsUpon: XtdRelActsUponConnection;
  associatedBy: XtdRelAssociatesConnection;
  associates: XtdRelAssociatesConnection;
  collectedBy: XtdRelCollectsConnection;
  composedBy: XtdRelComposesConnection;
  composes: XtdRelComposesConnection;
  documentedBy: XtdRelDocumentsConnection;
  groupedBy: XtdRelGroupsConnection;
  groups: XtdRelGroupsConnection;
  specializedBy: XtdRelSpecializesConnection;
  specializes: XtdRelSpecializesConnection;
  assignedCollections: XtdRelAssignsCollectionsConnection;
  assignedProperties: XtdRelAssignsPropertiesConnection;
  assignedPropertiesWithValues: XtdRelAssignsPropertyWithValuesConnection;
};


export type XtdUnitNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdUnitDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdUnitConnection = {
  __typename?: 'XtdUnitConnection';
  nodes: Array<XtdUnit>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type XtdValue = Concept & XtdRoot & XtdObject & {
  __typename?: 'XtdValue';
  id: Scalars['ID'];
  recordType: CatalogRecordType;
  created: Scalars['String'];
  createdBy: Scalars['String'];
  lastModified: Scalars['String'];
  lastModifiedBy: Scalars['String'];
  versionId?: Maybe<Scalars['String']>;
  versionDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  names: Array<Translation>;
  description?: Maybe<Scalars['String']>;
  descriptions: Array<Translation>;
  tags: Array<Tag>;
  toleranceType?: Maybe<ToleranceType>;
  lowerTolerance?: Maybe<Scalars['String']>;
  upperTolerance?: Maybe<Scalars['String']>;
  valueRole?: Maybe<ValueRole>;
  valueType?: Maybe<ValueType>;
  nominalValue?: Maybe<Scalars['String']>;
  actedUponBy: XtdRelActsUponConnection;
  actsUpon: XtdRelActsUponConnection;
  associatedBy: XtdRelAssociatesConnection;
  associates: XtdRelAssociatesConnection;
  collectedBy: XtdRelCollectsConnection;
  composedBy: XtdRelComposesConnection;
  composes: XtdRelComposesConnection;
  documentedBy: XtdRelDocumentsConnection;
  groupedBy: XtdRelGroupsConnection;
  groups: XtdRelGroupsConnection;
  specializedBy: XtdRelSpecializesConnection;
  specializes: XtdRelSpecializesConnection;
  assignedCollections: XtdRelAssignsCollectionsConnection;
  assignedProperties: XtdRelAssignsPropertiesConnection;
  assignedPropertiesWithValues: XtdRelAssignsPropertyWithValuesConnection;
  assignedTo: XtdRelAssignsValuesConnection;
};


export type XtdValueNameArgs = {
  input?: Maybe<LocalizationInput>;
};


export type XtdValueDescriptionArgs = {
  input?: Maybe<LocalizationInput>;
};

export type XtdValueConnection = {
  __typename?: 'XtdValueConnection';
  nodes: Array<XtdValue>;
  pageInfo: PageInfo;
  totalElements: Scalars['Int'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'login'>
);

export type SearchQueryVariables = Exact<{
  input: SearchInput;
  pageSize?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
}>;


export type SearchQuery = (
  { __typename?: 'Query' }
  & { search: (
    { __typename?: 'SearchResultConnection' }
    & Pick<SearchResultConnection, 'totalElements'>
    & { nodes: Array<(
      { __typename?: 'SearchResult' }
      & Pick<SearchResult, 'id' | 'recordType' | 'name' | 'description' | 'versionId' | 'versionDate'>
    )> }
  ) }
);

export type AddTagMutationVariables = Exact<{
  input: CreateTagInput;
}>;


export type AddTagMutation = (
  { __typename?: 'Mutation' }
  & { createTag?: Maybe<(
    { __typename?: 'CreateTagPayload' }
    & { tag?: Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id'>
    )> }
  )> }
);

export type HasRecordQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type HasRecordQuery = (
  { __typename?: 'Query' }
  & { node?: Maybe<(
    { __typename?: 'XtdActivity' }
    & Pick<XtdActivity, 'id'>
  ) | (
    { __typename?: 'XtdActor' }
    & Pick<XtdActor, 'id'>
  ) | (
    { __typename?: 'XtdBag' }
    & Pick<XtdBag, 'id'>
  ) | (
    { __typename?: 'XtdClassification' }
    & Pick<XtdClassification, 'id'>
  ) | (
    { __typename?: 'XtdExternalDocument' }
    & Pick<XtdExternalDocument, 'id'>
  ) | (
    { __typename?: 'XtdMeasureWithUnit' }
    & Pick<XtdMeasureWithUnit, 'id'>
  ) | (
    { __typename?: 'XtdNest' }
    & Pick<XtdNest, 'id'>
  ) | (
    { __typename?: 'XtdProperty' }
    & Pick<XtdProperty, 'id'>
  ) | (
    { __typename?: 'XtdRelActsUpon' }
    & Pick<XtdRelActsUpon, 'id'>
  ) | (
    { __typename?: 'XtdRelAssignsCollections' }
    & Pick<XtdRelAssignsCollections, 'id'>
  ) | (
    { __typename?: 'XtdRelAssignsMeasures' }
    & Pick<XtdRelAssignsMeasures, 'id'>
  ) | (
    { __typename?: 'XtdRelAssignsProperties' }
    & Pick<XtdRelAssignsProperties, 'id'>
  ) | (
    { __typename?: 'XtdRelAssignsPropertyWithValues' }
    & Pick<XtdRelAssignsPropertyWithValues, 'id'>
  ) | (
    { __typename?: 'XtdRelAssignsUnits' }
    & Pick<XtdRelAssignsUnits, 'id'>
  ) | (
    { __typename?: 'XtdRelAssignsValues' }
    & Pick<XtdRelAssignsValues, 'id'>
  ) | (
    { __typename?: 'XtdRelAssociates' }
    & Pick<XtdRelAssociates, 'id'>
  ) | (
    { __typename?: 'XtdRelCollects' }
    & Pick<XtdRelCollects, 'id'>
  ) | (
    { __typename?: 'XtdRelComposes' }
    & Pick<XtdRelComposes, 'id'>
  ) | (
    { __typename?: 'XtdRelDocuments' }
    & Pick<XtdRelDocuments, 'id'>
  ) | (
    { __typename?: 'XtdRelGroups' }
    & Pick<XtdRelGroups, 'id'>
  ) | (
    { __typename?: 'XtdRelSequences' }
    & Pick<XtdRelSequences, 'id'>
  ) | (
    { __typename?: 'XtdRelSpecializes' }
    & Pick<XtdRelSpecializes, 'id'>
  ) | (
    { __typename?: 'XtdSubject' }
    & Pick<XtdSubject, 'id'>
  ) | (
    { __typename?: 'XtdUnit' }
    & Pick<XtdUnit, 'id'>
  ) | (
    { __typename?: 'XtdValue' }
    & Pick<XtdValue, 'id'>
  )> }
);

export type HasSubjectQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type HasSubjectQuery = (
  { __typename?: 'Query' }
  & { getSubject?: Maybe<(
    { __typename?: 'XtdSubject' }
    & Pick<XtdSubject, 'id'>
  )> }
);

export type HasPropertyGroupQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type HasPropertyGroupQuery = (
  { __typename?: 'Query' }
  & { search: (
    { __typename?: 'SearchResultConnection' }
    & Pick<SearchResultConnection, 'totalElements'>
  ) }
);

export type CreateRecordMutationVariables = Exact<{
  input: CreateCatalogEntryInput;
}>;


export type CreateRecordMutation = (
  { __typename?: 'Mutation' }
  & { createCatalogEntry?: Maybe<(
    { __typename?: 'CreateCatalogEntryPayload' }
    & { catalogEntry?: Maybe<(
      { __typename?: 'XtdActor' }
      & Pick<XtdActor, 'id'>
    ) | (
      { __typename?: 'XtdActivity' }
      & Pick<XtdActivity, 'id'>
    ) | (
      { __typename?: 'XtdBag' }
      & Pick<XtdBag, 'id'>
    ) | (
      { __typename?: 'XtdClassification' }
      & Pick<XtdClassification, 'id'>
    ) | (
      { __typename?: 'XtdExternalDocument' }
      & Pick<XtdExternalDocument, 'id'>
    ) | (
      { __typename?: 'XtdMeasureWithUnit' }
      & Pick<XtdMeasureWithUnit, 'id'>
    ) | (
      { __typename?: 'XtdNest' }
      & Pick<XtdNest, 'id'>
    ) | (
      { __typename?: 'XtdSubject' }
      & Pick<XtdSubject, 'id'>
    ) | (
      { __typename?: 'XtdProperty' }
      & Pick<XtdProperty, 'id'>
    ) | (
      { __typename?: 'XtdUnit' }
      & Pick<XtdUnit, 'id'>
    ) | (
      { __typename?: 'XtdValue' }
      & Pick<XtdValue, 'id'>
    )> }
  )> }
);

export type DeleteRecordMutationVariables = Exact<{
  input: DeleteCatalogEntryInput;
}>;


export type DeleteRecordMutation = (
  { __typename?: 'Mutation' }
  & { deleteCatalogEntry?: Maybe<(
    { __typename?: 'DeleteCatalogEntryPayload' }
    & { catalogEntry?: Maybe<(
      { __typename?: 'XtdActor' }
      & Pick<XtdActor, 'id'>
    ) | (
      { __typename?: 'XtdActivity' }
      & Pick<XtdActivity, 'id'>
    ) | (
      { __typename?: 'XtdBag' }
      & Pick<XtdBag, 'id'>
    ) | (
      { __typename?: 'XtdClassification' }
      & Pick<XtdClassification, 'id'>
    ) | (
      { __typename?: 'XtdExternalDocument' }
      & Pick<XtdExternalDocument, 'id'>
    ) | (
      { __typename?: 'XtdMeasureWithUnit' }
      & Pick<XtdMeasureWithUnit, 'id'>
    ) | (
      { __typename?: 'XtdNest' }
      & Pick<XtdNest, 'id'>
    ) | (
      { __typename?: 'XtdSubject' }
      & Pick<XtdSubject, 'id'>
    ) | (
      { __typename?: 'XtdProperty' }
      & Pick<XtdProperty, 'id'>
    ) | (
      { __typename?: 'XtdUnit' }
      & Pick<XtdUnit, 'id'>
    ) | (
      { __typename?: 'XtdValue' }
      & Pick<XtdValue, 'id'>
    )> }
  )> }
);

export type CreateRelationshipMutationVariables = Exact<{
  input: CreateRelationshipInput;
}>;


export type CreateRelationshipMutation = (
  { __typename?: 'Mutation' }
  & { createRelationship?: Maybe<(
    { __typename?: 'CreateRelationshipPayload' }
    & { relationship?: Maybe<(
      { __typename?: 'XtdRelActsUpon' }
      & Pick<XtdRelActsUpon, 'id'>
    ) | (
      { __typename?: 'XtdRelAssignsCollections' }
      & Pick<XtdRelAssignsCollections, 'id'>
    ) | (
      { __typename?: 'XtdRelAssignsMeasures' }
      & Pick<XtdRelAssignsMeasures, 'id'>
    ) | (
      { __typename?: 'XtdRelAssignsProperties' }
      & Pick<XtdRelAssignsProperties, 'id'>
    ) | (
      { __typename?: 'XtdRelAssignsPropertyWithValues' }
      & Pick<XtdRelAssignsPropertyWithValues, 'id'>
    ) | (
      { __typename?: 'XtdRelAssignsUnits' }
      & Pick<XtdRelAssignsUnits, 'id'>
    ) | (
      { __typename?: 'XtdRelAssignsValues' }
      & Pick<XtdRelAssignsValues, 'id'>
    ) | (
      { __typename?: 'XtdRelAssociates' }
      & Pick<XtdRelAssociates, 'id'>
    ) | (
      { __typename?: 'XtdRelCollects' }
      & Pick<XtdRelCollects, 'id'>
    ) | (
      { __typename?: 'XtdRelComposes' }
      & Pick<XtdRelComposes, 'id'>
    ) | (
      { __typename?: 'XtdRelDocuments' }
      & Pick<XtdRelDocuments, 'id'>
    ) | (
      { __typename?: 'XtdRelGroups' }
      & Pick<XtdRelGroups, 'id'>
    ) | (
      { __typename?: 'XtdRelSequences' }
      & Pick<XtdRelSequences, 'id'>
    ) | (
      { __typename?: 'XtdRelSpecializes' }
      & Pick<XtdRelSpecializes, 'id'>
    )> }
  )> }
);


export const LoginDocument = gql`
    mutation login($input: LoginInput!) {
  login(input: $input)
}
    `;
export const SearchDocument = gql`
    query search($input: SearchInput!, $pageSize: Int, $pageNumber: Int) {
  search(input: $input, pageSize: $pageSize, pageNumber: $pageNumber) {
    nodes {
      id
      recordType
      name
      description
      versionId
      versionDate
    }
    totalElements
  }
}
    `;
export const AddTagDocument = gql`
    mutation addTag($input: CreateTagInput!) {
  createTag(input: $input) {
    tag {
      id
    }
  }
}
    `;
export const HasRecordDocument = gql`
    query hasRecord($id: ID!) {
  node(id: $id) {
    id
  }
}
    `;
export const HasSubjectDocument = gql`
    query hasSubject($id: ID!) {
  getSubject(id: $id) {
    id
  }
}
    `;
export const HasPropertyGroupDocument = gql`
    query hasPropertyGroup($id: ID!) {
  search(input: {idIn: [$id], tagged: ["a27c8e3c-5fd1-47c9-806a-6ded070efae8"]}) {
    totalElements
  }
}
    `;
export const CreateRecordDocument = gql`
    mutation createRecord($input: CreateCatalogEntryInput!) {
  createCatalogEntry(input: $input) {
    catalogEntry {
      ... on Concept {
        id
      }
    }
  }
}
    `;
export const DeleteRecordDocument = gql`
    mutation deleteRecord($input: DeleteCatalogEntryInput!) {
  deleteCatalogEntry(input: $input) {
    catalogEntry {
      ... on Concept {
        id
      }
    }
  }
}
    `;
export const CreateRelationshipDocument = gql`
    mutation createRelationship($input: CreateRelationshipInput!) {
  createRelationship(input: $input) {
    relationship {
      ... on XtdRelationship {
        id
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    login(variables: LoginMutationVariables, requestHeaders?: Headers): Promise<LoginMutation> {
      return withWrapper(() => client.request<LoginMutation>(print(LoginDocument), variables, requestHeaders));
    },
    search(variables: SearchQueryVariables, requestHeaders?: Headers): Promise<SearchQuery> {
      return withWrapper(() => client.request<SearchQuery>(print(SearchDocument), variables, requestHeaders));
    },
    addTag(variables: AddTagMutationVariables, requestHeaders?: Headers): Promise<AddTagMutation> {
      return withWrapper(() => client.request<AddTagMutation>(print(AddTagDocument), variables, requestHeaders));
    },
    hasRecord(variables: HasRecordQueryVariables, requestHeaders?: Headers): Promise<HasRecordQuery> {
      return withWrapper(() => client.request<HasRecordQuery>(print(HasRecordDocument), variables, requestHeaders));
    },
    hasSubject(variables: HasSubjectQueryVariables, requestHeaders?: Headers): Promise<HasSubjectQuery> {
      return withWrapper(() => client.request<HasSubjectQuery>(print(HasSubjectDocument), variables, requestHeaders));
    },
    hasPropertyGroup(variables: HasPropertyGroupQueryVariables, requestHeaders?: Headers): Promise<HasPropertyGroupQuery> {
      return withWrapper(() => client.request<HasPropertyGroupQuery>(print(HasPropertyGroupDocument), variables, requestHeaders));
    },
    createRecord(variables: CreateRecordMutationVariables, requestHeaders?: Headers): Promise<CreateRecordMutation> {
      return withWrapper(() => client.request<CreateRecordMutation>(print(CreateRecordDocument), variables, requestHeaders));
    },
    deleteRecord(variables: DeleteRecordMutationVariables, requestHeaders?: Headers): Promise<DeleteRecordMutation> {
      return withWrapper(() => client.request<DeleteRecordMutation>(print(DeleteRecordDocument), variables, requestHeaders));
    },
    createRelationship(variables: CreateRelationshipMutationVariables, requestHeaders?: Headers): Promise<CreateRelationshipMutation> {
      return withWrapper(() => client.request<CreateRelationshipMutation>(print(CreateRelationshipDocument), variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;