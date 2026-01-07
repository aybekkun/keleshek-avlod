import { useQuery } from '@tanstack/react-query'

import { ContactsService } from './contacts.service'

export const useContact = () => {
  return useQuery({
    queryKey: ['contact'],
    queryFn: () => ContactsService.get(),
  })
}
