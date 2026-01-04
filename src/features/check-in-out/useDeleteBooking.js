import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteBooking as deleteApi } from '../../services/apiBookings';

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  //! Mutation (look & remember)
  const { isPending: isDeletingBooking, mutate: deleteBooking } = useMutation({
    mutationKey: ['bookings'],
    mutationFn: deleteApi,
    onSuccess: () => {
      toast.success('Succesfully deleted');
      queryClient.invalidateQueries({
        queryKey: ['bookings'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeletingBooking, deleteBooking };
}
