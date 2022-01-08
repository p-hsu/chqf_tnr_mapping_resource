import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db()

// define POST and GET methods using switch statement

  switch (req.method) {
    case "POST":
      let addColony = JSON.parse(req.body);
      let newColony = await db.collection("colony").insertOne(addColony);
      res.json(newColony);
      break;
    case "GET":
      const existingColony = await db.collection("colony").find().toArray();
      res.status(200).json({ data: existingColony });
      break;
    // REMINDER : DON'T FORGET TO DO PUT AND DELETE METHODS TOO
  }
}