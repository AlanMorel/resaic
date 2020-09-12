export default {
    port: process.env.PORT || 8000,
    env: process.env.NODE_ENV || 'development',
    sessionSecret: process.env.SESSION_SECRET || 'secret'
};
