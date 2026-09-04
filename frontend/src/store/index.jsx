import { create } from "zustand";
import axios from "axios";

// export const domain = "http://localhost:1337";
export const domain = import.meta.env.VITE_STRAPI_URL;
const statusMap = {
  Available: "available",
  Reserved: "reserved",
  "On Hold": "on-hold",
};

export const useMovies = create((set) => ({
  movies: [],
  loading: false,
  error: null,
  hasFetched: false,

  getMovies: async () => {
    set({
      loading: true,
      error: null,
    });

    try {
      const res = await axios.get(domain + "/api/movies?populate=*");

      const movies = res.data.data.map((movie) => ({
        ...movie,

        // Strapi: movieStatus
        // Frontend القديم: status
        status: movie.movieStatus,

        // نستخرج السنة من releaseDate
        year: movie.releaseDate
          ? new Date(movie.releaseDate).getFullYear().toString()
          : "",

        // Relations من Strapi
        genres: movie.genres?.map((genre) => genre.name) || [],

        actors: movie.actors?.map((actor) => actor.name) || [],

        // Poster URL كامل
        poster: movie.poster?.url ? domain + movie.poster.url : null,

        // Gallery URLs كاملة
        gallery: movie.gallery?.map((image) => domain + image.url) || [],

        // Frontend colors فقط
        // مش جاية من Strapi
        palette: {
          from: "#0f172a",
          via: "#1d4ed8",
          to: "#020617",
          accent: "#93c5fd",
        },
      }));

      set({
        movies,
        loading: false,
        hasFetched: true,
      });
    } catch (error) {
      console.log("GET MOVIES ERROR:", error);

      set({
        error: error.message,
        loading: false,
        hasFetched: true,
      });
    }
  },
}));

export const useLocations = create((set) => ({
  zones: [],
  billboards: [],
  loading: false,
  error: null,

  getLocations: async () => {
    set({
      loading: true,
      error: null,
    });

    try {
      const [zonesRes, billboardsRes] = await Promise.all([
        axios.get(domain + "/api/zones?populate=image"),

        axios.get(
          domain + "/api/billboards?populate[zone]=true&populate[images]=true",
        ),
      ]);

      const zones = zonesRes.data.data.map((zone) => ({
        ...zone,

        // نخلي slug هو الـ id اللي الصفحة القديمة متعودة تستخدمه
        id: zone.slug,

        image: zone.image?.url ? domain + zone.image.url : null,
      }));

      const billboards = billboardsRes.data.data.map((billboard) => ({
        ...billboard,

        id: billboard.documentId,

        number: billboard.cardNumber,

        title: billboard.name,
        size: billboard.description,

        zone: billboard.zone?.slug || null,

        status: statusMap[billboard.availabilityStatus],

        availableDate: billboard.availableFrom,

        mapQuery: billboard.location,

        images:
          billboard.images?.map((image, index) => ({
            src: domain + image.url,
            label:
              index === 0
                ? billboard.direction || "Main view"
                : `View ${index + 1}`,
            location: billboard.location,
          })) || [],
      }));

      set({
        zones,
        billboards,
        loading: false,
      });
    } catch (error) {
      console.log("GET LOCATIONS ERROR:", error);

      set({
        error: error.message,
        loading: false,
      });
    }
  },
}));
