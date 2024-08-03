import { ChatIcon } from '../components/icons/ChatIcon';
import { CasinoIcon } from '../components/icons/CasinoIcon';
import { HomeIcon } from '../components/icons/HomeIcon';
import { CashierIcon } from '../components/icons/CashierIcon';
import { ProfileIcon } from '../components/icons/ProfileIcon';

import { HomeScreen } from '../screens/HomeScreen';
import { CasinoScreen } from '../screens/CasinoScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { CashierScreen } from '../screens/CashierScreen';

export const routes = [
    {
        router: 'chat',
        label: 'chat',
        icon: ChatIcon,
        component: ChatScreen,
      },
      {
        router: 'casino',
        label: 'casino',
        icon: CasinoIcon,
        component: CasinoScreen,
      },
      {
        router: 'home',
        label: 'home',
        icon: HomeIcon,
        component: HomeScreen,
      },
      {
        router: 'deposit',
        label: 'deposit',
        icon: CashierIcon,
        component: CashierScreen,
      },
      {
        router: 'profile',
        label: 'profile',
        icon: ProfileIcon,
        component: ProfileScreen,
      },
]