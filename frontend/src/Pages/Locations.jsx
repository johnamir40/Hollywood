import { useEffect, useMemo } from "react";
import { useLocations } from "../store";
import { useSearchParams } from "react-router-dom";

import LocationHero from "../components/location-components/LocationHero";
import ZoneSelector from "../components/location-components/ZoneSelector";
import LocationExplorer from "../components/location-components/LocationExplorer";

export default function Locations() {
  const [searchParams, setSearchParams] = useSearchParams();

  const zones = useLocations((state) => state.zones);
  const billboardLocations = useLocations((state) => state.billboards);
  const getLocations = useLocations((state) => state.getLocations);
  const loading = useLocations((state) => state.loading);
  const error = useLocations((state) => state.error);

  useEffect(() => {
    getLocations();
  }, [getLocations]);

  const requestedZone = searchParams.get("zone");

  const activeZone = zones.some((zone) => zone.id === requestedZone)
    ? requestedZone
    : "all";

  const counts = useMemo(() => {
    return zones.reduce((result, zone) => {
      result[zone.id] = billboardLocations.filter(
        (billboard) => billboard.zone === zone.id,
      ).length;

      return result;
    }, {});
  }, [zones, billboardLocations]);

  const handleSelectZone = (zoneId) => {
    if (zoneId === "all") {
      setSearchParams({});
      return;
    }

    setSearchParams({
      zone: zoneId,
    });
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading locations...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center text-red-500">
        Failed to load locations.
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full overflow-x-clip bg-[#f7faff] text-[#0b1f3c]">
      <LocationHero zones={zones} billboardLocations={billboardLocations} />

      <ZoneSelector
        zones={zones}
        activeZone={activeZone}
        onSelectZone={handleSelectZone}
        counts={counts}
      />

      <LocationExplorer
        zones={zones}
        billboardLocations={billboardLocations}
        activeZone={activeZone}
        onSelectZone={handleSelectZone}
      />
    </main>
  );
}
