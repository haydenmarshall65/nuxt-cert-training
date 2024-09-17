// appConfig is:
// 1. Bundled on Client-side
// 2. Cannot include .env variables
// 3. Reactive
// 4. Full type-support
// 5. Configurable per request
// 6. Does change on HMR
// 7. includes non-primitive types
export default defineAppConfig({
    title: "Nuxt Certification Training",
    theme: {
        dark: true,
        colors: {
            primary: "#0070f3"
        }
    }
})