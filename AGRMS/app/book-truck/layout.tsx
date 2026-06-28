import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Truck - AGRMS Transport',
  description: 'Submit your truck booking enquiry for reliable transport and logistics services across India. Get a quote today!',
};

export default function BookTruckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
