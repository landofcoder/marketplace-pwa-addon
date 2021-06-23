import gql from 'graphql-tag';

const PageInfoFragment = gql`
    fragment PageInfoFragment on PageInfo {
        pageSize
        currentPage
        hasNextPage
        hasPreviousPage
        startPage
        endPage
    }
`;

const AggregationFragment = gql`
fragment AggregationFragment on Aggregation {
    attribute_code
    count
    label
    options {
      count
      label
      value
    }
  }
`  
const RatingValueFragment = gql`
fragment RatingValueFragment on SellerRate {
    created_at
    customer_id
    detail
    email
    nickname
    rate1
    rate2
    rate3
    rating_id
    seller_id
    status
    title
  }  
`
const ShopProductFragment = gql`
fragment ShopProduct on ProductInterface {
    id
    rating_summary
    description {
      html
    }
    name
    image {
      url
    }
    url_key
    price_range {
      minimum_price {
        regular_price {
          value
          currency
        }
      }
      maximum_price {
        discount {
          percent_off
        }
        final_price {
          value
          currency
        }
        regular_price {
          value
        }
      }
    }
  }
`  
const ProductPriceFragment = gql`
fragment ProductPriceFragment on ProductPrice {
    discount {
        amount_off
        percent_off
    }
    final_price {
        currency
        value
    }
    regular_price {
        currency
        value
    }
}
`
const ProductBasicInfoFragment = gql`
    fragment ProductBasicInfoFragment on Product {
        id
        entity_id
        name
        url_key
        rating_summary
        sku
        image {
            url
            label
        }
        description {
            html
        }
        short_description {
            html
        }
        product_brand
        price_range {
            maximum_price {
            ...ProductPriceFragment
            }
            minimum_price {
            ...ProductPriceFragment
            }
        }
        price {
            regularPrice {
                amount {
                    currency
                }
            }
        }
    }
    ${ProductPriceFragment}
`;

export const GET_SELLERS = gql`
query lofSellerList ($filter: SellerFilterInput, $pageSize: Int, $currentPage: Int) {
    lofSellerList (
      filter: $filter,
      pageSize: $pageSize,
      currentPage: $currentPage
    ) {
      total_count
      items {
        seller_rates {
          items {
            created_at
            customer_id
            detail
            email
            nickname
            rate1
            rate2
            rate3
            rating_id
            seller_id
            status
            title
          }
          total_count
        }
        sale
        seller_id
        name
        thumbnail
        country
        address
        group
        products {
          items {
            sale
            ...ProductBasicInfoFragment
          }
          total_count
        }
      }
    }
  }
  ${ProductBasicInfoFragment}
`;

export const GET_SELLER_BY_ID = gql`
query lofSellerById($id: Int!) {
    lofSellerById(seller_id: $id) {
      address
      banner_pic
      city
      commission_id
      company_description
      company_locality
      contact_number
      country
      customer_id
      email
      gplus_active
      gplus_id
      group
      image
      name
      page_layout
      region
      return_policy
      sale
      seller_id
      shipping_policy
      shop_title
      status
      store_id
      thumbnail
      seller_rates {
        items {
          ...RatingValueFragment
        }
        total_count
      }
    }
  }
  ${RatingValueFragment}
`;

export const GET_PRODUCT_BY_SELLER_ID = gql`
query lofProductBySellerId(
    $sellerId: Int!
    $search: String
    $filter: ProductAttributeFilterInput
    $pageSize: Int
    $currentPage: Int
    $sort: ProductAttributeSortInput
  ) {
    lofProductBySellerId(
      seller_id: $sellerId
      search: $search
      filter: $filter
      pageSize: $pageSize
      currentPage: $currentPage
      sort: $sort
    ) {
      items {
        ...ShopProduct
      }
      page_info {
        ...PageInfoFragment
      }
      total_count
    }
  }
  ${ShopProductFragment}
  ${PageInfoFragment}
`;

export const GET_AGGREGATIONS_BY_SELLER_ID = gql`
query getAggregationsBySellerId(
    $sellerId: Int!
    $search: String
    $filter: ProductAttributeFilterInput
    $pageSize: Int
    $currentPage: Int
    $sort: ProductAttributeSortInput
  ) {
    lofProductBySellerId(
      seller_id: $sellerId
      search: $search
      filter: $filter
      pageSize: $pageSize
      currentPage: $currentPage
      sort: $sort
    ) {
      aggregations {
        ...AggregationFragment
      }
    }
  }
  ${AggregationFragment}
`;

export const GET_SORT_FIELDS_BY_SELLER_ID = gql`
query getSortFieldsBySellerId(
    $sellerId: Int!
    $search: String
    $filter: ProductAttributeFilterInput
    $pageSize: Int
    $currentPage: Int
    $sort: ProductAttributeSortInput
  ) {
    lofProductBySellerId(
      seller_id: $sellerId
      search: $search
      filter: $filter
      pageSize: $pageSize
      currentPage: $currentPage
      sort: $sort
    ) {
      sort_fields {
        default
        options {
          label
          value
        }
      }
    }
  }
`;