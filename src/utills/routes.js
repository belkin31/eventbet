import { ChatIcon } from '../components/icons/ChatIcon';
import { CasinoIcon } from '../components/icons/CasinoIcon';
import { HomeIcon } from '../components/icons/HomeIcon';
import { CashierIcon } from '../components/icons/CashierIcon';
import { ProfileIcon } from '../components/icons/ProfileIcon';
import { PromotionIcon } from '../components/icons/PromotionIcon';

import { HomeScreen } from '../screens/HomeScreen';
import { CasinoScreen } from '../screens/CasinoScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { PromotionScreen } from '../screens/PromotionScreen';

export const routes = [
    {
        router: 'chat',
        label: 'Chat',
        icon: ChatIcon,
        component: ChatScreen,
      },
      {
        router: 'casino',
        label: 'Casino',
        icon: CasinoIcon,
        component: CasinoScreen,
      },
      {
        router: 'home',
        label: 'Home',
        initial: true,
        icon: HomeIcon,
        component: HomeScreen,
      },
      {
        router: 'promotion',
        label: 'Promo',
        icon: PromotionIcon,
        component: PromotionScreen,
      },
      {
        router: 'profile',
        label: 'Profile',
        icon: ProfileIcon,
        component: ProfileScreen,
      },
]