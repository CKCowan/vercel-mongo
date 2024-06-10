// import { VercelRequest, VercelResponse } from '@vercel/node'

// export default function (request: VercelRequest, response: VercelResponse){
//     response.status(200).send({
//         message: 'Hello World!'
//     })
// }

export function GET(request: Request) {
    return new Response(`Hello from the serverless function`);
  }