'use strict';

exports.index = (req, res) => {
    const Airtable = require('airtable');
    const base = new Airtable({ apiKey: 'keyt0M8PAWLcKo6Na' }).base('appTnGaS4E7eUdU5C');

    const recordsId = ["banana", "apple", "orange"];

    base('Design projects').select({
        // Selecting the first 3 records in All projects:
        view: "All projects"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (page) will get called for each page of records.

        records.forEach(function(record) {
            console.log('Retrieved', record.id);

        });

        // To fetch the next page of records, call fetchNextPage.
        // If there are more records, page will get called again.
        // If there are no more records, done will get called.
        fetchNextPage();

    }, function done(err) {
        if (err) { console.error(err); return; }
    });

    res.sendfile('public/home.html');
};