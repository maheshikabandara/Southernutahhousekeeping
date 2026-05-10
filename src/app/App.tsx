import { Analytics } from '@vercel/analytics/react';
import SouthernUtahHousekeeping from "../imports/SouthernUtahHousekeeping/SouthernUtahHousekeeping";

export default function App() {
  return (
    <>
      <SouthernUtahHousekeeping />
      <Analytics />
    </>
  );
}