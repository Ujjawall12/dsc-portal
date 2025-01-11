import MainLayout from "@/Layout/MainLayout";
import EventDetailsDescription from "./Components/EventDetailsDescription";
import EventsSlider from "./Components/Nandini";
export default function EventsDetail() {
  return (
    <MainLayout>
      {
        <>
        <EventDetailsDescription />
        <EventsSlider />
        </>
        
        // Your Code here.
        // ? FOR(Lokesh, Nandini, Soham) - Complete each of your components
        // ? seperatly present in ./Components/{name}.jsx and then import them here.
      }
    </MainLayout>
  );
}
