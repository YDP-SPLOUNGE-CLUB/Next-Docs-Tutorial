// src/components/DynamicComponent.tsx
'use client'

import React, { useEffect, useState } from 'react';

const DynamicComponent: React.FC = () => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate an API call
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await response.json();
      setData(result.title);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return null; // 데이터가 로드되지 않은 상태에서 null 반환
  }

  return <div>{data}</div>;
};

export default DynamicComponent;
