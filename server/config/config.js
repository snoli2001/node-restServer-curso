



// ==========================
//          Puerto
// ==========================
process.env.PORT = process.env.PORT || 3000;

// ==========================
//          Entorno
// ==========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ==========================
//          Base de datos
// ==========================

let urlDB;

if( process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://snoli2001:s-noli457@cluster0.7idal.mongodb.net/cafe?authSource=admin&replicaSet=atlas-ulpcn2-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
}

process.env.URLDB = urlDB;
