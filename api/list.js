// import { VercelRequest, VercelResponse } from '@vercel/node'


import { connectToDatabase } from '../lib/mongodb.mjs';

export default async function handler(request, response) {
    
    const { database } = await connectToDatabase();
    const collection = database.collection('necklaces');

    const results = await collection.find({})
    // .project({
    //     "grades": 0,
    //     "borough": 0,
    //     "restaurant_id": 0
    // })
    .limit(10).toArray();

    await response.status(200).json(results);

}