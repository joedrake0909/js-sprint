const test = require('node:test');
const assert = require('node:assert/strict');
const retry = require('./retry');

test('returns the result when the first attempt succeeds', async () => {
    let calls = 0;

    const fakeFn = async () => {
        calls++;
        return 'Payment successful';
    };
    const result = await retry(fakeFn);
    assert.strictEqual(result, 'Payment successful');
    assert.strictEqual(calls, 1);
});


test('retries twice before succeeding', async () => {
    let calls = 0;

    const fakeFn = async () => {
        calls++;

        if (calls <= 2) {
            throw new Error('Temporary failure');
        }

        return 'Payment successful';
    }

    const result = await retry(fakeFn, { retries: 2, baseMs: 1 });
    assert.strictEqual(result, 'Payment successful');
    assert.strictEqual(calls, 3);

});


test('throws an error after all retries are exhausted', async () => {
    let calls = 0;

    const fakeFn = async () => {
        calls++;
        throw new Error('Service unavailable');
    };

    await assert.rejects(
        retry(fakeFn, { retries: 3, baseMs: 1 }),
        {
            message: 'Service unavailable'
        }
    );

    assert.strictEqual(calls, 4);

});
