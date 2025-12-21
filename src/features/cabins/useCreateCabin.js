import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createEditCabin } from '../../services/apiCabins'
import toast from 'react-hot-toast'

export function useCreateCabin() {
  const queryClient = useQueryClient()

  const { isPending: isCreating, mutate: createCabin } = useMutation({
    mutationFn: (cabinData) => createEditCabin(cabinData),
    // mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('New cabin created')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
      // reset()
    },
    onError: (err) => toast.error(err.message),
  })

  return { isCreating, createCabin }
}
