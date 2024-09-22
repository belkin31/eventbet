import { ChatIcon } from '../components/icons/ChatIcon';
import { CasinoIcon } from '../components/icons/CasinoIcon';
import { HomeIcon } from '../components/icons/HomeIcon';
import { CashierIcon } from '../components/icons/CashierIcon';
import { SettingsIcon } from '../components/icons/SettingsIcon';
import { ProfileIcon } from '../components/icons/ProfileIcon';
import { PromotionIcon } from '../components/icons/PromotionIcon';

import { HomeScreen } from '../screens/HomeScreen';
import { CasinoScreen } from '../screens/CasinoScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { PromotionScreen } from '../screens/PromotionScreen';

export const routes = [
    {
        router: 'chat',
        label: 'Support',
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
        router: 'settings',
        label: 'Settings',
        icon: SettingsIcon,
        component: SettingsScreen,
      },
]