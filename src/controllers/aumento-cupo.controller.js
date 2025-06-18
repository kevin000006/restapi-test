import {pool} from '../db.js';

export const getFlujoPaso = async(cod)=>{

    const [rows] = await pool.query('select * from flujo where proyecto = "ACTC" && codflujo=?',cod);
    return rows;

}