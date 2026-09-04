import BillboardGallery from "./billboardCard-components/BillboardGallery";
import BillboardInfo from "./billboardCard-components/BillboardInfo";
import BillboardActions from "./billboardCard-components/BillboardActions";

export default function BillboardCard({
  location,
  selected,
  onSelect,
  onShowMap,
}) {
  return (
    <article
      className={`group relative flex min-w-0 flex-col overflow-hidden rounded-[22px] border bg-white shadow-[0_14px_34px_rgba(15,49,93,0.09)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_55px_rgba(15,49,93,0.16)] ${
        selected
          ? "border-blue-500 ring-2 ring-blue-100"
          : "border-[#dce8f7] hover:border-blue-300"
      }`}
    >
      <BillboardGallery location={location} onSelect={onSelect} />

      <BillboardInfo location={location} onSelect={onSelect} />

      <BillboardActions
        location={location}
        onSelect={onSelect}
        onShowMap={onShowMap}
      />
    </article>
  );
}
