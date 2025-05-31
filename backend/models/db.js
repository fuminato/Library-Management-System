// This file manages PostgreSQL connections for the Library Management System.
require('dotenv').config();
const mongoose = require('mongoose');
const { Pool } = require('pg');

// --- MongoDB ---
const connectMongo = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://ducnguyen0022521670:242huuduc@cluster0.eko79lu.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0\n" +
            "PORT=4000", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('✅ MongoDB connected');
    } catch (err) {
        console.error('❌ MongoDB connection error:', err.message);
        process.exit(1);
    }
};

// --- PostgreSQL Pool ---
const pgPool = new Pool({
    connectionString: "postgresql://postgres:acTIpcaQkmsNRtUsdbGMBgCobwtrOGSu@interchange.proxy.rlwy.net:22115/railway",
});

const connectPostgres = async () => {
    try {
        const client = await pgPool.connect();
        await client.query('SELECT NOW()'); // test query
        client.release();
        console.log('✅ PostgreSQL connected via Pool');
    } catch (err) {
        console.error('❌ PostgreSQL connection error:', err.message);
        process.exit(1);
    }
};

connectPostgres();
connectMongo();
module.exports = {
    connectMongo,
    connectPostgres,
    pgPool
};