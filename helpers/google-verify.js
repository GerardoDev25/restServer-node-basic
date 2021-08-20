const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleVerify = async (idToken = "") => {
   const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
   });

   const { name, picture, email } = ticket.getPayload();
   //    const userid = payload["sub"];

   return { name, image: picture, email };
};

// googleVerify().catch(console.error);

module.exports = { googleVerify };
