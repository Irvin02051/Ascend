# Ascend Fitness

Responsive React login and sign-up screens with an original mountain illustration, a black/dark-purple theme, and frontend validation. This is a UI demo: it does not authenticate users, create accounts, transmit form inputs, store passwords, or include a homepage. Use made-up inputs when testing.

## Run locally

From the `Ascend` project directory (the one containing `package.json`):

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. `/` redirects to `/login`; `/signup` opens the sign-up page. Links switch between the pages without a full browser reload. Browser back/forward also works. Switching pages resets form values, errors, and password visibility.

```sh
npm run lint
npm run build
npm run preview
```

The build is written to `dist/`. Preview serves that production build. When hosting elsewhere, configure the host to serve `index.html` for frontend routes such as `/login` and `/signup` so direct links and refreshes work.

## Test both screens

1. Visit `/`, `/login`, and `/signup`. Verify `/` opens login, both links work, and browser back/forward and refresh work.
2. Submit each empty form: every required field should have an error and the first invalid input should receive focus.
3. Enter an invalid email such as `person@`, then a valid one such as `person@example.com`.
4. Enter a password shorter than eight characters, then `DemoPass123`. Check that the length error clears.
5. On sign-up, enter different passwords. Confirm that the mismatch error clears when they match. A name containing only spaces should be rejected.
6. Toggle each Show/Hide control. Each changes only its own password field and does not submit the form.
7. Submit valid demo inputs. Expect only a frontend-check notice explicitly stating that no login occurred and no account was created.
8. Use Tab, Shift+Tab, and Enter to navigate and submit. Check focus indicators and associated field errors.
9. Check at 320px, 390px, 768px, and desktop widths, and at 200% zoom. The desktop split layout stacks on mobile, with the decorative illustration hidden to keep the form easy to reach.

## How the React code works

- **`App.jsx` — routing:** `BrowserRouter` watches the browser URL. `Routes` selects the matching page. `/login` and `/signup` render the same form component in different modes; the fallback redirects `/` and unknown URLs to login. Separate React keys reset the form when the mode changes.
- **`AuthLayout.jsx` — shared layout:** displays the brand, original SVG mountain artwork, and responsive page structure. `Outlet` is the space where the selected route appears.
- **`AuthPage.jsx` — form and state:** `useState` keeps the current input values, validation errors, submission status, and demo notice in temporary memory. Nothing is stored in local storage or sent to a server. `useEffect` updates the browser title and focuses the heading when the page opens.
- **Event handlers:** `handleChange` copies a typed value into state and rechecks errors after the first submission. `handleSubmit` prevents the browser's normal submission, checks inputs, then focuses the first invalid field or displays the demo notice.
- **`FormField.jsx` — reusable inputs:** one component supplies labels, inputs, hints, and error text. Password fields have their own visibility state. Their buttons use `type="button"` so they never submit the form. Error messages are connected to inputs with accessibility attributes.
- **`validation.js` — rules:** checks required values, email format, the eight-character minimum, and matching sign-up passwords. It returns an object whose keys identify invalid fields and whose values are readable messages. `noValidate` lets these consistent messages replace browser-specific validation bubbles. Frontend checks are only UI checks; real authentication would also require a secure backend.
- **Styles:** `index.css` defines the global defaults; `App.css` styles the layout, form controls, focus/error states, and mobile breakpoint. No external artwork or font requests are used.
