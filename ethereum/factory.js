import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x9819cAc8091a05f77FBDb62E03a5df058867CdFA'
);

export default instance;
