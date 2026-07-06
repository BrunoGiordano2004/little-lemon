# AGENTS.md

**Tradeoff:** These guidelines bias toward caution over speed. For trivial
tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.
- Do not add comments. Do not remove comments.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.
- If you write 20 lines and it could be 5, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes,
simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- No fluff, no unnecessary complexity, no drive-by refactors.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Make sure architecture is applied."
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it
work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer
rewrites due to overcomplication, and clarifying questions come before
implementation rather than after mistakes.

## 5. Project Context

Little lemon — Expo (~57.0.1) React Native (0.86.0) mobile app (React 19, New Architecture enabled). Package manager: **yarn**. Node >= 22.11.0.

## Source Code Structure

- **Active code**: `src_v2/` — all new development happens here
- **Legacy code**: `src/` — deprecated v1, `App.js` is entirely commented out; do not modify
- **Entry point**: `index.js` → `src_v2/EntryPoint.tsx` → `src_v2/App.tsx`

## Commands

```bash
yarn lint          # eslint ./src_v2 (lints ONLY src_v2, not src/)
yarn format        # prettier --write (both src/ and src_v2/)
yarn typecheck     # tsc --noEmit
```

Typical verification order: `yarn format` → `yarn lint` → `yarn typecheck`

## Path Aliases

Configured in both `babel.config.js` and `tsconfig.json` — must stay in sync:

| Alias                  | Target                   |
| ---------------------- | ------------------------ |
| `@app/*`               | `src_v2/*`               |
| `@auth/*`              | `src_v2/auth/*`          |
| `@hooks/*`             | `src_v2/hooks/*`         |
| `@models/*`            | `src_v2/models/*`        |
| `@utils/*`             | `src_v2/utils/*`         |
| `@network/*`           | `src_v2/network/*`       |
| `@storage/*`           | `src_v2/storage/*`       |
| `@app/components/*`    | `src_v2/components/*`    |
| `@app/redux/*`         | `src_v2/redux/*`         |
| `@app-screens/*`       | `src_v2/screens/*`       |
| `@app-navigation/*`    | `src_v2/navigation/*`    |
| `@app-constants/*`     | `src_v2/constants/*`     |
| `@app-analytics/*`     | `src_v2/analytics/*`     |
| `@app-assets/*`        | `src_v2/assets/*`        |
| `@app-pt/*`            | `src_v2/product-tour/*`  |
| `@app-dynamic-links/*` | `src_v2/dynamic-links/*` |
| `@notifications/*`     | `src_v2/notifications/*` |

## Environments & Build Flavors

Four environments with corresponding `.env.*` files and Android product flavors:

| Environment | `.env` file    | Android flavor  | iOS scheme   | Keys file              |
| ----------- | -------------- | --------------- | ------------ | ---------------------- |
| Test/SIT    | `.env.test`    | `newintegra`    | `Sit`        | `keys.stage.json`      |
| Preprod     | `.env.preprod` | `preproduction` | `Preprod`    | `keys.preprod.json`    |
| Production  | `.env.prod`    | `production`    | `Production` | `keys.production.json` |

Run on device/simulator examples:

- `yarn ios-dev` / `yarn ios-prod` / `yarn ios-stage`
- `yarn android-stage` / `yarn android-preprod` / `yarn android-prod`

## Key Architecture Notes

- **State**: Redux Toolkit (`src_v2/redux/`) with slices, thunks, and middlewares
- **Navigation**: React Navigation v6 — see `src_v2/navigation/`
- **Networking**: Axios (`src_v2/network/`)
- **React Compiler** beta is enabled in `babel.config.js`
- **JS obfuscation** via `obfuscator-io-metro-plugin` — auto-disabled in debug builds when `OBFUSCATION_IGNORE=true` (set by most `yarn android-*` scripts)
- **Reactotron** loads in non-production environments only

## Redux Architecture

Active Redux code lives in `src_v2/redux/` (Redux Toolkit). Key subdirectories:

- **`slices/`** — `createSlice` reducers (~45 slices). Each slice is a separate file, typically named after the domain (e.g. `auth.ts`, `bill.ts`, `supply.ts`).
- **`thunks/`** — `createAsyncThunk` async actions (~40 thunks). Named to match their corresponding slice.
- **`middlewares/`** — custom middleware: `authMiddleware`, `snackbarMiddleware`, `logoutMiddleware`, `geniusApiLoggerMiddleware`.
- **`store.ts`** — combines all v2 slices **plus** legacy `oldReducers` from `src/reducers/` via spread (`...oldReducers`). This means legacy reducers are still live in the store.
- **`index.ts`** — re-exports commonly used slices, selectors, and actions. Import from `@app/redux` (alias `src_v2/redux`) rather than deep paths when possible.
- **`types.ts`** — exports `RootState` and `AppDispatch` (derived from `store`).
- **`actions.ts`** — shared cross-slice actions (e.g. `logoutAction` uses the legacy `LOGOUT` type from `src/actions/types`).

### Legacy Redux (still in store)

`src/reducers/slices/` is **not** dead code — it is imported into the v2 store:

- `src/reducers/slices/common/` — UI and API slices (e.g. `featureFlagSlice`)
- `src/reducers/slices/PPA/` — PPA API slice (`ppaApis` middleware is added to the store)
- `src/reducers/index.js` — exported as `oldReducers`, spread into `rootReducer` in `store.ts`

When modifying the store, be aware of this v1/v2 split. New slices should go in `src_v2/redux/slices/` and be registered in `store.ts`.

### Conventions

- Thunks use typed generics: `createAsyncThunk<ReturnType, ArgType, {state: RootState; dispatch: AppDispatch}>`
- `immer` `enableMapSet()` is called in `store.ts` (allows `Map`/`Set` in state)
- Serializability and immutability checks are **disabled** in store config
- Selectors are co-located in slice files using `createSelector` from RTK

## Patches

`patch-package` runs on `postinstall`. Many native deps have patches in `patches/`. Some are `.off` (disabled). Do not remove patches without understanding their purpose.

## SVGs

SVG icons processed via `@svgr/cli` with custom config in `.svgrrc.js` (generates React Native TypeScript components with `current{Color,Width,Height}` prop substitution). Source SVGs live in `svgs/`.

## iOS Setup

- New Architecture enabled: `RCT_NEW_ARCH_ENABLED=1` in pod install
- `bundle install` then `cd ios && bundle exec pod install`
- Clean rebuild: `yarn clean-ios` or `yarn clean-ios-full`

## Android Setup

- Clean: `yarn clean-android` or `yarn clean-android-full`
- Release builds: `yarn build-android-prod`, `yarn build-android-stage`, etc.
- AAB bundle: `yarn bundle-android-production`
