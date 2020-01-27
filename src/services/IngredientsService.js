import api from "./api"

const IngredientsService = {
  fetch: async () => {
    return await api.get('/ingredients.json');
  }
}

export default IngredientsService;