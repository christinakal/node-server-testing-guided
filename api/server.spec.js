const server = require('./server');

it('is running with the correct db', () => {
    expect(process.env.DB_ENV).toBe('testing');
})

