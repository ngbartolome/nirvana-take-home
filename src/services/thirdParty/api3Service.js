import axios from 'axios';

const { API_3_URL } = process.env;

export const api3Instance = axios.create({
  baseURL: API_3_URL,
});

const getPatient = async (memberId) => {
  try {
    const { data } = await api3Instance.get('', {
      params: {
        member_id: memberId,
      },
    });

    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export default { getPatient };
