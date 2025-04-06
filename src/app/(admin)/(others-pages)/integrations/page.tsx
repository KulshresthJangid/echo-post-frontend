import IntegrationCards from "@/components/common/Integration";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Integration } from "@/enums/Integration.enum";

export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Integrations" />
      <IntegrationCards integrationName={Integration.INSTAGRAM} />
    </div>
  );
}
