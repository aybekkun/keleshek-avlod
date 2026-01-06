import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { App } from 'antd'
import type { IParams } from '../service.types'
import { ContactsService } from './contacts.service'

export const useContact = () => {
  return useQuery({
    queryKey: ['contact'],
    queryFn: () => ContactsService.get(),
  })
}

export const useContactMessages = (params: IParams) => {
  return useQuery({
    queryKey: ['contact-messages', ...Object.values(params)],
    queryFn: () => ContactsService.getMessages(params),
    placeholderData: keepPreviousData,
  })
}

export const useMarkContactMessageAsSeen = () => {
  const queryClient = useQueryClient()
  const { message } = App.useApp()

  return useMutation({
    mutationFn: ContactsService.markAsSeen,
    onSuccess: () => {
      message.success('Статус сообщения обновлен')
      queryClient.invalidateQueries({ queryKey: ['contact-messages'] })
    },
    onError: () => {
      message.error('Ошибка при обновлении статуса')
    },
  })
}
