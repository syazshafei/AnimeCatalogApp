import {useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';
import {create} from 'zustand';
import axios from 'axios';

export const useAnimeStore = create(set => ({
  anime: {},
  animeId: 1,
  setAnime: anime => set({anime}),
  setAnimeId: () => set(state => ({animeId: state.animeId + 1})),
}));

export const GetAnimeData = () => {
  const {animeId, setAnime, setAnimeId} = useAnimeStore();

  const {data, isLoading, isError} = useQuery({
    queryKey: ['anime'],
    queryFn: async () =>
      await axios.get(`https://api.jikan.moe/v4/anime/${animeId}/full`),
  });

  const animeData = data?.data;

  useEffect(() => {
    if (!isLoading && !isError && animeData) {
      setAnime(animeData);
      setAnimeId(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isError, isLoading]);
};
