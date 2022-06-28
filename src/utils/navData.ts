export type NavData = {
  id: string
  title: string
  image: string
  screen: string
}

export const NAV_DATA: NavData[] = [
  {
    id: '1',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '2',
    title: 'Order a food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
]
