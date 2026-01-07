export const users = [
    {
        id: "8db60a8f-5747-4f62-9388-cc5a20df3237", 
        name: "user", 
        password: "1234", 
        notes: [
            {
                "tittle": "note feature test V.0.0.2 Alpha",
                "content": "A test to show that this note can output 😲😊💕😘 emojis !!"
            },
            {
                "tittle": "note feature test V.0.0.1 Alpha",
                "content": "Saturday test, this note should have this content"
            }
        ],
        friends: [
            {
                id: "dd4b7f34-487e-4285-a1a6-8a66f4997cf4", 
                name: "admin"
            }
        ]
    },
    {
        id: "dd4b7f34-487e-4285-a1a6-8a66f4997cf4", 
        name: "admin", 
        password: "how the fuck do you get the password, you are not suppose to go this far! @#$%^&*(+}",
        notes: [
            {
                "tittle": "Flag",
                "content": "SnapanCTF{E4SY_R1GHT??}"
            },
            {
                "tittle": "Lesson",
                "content": "JWT key while it secure, it can still be hacked when the key are exposed. Stay safe!"
            },
            {
                "tittle": "test",
                "content": "database test"
            }
        ],
        friends: [
            {
                id: "8db60a8f-5747-4f62-9388-cc5a20df3237", 
                name: "user", 
            }
        ]
    }
]