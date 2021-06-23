import gql from 'graphql-tag';

export const POST_CREATE_NEW_SELLER = gql`
mutation createSellerCustomer(
    $customer: CustomerDataInput!
    $password: String!
    $seller: SellerInput!
  ) {
    LofMkpCreateCustomerSeller(
      input: { customer: $customer, password: $password, seller: $seller }
    ) {
      code
      message
    }
  }
`;


export const POST_CREATE_SELLER_FROM_CUSTOMER = gql`
mutation createSeller($group_id: String!, $url_key: String!) {
    LofMkpCreateSeller(input: { group_id: $group_id, url_key: $url_key }) {
      code
      message
    }
  }
`;

export const POST_SEND_SELLER_MESSAGE = gql`
mutation sendSellerMessage($seller_id: String!, $content: String!) {
    LofMkpCustomerSendMessageSeller(input: { seller_id: $seller_id, content: $content }) {
      code
      message
    }
  }
`;