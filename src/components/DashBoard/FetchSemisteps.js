import axios from 'axios';
import { useState, useEffect } from 'react';

export default function FetchSemisteps(props) {

  const [semisteps, setSemisteps] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = props.url;
  const params = props.params? props.params: null;

  const fetch = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setSemisteps(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        'http://localhost:8080'+url
      );
      setSemisteps(response); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>서버와 통신할 수 없습니다.</div>;
  if (!semisteps) return null;

  return <div>{semisteps.data}</div>;
};