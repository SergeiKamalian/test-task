import { RandomUsersRequest, RandomUsersResponse } from '../types';

export class RandomUserService {
  /**
   * The base URL for the Random User API.
   * @type {string}
   * @private
   */
  private static readonly BASE_URL = 'https://randomuser.me/api/';

  /**
   * Fetches a list of random users based on the provided request parameters.
   *
   * @param {RandomUsersRequest} params - The request parameters, including the page number.
   * @returns {Promise<RandomUsersResponse>} A promise that resolves to the response containing random users.
   * @throws {Error} Throws an error if the network request fails or the response is not OK.
   */
  static async fetchRandomUsers(params: RandomUsersRequest): Promise<RandomUsersResponse> {
    const { page } = params;
    const url = `${this.BASE_URL}?page=${page}&results=21`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`error - ${response.statusText}`);
    }

    const data: RandomUsersResponse = await response.json();
    return data;
  }
}
