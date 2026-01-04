import DashboardLayout from '../features/dashboard/DashboardLayout';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import DashboardFilter from '../features/dashboard/DashboardFilter';
// import Spinner from '../ui/Spinner';
// import { useRecentBookings } from '../features/dashboard/useRecentBookings';
// import { useRecentStays } from '../features/dashboard/useRecentStays';

function Dashboard() {
  // const { bookings, isPending } = useRecentBookings();
  // const { stays, confirmedStays, isPending: isLoading } = useRecentStays();

  // if (isPending || isLoading) return <Spinner />;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
