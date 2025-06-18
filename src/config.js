import { config } from "dotenv";
config();
// Local 
/*export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "6Maestro";
export const DB_DATABASE = process.env.DB_DATABASE || "santander";
export const DB_PORT = process.env.DB_PORT || 3306;
*/


//Prod


export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "yamanote.proxy.rlwy.net";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "woQpftELRhoMfLONdhdwMylmzAlxxSyz";
export const DB_DATABASE = process.env.DB_DATABASE || "railway";
export const DB_PORT = process.env.DB_PORT || 22376;
