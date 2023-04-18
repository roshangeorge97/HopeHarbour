import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/app',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/app/create-campaign',
  },
  {
    name: 'Community',
    imgUrl: payment,
    link: '/',
    disabled: true,
  },
  {
    name: 'My Donations',
    imgUrl: withdraw,
    link: '/',
    disabled: true,
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },
];
