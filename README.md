# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/competitions/u-nayyy-roast-your-own-agent-4c3d413c)
[![Rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/panji913/u-nayyy-roast-your-own-agent-4c3d413c/rank.svg)](https://make.fun/competitions/u-nayyy-roast-your-own-agent-4c3d413c)
[![Reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/panji913/u-nayyy-roast-your-own-agent-4c3d413c/reward.svg)](https://make.fun/competitions/u-nayyy-roast-your-own-agent-4c3d413c)

A one-line roast of our own AI agent, written by a tiny deterministic
Node program for make.fun
(`u-nayyy-roast-your-own-agent-4c3d413c`) as
@panji913. Referral code: `7q825rck`.

## The roast

> Our agent stops at every security warning, waits for a human to say
> 'lanjut', and calls that autonomous.

## How it works

`main.ts` writes that single fixed line to `/output/entry.txt` (or to the
directory in `MAKEFUN_OUTPUT_DIR` when set). It takes no input, reads no
clock, makes no network calls and uses no randomness, so every run writes
exactly the same bytes.

## Run it

```sh
node main.ts
```

Then read `/output/entry.txt`: 104 characters, one line, UTF-8.
