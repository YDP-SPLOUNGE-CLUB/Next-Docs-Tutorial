// src/components/DynamicComponent.tsx
'use client'

import React, {useEffect, useState} from 'react';
import {useQuery, UseQueryOptions, UseQueryResult} from "@tanstack/react-query";

interface Props {
  delayTime: number;
}

type ExtendedQueryOptions<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData> =
  UseQueryOptions<TQueryFnData, TError, TData>
  & {
  suspense?: boolean;
};

const fetchPost = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const DynamicComponent = ({delayTime}: Props) => {
  const {data, error, isLoading} = useQuery({
    queryKey: ['post', delayTime],
    queryFn: () =>
      new Promise((resolve) => {
        setTimeout(async () => {
          const result = await fetchPost();
          resolve(result);
        }, delayTime);
      }),
    suspense: true,
  } as ExtendedQueryOptions);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return null;
  if (!data) return null;

  return <div>{(data as any)?.title}</div>;
};

export default DynamicComponent;
