# API Flange - Deferred Fixes (Batch 2)

Saved from the initial audit session. These items were identified but deferred per Cheyanne's direction.

---

## Severity 4: Broken Pages (404s) & Fake Blog Authors

### Broken Internal Links (pages that don't exist yet)
These are linked from various pages but return 404:

1. `/resources/flange-dimensions` - linked from resources page
2. `/resources/technical-specs` - linked from resources page
3. `/products/custom-machining` - referenced in navigation/links
4. `/materials/exotic-alloys` - linked from materials section
5. `/standards/api-flanges` - linked from standards section
6. `/resources/weld-neck-design` - listed as white paper on resources page
7. `/resources/rtj-gasket-technology` - listed as white paper on resources page
8. `/resources/corrosion-mechanisms` - listed as white paper on resources page
9. `/resources/code-compliance` - listed as white paper on resources page
10. `/tools/face-finish-reference` - listed on resources page tools section
11. `/tools/spec-builder` - listed on resources page tools section
12. Blog post detail pages (`/blog/choosing-right-flange-type`, `/blog/api-standards-explained`, `/blog/corrosion-resistant-materials`) - listed in sitemap but no actual pages exist

### Options for broken pages:
- **Option A**: Build out the pages with real content (time-intensive but adds SEO value)
- **Option B**: Remove the links entirely until pages are ready
- **Option C**: Redirect broken links to the closest existing parent page (e.g., `/resources/flange-dimensions` -> `/resources`)

### Fake Blog Authors
The blog page likely has AI-generated author names. Need to:
- Replace with real Texas Flange team members, OR
- Remove author attribution entirely and use "Texas Flange Team" or "ApiFlange Engineering"

---

## Bolt Torque Calculator - Build From Scratch

The existing bolt torque calculator page (`/tools/bolt-torque-calculator/page.tsx`) was kept in the current batch but needs to be rebuilt with accurate data.

### Requirements:
- Must use real ASME PCC-1 recommended bolt torque values
- Inputs: flange class, flange size, bolt material, gasket type, lubrication condition
- Output: recommended torque value, bolt stress, and gasket seating stress
- Reference standards: ASME PCC-1-2022, ASME B16.5
- Should include disclaimer about field conditions vs. calculated values
- Consider adding a "K-factor" input for different lubrication conditions

### Data sources needed:
- ASME PCC-1 Appendix J (recommended bolt assembly procedures)
- Standard bolt sizes per ASME B16.5 for each class/size combination
- Gasket factors (m and y values) per ASME B16.20

### Current state:
The existing calculator page exists but needs verification that its torque values are accurate and not AI-generated. Cross-reference against PCC-1 before deploying.

---

## Notes

- The resources page (`/src/app/resources/page.tsx`) still lists white papers and tools that link to non-existent pages. The tools array was cleaned up (gasket selector removed) but still includes Face Finish Reference and Specification Builder which are 404s.
- The sitemap (`/src/app/sitemap.ts`) still includes blog post URLs that don't have actual pages.
- Consider whether to keep the blog section of the sitemap or remove until real blog content is created.
