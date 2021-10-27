import axios from 'axios';

const { API_2_URL } = process.env;

export const api2Instance = axios.create({
  baseURL: API_2_URL,
});

const getPatient = async (memberId) => {
  try {
    const { data } = await api2Instance.get('', {
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
