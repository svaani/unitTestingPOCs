import nock from 'nock';
import { getBooks } from '../getBooks.js';
import assert from 'assert';

describe("tests books url", function() {
    it(' to return array', async function() {
        nock('https://google.com')
            .get('/books')
            .reply(200, ["Shunya","Home Coming"]);
        const allBooks = await getBooks();
        assert.equal(allBooks.data.join('-'), ["Shunya","Home Coming"].join('-'));
        // assert.e
    });
    it(' to return 403', async function() {
        nock('https://google.com')
            .get('/books')
            .reply(403);
        const allBooks = await getBooks().catch(
            (err)=> assert.equal(err.response.status, "403")
        );
       
    });

    it(' to return 500', async function() {
        nock('https://google.com')
            .get('/books')
            .reply(500);
        const allBooks = await getBooks().catch(
            (err)=> assert.equal(err.response.status, "500")
        );
       
    });
});
