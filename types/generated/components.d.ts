import type { Schema, Attribute } from '@strapi/strapi';

export interface ContactAddress extends Schema.Component {
  collectionName: 'components_footer_addresses';
  info: {
    displayName: 'address';
    icon: 'pinMap';
    description: '';
  };
  attributes: {
    city: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<'Aholming'>;
    zip_code: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'94527'>;
    street: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<'Lerchenweg'>;
    house_number: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'9'>;
  };
}

export interface ContactContact extends Schema.Component {
  collectionName: 'components_footer_contacts';
  info: {
    displayName: 'Details';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    phone_number: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'+49 15124235034'>;
  };
}

export interface ContactSocialMedia extends Schema.Component {
  collectionName: 'components_social_media_social_medias';
  info: {
    displayName: 'Social Media';
    icon: 'twitter';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    url: Attribute.String & Attribute.Required;
  };
}

export interface FooterOpeningHours extends Schema.Component {
  collectionName: 'components_haarstudio_opening_hours';
  info: {
    displayName: '\u00D6ffnungszeiten';
    icon: 'clock';
    description: '';
  };
  attributes: {
    begin: Attribute.Time & Attribute.DefaultTo<'08:00'>;
    end: Attribute.Time & Attribute.DefaultTo<'18:00'>;
    day: Attribute.Enumeration<
      [
        'Montag',
        'Dienstag',
        'Mittwoch',
        'Donnerstag',
        'Freitag',
        'Samstag',
        'Sonntag'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Montag'>;
    closed: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact.address': ContactAddress;
      'contact.contact': ContactContact;
      'contact.social-media': ContactSocialMedia;
      'footer.opening-hours': FooterOpeningHours;
    }
  }
}
