import type { Schema, Attribute } from '@strapi/strapi';

export interface VariationVariation extends Schema.Component {
  collectionName: 'components_variation_variations';
  info: {
    displayName: 'variation';
    icon: 'apps';
  };
  attributes: {
    color: Attribute.String & Attribute.Required;
    quantity: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    image: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'variation.variation': VariationVariation;
    }
  }
}
