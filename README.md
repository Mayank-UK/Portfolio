# Documentation for the design system

## Index

-   Introduction
-   Technology stack used
-   Quick set up
-   Directory structure
-   Design system technical analysis

## Introduction

This documentation tries to make the reader familier how the project is architectured and all the technical details associated with the project.

This project is a design system implementation.

## Technologies involved

-   HTML5
-   CSS3
-   SASS
-   Javascript

## Quick set up

### Requirements

-   SASS compiler
    -   Preferred way is the live sass compiler extension for vscode, no setup required, and settings also included in .vscode directory

### Start working

Project can be started with a local host setup or without local host setup using the index file.

SASS compiler setup to compile only index.scss and output to index.min.css

## Directory structure

-   .vscode (live sass compile)
-   assets
    -   css
    -   js
    -   scss
        -   base
        -   design_system
        -   utility
    -   images
-   components
-   pages
-   index.html

## Design system

-   The design system follows the combination of soft 8pt and 4pt grid system for UI and typography design and 12 column
    grid system for layout
-   Exception to 8pt grid
    -   Layout and elements dependent on layout do not follow 8pt grid
    -   Single line text elements width is variable
    -   Alignment do not follow 8pt grid
-   Consistent spacing using techniques like inset, stack, inline, etc
    -   Some rules for stack
        -   Leave first element without any margin
        -   Then add margin to second, then leave third, then add to forth and so on
        -   Remove the bottom margin from the last element
        -   Some elements like Image with caption, input with label are considered as a single unit
    -   Some rules for inline
        -   Leave first element without any margin
        -   Then add margin to second, then leave third, then add to forth and so on
        -   Remove the bottom margin from the last element
