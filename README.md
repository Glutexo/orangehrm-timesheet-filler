# OrangeHRM timesheet filler #

## About ##

This Safari extension automatically fills in timesheets in the OrangeHRM app. All regular working days that were not manually touched are pre-filled on page load. Saves tedious filling the same times for each day of the month.

## Current state ##

The extension is not very polished. Most of the metadata is missing, it is not signed and it does not offer any settings of controls. It won’t be signed until I decide to buy an Apple Developer subscriptions, which is not going to happen anytime soon. Sorry. 🙁

But it works: it fills out the timesheet on page load. Each regular working day (not a holiday, not a leave, not a weekend…) is automatically filled with 08:00 – 16:30 with 00:30 lunch break. Rows that already have some data in them are not filled.

## Plans ##

* Refactor the code a bit: use [Underscore] instead of rather cryptic array comparison.
* Present a button to fill the timesheet instead of doing this automatically.
* Offer some settings that would allow to customize what is filled in.
* Bundle the extension filling all the necessary metadata and sign it with an Apple issued web developer certificate.
* Provide Firefox/Chrome extension of the same functionality.
* Warn user if he is submitting his timesheet to early, which might signalize wrong month selection.


[Underscore]: https://www.underscorejs.org/
