import { gql } from "@apollo/client";

export const GetProductQuery = gql`
  query {
    product(handle: "bounds-short-blue-206") {
      descriptionHtml
      images(first: 20) {
        nodes {
          id
          altText
          src: url
          height
          width
        }
      }
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      title
      variants(first: 50) {
        nodes {
          id
          title
          priceV2 {
            amount
            currencyCode
          }
          image {
            id
            src
            altText
            height
            width
          }
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
`;
