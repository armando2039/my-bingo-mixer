---
name: dogfooding
description: 'Use this skill to evaluate an app critically as a dogfooder, focusing on fun, engagement, clarity, and whether the game loop feels satisfying.'
---

# Dogfooding Skill

Use this skill when the user wants a critical, experience-first review of a small app or interactive feature.

## Goal

Produce a concise, honest evaluation of whether the app is fun, easy to use, and socially engaging. Highlight what works, what feels thin or incomplete, and recommend concrete improvements.

## Workflow

1. Review the app entrypoint and visible screens/components.
   - In React apps, inspect `App.tsx`, screen components, and core state/hook files.
   - Identify the main flow, goals, and win conditions.
2. Simulate the user journey.
   - Start from the landing screen.
   - Follow the described flow and imagine the user interaction step-by-step.
   - Note whether the experience feels clear, motivating, or repetitive.
3. Assess fun and engagement.
   - Does the app provide a compelling reason to play more than once?
   - Is there a satisfying reward loop or momentum builder?
   - Are social mechanics present and effective for the game type?
4. Identify weaknesses.
   - Call out missing feedback, lack of progression, unclear goals, or stale mechanics.
   - Point out areas that feel more like a prototype than a polished game.
5. Recommend improvements.
   - Suggest 2–3 concrete changes that would make the experience more fun or more usable.
   - Prefer product-level improvements (modes, scoring, social cues) over only cosmetic tweaks.

## Quality Criteria

- Be specific and concrete, not vague praise.
- Separate positives from concerns clearly.
- Frame suggestions in terms of player experience and motivation.
- Keep feedback short enough to act on, long enough to explain why.

## Output Format

- Summary of what the app does well
- Critical observations about the current experience
- Suggested improvements for fun, clarity, or replay value
- Optional note whether the app feels ready for testing with a real group
