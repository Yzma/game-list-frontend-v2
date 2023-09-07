import { ListsOrderType } from './types';

export const FIRST_VIDEO_GAME_RELEASED_YEAR = 1958;

export const getTokenFromLocalStorage = () => {
  const authToken = localStorage.getItem('token');
  return {
    headers: {
      Authorization: authToken ? `Bearer ${authToken}` : '',
    },
  };
};

export const INITIAL_USER_STATE = {
  loading: true,
  user: {
    id: '',
    username: '',
    bannerPicture: '',
    createdAt: '',
    games: [],
    isActive: false,
    userGames: [],
    userPicture: '',
    __typename: '',
  },
};

export const USER_LISTS = [
  {
    id: 'planning',
    content: 'Planning',
  },
  {
    id: 'playing',
    content: 'Playing',
  },
  {
    id: 'completed',
    content: 'Completed',
  },
  {
    id: 'paused',
    content: 'Paused',
  },
  {
    id: 'dropped',
    content: 'Dropped',
  },
];

export const INITIAL_USER_GAME_LISTS = {
  listOrder: [
    'planning',
    'playing',
    'paused',
    'completed',
    'dropped',
  ] as ListsOrderType[],
  localListOrder: [
    'planning',
    'playing',
    'paused',
    'completed',
    'dropped',
  ] as ListsOrderType[],
};

export const INITIAL_USER_GAME_BY_ID_STATE = {
  completedDate: undefined,
  gameNote: '',
  gameStatus: '',
  private: false,
  rating: null,
  startDate: undefined,
  id: '',
};
