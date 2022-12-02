const db = require('../db')

class FurnitureController {
    async createFurniture(req, res){
        const {name, price, manufdate} = req.body
        const newFurniture = await db.query(`INSERT INTO furniture (name, price, manufdate) VALUES ($1, $2, $3) RETURNING *`, [name, price, manufdate])
        res.json(newFurniture.rows[0])

    }

    async getFurniture(req, res){
        const furniture = await db.query(`SELECT * FROM furniture`)
        res.json(furniture.rows)

    }

    async getOneFurniture(req, res){
        const id = req.params.id
        const furniture = await db.query(`SELECT * FROM furniture WHERE id=$1`, [id])
        res.json(furniture.rows[0])

    }

    async updateFurniture(req, res){
        const {id, name, price, manufdate} = req.body
        const furniture = await db.query(`UPDATE person SET name= $1, price=$2, manufdate=$3 WHERE id = $4 RETURNING *`, [name, price, manufdate, id])
        res.json(furniture.rows[0])

    }

    async deleteFurniture(req, res){
        const id = req.params.id
        const furniture = await db.query(`DELETE FROM furniture WHERE id=$1`, [id])
        res.json(furniture.rows[0])
    }
}

module.exports = new FurnitureController()

