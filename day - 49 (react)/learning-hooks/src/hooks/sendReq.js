import { useState } from "react";

function useSendReq(api) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function sendReq() {
    try {
      setLoading(true);
      const res = await fetch(api);

      const data = await res.json();

      console.log(data);
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return [data, sendReq, loading];
}

export default useSendReq;
