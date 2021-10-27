import axios from 'axios';

const { API_1_URL } = process.env;

export const api1Instance = axios.create({
  baseURL: API_1_URL,
});

const getPatient = async (memberId) => {
  try {
    const { data } = await api1Instance.get('', {
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
