import jwt from 'jsonwebtoken'
import { users } from '../database/users'

export const validate = (req, res) => {
    const token = req.headers.authorization || null
    console.info(token)

    const prefix = token.split(" ")[0]
    const jwtToken = token.split(" ")[1]

    if (prefix !== "Bearer") return res.status(401).json({ "status": "error", "message": "Invalid Prefix, make sure 'Bearer' prefix present!" })
    if (!jwtToken) return res.status(401).json({ "status": "error", "message": "token doesn't seem to be present. Please login first to get the token!" })

    try {
        // verify
        const payload = jwt.verify(jwtToken, process.env.JWT_SECRET)

        // look for match
        let name = null
        let userData = {}
        let userNotes = {}
        let userFriends = []
        users.forEach(user => {
            if (payload.id == user.id) {
                name = user.name
                userData = { "name": user.name, "id": user.id }
                userNotes = user.notes
                userFriends = user.friends
            }
        })

        // exception
        if (!name) res.status(400).json({ "status": "error", "message": "user can't be found. Suspicious activity detected, token is verified but contain invalid payload! If this is real app, they would be on high alert and do something!" })

        
        return res.status(200).json({ 
            "status": "success", 
            "message": "Authenticated",
            "data": {
                "user": userData,
                "notes": userNotes,
                "friends": userFriends
            }
        })
    } catch (err) {
        // console.log(err)
        return res.status(401).json({ "status": "error", "message": "Token is invalid. Please re-login to get the newest token! or.. are you trying to break in? Please don't 🤔" })
    }

}