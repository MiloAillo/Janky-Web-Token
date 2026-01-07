import { users } from "../database/users";
import jwt from 'jsonwebtoken'

export const login = (req, res) => {
    const { name = null, password = null } = req.body || {}
    console.info(name, password)

    if (!name || !password) return res.status(400).json({ "status": "error", "message": "Please provide the name and password to login" })
    
    // variable property
    let HasBeenFound = false
    users.forEach(user => {
        if (name === user.name && password === user.password) {
            HasBeenFound = true

            const token = jwt.sign({ "id": user.id }, process.env.JWT_SECRET)
            res.status(200).json({
                "status": "success",
                "message": `successfully logged in as ${user.name}${user.name === "admin" ? " 😲" : ""}`,
                "token": token
            })
        }
    });

    if (!HasBeenFound) res.status(401).json({
        "status": "error",
        "message": "name or password is invalid. Please do not spam, thanks!"
    })
}