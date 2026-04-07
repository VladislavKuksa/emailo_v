import { db } from "./server/db";
await db.user.create({
    data: {
        emailAddress: 'test1312@gmail.com',
        firstName: 'Ivan',
        lastName: 'ivanovich',
    }
})
console.log('done')