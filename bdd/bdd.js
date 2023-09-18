import mysqlPromise from "mysql2/promise.js";
import { totalsupplies } from "./extensions/bdd.totalsupplies.js"
import { mylog } from "../utils/mylog.js";

export const bdd = {
    totalsupplies: totalsupplies
}


export const myquery = async (sql) => {

    const config = {
        host: process.env.DB_HOSTNAME,
        database: process.env.DB_BDDNAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        timezone: 'Z'
    };

    try {
        const connection = await mysqlPromise.createConnection(config);
        const [result, fields] = await connection.query(sql);
        return result;
    }
    catch (err) {
        if(err.message) {
            mylog('[BDD ERROR]', err.message);
            return { erreur : err.message };
        } else {
            mylog('[BDD ERROR]', err)
            return { erreur : err };
        }
    }
};