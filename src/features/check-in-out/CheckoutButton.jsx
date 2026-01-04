import Button from '../../ui/Button';
import { useCheckedOut } from './useChekedOut';

function CheckoutButton({ bookingId }) {
  const { checkedout, isCheckedOut } = useCheckedOut();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkedout(bookingId)}
      disabled={isCheckedOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
