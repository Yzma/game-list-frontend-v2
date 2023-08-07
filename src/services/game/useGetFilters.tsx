import { useQuery } from 'react-query';
import { GameFilters } from '../types';

const fetchGameFilters = async (): Promise<GameFilters> => {
  const response = await fetch('http://localhost:8080/gamefilters').then(
    (res) => res.json()
  );
  return response;
};

export default function useGetFilters() {
  const { data, status, error } = useQuery('GameFilters', fetchGameFilters, {});
  const genres: string[] = data?.genres ? data.genres : [];
  const platforms: string[] = data?.platforms ? data.platforms : [];
  const tags: string[] = data?.tags ? data.tags : [];
  const furthestYear: number = data?.furthestYear ? data.furthestYear : NaN;
  const errors = error || [];
  return { genres, platforms, tags, furthestYear, errors, loading: status };
}
