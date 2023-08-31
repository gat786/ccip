const destination_chain_id      = process.env.DESTINATION_CHAIN_SELECTOR || "";

const sender_router_address     = process.env.SENDER_ROUTER_CONTRACT || "";
const sender_link_address       = process.env.SENDER_LINK_CONTRACT || "";

const receiver_router_address   = process.env.RECEIVER_ROUTER_CONTRACT || "";

const sender_contract_address   = process.env.SENDER_CONTRACT_ADDRESS || "";
const receiver_contract_address = process.env.RECEIVER_CONTRACT_ADDRESS || "";

export default {
  destination_chain_id,
  sender_router_address,
  sender_link_address,
  receiver_router_address,
  sender_contract_address,
  receiver_contract_address
}
