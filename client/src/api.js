import axios from "axios";

const API_URL = "https://globetrotter-challenge-1-tatn.onrender.com/api";

// Register or update a user with a score
export const registerUser = async (username, score) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, score });
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error.response.data.message);
    throw error;
  }
};

// Get a user’s score
export const getUserScore = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/user/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user score:", error.response.data.message);
    throw error;
  }
};
