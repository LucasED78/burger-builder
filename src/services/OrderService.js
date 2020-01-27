import api from './api'

const OrderService = {
  save: async data => {
    try {
      const response = await api.post('/orders.json', data);
      
      return response.data;
    }catch(e){
      console.log(e);
    }
  }
}

export default OrderService;