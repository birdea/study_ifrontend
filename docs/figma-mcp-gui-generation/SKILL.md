---
name: Figma MCP GUI Generation
description: Optimized development directive for Antigravity (Gemini) agent to write precise GUI layout code using Figma MCP data, managing context limits and extraction accuracy.
---

# Figma MCP GUI Generation Skill

> **⚠️ DOCUMENT LANGUAGE POLICY:** This document MUST strictly be written and maintained in **English only**. Do not use translation or add Korean/other languages.

This skill provides an optimized workflow and directive for the Antigravity agent when tasked with generating highly detailed React/GUI layout code using data provided by the Figma MCP (Model Context Protocol). It synthesizes rules to prevent context window limitations, token pollution, and mistranslation of design data.

When asked to implement code based on Figma MCP data, strictly follow these phases and rules.

## Phase 1: Tool Usage and Progressive Fetching
Do not dump entire Figma documents or large group data into the context window at once. Follow this strict sequence of MCP tool calls:

1. **`get_screenshot` (Visual Grounding)**:
   - Call first to establish the visual target.
   - **Why**: Prevents being misdirected by complex absolute coordinate data. Use it to immediately infer CSS structures (Flexbox, Grid, Alignments).
2. **`get_metadata` (Structure & Complexity)**:
   - Call to understand the DOM hierarchy, layer structure, and split points.
   - Check the total number of nodes to decide on the data splitting strategy (see below).
   - Use `x` and `y` coordinates here to infer row/column flex layouts.
3. **`get_design_context` (Token Extraction)**:
   - Call to extract exact numerical and style metrics (colors, fonts, spacing).
   - Never implement purely based on `get_design_context`.

## Phase 2: Context Optimization & Frame Splitting
Based on the `get_metadata` node count, split implementations to avoid truncated responses.

- **<= 30 nodes**: Fetch context for the entire frame in one pass.
- **31 - 60 nodes**: Split into 2 to 3 top-level child frames.
- **>= 61 nodes**: Splitting by top-level child frame is **mandatory**.

**Splitting Workflow**:
1. Run `get_screenshot` (1x).
2. Run `get_metadata` (1x).
3. Call `get_design_context` for a specific child frame -> Extract -> Implement -> Move to next child. **Do not accumulate all contexts at once.**

> **Integrity Check**: If `get_design_context` (JSX) or `get_metadata` (XML) returns truncated/incomplete data, or an MCP error occurs, **STOP**. Do not proceed with implementation. Immediately ask the user to provide split Node IDs.

## Phase 3: Data Interpretation Priorities
When tool outputs conflict, resolve them using this priority:
**`get_screenshot` > `get_design_context` > `get_metadata`**

- **`get_screenshot`**: Primary truth for overall layout, visual balance, alignments, and section margins.
- **`get_design_context`**: Primary truth for explicit metrics (radius, border, gap, hex codes, exact font sizes).
- **`get_metadata`**: Primary truth for DOM hierarchy, reusability grouping, and layout structuring (e.g., identical `y` values = row, identical `x` = col, equal margins = center alignment).

## Phase 4: Data Refinement & Translation (Zero-Noise)
Analyze the raw design data and extract essentials before and during coding. **To prevent context window limits and data pollution, you must proactively filter the MCP data.**
The goal is to focus purely on visual rendering needs, removing all Figma-dependent structures.

1.  **Data Filtering & Pre-processing (Flatten & Clean)**:
    -   **Remove System IDs & Attributes**: Strip out internal Figma identifier attributes such as `data-node-id` and `data-name`.
    -   **Exclude Editor Info & Hidden Layers**: Ignore Prototyping properties or any layer data marked as hidden.
    -   **Remove Meaningless Wrappers**: Flatten unnecessary layers in the DOM structure, such as empty groups or frames that only wrap a single text element.
    -   **Crucial Directive**: "Only preserve the essential CSS values and DOM tree required for pure visual rendering."
2.  **Translate `get_design_context` safely**:
    -   **Do not copy-paste raw code**: Do not directly copy raw Tailwind classes or JSX code from the MCP response. Extract only the necessary values and rewrite them to fit the target environment (e.g., Vanilla CSS).
    -   **Unregistered Figma Variables**: Token variables that are internal to Figma and not declared in the project (like `var(--surface/...)`) must not appear in the actual code. Apply a **Fallback Value** instead.
3.  **Units and Typography**:
    -   **Unit Conversion**: Convert absolute units like `px` into relative units like `rem` (e.g., 16px = 1rem).
    -   **Font Normalization**: Extract info from the `Font(...)` comments. Normalize `font-weight: normal` to `400` and `bold` to `700` according to standard development practices.
4.  **Asset & Icon Rules**:
    -   **No Local Asset URLs**: Never use temporary Figma local asset URLs like `http://localhost:3845/...`. They will break in the actual service.
    -   **Provide Alternatives**: For standard icons, prioritize using MUI icons. Otherwise, cleanly substitute them with inline SVGs or CSS components.
5.  **Clean Dependencies**:
    -   Verify that the final generated code is entirely free from project-rule-violating Tailwind classes and any traces of Figma-dependent data.

## Phase 5: Task Decomposition
-   **Bottom-Up Construction**: Start by creating small artifacts or components (Buttons, Badges) utilizing the refined values.
-   Compose these smaller pieces into large layout sections (Headers, Lists).

## Verification Checklist
Before completing the task, verify:
- [ ] Visual implementation functionally matches the `get_screenshot` output.
- [ ] No chunk/frame was skipped due to context window limits.
- [ ] Code is free of Figma MCP metadata (`data-node-id`, `data-name`).
- [ ] No broken local asset URLs (`localhost:3845`) remain.
- [ ] No undefined CSS variables remain.
- [ ] Pixel values are successfully converted to `rem` units.
