/**
 * Represents the request parameters for fetching random users.
 * @typedef {Object} RandomUsersRequest
 * @property {number} page - The page number for paginated results.
 */
export type RandomUsersRequest = {
  page: number;
};

/**
 * Represents a user and their detailed information.
 * @typedef {Object} User
 * @property {string} gender - The gender of the user.
 * @property {Object} name - The name details of the user.
 * @property {string} name.title - The title (e.g., Mr., Ms.) of the user.
 * @property {string} name.first - The first name of the user.
 * @property {string} name.last - The last name of the user.
 * @property {Object} location - The location details of the user.
 * @property {Object} location.street - The street information.
 * @property {number} location.street.number - The street number.
 * @property {string} location.street.name - The name of the street.
 * @property {string} location.city - The city where the user resides.
 * @property {string} location.state - The state where the user resides.
 * @property {string} location.country - The country where the user resides.
 * @property {number} location.postcode - The postcode for the user's location.
 * @property {Object} location.coordinates - The geographical coordinates.
 * @property {string} location.coordinates.latitude - The latitude.
 * @property {string} location.coordinates.longitude - The longitude.
 * @property {Object} location.timezone - The timezone information.
 * @property {string} location.timezone.offset - The UTC offset.
 * @property {string} location.timezone.description - Description of the timezone.
 * @property {string} email - The email address of the user.
 * @property {Object} login - The login credentials of the user.
 * @property {string} login.uuid - A unique identifier for the user.
 * @property {string} login.username - The username.
 * @property {string} login.password - The password.
 * @property {string} login.salt - The salt used in password hashing.
 * @property {string} login.md5 - The MD5 hash of the password.
 * @property {string} login.sha1 - The SHA-1 hash of the password.
 * @property {string} login.sha256 - The SHA-256 hash of the password.
 * @property {Object} dob - The date of birth details of the user.
 * @property {string} dob.date - The date of birth.
 * @property {number} dob.age - The age of the user.
 * @property {Object} registered - The registration details.
 * @property {string} registered.date - The registration date.
 * @property {number} registered.age - The number of years since registration.
 * @property {string} phone - The phone number of the user.
 * @property {string} cell - The cell number of the user.
 * @property {Object} id - The ID details of the user.
 * @property {string} id.name - The name of the ID type.
 * @property {string|null} id.value - The ID value, or null if not available.
 * @property {Object} picture - The profile pictures of the user.
 * @property {string} picture.large - URL for the large version of the picture.
 * @property {string} picture.medium - URL for the medium version of the picture.
 * @property {string} picture.thumbnail - URL for the thumbnail version of the picture.
 * @property {string} nat - The nationality of the user.
 */
export type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};

/**
 * Represents the response structure for fetching random users.
 * @typedef {Object} RandomUsersResponse
 * @property {User[]} results - An array of User objects.
 * @property {Object} info - Information about the response.
 * @property {string} info.seed - The seed used for generating results.
 * @property {number} info.results - The number of results returned.
 * @property {number} info.page - The current page of results.
 * @property {string} info.version - The version of the API used.
 */
export interface RandomUsersResponse {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
