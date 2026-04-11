export interface Contact {
  id: number;
  name: string;
  role: string;
  avatar: string;
  category: 'new' | 'favorites';
}

export const MOCK_CONTACTS: Contact[] = [
  { id: 1, name: "Gregory Clark", role: "Manager", avatar: "https://i.pravatar.cc/150?u=gregory", category: 'new' },
  { id: 2, name: "George Allen", role: "Broker", avatar: "https://i.pravatar.cc/150?u=george", category: 'new' },
  { id: 3, name: "Megan Brooks", role: "Analyst", avatar: "https://i.pravatar.cc/150?u=megan", category: 'new' },
  { id: 4, name: "Logan Smith", role: "Manager", avatar: "https://i.pravatar.cc/150?u=logan", category: 'new' },
  { id: 5, name: "Douglas Brown", role: "Manager", avatar: "https://i.pravatar.cc/150?u=douglas", category: 'favorites' },
  { id: 6, name: "Edgar White", role: "Realtor", avatar: "https://i.pravatar.cc/150?u=edgar", category: 'favorites' },
  { id: 7, name: "Emma Johnson", role: "Investor", avatar: "https://i.pravatar.cc/150?u=emma", category: 'favorites' },
];