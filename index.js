const express = require("express");
const app = express();
const fetch = require('node-fetch');
const google = 'https://www.googleapis.com';
const fs = require('fs');
const http = require('http');

require('dotenv').config();

app.use(express.static(`${__dirname}/static`));

app.get('/api/calendar', (request, response) => {
    console.log('GET to /api/calendar');
    getCalendar().then(events => {
        response.send(events);
    }).catch(err => {
        response.send(err);
    });
});

app.get('/api/newsletters', (request, response) => {
    console.log('GET to /api/newsletters');
    getNewsletters().then(letters => {
        response.send(letters);
    }).catch(err => {
        response.send(err);
    });
});

const server = app.listen(80, () => {
    const port = server.address().port;
    console.log("Server stated at http://localhost:%s", port);
});

async function getCalendar() {
    const date = new Date;
    const params = new URLSearchParams;
    params.append('key', process.env.GOOGLE_KEY);
    params.append('timeMin', date.toISOString());
    params.append('singleEvents', true);
    params.append('orderBy', 'startTime');
    params.append('maxResults', 5);
    
    const response = await fetch(`${google}/calendar/v3/calendars/il.chapter.z@gmail.com/events?${params.toString()}`);

    if(response.ok) {
        return await response.json();
    }

    throw new Error('Error fetching calendar');
}

async function getNewsletters() {
    const params = new URLSearchParams;
    params.append('key', process.env.GOOGLE_KEY);
    params.append('orderBy', 'createdTime desc');
    params.append('q', "'1bsjJUNzVpVtM_MACU3Qq_jIxh0_wk8aQ' in parents and mimeType = 'application/pdf'");
    params.append('fields', 'files/name,files/webViewLink')
    params.append('pageSize', 12);
    const response = await fetch(`${google}/drive/v3/files?${params.toString()}`);
    

    if(response.ok) {
        return await response.json();
    }

    throw new Error(await response.text());
}