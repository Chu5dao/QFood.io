const axios = require('axios');

exports.getRecipes = async (req, res) => {
  try {
    const response = await axios.get('https://api.spoonacular.com/recipes/random', {
      params: {
        apiKey: process.env.SPOONACULAR_API_KEY,
        number: 10,
      },
    });

    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
