import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';
// first //0x6688B648feAaD65345eA4d3FFAb816B2BB2A072e
// second //0x1692Eb24490E76198D387D8A5922eCBFc816aF57
// third after modifying stop increasing count if same address is contributing twice to a givne Campaign

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x781382F9499e176c87E90443AF472792cb414823'
);

export default instance;
