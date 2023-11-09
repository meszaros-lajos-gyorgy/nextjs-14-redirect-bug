# nextjs-14-redirect-bug

A minimal demonstration of redirect() inside a server action can't switch between root layouts in next.js 14

## Scenario 1

1. start the development server with `npm run dev`
2. Open http://localhost:3000/en in your browser
3. Click on the "search" submit button on top of the page next to the text input
   (it doesn't matter what you enter into the textfield, it always redirects to the same route)

### Expected result:

You should land on `/en/search/hello` as that is the hardcoded redirection inside the server action in `services/SiteSearch.service.ts`.
This was the behavior in Next.js `13.4.12`, but it also threw an error (see https://github.com/vercel/next.js/issues/53392)

### Actual result:

The server action sends back a redirect instruction among the response headers:

`X-Action-Redirect: /en/search/hello`

but the page does not go to that path

## Scenario 2:

1. start the development server with `npm run dev`
2. Open http://localhost:3000/en/search/world in your browser
3. Click on the submit button as in the previous scenario

### Expected result:

The page should get redirected to `/en/search/hello`

### Actual result:

The page does get redirected to `/en/search/hello`
