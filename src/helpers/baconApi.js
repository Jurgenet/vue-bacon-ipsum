import axios from 'axios';

const BASE_URL = `https://cors-anywhere.herokuapp.com/https://baconipsum.com/api/`;

/**
 * Gets generated 'lorem ipsum' text
 *
 * @returns {Array}
 */
export async function getBaconParagraphs() {
  try {
    const { status, data } = await axios.get(`${BASE_URL}` + `?type=meat-and-filler`);

    if (status === 200) return data;
  } catch (error) {
    throw error;
  }
}
