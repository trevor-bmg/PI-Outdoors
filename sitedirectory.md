# PI Outdoors — Site Directory

## Shopify Constraint
Firearms and ammunition cannot be sold on Shopify. Guns & Ammo gets a standalone page (images, brand logos, in-store CTA) — not a collection. Hunting gear (non-firearm) can be sold online.

---

## Homepage
`templates/index.json`

- Hero — full-width lifestyle image (beach/fishing sunset vibe like current site), headline, CTA
- Featured Collections — 4 collection cards: Fishing, Hunting, Boating, Clothing
- About / Story block — short intro, family-owned since 2006, link to About page
- Boat Rentals callout — jon boat image + pricing teaser + CTA to Boat Rentals page
- Firearms callout — image + "Visit Us In Store" CTA to Firearms page
- Brands banner — logo strip of top carried brands (client pulling images from current site)
- Testimonials / Google reviews
- Newsletter signup

---

## Pages

### About Us
`templates/page.about.json`

Our story, family-owned since 2006, Lowcountry roots, team/staff photos. "We recycle fishing line" callout (from current site — good community angle).

### Contact Us
`templates/page.contact.json`

Location, hours, phone, email, embedded Google Map, contact form.

### Boat Rentals
`templates/page.boat-rentals.json`

Jon boat fleet — 14-15' aluminum jon boats with 15 & 20 hp Yamaha outboards. Available in Litchfield, Pawleys, and DeBordieu creeks. All USCG safety equipment provided.

**Pricing table:**
| Duration | Price | Notes |
|----------|-------|-------|
| 1 Day | $295 | Renter must pickup boat |
| 3 Days | $495 | Delivery available (min 3 day rental) |
| 5 Days | $695 | Delivery available (min 3 day rental) |
| Each additional day | $100 | — |

**Policies:** Completion of contract + refundable deposit + rental payment due at pickup. Reservations recommended. Prices subject to change. Customers welcome to pick up and trailer boats.

**CTA:** Contact to reserve (phone + contact form link).

### Firearms & Ammunition
`templates/page.firearms.json`

**Not a collection — standalone page. No add-to-cart.**

Gallery of in-store inventory images. Clear "Visit Us In Store" messaging throughout.

**Firearm Brands:**
Browning, Smith & Wesson, Stoeger, Winchester, Ruger, Benelli, Glock (Blue Label Program), Franchi

**Ammunition Brands:**
Fiocchi, Hornady, Federal, CCI, Hevi-Shot, Rio

**Hunting Seasons Section:**
Deer, Dove, Duck, Alligator, Turkey — "We offer hunting equipment for every season. Need help finding what you need? Our experts are here to help."

### Local Guides
`templates/page.local-guides.json`

Suggested local fishing/hunting guides and charter services. Not a PI Outdoors service — referral page. Simple layout: guide name, contact, specialty, image.

---

## Collections
Flat parent collections at launch. Sub-collections added later as inventory grows.

### Fishing
`/collections/fishing`

Rods & reels, lures & soft plastics, line, tackle, fishing accessories.

**Rods & Reels Brands:** Daiwa, G. Loomis, Shimano, Crowder Rods, Penn, St. Croix, OLP, Abu Garcia, Lew's, Zebco, Avet, Quantum, Florida Fishing Reels, Accurate, Pflueg, Okuma, Kuunan, Starr, Fenwick, Shakespeare

**Lures & Soft Plastics Brands:** Vudu, D.O.A., Fathom Offshore, Blue Water Candy

### Hunting
`/collections/hunting`

Non-firearm hunting gear — camo, blinds, decoys, calls, game bags, scent control, knives, optics. Seasons: deer, dove, duck, alligator, turkey.

**Note:** Firearms and ammo live on the standalone Firearms page, not here. This collection is for everything else a hunter needs.

### Boating
`/collections/boating`

Boating accessories and supplies — anchors, ropes, dock lines, safety gear, electronics, boat maintenance. Not the rental fleet (that's the Boat Rentals page).

### Clothing
`/collections/clothing`

T-shirts, hats, outerwear, misc apparel. PI Outdoors branded and third-party. New product line.

---

## Utility Pages
Stock Dawn templates — minimal customization.

- **Cart** — `templates/cart.json`
- **404** — `templates/404.json`
- **Search Results** — `templates/search.json`
- **Password** — `templates/password.json` (pre-launch gate)

## Customer Account Pages
Stock Dawn — no customization unless client requests.

---

## Navigation Structure

### Primary Nav (Header)
1. **Fishing** → collection
2. **Hunting** → collection
3. **Boating** → collection
4. **Clothing** → collection
5. **Boat Rentals** → page
6. **Firearms** → page

### Utility Nav (Top bar)
- About Us
- Contact Us

### Footer
- **Column 1 — Shop:** Fishing, Hunting, Boating, Clothing
- **Column 2 — Visit:** About Us, Boat Rentals, Firearms, Local Guides, Contact
- **Column 3 — Newsletter signup + social links**

---

## Brand Assets Needed from Client
- [ ] Jon boat photo(s) for Boat Rentals page
- [ ] Firearms/store interior photos for Firearms page
- [ ] Brand logos from current site (fishing + firearms + ammo)
- [ ] Staff/team photos for About page
- [ ] Lifestyle/hero images
- [ ] PI Outdoors logo files (already have transparent PNG)
- [ ] Any existing apparel product photos
