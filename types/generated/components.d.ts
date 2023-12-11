import type { Schema, Attribute } from '@strapi/strapi';

export interface FooterAddress extends Schema.Component {
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

export interface FooterContact extends Schema.Component {
  collectionName: 'components_footer_contacts';
  info: {
    displayName: 'Kontakte';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    phone_number: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'+49 15124235034'>;
  };
}

export interface FooterLinks extends Schema.Component {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'Links';
    icon: 'link';
    description: '';
  };
  attributes: {
    social_media: Attribute.Component<'social-media.social-media', true>;
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
    begin: Attribute.Time & Attribute.Required & Attribute.DefaultTo<'08:00'>;
    end: Attribute.Time & Attribute.Required & Attribute.DefaultTo<'17:00'>;
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
  };
}

export interface NavbarPages extends Schema.Component {
  collectionName: 'components_navbar_pages';
  info: {
    displayName: 'Seite';
    icon: 'layout';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface SocialMediaSocialMedia extends Schema.Component {
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'footer.address': FooterAddress;
      'footer.contact': FooterContact;
      'footer.links': FooterLinks;
      'footer.opening-hours': FooterOpeningHours;
      'navbar.pages': NavbarPages;
      'social-media.social-media': SocialMediaSocialMedia;
    }
  }
}
