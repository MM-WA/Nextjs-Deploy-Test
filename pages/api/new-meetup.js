import { MongoClient } from "mongodb";

// /api/new-meetup

// waleedasif900
// plybjZkxpbfrppO5

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://waleedasif900:plybjZkxpbfrppO5@cluster0.plrfm.mongodb.net/meetupsDB?retryWrites=true&w=majority&appName=Cluster0"
    );

    const db = client.db()
    const meetupsCollection = db.collection("meetups")
    const result = await meetupsCollection.insertOne(data)

    // console.log("Result in API: " + result)

    client.close()

    res.status(201).json({message: "Meetup inserted!"})
  }
}

export default handler;
