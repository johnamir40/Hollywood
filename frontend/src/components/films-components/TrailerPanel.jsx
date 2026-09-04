// import { FiPlay } from "react-icons/fi";

// export default function TrailerPanel({ movie }) {
//   return (
//     <div
//       id="trailer"
//       className="group relative isolate aspect-video scroll-mt-24 overflow-hidden rounded-3xl border border-white/10 bg-[#091326] shadow-2xl lg:h-full lg:aspect-auto"
//       style={{
//         backgroundImage: `radial-gradient(circle at 72% 28%, ${movie.palette.via}99, transparent 33%), linear-gradient(125deg, ${movie.palette.from}, ${movie.palette.to} 72%)`,
//       }}
//     >
//       <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-size-[72px_72px]" />
//       <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-48 border-white/5" />
//       <div className="absolute left-[14%] top-[18%] h-[58%] w-[28%] -rotate-12 rounded-[45%_45%_18%_18%] bg-black/20 blur-sm" />
//       <div className="absolute inset-0 bg-linear-to-t from-black via-black/15 to-black/25" />

//       <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md sm:left-6 sm:top-6">
//         <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.85)]" />
//         Official trailer
//       </div>

//       <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 sm:p-7 lg:p-8">
//         <div className="flex min-w-0 items-center gap-4 sm:gap-5">
//           <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-white bg-white/10 text-xl text-white shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-300 group-hover:scale-105 group-hover:bg-blue-600 sm:h-18 sm:w-18 sm:text-2xl">
//             <FiPlay className="ml-1 fill-current" />
//           </span>
//           <div className="min-w-0">
//             <p className="text-lg font-bold text-white sm:text-2xl">
//               Play trailer
//             </p>
//             <p className="mt-1 text-xs text-slate-300 sm:text-sm">
//               Video coming soon
//             </p>
//           </div>
//         </div>

//         <span className="hidden rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs font-semibold text-white/75 backdrop-blur-md sm:block">
//           {movie.year}
//         </span>
//       </div>
//     </div>
//   );
// }

function getTrailerEmbed(url) {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);

    // YouTube
    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");

      if (videoId) {
        return {
          type: "youtube",
          url: `https://www.youtube.com/embed/${videoId}`,
        };
      }
    }

    // YouTube short link
    if (parsedUrl.hostname === "youtu.be") {
      const videoId = parsedUrl.pathname.slice(1);

      if (videoId) {
        return {
          type: "youtube",
          url: `https://www.youtube.com/embed/${videoId}`,
        };
      }
    }

    // Facebook video / reel
    if (
      parsedUrl.hostname.includes("facebook.com") ||
      parsedUrl.hostname.includes("fb.watch")
    ) {
      return {
        type: "facebook",
        url: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
          url,
        )}&show_text=false&width=1000`,
      };
    }

    return null;
  } catch {
    return null;
  }
}
export default function TrailerPanel({ movie }) {
  const trailer = getTrailerEmbed(movie.trailerUrl);

  if (!trailer) {
    return (
      <div
        id="trailer"
        className="relative flex aspect-video items-center justify-center overflow-hidden rounded-3xl bg-[#091326] text-white shadow-2xl lg:h-full lg:aspect-auto"
      >
        <p>Trailer coming soon</p>
      </div>
    );
  }

  return (
    <div
      id="trailer"
      className="relative isolate aspect-video overflow-hidden rounded-3xl bg-black shadow-2xl lg:h-full lg:aspect-auto"
    >
      <iframe
        src={trailer.url}
        title={`${movie.title} Official Trailer`}
        className="absolute inset-0 h-full w-full"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />

      <div className="pointer-events-none absolute left-5 top-15 rounded-full border border-white/15 bg-black/60 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-red-500" />
        Official trailer
      </div>
    </div>
  );
}
