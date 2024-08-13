'use client';

import {useEffect, useState} from "react";

export default function RoutePage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch('/api/test', { next: { revalidate: 1 } });
      const data = await response.json();
      setMessage(data.message);
    };

    fetchMessage();
  }, []);
  return (
    <div>
      {message}
    </div>
  )
}