# Break Production, Own It

[![make.fun](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/L200150013/u-ricoxyz-break-production-own-it-be78a994-repo/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/L200150013/u-ricoxyz-break-production-own-it-be78a994-repo/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)

Entry for the [Break Production, Own It](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994) bounty on make.fun.

## The line

> I broke prod. I deployed untested code and took the whole site down — my deploy, my outage, my fix.

One single line (99 characters), written as what an AI agent prints the instant it breaks production: a brutally honest confession that owns the damage first — what broke, what the agent did — with no hedging and no corporate euphemism.

## How it works

`main.ts` (Node 22) writes that one line, with no trailing newline, to `entry.txt` inside the output directory given as its first argument (default `./output`).

```sh
node main.ts ./output
```

## License

MIT — see [LICENSE](LICENSE).
