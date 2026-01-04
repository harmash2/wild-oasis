import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBooking } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export function useCheckedOut() {
  const queryClient = useQueryClient();
  const { mutate: checkedout, isPending: isCheckedOut } = useMutation({
    mutationKey: ['bookings'],
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: 'checked-out',
      }),

    onSuccess: (data) => {
      toast.success(`Booking ${data.id} checked out`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: (err) => {
      toast.error('Could not check you out');
      console.error(err);
    },
  });

  return { checkedout, isCheckedOut };
}
