/**
 * Custom hook for implementing infinite scroll functionality.
 *
 * This hook manages the fetching of user data in pages and allows for loading
 * additional users when the user scrolls to the bottom of the list. It leverages
 * the Intersection Observer API to detect when the loading indicator comes into view,
 * triggering a new request for more data.
 *
 * @returns {Object} An object containing the state and functionality of the infinite scroll.
 * @returns {boolean} loading - Indicates if the data is currently being loaded.
 * @returns {User[]} data - An array of user data fetched from the API.
 * @returns {React.RefObject<HTMLDivElement>} observerRef - A ref to be attached to a div element
 * for observing when it enters the viewport.
 *
 * @example
 * // Usage of the useInfiniteScroll hook
 * import React from 'react';
 * import { useInfiniteScroll } from './useInfiniteScroll';
 *
 * const UserList = () => {
 *   const { loading, data, observerRef } = useInfiniteScroll();
 *
 *   return (
 *     <div>
 *       <ul>
 *         {data.map(user => (
 *           <li key={user.id.name}>
 *             <img src={user.picture.thumbnail} alt={user.name.first} />
 *             {user.name.first} {user.name.last}
 *           </li>
 *         ))}
 *       </ul>
 *       {loading && <div>Loading...</div>}
 *       <div ref={observerRef} />
 *     </div>
 *   );
 * };
 */
import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { RandomUsersRequest, User } from '../types';
import { RandomUserService } from '../services';

export const useInfiniteScroll = () => {
  const [data, setData] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    },
    [loading],
  );

  const getUsers = useCallback(async () => {
    setLoading(true);
    const params: RandomUsersRequest = { page };
    try {
      const randomUsers = await RandomUserService.fetchRandomUsers(params);
      setData((prev) => [...prev, ...randomUsers.results]);
    } catch (error) {
      console.error('error - ', error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    const currentRef = observerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [observerCallback]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return { loading, data, observerRef };
};
