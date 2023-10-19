import PatientHeader from "@/components/view/Header/TravellerHeader/TravellerHeader";
import PatientSidebar from "@/components/view/Sidebar/TravellerSidebar/TravellerSidebar";

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PatientHeader />
      <div className="min-h-[calc(100vh-64px)]">
        <PatientSidebar>{children}</PatientSidebar>
      </div>
    </div>
  );
}
