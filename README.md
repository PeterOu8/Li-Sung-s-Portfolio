# Li-Sung-s-Portfolio

Personal portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS and shadcn/ui primitives.

Use Node.js 24. The framework and lint toolchain are pinned to Next.js 16.4.5, React 19.3.1 and ESLint 10.14.0.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

## Contact form

The `/contact` route uses `src/app/contact/actions.ts` for its Server Action. Its form, field definitions, schema and in-memory rate limiter live in `src/features/contact`. Shared UI controls remain in `src/components/ui`.

Set `RESEND_API_KEY` in `.env.local` for local delivery and in the hosting environment for production. The existing verified sender and recipient are retained. The form displays an inline failure and keeps the entered details when delivery or configuration fails. It also provides the public email address from `src/data/socials.json` as a fallback.

Protection includes server validation, a hidden bot-trap field, a 32 KB Server Action body limit, a ten-second email request timeout and Resend idempotency keys. Identical normalised email payloads share a key, so retries do not send another message within Resend's 24-hour idempotency window.

The in-memory limiter permits three attempts per sender, five per trusted Vercel client address and twenty total per fifteen-minute window in each running instance. It clears expired entries on subsequent submissions. Limits reset when an instance restarts and are independent across instances. Other hosts still apply sender and total limits; arbitrary forwarded IP headers are not trusted. This uses no external rate-limit service or connection configuration.

`npm test` checks validation, sender/client/total limits and recovery after expiry using Node's built-in test runner. Email delivery should be checked separately against an explicitly selected test inbox before release.

## Deployment baseline checked on 5 November 2026

GitHub records `3223d9f1d742a8012afbab69c9fe4493ed39039e` as the latest successful Production deployment, created on 26 September 2026 in Sydney time. The later attempt for `9b4529de1da5495d44d3e6b9a3b6b1611ecc0306` failed on 5 November 2026. The public site showed the sales-focused copy present in the successful revision. Its immutable deployment URL requires Vercel sign-in, so the custom-domain alias could not be independently confirmed through that URL.

The checkout contains later engineering-focused copy. Review that difference before promoting this checkout. Configure Node 24 in the Vercel project and run lint, types, tests and the production build independently, as Next.js 16 no longer runs ESLint during a build.

The checked dependency tree reports no production audit findings. Some development dependencies still report moderate findings in the Tailwind and lint tooling. Next's bundled ESLint plugins also retain older peer ranges and emit installation warnings for ESLint 10; the configured lint command is verified separately.

[GitHub deployment records](https://api.github.com/repos/PeterOu8/Li-Sung-s-Portfolio/deployments) · [Successful deployment status](https://api.github.com/repos/PeterOu8/Li-Sung-s-Portfolio/deployments/6666483753/statuses) · [Failed deployment status](https://api.github.com/repos/PeterOu8/Li-Sung-s-Portfolio/deployments/7564919325/statuses)
