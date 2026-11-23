async function retry(fn, { retries = 3, baseMs = 200 } = {}) {
    async function attempt(remainingRetries, retryIndex) {
        try {
            const result = await fn();
            return result;
        } catch (error) {
            if (remainingRetries <= 0) {
                throw error;
            }

            const delay = baseMs * (2 ** retryIndex);

            // Add random jitter to prevent multiple clients from retrying simultaneously
            const jitter = Math.random() * 100;
            const totalDelay = delay + jitter;

            await new Promise((resolve) => setTimeout(resolve, totalDelay));

            return attempt(remainingRetries - 1, retryIndex + 1);


        }
    }
    return attempt(retries, 0);
}

module.exports = retry;