import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCabin } from '../../services/apiCabins'
import toast from 'react-hot-toast'

export function useDeleteCabin() {
  const queryClient = useQueryClient()

  //! Mutation (look & remember)
  const { isPending, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success('Succesfully deleted')
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      })
    },
    onError: (err) => toast.error(err.message),
  })

  return { isPending, mutate }
}
