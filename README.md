# Ascend Fitness

Responsive React login and sign-up screens with an original mountain illustration, a black/dark-purple theme, and frontend validation. This is a UI demo: it does not authenticate users, create accounts, transmit form inputs, store passwords, or perform real authentication. The dashboard uses temporary sample data. Use made-up inputs when testing.

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
7. Submit valid demo inputs. Login navigates to `/home` as a frontend demo; sign-up displays a frontend-check notice without creating an account.
8. Use Tab, Shift+Tab, and Enter to navigate and submit. Check focus indicators and associated field errors.
9. Check at 320px, 390px, 768px, and desktop widths, and at 200% zoom. The desktop split layout stacks on mobile, with the decorative illustration hidden to keep the form easy to reach.

## How the React code works

- **`App.jsx` — routing:** `BrowserRouter` watches the browser URL. `Routes` selects the matching page. `/login` and `/signup` render the same form component in different modes; the fallback redirects `/` and unknown URLs to login. Separate React keys reset the form when the mode changes.
- **`AuthLayout.jsx` — shared layout:** displays the brand, original SVG mountain artwork, and responsive page structure. `Outlet` is the space where the selected route appears.
- **`AuthPage.jsx` — form and state:** `useState` keeps the current input values, validation errors, submission status, and demo notice in temporary memory. Nothing is stored in local storage or sent to a server. `useEffect` updates the browser title and focuses the heading when the page opens.
- **Event handlers:** `handleChange` copies a typed value into state and rechecks errors after the first submission. `handleSubmit` prevents the browser's normal submission, checks inputs, then focuses the first invalid field, navigates a valid login to `/home`, or displays the sign-up demo notice.
- **`FormField.jsx` — reusable inputs:** one component supplies labels, inputs, hints, and error text. Password fields have their own visibility state. Their buttons use `type="button"` so they never submit the form. Error messages are connected to inputs with accessibility attributes.
- **`validation.js` — rules:** checks required values, email format, the eight-character minimum, and matching sign-up passwords. It returns an object whose keys identify invalid fields and whose values are readable messages. `noValidate` lets these consistent messages replace browser-specific validation bubbles. Frontend checks are only UI checks; real authentication would also require a secure backend.
- **Styles:** `index.css` defines the global defaults; `App.css` styles the layout, form controls, focus/error states, and mobile breakpoint. No external artwork or font requests are used.


## Dashboard demo

Visit `/home` directly or submit valid-format login inputs (any sample email and password of at least eight characters). There is no authentication check, protected route, or session. Sign Out simply returns to `/login`; browser Back can revisit the dashboard.

The dashboard matches the existing purple/black theme. All values are fixtures, not live health data. It includes today's workout, steps and sleep goals, a recommended workout, six category levels, overall EXP, rank progression, weekly consistency, an achievement, and a sample profile. No extra dependencies were installed.

### Dashboard checks

- Submit invalid login inputs and confirm you remain on `/login` with errors. Correct them and submit to reach `/home`.
- Check direct navigation and refresh at `/home`. `/` should still redirect to `/login`. Sign-up behavior and both auth page designs should remain unchanged.
- Use Home, Workouts, Progress, Achievements, and Profile to jump to their dashboard sections. At narrow widths, open Menu and choose a link; the menu closes after selection. Use Tab and Enter to check the same controls, including the skip link.
- Select Start Workout to expand the exercise preview, then close it. This does not run a timer, record completion, or award EXP.
- Confirm the rank challenge is visibly locked and its disabled button does nothing.
- Check 320px, 390px, 768px, and desktop widths, plus 200% browser zoom. Cards should stack on smaller screens without horizontal overflow.
- Confirm 35/100 overall EXP (35%), 65 EXP remaining, workout 0/1 (0%), steps 2,300/5,000 (46%), sleep 7/8 (88% rounded), rank unlock progress 3/5 (60%), and three completed workouts this sample week.
- Run `npm run lint` and `npm run build`. Use `npm run preview` to inspect the production output.

### Components, props, and calculations

`HomePage` assembles the dashboard. Small section components such as `TodayPlan`, `RecommendedWorkout`, `Categories`, `RankChallenge`, and `WeeklyConsistency` each render one part. `DashboardNav` owns the mobile menu's open/closed state. `RecommendedWorkout` owns whether the exercise preview is visible. These states are temporary and reset when the component is removed.

Props are values passed from a parent to a child, like `tasks={plan}`. Here, the parent imports fixtures from `src/data/dashboard.js` and passes the relevant objects to each section. Later, database or API results could replace those fixtures without rewriting the card layouts. Category EXP is a separate sample progression per training focus, not a breakdown that sums to overall EXP.

`DashboardCard` provides a consistent section heading and container. `Icon` draws simple original SVG symbols. `ProgressBar` provides a reusable accessible bar: its width is `value / max * 100`, clamped between 0% and 100%. Its ARIA label, current value, minimum, and maximum make the same progress available to assistive technology. Goals also display readable numerical text. Remaining level EXP is `nextLevelExp - exp`, with a minimum of zero. Today's completed-goal count checks how many values have reached their target. The weekly total adds the workout counts across the seven days.

Levels and ranks are separate: routine activities would earn EXP toward levels; a special challenge would advance a rank. The sample has three of five qualifying workouts toward unlocking the Rank D challenge. Neither filling that requirement nor gaining a level automatically grants Rank D. The seven-day streak spans the preceding week and Monday–Wednesday of the sample week; it is not calculated from the real date. The achievement's `unlocked` boolean controls its status.

Routing lives in `App.jsx`. `/home` sits outside `AuthLayout` so it has its own navigation and layout. Login uses React Router's `useNavigate` after validation; Sign Out uses a router link. Dashboard navigation uses section anchors because separate Workouts, Progress, Achievements, and Profile pages are not built yet.

### Current limitations

All names, ranks, levels, EXP, goals, streaks, workouts, category progress, challenge rules, and achievements are sample data. No progress is saved or updated, no health devices are connected, and the workout button only opens a preview. The profile is read-only. No real sign-in, sign-out, accounts, backend, database, or reward system exists. Browser visual and keyboard checks must still be performed manually when browser automation is unavailable.
