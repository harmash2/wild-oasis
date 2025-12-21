import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateSetting } from '../../services/apiSettings'
import toast from 'react-hot-toast'

export function useEditSetting() {
  const queryClient = useQueryClient()

  const { isPending, mutate } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success('Settings succesfully updated')
      queryClient.invalidateQueries({ queryKey: ['settings'] })
    },
    onError: (err) => toast.error(err.message),
  })

  return { isPending, mutate }
}
