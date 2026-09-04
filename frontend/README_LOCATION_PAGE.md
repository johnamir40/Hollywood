# Hollywood Locations Page

The `/locations` page is integrated with the existing Hollywood website style and routing.

## Included behavior

- Four zones: 6 October Bridge, Mehwar 26th July, Suez Road, and Other Locations.
- 19 physical billboard sites with separate cards for alternate PowerPoint photos/faces/directions.
- Clean billboard photos extracted from the PowerPoints: the red/black slide frames and slide text are removed, while the original billboard arrows are preserved.
- Full source photos are displayed in the cards without `object-cover` cropping.
- Billboard numbering is continuous across all zones from 1 to 19. It does not restart when the zone changes. Alternate views of the same physical billboard use the same number.
- The number appears only inside the billboard card, immediately after the location name.
- All / Available / Reserved / Not provided status filters.
- Sticky Google Maps panel on desktop/laptop screens.
- Shorter responsive location hero.

## GPS data

The supplied PowerPoints contain location descriptions rather than exact latitude/longitude values. The current map behavior uses Google Maps search queries generated from those descriptions. `locations.js` already has a `coordinates` field ready for exact GPS coordinates later.

## Run locally

```bash
npm install
npm run dev
```

## Billboard card grouping (latest)

- One card represents one independently rentable billboard (`siteId`).
- All supplied photos of that same billboard are grouped into `images` on the card.
- "Other direction" and alternate-angle photos of the same billboard are shown in the same swipeable carousel, not as separate cards.
- A different rentable billboard must use a different `siteId`, which creates a separate card and keeps the global continuous number.
- Card photos use their full uncropped clean images, including the original PowerPoint arrows.

## Mobile map behavior
- On screens below the `lg` breakpoint, the inline/sticky GPS column is hidden.
- Tapping **Show on map** on a billboard card opens a modal map for that billboard.
- The mobile map modal includes the billboard location/number, a close button, backdrop-to-close behavior, and an **Open in Google Maps** action.
- On `lg` and larger screens, the sticky desktop map panel remains available.
