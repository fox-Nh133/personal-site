---
# the default layout is ‚post‘
title: iCal & FullCalendar 🗓
date: 2024-05-16
---

In order to render calendar using javascript on website, FullCalendar is one of the most popular library.
FullCalendar has plugins to retrieve events from other calendar, like Google Calendar and iCalnendar feed. However, these plugins have restricted usage. In this post, I will share how I used GitHub actions to manage events from iCal feed on FullCalendar more flexbly.

# What is iCal?
iCal (as known as iCalendar) is a widely used format for calendar and scheduling programs. It is standarlized as [RFC 5545](https://www.rfc-editor.org/rfc/rfc5455.html) by IETF. 
iCal file is a text file with `.ics` extension.

**ics file example**
```ics
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//hacksw/handcal//NONSGML v1.0//EN
BEGIN:VEVENT
UID:uid1@example.com
DTSTAMP:20240601T090000Z
DTSTART:20240601T100000Z
DTEND:20240601T110000Z
SUMMARY:Sample Event
DESCRIPTION:This is a sample event.
LOCATION:123 Main Street, City, Country
END:VEVENT
END:VCALENDAR
```
