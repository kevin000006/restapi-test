import {pool} from '../db.js';

export const getFlujoPaso = async(idFlujo)=>{

    const [rows] = await pool.query('select * from flujo where proyecto = "MD" && codflujo=?',idFlujo);
    return rows;

};




