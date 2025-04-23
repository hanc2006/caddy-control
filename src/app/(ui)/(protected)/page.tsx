"use client";

import { BoxLoader } from "@/components/loader";
import PageHeader from "@/components/page-header";
import Proxies from "@/components/proxies/proxies";
import ProxiesActions from "@/components/proxies/proxies-actions";
import { Separator } from "@/components/ui/separator";
import { useGetRegisteredDomains } from "@/hooks/domains/domain.hooks";

export default function DashboardPage() {
  const { data, isLoading } = useGetRegisteredDomains();

  return (
    <div className="mt-4 px-4 mb-24 flex flex-col h-full">
      <PageHeader
        title="Proxies"
        description="Manage your proxies from here!"
        showBackButton={false}
        actions={<ProxiesActions />}
      />
      <Separator />
      <div className="flex flex-1 items-start justify-center rounded-lg border border-dashed shadow-sm p-4">
        {isLoading ? (
          <BoxLoader height="h-[24vh]" />
        ) : (
          <Proxies proxyData={data} />
        )}
      </div>
    </div>
  );
}
